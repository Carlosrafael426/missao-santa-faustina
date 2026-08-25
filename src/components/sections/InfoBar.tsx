import { Calendar, HandHeart, MapPin, Users } from 'lucide-react'
import { IconBadge } from '../ui/IconBadge'
import { siteInfo } from '../../data/site'
import { upcomingEvents } from '../../data/events'
import { useReveal } from '../../hooks/useReveal'

const nextEvent = upcomingEvents[0]

const items = [
  {
    icon: Calendar,
    label: 'Próximo Encontro',
    primary: nextEvent.title,
    secondary: nextEvent.schedule,
  },
  {
    icon: MapPin,
    label: 'Onde Estamos',
    primary: siteInfo.neighborhood,
    secondary: siteInfo.city,
  },
  {
    icon: Users,
    label: 'Seja bem-vindo!',
    primary: 'Todos são bem-vindos!',
    secondary: 'Venha nos visitar.',
  },
  {
    icon: HandHeart,
    label: 'Pedido de Oração',
    primary: 'Coloque suas intenções.',
    secondary: 'Rezaremos por você.',
  },
]

export function InfoBar() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section className="border-y border-navy-100 bg-white dark:border-white/10 dark:bg-navy-900">
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8 ${reveal.className}`}
      >
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <IconBadge icon={item.icon} size="sm" />
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-wide text-navy-500 uppercase dark:text-cream-100/50">
                {item.label}
              </p>
              <p className="truncate text-sm font-semibold text-navy-900 dark:text-cream-50">{item.primary}</p>
              <p className="truncate text-xs text-navy-500 dark:text-cream-100/60">{item.secondary}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
