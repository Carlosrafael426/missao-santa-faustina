import { PageHero } from '../components/common/PageHero'
import { EventListItem } from '../components/common/EventListItem'
import { upcomingEvents } from '../data/events'

export function Eventos() {
  return (
    <>
      <PageHero
        kicker="Agenda da Missão"
        title="Próximos Encontros"
        description="Participe dos nossos encontros de oração, formação e comunhão. Todos são bem-vindos."
      />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="flex flex-col gap-3">
          {upcomingEvents.map((event) => (
            <EventListItem key={event.title} event={event} />
          ))}
        </ul>
      </section>
    </>
  )
}
