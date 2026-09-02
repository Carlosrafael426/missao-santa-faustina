import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { PhotoCarousel } from '../components/common/PhotoCarousel'
import { NotFound } from './NotFound'
import { eventEditions, eventSeries, formatEditionDate } from '../data/eventEditions'
import { useReveal } from '../hooks/useReveal'
import { useSeo } from '../hooks/useSeo'
import { SITE_URL } from '../data/site'

export function EventoEdicao() {
  const { seriesSlug, editionSlug } = useParams<{ seriesSlug: string; editionSlug: string }>()
  const series = eventSeries.find((s) => s.slug === seriesSlug)
  const edition = eventEditions.find((e) => e.seriesSlug === seriesSlug && e.slug === editionSlug)
  const carouselReveal = useReveal<HTMLDivElement>()
  const descriptionReveal = useReveal<HTMLElement>()

  const jsonLd =
    edition && edition.date
      ? {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: edition.title,
          description: edition.summary,
          startDate: edition.date,
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'Place',
            name: 'Fazenda Rio Grande, PR',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Fazenda Rio Grande',
              addressRegion: 'PR',
              addressCountry: 'BR',
            },
          },
          organizer: { '@type': 'Organization', name: 'Missão Santa Faustina', url: SITE_URL },
          image: edition.coverImage ? `${SITE_URL}${edition.coverImage}` : undefined,
        }
      : undefined

  useSeo({
    title: edition?.title ?? 'Página não encontrada',
    description: edition?.summary ?? 'A página que você procura não existe ou foi movida.',
    path: `/eventos/${seriesSlug ?? ''}/${editionSlug ?? ''}`,
    image: edition?.coverImage ? `${SITE_URL}${edition.coverImage}` : undefined,
    jsonLd,
    noindex: !series || !edition,
  })

  if (!series || !edition) return <NotFound />

  const gallery = edition.gallery ?? []
  const midpoint = Math.ceil(edition.description.length / 2)
  const firstBlock = edition.description.slice(0, midpoint)
  const secondBlock = edition.description.slice(midpoint)

  return (
    <>
      <PageHero
        kicker={series.title}
        title={edition.title}
        description={edition.date ? formatEditionDate(edition.date) : edition.summary}
      />

      {gallery.length > 0 && (
        <div ref={carouselReveal.ref} className={`py-4 ${carouselReveal.className}`}>
          <PhotoCarousel photos={gallery} alt={edition.title} />
        </div>
      )}

      <section
        ref={descriptionReveal.ref}
        className={`mx-auto grid max-w-5xl grid-cols-1 gap-x-10 gap-y-4 px-4 py-16 text-sm leading-relaxed text-navy-600 sm:px-6 sm:text-base md:grid-cols-2 lg:px-8 dark:text-cream-100/75 ${descriptionReveal.className}`}
      >
        <div className="flex flex-col gap-4">
          {firstBlock.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          {secondBlock.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <Link
          to={`/eventos/${series.slug}`}
          className="col-span-full mt-2 inline-flex items-center gap-1 self-start text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Ver todas as edições
        </Link>
      </section>
    </>
  )
}
