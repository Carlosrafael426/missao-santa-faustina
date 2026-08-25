import { PageHero } from '../components/common/PageHero'
import { EventListItem } from '../components/common/EventListItem'
import { upcomingEvents } from '../data/events'
import { useReveal } from '../hooks/useReveal'

export function Eventos() {
  const reveal = useReveal<HTMLUListElement>()

  return (
    <>
      <PageHero
        kicker="Agenda da Missão"
        title="Próximos Encontros"
        description="Participe dos nossos encontros de oração, formação e comunhão. Todos são bem-vindos."
      />

      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <ul ref={reveal.ref} className={`flex flex-col gap-3 ${reveal.className}`}>
          {upcomingEvents.map((event) => (
            <EventListItem key={event.title} event={event} />
          ))}
        </ul>
      </section>
    </>
  )
}
