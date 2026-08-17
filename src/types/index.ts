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
}

export interface NewsItem {
  slug: string
  title: string
  excerpt: string
  date: string
  image: string
}
