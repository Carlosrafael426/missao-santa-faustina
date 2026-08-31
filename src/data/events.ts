import { eventEditions } from './eventEditions'
import type { MissionEvent } from '../types'

interface RecurringEventRule {
  title: string
  schedule: string
  /** ISO date (YYYY-MM-DD) of the first occurrence. */
  startDate: string
  /** 1 = weekly, 2 = biweekly, etc. */
  intervalWeeks: number
  location?: string
}

const recurringEvents: RecurringEventRule[] = [
  {
    title: 'Missa',
    schedule: 'Domingo · 17h30',
    startDate: '2026-08-30',
    intervalWeeks: 2,
    location: 'Escola Anete Franco',
  },
  {
    title: 'Catequese de Adulto',
    schedule: 'Terça-feira · 19h30',
    startDate: '2026-09-01',
    intervalWeeks: 1,
  },
  {
    title: 'Catequese Infantil',
    schedule: 'Sábado · Manhã (horário a confirmar)',
    startDate: '2026-08-29',
    intervalWeeks: 1,
  },
]

const DAY_MS = 24 * 60 * 60 * 1000
const MONTH_LABELS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

function parseISO(iso: string): Date {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function toISO(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function toMissionEvent(rule: RecurringEventRule, date: Date): MissionEvent {
  return {
    day: String(date.getDate()).padStart(2, '0'),
    month: MONTH_LABELS[date.getMonth()],
    title: rule.title,
    schedule: rule.schedule,
    date: toISO(date),
    location: rule.location,
  }
}

/** Every recurring event occurrence that falls within [rangeStart, rangeEnd], inclusive, sorted chronologically. */
export function getEventsInRange(rangeStart: Date, rangeEnd: Date): MissionEvent[] {
  const start = startOfDay(rangeStart)
  const end = startOfDay(rangeEnd)
  const results: MissionEvent[] = []

  for (const rule of recurringEvents) {
    const firstOccurrence = parseISO(rule.startDate)
    const stepMs = rule.intervalWeeks * 7 * DAY_MS

    // Jump straight to the first occurrence on/after `start` instead of walking
    // one interval at a time from the rule's start date (which could be years back).
    const stepsBeforeStart = Math.max(0, Math.ceil((start.getTime() - firstOccurrence.getTime()) / stepMs))
    let occurrence = new Date(firstOccurrence.getTime() + stepsBeforeStart * stepMs)

    while (occurrence <= end) {
      if (occurrence >= start) results.push(toMissionEvent(rule, occurrence))
      occurrence = new Date(occurrence.getTime() + stepMs)
    }
  }

  // One-off special events (Eventos section) only show up here once they have a
  // confirmed `date` — editions still missing one (see eventEditions.ts) are simply
  // skipped rather than shown without a day on the calendar.
  for (const edition of eventEditions) {
    if (!edition.date) continue
    const occurrence = parseISO(edition.date)
    if (occurrence >= start && occurrence <= end) {
      results.push({
        day: String(occurrence.getDate()).padStart(2, '0'),
        month: MONTH_LABELS[occurrence.getMonth()],
        title: edition.title,
        schedule: 'Evento especial',
        date: edition.date,
        href: `/eventos/${edition.seriesSlug}/${edition.slug}`,
      })
    }
  }

  return results.sort((a, b) => a.date.localeCompare(b.date))
}

/** The next `count` occurrences on or after `from`, across all recurring events. */
export function getUpcomingEvents(from: Date, count: number): MissionEvent[] {
  const rangeEnd = new Date(from.getTime() + 120 * DAY_MS)
  return getEventsInRange(from, rangeEnd).slice(0, count)
}

/** Every occurrence in the Sunday-to-Saturday week that contains `from`. */
export function getEventsForWeek(from: Date): MissionEvent[] {
  const weekStart = new Date(from.getFullYear(), from.getMonth(), from.getDate() - from.getDay())
  const weekEnd = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 6)
  return getEventsInRange(weekStart, weekEnd)
}

/** Every occurrence that falls within a given calendar month (0-indexed month, like Date). */
export function getEventsForMonth(year: number, month: number): MissionEvent[] {
  const rangeStart = new Date(year, month, 1)
  const rangeEnd = new Date(year, month + 1, 0)
  return getEventsInRange(rangeStart, rangeEnd)
}
