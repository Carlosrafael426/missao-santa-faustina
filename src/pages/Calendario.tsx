import { PageHero } from '../components/common/PageHero'
import { EventListItem } from '../components/common/EventListItem'
import { AgendaCalendar } from '../components/common/AgendaCalendar'
import { getEventsForWeek } from '../data/events'
import { useReveal } from '../hooks/useReveal'
import { useSeo } from '../hooks/useSeo'

const weekEvents = getEventsForWeek(new Date())

export function Calendario() {
  const reveal = useReveal<HTMLDivElement>()

  useSeo({
    title: 'Calendário',
    description:
      'Confira a agenda de missas, catequese de adultos e catequese infantil da Missão Santa Faustina em Fazenda Rio Grande, PR.',
    path: '/calendario',
  })

  return (
    <>
      <PageHero
        kicker="Agenda da Missão"
        title="Calendário"
        description="Participe dos nossos encontros de oração, formação e comunhão. Todos são bem-vindos."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={reveal.ref} className={`grid grid-cols-1 gap-10 md:grid-cols-2 ${reveal.className}`}>
          <AgendaCalendar />
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">Encontros da Semana</h3>
            {weekEvents.length > 0 ? (
              <ul className="flex flex-col gap-3">
                {weekEvents.map((event) => (
                  <EventListItem key={`${event.title}-${event.date}`} event={event} />
                ))}
              </ul>
            ) : (
              <p className="text-sm text-navy-500 dark:text-cream-100/60">Nenhum encontro esta semana.</p>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
