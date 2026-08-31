import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { NotFound } from './NotFound'
import { eventEditions, eventSeries, formatEditionDate } from '../data/eventEditions'
import { useReveal } from '../hooks/useReveal'

export function EventoEdicao() {
  const { seriesSlug, editionSlug } = useParams<{ seriesSlug: string; editionSlug: string }>()
  const series = eventSeries.find((s) => s.slug === seriesSlug)
  const edition = eventEditions.find((e) => e.seriesSlug === seriesSlug && e.slug === editionSlug)
  const contentReveal = useReveal<HTMLElement>()
  const galleryReveal = useReveal<HTMLDivElement>()

  if (!series || !edition) return <NotFound />

  return (
    <>
      <PageHero
        kicker={series.title}
        title={edition.title}
        description={edition.date ? formatEditionDate(edition.date) : edition.summary}
      />

      <section
        ref={contentReveal.ref}
        className={`mx-auto flex max-w-3xl flex-col gap-4 px-4 py-16 text-sm leading-relaxed text-navy-600 sm:px-6 sm:text-base lg:px-8 dark:text-cream-100/75 ${contentReveal.className}`}
      >
        {edition.description.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <Link
          to={`/eventos/${series.slug}`}
          className="mt-4 inline-flex items-center gap-1 self-start text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Ver todas as edições
        </Link>
      </section>

      {edition.gallery && edition.gallery.length > 0 && (
        <section className="bg-cream-100 px-4 py-16 sm:px-6 lg:px-8 dark:bg-navy-900">
          <div
            ref={galleryReveal.ref}
            className={`mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 ${galleryReveal.className}`}
          >
            {edition.gallery.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt={`${edition.title} — foto ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover shadow-sm shadow-navy-900/10"
              />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
