import { Link } from 'react-router-dom'
import { ChevronRight, MapPin } from 'lucide-react'
import type { MissionEvent } from '../../types'

export function EventListItem({ event }: { event: MissionEvent }) {
  const content = (
    <>
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 text-cream-50 dark:bg-white/10">
        <span className="text-lg leading-none font-bold text-gold-400">{event.day}</span>
        <span className="text-[10px] font-medium tracking-wide uppercase">{event.month}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-navy-900 dark:text-cream-50">{event.title}</p>
        <p className="text-xs text-navy-500 dark:text-cream-100/60">{event.schedule}</p>
        {event.location && (
          <p className="mt-0.5 flex items-center gap-1 truncate text-xs text-navy-400 dark:text-cream-100/45">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
            {event.location}
          </p>
        )}
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-navy-400 dark:text-cream-100/40" aria-hidden="true" />
    </>
  )

  return (
    <li className="rounded-xl border border-navy-100 bg-white transition-colors hover:border-gold-300 dark:border-white/10 dark:bg-navy-900 dark:hover:border-gold-400/50">
      {event.href ? (
        <Link to={event.href} className="flex items-center gap-4 p-3">
          {content}
        </Link>
      ) : (
        <div className="flex items-center gap-4 p-3">{content}</div>
      )}
    </li>
  )
}
