import type { NewsItem } from '../../types'

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm shadow-navy-900/5 dark:border-white/10 dark:bg-navy-900">
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-display text-base font-semibold text-navy-900 dark:text-cream-50">{item.title}</h3>
        <p className="flex-1 text-sm text-navy-600 dark:text-cream-100/70">{item.excerpt}</p>
        <span className="text-xs font-medium text-gold-600 dark:text-gold-400">{item.date}</span>
      </div>
    </article>
  )
}
