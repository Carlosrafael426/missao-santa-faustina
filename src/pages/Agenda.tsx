import { PageHero } from '../components/common/PageHero'
import { EventListItem } from '../components/common/EventListItem'
import { AgendaCalendar } from '../components/common/AgendaCalendar'
import { upcomingEvents } from '../data/events'
import { useReveal } from '../hooks/useReveal'

export function Agenda() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        kicker="Agenda da Missão"
        title="Nossa Agenda"
        description="Participe dos nossos encontros de oração, formação e comunhão. Todos são bem-vindos."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div
          ref={reveal.ref}
          className={`grid grid-cols-1 gap-10 md:grid-cols-[1fr_minmax(0,300px)] ${reveal.className}`}
        >
          <AgendaCalendar events={upcomingEvents} />
          <ul className="flex flex-col gap-3">
            {upcomingEvents.map((event) => (
              <EventListItem key={event.title} event={event} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
