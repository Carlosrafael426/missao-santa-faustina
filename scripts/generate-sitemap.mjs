// Generates public/sitemap.xml before every build (see "prebuild" in package.json).
// eventEditions.ts uses import.meta.glob (Vite-only), so this plain Node script can't
// import it directly — the event/series routes below are kept in sync by hand whenever
// a new event series or edition is published in src/data/eventEditions.ts.
import { writeFileSync } from 'node:fs'

const SITE_URL = 'https://www.santafaustinafrg.com.br'

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/nossa-missao', priority: '0.7', changefreq: 'monthly' },
  { path: '/santa-faustina', priority: '0.6', changefreq: 'yearly' },
  { path: '/divina-misericordia', priority: '0.6', changefreq: 'yearly' },
  { path: '/comunidade', priority: '0.7', changefreq: 'monthly' },
  { path: '/eventos', priority: '0.8', changefreq: 'weekly' },
  { path: '/calendario', priority: '0.9', changefreq: 'daily' },
  { path: '/contato', priority: '0.5', changefreq: 'yearly' },
]

// Keep in sync with src/data/eventEditions.ts.
const eventRoutes = [
  { path: '/eventos/noite-da-sopa', priority: '0.7', changefreq: 'monthly' },
  { path: '/eventos/noite-da-sopa/1-noite-da-sopa', priority: '0.5', changefreq: 'yearly' },
  { path: '/eventos/noite-da-sopa/2-noite-da-sopa', priority: '0.5', changefreq: 'yearly' },
  { path: '/eventos/noite-da-sopa/3-noite-da-sopa', priority: '0.6', changefreq: 'yearly' },
]

const routes = [...staticRoutes, ...eventRoutes]
const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml)
console.log(`sitemap.xml generated with ${routes.length} URLs`)
