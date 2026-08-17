import type { PropsWithChildren } from 'react'

interface CardProps {
  className?: string
}

export function Card({ className = '', children }: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`rounded-2xl border border-navy-100 bg-white shadow-sm shadow-navy-900/5 dark:border-white/10 dark:bg-navy-900 ${className}`}
    >
      {children}
    </div>
  )
}
