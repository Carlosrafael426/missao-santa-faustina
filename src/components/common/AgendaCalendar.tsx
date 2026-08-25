import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { EventListItem } from './EventListItem'
import { getEventsForMonth } from '../../data/events'
import type { MissionEvent } from '../../types'

const WEEKDAY_LABELS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
const MONTH_FORMATTER = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' })

interface Cell {
  day: number
  iso: string
}

function buildWeeks(year: number, month: number): (Cell | null)[][] {
  const startOffset = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  // Leading/trailing `null`s pad the first and last week out to 7 cells so
  // the grid always lines up under the Sun-Sat header, leaving empty boxes
  // for days outside the current month.
  const cells: (Cell | null)[] = []
  for (let i = 0; i < startOffset; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) {
    const iso = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    cells.push({ day, iso })
  }
  while (cells.length % 7 !== 0) cells.push(null)

  const weeks: (Cell | null)[][] = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

export function AgendaCalendar() {
  const [cursor, setCursor] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const monthEvents = useMemo(
    () => getEventsForMonth(cursor.getFullYear(), cursor.getMonth()),
    [cursor],
  )

  const eventsByDate = useMemo(() => {
    const map = new Map<string, MissionEvent[]>()
    for (const event of monthEvents) {
      const list = map.get(event.date) ?? []
      list.push(event)
      map.set(event.date, list)
    }
    return map
  }, [monthEvents])

  const weeks = useMemo(() => buildWeeks(cursor.getFullYear(), cursor.getMonth()), [cursor])
  const selectedEvents = selectedDate ? (eventsByDate.get(selectedDate) ?? []) : []

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-900">
      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          aria-label="Mês anterior"
          onClick={() => {
            setSelectedDate(null)
            setCursor((c) => new Date(c.getFullYear(), c.getMonth() - 1, 1))
          }}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-100 dark:text-cream-100 dark:hover:bg-white/10"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="font-display text-lg font-semibold text-navy-900 capitalize dark:text-cream-50">
          {MONTH_FORMATTER.format(cursor)}
        </p>
        <button
          type="button"
          aria-label="Próximo mês"
          onClick={() => {
            setSelectedDate(null)
            setCursor((c) => new Date(c.getFullYear(), c.getMonth() + 1, 1))
          }}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-700 transition-colors hover:bg-navy-100 dark:text-cream-100 dark:hover:bg-white/10"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-1 text-center text-[11px] font-semibold tracking-wide text-navy-400 uppercase dark:text-cream-100/40">
        {WEEKDAY_LABELS.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>

      <div className="mt-2 flex flex-col gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-1">
            {week.map((cell, di) => {
              if (!cell) return <div key={di} />
              const hasEvents = eventsByDate.has(cell.iso)
              const isSelected = selectedDate === cell.iso

              return (
                <button
                  key={di}
                  type="button"
                  disabled={!hasEvents}
                  onClick={() => setSelectedDate(isSelected ? null : cell.iso)}
                  className={`flex aspect-square flex-col items-center justify-center gap-0.5 rounded-lg text-sm transition-colors ${
                    isSelected
                      ? 'bg-navy-900 text-cream-50 dark:bg-gold-500 dark:text-navy-950'
                      : hasEvents
                        ? 'cursor-pointer font-semibold text-navy-900 hover:bg-navy-100 dark:text-cream-50 dark:hover:bg-white/10'
                        : 'cursor-default text-navy-400 dark:text-cream-100/30'
                  }`}
                >
                  {cell.day}
                  {hasEvents && (
                    <span
                      className={`h-1 w-1 rounded-full ${isSelected ? 'bg-cream-50 dark:bg-navy-950' : 'bg-gold-500'}`}
                      aria-hidden="true"
                    />
                  )}
                </button>
              )
            })}
          </div>
        ))}
      </div>

      {selectedEvents.length > 0 && (
        <div className="mt-6 flex flex-col gap-3 border-t border-navy-100 pt-4 dark:border-white/10">
          {selectedEvents.map((event) => (
            <EventListItem key={`${event.title}-${event.date}`} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
