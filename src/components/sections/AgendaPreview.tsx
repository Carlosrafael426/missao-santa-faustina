import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { EventListItem } from '../common/EventListItem'
import { upcomingEvents } from '../../data/events'
import { useReveal } from '../../hooks/useReveal'

export function AgendaPreview() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section className="bg-cream-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-navy-950">
      <div
        ref={reveal.ref}
        className={`mx-auto flex max-w-2xl flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-navy-900 ${reveal.className}`}
      >
        <h3 className="text-center font-display text-lg font-semibold text-navy-900 dark:text-cream-50">
          Próximos Encontros
        </h3>
        <ul className="flex flex-col gap-3">
          {upcomingEvents.slice(0, 4).map((event) => (
            <EventListItem key={`${event.title}-${event.date}`} event={event} />
          ))}
        </ul>
        <Link
          to="/calendario"
          className="inline-flex items-center gap-1 self-center text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
        >
          Ver calendário completo
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
