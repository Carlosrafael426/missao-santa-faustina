import { PageHero } from '../components/common/PageHero'
import { IconBadge } from '../components/ui/IconBadge'
import { pillars } from '../data/pillars'
import { useReveal } from '../hooks/useReveal'
import { useSeo } from '../hooks/useSeo'

export function NossaMissao() {
  const historyReveal = useReveal<HTMLDivElement>()
  const purposeReveal = useReveal<HTMLDivElement>()
  const pillarsReveal = useReveal<HTMLDivElement>()

  useSeo({
    title: 'Nossa Missão',
    description:
      'Conheça a história da Missão Santa Faustina: comunidade católica em Fazenda Rio Grande, PR, nascida da espiritualidade da Divina Misericórdia e do carisma de Santa Faustina Kowalska.',
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
        <div ref={historyReveal.ref} className={`mx-auto flex max-w-4xl flex-col gap-8 ${historyReveal.className}`}>
          <div className="flex flex-col gap-3">
            <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">Quem Somos</h2>
            <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              A Missão Santa Faustina é uma comunidade viva de fiéis católicos, localizada no bairro Eucaliptos,
              mais especificamente na região do Jardim Greenfield, em Fazenda Rio Grande - PR. Vinculada diretamente à
              Paróquia Nossa Senhora de Fátima, nossa comunidade nasceu sob a inspiração da espiritualidade da Divina
              Misericórdia e do carisma de Santa Faustina Kowalska, apóstola da misericórdia de Jesus.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">Nossa História e Origem</h2>
            <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              A comunidade teve sua origem inspirada a partir de uma marcante visita pastoral realizada pelo Bispo Dom Celso.
              Desde a sua concepção, o principal objetivo da missão tem sido ir ao encontro das famílias,
              acolher e promover o resgate de fiéis católicos que se encontravam afastados da vida paroquial e dos sacramentos,
              oferecendo um espaço fraterno de escuta e renovação da fé.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-center font-display text-2xl font-semibold text-navy-900 sm:text-left dark:text-cream-50">Onde Nos Reunimos e Nosso Futuro</h2>
            <p className="text-justify text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              Atualmente, como uma comunidade em constante expansão e acolhimento, os nossos encontros acontecem através das missas dominicais,
              que são celebradas quinzenalmente nas dependências da Escola Anete Franco, situada no Jardim Greenfield.
              Estamos em constante crescimento e, com a graça de Deus, mobilizamos nossos esforços em uma grande arrecadação para
              a compra de um terreno próprio e a construção da nossa tão sonhada capela no bairro, consolidando ainda mais o nosso espaço de evangelização.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div
          ref={purposeReveal.ref}
          className={`mx-auto grid max-w-4xl grid-cols-1 gap-10 md:grid-cols-2 ${purposeReveal.className}`}
        >
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">Nosso propósito</h2>
            <p className="text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              Anunciar a misericórdia de Deus revelada em Jesus Cristo, acolhendo cada pessoa como Ele nos acolhe,
              e formar discípulos que vivem a fé em comunidade, na oração e no serviço ao próximo.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
            <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">Nossa visão</h2>
            <p className="text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
              Ser uma comunidade que irradia a mensagem "Jesus, eu confio em Vós" para todas as famílias do nosso
              bairro e além, através de grupos de oração, formação e ação social.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-100 px-4 py-16 sm:px-6 lg:px-8 dark:bg-navy-900">
        <div
          ref={pillarsReveal.ref}
          className={`mx-auto flex max-w-4xl flex-col gap-10 ${pillarsReveal.className}`}
        >
          <h2 className="text-center font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">
            Pilares que sustentam nossa caminhada
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
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
