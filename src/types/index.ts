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
}
