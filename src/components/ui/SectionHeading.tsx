interface SectionHeadingProps {
  kicker: string
  title: string
  align?: 'center' | 'left'
  light?: boolean
}

export function SectionHeading({ kicker, title, align = 'center', light = false }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <span
        className={`flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase ${
          light ? 'text-gold-300' : 'text-gold-600 dark:text-gold-400'
        }`}
      >
        {align === 'center' && <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />}
        {kicker}
        <span className="h-px w-6 bg-current opacity-60" aria-hidden="true" />
      </span>
      <h2
        className={`font-display text-3xl font-semibold sm:text-4xl ${
          light ? 'text-cream-50' : 'text-navy-900 dark:text-cream-50'
        }`}
      >
        {title}
      </h2>
    </div>
  )
}
