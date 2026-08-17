import type { LucideIcon } from 'lucide-react'

interface IconBadgeProps {
  icon: LucideIcon
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
}

const iconSizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
}

export function IconBadge({ icon: Icon, size = 'md' }: IconBadgeProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400 dark:bg-cream-50/10 ${sizeClasses[size]}`}
    >
      <Icon className={iconSizeClasses[size]} aria-hidden="true" />
    </span>
  )
}
