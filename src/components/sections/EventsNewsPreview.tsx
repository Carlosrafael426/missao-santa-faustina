import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { EventListItem } from '../common/EventListItem'
import { NewsCard } from '../common/NewsCard'
import { upcomingEvents } from '../../data/events'
import { newsItems } from '../../data/news'

export function EventsNewsPreview() {
  return (
    <section className="bg-cream-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-navy-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_2fr]">
        <div className="flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 dark:border-white/10 dark:bg-navy-900">
          <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">Próximos Encontros</h3>
          <ul className="flex flex-col gap-3">
            {upcomingEvents.map((event) => (
              <EventListItem key={event.title} event={event} />
            ))}
          </ul>
          <Link
            to="/eventos"
            className="inline-flex items-center gap-1 self-start text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
          >
            Ver todos os eventos
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">Últimas Notícias</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {newsItems.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
          <Link
            to="/noticias"
            className="inline-flex items-center gap-1 self-start text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
          >
            Ver todas as notícias
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
