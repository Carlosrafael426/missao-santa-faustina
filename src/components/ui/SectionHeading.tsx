interface SectionHeadingProps {
  kicker: string
  title: string
}

export function SectionHeading({ kicker, title }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-gold-600 uppercase dark:text-gold-400">
        <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
        {kicker}
        <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
      </span>
      <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl dark:text-cream-50">{title}</h2>
    </div>
  )
}
