import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { NotFound } from './NotFound'
import { eventEditions, eventSeries, formatEditionDate } from '../data/eventEditions'
import { useReveal } from '../hooks/useReveal'

export function EventoSerie() {
  const { seriesSlug } = useParams<{ seriesSlug: string }>()
  const series = eventSeries.find((s) => s.slug === seriesSlug)
  const editions = eventEditions
    .filter((edition) => edition.seriesSlug === seriesSlug)
    .sort((a, b) => a.slug.localeCompare(b.slug, 'pt-BR', { numeric: true }))
  const reveal = useReveal<HTMLDivElement>()

  if (!series) return <NotFound />

  return (
    <>
      <PageHero kicker="Eventos" title={series.title} description={series.summary} />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={reveal.ref} className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${reveal.className}`}>
          {editions.map((edition) => (
            <Link
              key={edition.slug}
              to={`/eventos/${edition.seriesSlug}/${edition.slug}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white transition-colors hover:border-gold-300 dark:border-white/10 dark:bg-navy-900 dark:hover:border-gold-400/50"
            >
              {edition.coverImage && (
                <img
                  src={edition.coverImage}
                  alt={edition.title}
                  loading="lazy"
                  className="aspect-video w-full object-cover"
                />
              )}
              <div className="flex flex-1 flex-col gap-3 p-6">
                {edition.date && (
                  <span className="text-xs font-semibold tracking-wide text-gold-600 uppercase dark:text-gold-400">
                    {formatEditionDate(edition.date)}
                  </span>
                )}
                <h2 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">{edition.title}</h2>
                <p className="text-sm text-navy-600 dark:text-cream-100/70">{edition.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300">
                  Saiba mais
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
