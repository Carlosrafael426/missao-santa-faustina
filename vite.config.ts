import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from https://<user>.github.io/missao-santa-faustina/
  // (a subpath), so assets need that prefix baked in. GitHub Actions runners set
  // GITHUB_ACTIONS=true automatically. Every other host (Netlify, local dev/preview)
  // serves from the domain root, so base stays '/' there.
  base: process.env.GITHUB_ACTIONS ? '/missao-santa-faustina/' : '/',
  plugins: [react(), tailwindcss()],
})
