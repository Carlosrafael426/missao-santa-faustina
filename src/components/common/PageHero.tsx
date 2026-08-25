import type { PropsWithChildren } from 'react'
import { useReveal } from '../../hooks/useReveal'

interface PageHeroProps {
  kicker: string
  title: string
  description: string
}

export function PageHero({ kicker, title, description, children }: PropsWithChildren<PageHeroProps>) {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <section className="bg-cream-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-navy-950">
      <div ref={reveal.ref} className={`mx-auto flex max-w-4xl flex-col items-center gap-4 text-center ${reveal.className}`}>
        <span className="text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase dark:text-gold-400">{kicker}</span>
        <h1 className="font-display text-4xl font-semibold text-navy-900 sm:text-5xl dark:text-cream-50">{title}</h1>
        <p className="max-w-2xl text-base text-navy-600 sm:text-lg dark:text-cream-100/80">{description}</p>
        {children}
      </div>
    </section>
  )
}
