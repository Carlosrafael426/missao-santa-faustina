import type { PropsWithChildren } from 'react'

interface PageHeroProps {
  kicker: string
  title: string
  description: string
}

export function PageHero({ kicker, title, description, children }: PropsWithChildren<PageHeroProps>) {
  return (
    <section className="bg-navy-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
        <span className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">{kicker}</span>
        <h1 className="font-display text-4xl font-semibold text-cream-50 sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base text-cream-100/80 sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  )
}
