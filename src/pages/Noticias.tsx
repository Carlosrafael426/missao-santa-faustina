import { PageHero } from '../components/common/PageHero'
import { NewsCard } from '../components/common/NewsCard'
import { newsItems } from '../data/news'
import { useReveal } from '../hooks/useReveal'

export function Noticias() {
  const reveal = useReveal<HTMLDivElement>()

  return (
    <>
      <PageHero
        kicker="Fique por dentro"
        title="Últimas Notícias"
        description="Acompanhe os retiros, celebrações e ações da nossa comunidade."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div ref={reveal.ref} className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ${reveal.className}`}>
          {newsItems.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}
