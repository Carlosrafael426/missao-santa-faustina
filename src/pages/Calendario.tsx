import { PageHero } from '../components/common/PageHero'
import { EventListItem } from '../components/common/EventListItem'
import { AgendaCalendar } from '../components/common/AgendaCalendar'
import { upcomingEvents } from '../data/events'
import { useReveal } from '../hooks/useReveal'

export function Calendario() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        kicker="Agenda da Missão"
        title="Calendário"
        description="Participe dos nossos encontros de oração, formação e comunhão. Todos são bem-vindos."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={reveal.ref} className={`grid grid-cols-1 gap-10 md:grid-cols-2 ${reveal.className}`}>
          <AgendaCalendar events={upcomingEvents} />
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">Próximos Encontros</h3>
            <ul className="flex flex-col gap-3">
              {upcomingEvents.map((event) => (
                <EventListItem key={event.title} event={event} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
