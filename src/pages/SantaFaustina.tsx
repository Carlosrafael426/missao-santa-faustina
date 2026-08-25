import { PageHero } from '../components/common/PageHero'
import santaFaustina from '../assets/images/santa-faustina.jpg'
import { useReveal } from '../hooks/useReveal'

export function SantaFaustina() {
  const bioReveal = useReveal<HTMLElement>()
  const quoteReveal = useReveal<HTMLElement>()

  return (
    <>
      <PageHero
        kicker="Apóstola da Misericórdia"
        title="Santa Faustina Kowalska"
        description="A religiosa polonesa escolhida por Cristo para recordar ao mundo a mensagem da Divina Misericórdia."
      />

      <section
        ref={bioReveal.ref}
        className={`mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-4 py-16 sm:px-6 md:grid-cols-[minmax(0,260px)_1fr] lg:px-8 ${bioReveal.className}`}
      >
        <img
          src={santaFaustina}
          alt="Santa Faustina Kowalska, fotografia de 1931"
          className="w-full rounded-2xl object-cover shadow-md shadow-navy-900/10"
        />
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-navy-600 sm:text-base dark:text-cream-100/75">
          <p>
            Helena Kowalska nasceu em 1905, em Głogowiec, na Polônia, e entrou para a Congregação das Irmãs de
            Nossa Senhora da Misericórdia em 1925, recebendo o nome de Irmã Maria Faustina.
          </p>
          <p>
            Ao longo de sua vida religiosa, recebeu de Jesus revelações sobre Sua infinita misericórdia,
            registradas em seu Diário — hoje uma das obras espirituais mais lidas no mundo católico.
          </p>
          <p>
            Foi Jesus quem lhe pediu que fizesse pintar a imagem com os raios vermelho e branco, acompanhada da
            inscrição "Jezu, ufam Tobie" — "Jesus, eu confio em Vós".
          </p>
          <p>
            Faleceu em 1938, em Cracóvia, e foi canonizada pelo Papa João Paulo II em 2000, que também instituiu
            o Domingo da Divina Misericórdia no calendário litúrgico da Igreja.
          </p>
        </div>
      </section>

      <section
        ref={quoteReveal.ref}
        className={`bg-navy-950 px-4 py-14 text-center sm:px-6 lg:px-8 ${quoteReveal.className}`}
      >
        <blockquote className="mx-auto max-w-2xl font-display text-xl text-cream-50 italic sm:text-2xl">
          "Deixa que a graça de Deus atue em ti como Ele quer, e confia sempre nEle."
        </blockquote>
        <p className="mt-3 text-xs tracking-wide text-gold-400 uppercase">Diário de Santa Faustina</p>
      </section>
    </>
  )
}
