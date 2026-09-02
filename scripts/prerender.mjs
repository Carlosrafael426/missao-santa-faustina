// Runs after every build (see "postbuild" in package.json). This is a plain client-
// rendered SPA, so social-preview bots (WhatsApp, Facebook, ...) — which don't run
// JS — would only ever see the Home page's static tags no matter which page was
// shared. This visits every route with a real headless browser after the JS has run
// and useSeo() has set that page's title/description/canonical/OG tags, then saves
// the resulting HTML as that route's own dist/<route>/index.html. Static hosts
// (GitHub Pages, Netlify) serve that file directly for an exact path match, so each
// shared link gets its own correct preview — React then mounts fresh over it as
// normal once the page's JS loads, so this only ever helps, never breaks anything.
//
// Deliberately never fails the build: if anything here goes wrong (e.g. the sandboxed
// CI runner can't download a browser), it logs a warning and exits 0. A missing
// per-route prerender is a minor SEO/preview regression; a broken deploy is worse.
import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(rootDir, 'dist')
const PORT = 4581
// Mirrors vite.config.ts: GitHub Actions serves this app from a /missao-santa-faustina
// subpath, everywhere else (Netlify, local) serves it from the domain root.
const basePath = process.env.GITHUB_ACTIONS ? '/missao-santa-faustina' : ''

// Keep in sync with src/app/routes.tsx / scripts/generate-sitemap.mjs.
const routes = [
  '/',
  '/nossa-missao',
  '/santa-faustina',
  '/divina-misericordia',
  '/comunidade',
  '/eventos',
  '/eventos/noite-da-sopa',
  '/eventos/noite-da-sopa/1-noite-da-sopa',
  '/eventos/noite-da-sopa/2-noite-da-sopa',
  '/eventos/noite-da-sopa/3-noite-da-sopa',
  '/calendario',
  '/contato',
]

function waitForServer(url, timeoutMs = 20000) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url)
        if (res.ok) return resolve()
      } catch {
        // server not up yet, keep polling
      }
      if (Date.now() - start > timeoutMs) return reject(new Error('timed out waiting for the preview server'))
      setTimeout(tick, 300)
    }
    tick()
  })
}

function installChromium() {
  return new Promise((resolve) => {
    const install = spawn('npx', ['playwright', 'install', 'chromium'], {
      cwd: rootDir,
      stdio: 'ignore',
      shell: true,
    })
    // Best-effort: if this fails (offline sandbox, etc.), let the launch() call below
    // surface the real error, which the top-level catch turns into a non-fatal skip.
    install.on('close', () => resolve())
    install.on('error', () => resolve())
  })
}

async function run() {
  await installChromium()
  const { chromium } = await import('playwright')

  const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: rootDir,
    stdio: 'ignore',
    shell: true,
  })

  try {
    await waitForServer(`http://localhost:${PORT}${basePath}/`)
    const browser = await chromium.launch()
    const page = await browser.newPage()

    for (const route of routes) {
      await page.goto(`http://localhost:${PORT}${basePath}${route}`, { waitUntil: 'networkidle', timeout: 20000 })
      await page.waitForTimeout(400) // let useSeo()'s effect and any data-driven render settle
      const html = await page.content()

      const outDir = route === '/' ? distDir : join(distDir, ...route.split('/').filter(Boolean))
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'index.html'), html)
      console.log('prerendered', route)
    }

    await browser.close()
  } finally {
    server.kill()
  }
}

try {
  await run()
  console.log('prerender: done')
} catch (error) {
  console.warn('prerender: skipped (non-fatal):', error?.message ?? error)
}
