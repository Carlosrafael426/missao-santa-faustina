import { useEffect } from 'react'
import { SITE_URL } from '../data/site'

const SITE_NAME = 'Missão Santa Faustina'
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

interface SeoOptions {
  /** Page-specific title; the site name is appended automatically. */
  title: string
  description: string
  /** Route path, e.g. "/eventos/noite-da-sopa/3-noite-da-sopa" — used to build the canonical/OG URL. */
  path: string
  image?: string
  /** Optional structured data (schema.org) object to embed as JSON-LD for this page. */
  jsonLd?: object
  /** Set on pages that shouldn't be indexed (e.g. the 404 page). Defaults to indexable. */
  noindex?: boolean
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets the per-page <title>, meta description, canonical link, and Open Graph/Twitter
 * tags. Google's crawler executes JS and picks these up on its render pass, but
 * social-preview bots (WhatsApp, Facebook, etc.) don't run JS at all — they only ever
 * see whatever is baked into that route's static HTML, which is why the build also
 * prerenders every route (see scripts/prerender.mjs) instead of relying on this hook alone.
 */
export function useSeo({ title, description, path, image, jsonLd, noindex = false }: SeoOptions) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${path}`
    const ogImage = image ?? DEFAULT_OG_IMAGE

    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    upsertLink('canonical', url)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'pt_BR')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', ogImage)

    let script: HTMLScriptElement | null = null
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      script?.remove()
    }
  }, [title, description, path, image, jsonLd, noindex])
}
