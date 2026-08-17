import { ChevronRight } from 'lucide-react'
import type { MissionEvent } from '../../types'

export function EventListItem({ event }: { event: MissionEvent }) {
  return (
    <li className="flex items-center gap-4 rounded-xl border border-navy-100 bg-white p-3 transition-colors hover:border-gold-300 dark:border-white/10 dark:bg-navy-900 dark:hover:border-gold-400/50">
      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-navy-900 text-cream-50 dark:bg-white/10">
        <span className="text-lg leading-none font-bold text-gold-400">{event.day}</span>
        <span className="text-[10px] font-medium tracking-wide uppercase">{event.month}</span>
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-navy-900 dark:text-cream-50">{event.title}</p>
        <p className="text-xs text-navy-500 dark:text-cream-100/60">{event.schedule}</p>
      </div>
      <ChevronRight className="h-4 w-4 shrink-0 text-navy-400 dark:text-cream-100/40" aria-hidden="true" />
    </li>
  )
}
