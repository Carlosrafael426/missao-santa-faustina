import { PageHero } from '../components/common/PageHero'
import { IconBadge } from '../components/ui/IconBadge'
import { pillars } from '../data/pillars'
import { useReveal } from '../hooks/useReveal'
import { useSeo } from '../hooks/useSeo'

export function NossaMissao() {
  const originReveal = useReveal<HTMLDivElement>()
  const gospelQuoteReveal = useReveal<HTMLElement>()
  const evangelizationReveal = useReveal<HTMLDivElement>()
  const diaryQuoteReveal = useReveal<HTMLElement>()
  const hopeReveal = useReveal<HTMLDivElement>()
  const pillarsReveal = useReveal<HTMLDivElement>()

  useSeo({
    title: 'Nossa Missão',
    description:
      'A história da Missão Santa Faustina em Fazenda Rio Grande, PR: nascida do pedido de Dom Celso e do Pe. João no Jardim Greenfield, para evangelizar e propagar a devoção à Divina Misericórdia.',
    path: '/nossa-missao',
  })

  return (
    <>
      <PageHero
        kicker="Quem somos"
        title="Nossa Missão"
        description="Somos uma comunidade católica reunida pela fé, guiada pela misericórdia e centrada em Cristo Eucarístico, a serviço da evangelização em Fazenda Rio Grande."
      />

      <section className="bg-cream-100 px-4 py-16 sm:px-6 lg:px-8 dark:bg-navy-900">
        <div ref={originReveal.ref} className={`mx-auto flex max-w-4xl flex-col gap-8 ${originReveal.className}`}>
          <div className="flex flex-col gap-3">
            <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">
              A Visita de Dom Celso
            </h2>
            <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              Em visita pastoral à nossa paróquia, no dia 15 de setembro de 2023, Dom Celso demonstrou sua
              preocupação com os católicos afastados da Igreja e nos convocou a sermos uma Igreja em saída —
              ecoando o apelo do Papa Francisco e, antes dele, o próprio mandato de Nosso Senhor Jesus Cristo.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">
              O Nascimento da Missão
            </h2>
            <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              A pedido do nosso pároco, Pe. João, nasceu a Missão Santa Faustina, no Jardim Greenfield — um bairro
              populoso que ainda não contava com nenhum templo católico.
            </p>
          </div>
        </div>
      </section>

      <section
        ref={gospelQuoteReveal.ref}
        className={`bg-navy-950 px-4 py-14 text-center sm:px-6 lg:px-8 ${gospelQuoteReveal.className}`}
      >
        <blockquote className="mx-auto max-w-2xl font-display text-xl text-cream-50 italic sm:text-2xl">
          "Ide por todo o mundo e pregai o Evangelho a toda criatura."
        </blockquote>
        <p className="mt-3 text-xs tracking-wide text-gold-400 uppercase">Marcos 16:15</p>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div
          ref={evangelizationReveal.ref}
          className={`mx-auto flex max-w-4xl flex-col gap-3 ${evangelizationReveal.className}`}
        >
          <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">
            Nossa Missão de Evangelização
          </h2>
          <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
            Nossa missão é trazer os católicos de volta ao seio da Santa Igreja: visitando as casas, rezando o
            terço, celebrando missas e praticando obras de misericórdia, propagando a devoção à Divina Misericórdia
            — missão confiada por Jesus a Santa Faustina.
          </p>
        </div>
      </section>

      <section
        ref={diaryQuoteReveal.ref}
        className={`bg-navy-950 px-4 py-14 text-center sm:px-6 lg:px-8 ${diaryQuoteReveal.className}`}
      >
        <blockquote className="mx-auto max-w-2xl font-display text-xl text-cream-50 italic sm:text-2xl">
          "Minha filha, dê-Me almas; fica sabendo que a tua tarefa é conquistar almas para Mim com a oração e com o
          sacrifício, incentivando-as à confiança na Minha misericórdia."
        </blockquote>
        <p className="mt-3 text-xs tracking-wide text-gold-400 uppercase">Diário de Santa Faustina, 1690</p>
      </section>

      <section className="bg-cream-100 px-4 py-16 sm:px-6 lg:px-8 dark:bg-navy-900">
        <div ref={hopeReveal.ref} className={`mx-auto flex max-w-4xl flex-col gap-3 ${hopeReveal.className}`}>
          <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">
            Nossa Esperança
          </h2>
          <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
            Com essa confiança, a Missão Santa Faustina espera no Senhor e, pela intercessão de Nossa Senhora de
            Fátima, a providência de um terreno; com a ajuda do glorioso São José, que possamos construir uma
            capela dedicada a Santa Faustina — e, com esse feito, cantar eternamente as misericórdias do Senhor.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div
          ref={pillarsReveal.ref}
          className={`mx-auto flex max-w-4xl flex-col gap-10 ${pillarsReveal.className}`}
        >
          <h2 className="text-center font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">
            Pilares que sustentam nossa caminhada
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center gap-3 text-center">
                <IconBadge icon={pillar.icon} />
                <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">
                  {pillar.title}
                </h3>
                <p className="text-sm text-navy-600 dark:text-cream-100/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
