import { Clock3, HandHeart, Repeat } from 'lucide-react'
import { PageHero } from '../components/common/PageHero'
import { IconBadge } from '../components/ui/IconBadge'
import jesusMisericordioso from '../assets/images/jesus-misericordioso.jpg'

const devotions = [
  {
    icon: Repeat,
    title: 'Terço da Misericórdia',
    description:
      'Rezado com o terço tradicional, recorda a Paixão de Cristo e implora misericórdia para nós e o mundo inteiro.',
  },
  {
    icon: Clock3,
    title: 'Hora da Misericórdia',
    description:
      'Às 15h, hora da morte de Jesus, somos convidados a mergulhar em Sua misericórdia através da oração.',
  },
  {
    icon: HandHeart,
    title: 'Festa da Divina Misericórdia',
    description: 'Celebrada no domingo seguinte à Páscoa, instituída pelo Papa João Paulo II em 2000.',
  },
]

export function DivinaMisericordia() {
  return (
    <>
      <PageHero
        kicker="Jesus, eu confio em Vós"
        title="Divina Misericórdia"
        description="Uma devoção que nos convida a confiar na infinita misericórdia de Deus, revelada a Santa Faustina."
      />

      <section className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[minmax(0,260px)_1fr] lg:px-8">
        <img
          src={jesusMisericordioso}
          alt="Jesus Misericordioso — Jesus, eu confio em Vós"
          className="mx-auto w-full max-w-[220px] rounded-t-full object-cover shadow-md shadow-navy-900/10"
        />
        <p className="text-sm leading-relaxed text-navy-600 sm:text-base dark:text-cream-100/75">
          "Pinta uma imagem segundo o modelo que vês, com a inscrição: Jesus, eu confio em Vós. Desejo que esta
          imagem seja venerada, primeiro na tua capela, e depois no mundo inteiro." — foi assim que Jesus pediu a
          Santa Faustina que fizesse conhecida Sua misericórdia a todas as almas.
        </p>
      </section>

      <section className="bg-cream-100 px-4 py-16 sm:px-6 lg:px-8 dark:bg-navy-900">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
          {devotions.map((devotion) => (
            <div key={devotion.title} className="flex flex-col items-start gap-3 text-left">
              <IconBadge icon={devotion.icon} />
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">
                {devotion.title}
              </h3>
              <p className="text-sm text-navy-600 dark:text-cream-100/70">{devotion.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
