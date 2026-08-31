import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { IconBadge } from '../components/ui/IconBadge'
import { eventSeries } from '../data/eventEditions'
import { useReveal } from '../hooks/useReveal'

export function Eventos() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        kicker="Registros da Missão"
        title="Eventos"
        description="Confira os encontros especiais que já marcaram a caminhada da nossa comunidade."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={reveal.ref} className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${reveal.className}`}>
          {eventSeries.map((series) => (
            <Link
              key={series.slug}
              to={`/eventos/${series.slug}`}
              className="flex flex-col items-start gap-3 rounded-2xl border border-navy-100 bg-white p-6 transition-colors hover:border-gold-300 dark:border-white/10 dark:bg-navy-900 dark:hover:border-gold-400/50"
            >
              <IconBadge icon={series.icon} />
              <h2 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">{series.title}</h2>
              <p className="text-sm text-navy-600 dark:text-cream-100/70">{series.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300">
                Ver edições
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
