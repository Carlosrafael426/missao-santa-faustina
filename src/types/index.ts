import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  label: string
  path: string
}

export interface Pillar {
  icon: LucideIcon
  title: string
  description: string
}

export interface CommunityGroup {
  slug: string
  name: string
  image: string
  description: string
}

export interface MissionEvent {
  day: string
  month: string
  title: string
  schedule: string
  /** ISO date (YYYY-MM-DD) used to place the event on the agenda calendar. */
  date: string
  location?: string
  /** Route to navigate to when this entry is clicked, e.g. a special event's detail page. */
  href?: string
}

/** A recurring type of community event, e.g. "Noite da Sopa" — groups its editions. */
export interface EventSeries {
  slug: string
  title: string
  summary: string
  icon: LucideIcon
}

/** A single edition of an event series, e.g. "3ª Noite da Sopa". Fields the community
 * hasn't documented yet (date, cover photo, gallery) are optional so an edition can be
 * published with just a description and filled in later without changing the shape. */
export interface EventEdition {
  seriesSlug: string
  slug: string
  title: string
  summary: string
  description: string[]
  date?: string
  coverImage?: string
  gallery?: string[]
}
