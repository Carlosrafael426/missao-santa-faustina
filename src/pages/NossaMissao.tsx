import { PageHero } from '../components/common/PageHero'
import { IconBadge } from '../components/ui/IconBadge'
import { pillars } from '../data/pillars'

export function NossaMissao() {
  return (
    <>
      <PageHero
        kicker="Quem somos"
        title="Nossa Missão"
        description="Somos uma comunidade católica reunida pela fé, guiada pela misericórdia e centrada em Cristo Eucarístico, a serviço da evangelização em Fazenda Rio Grande."
      />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">Nosso propósito</h2>
          <p className="text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
            Anunciar a misericórdia de Deus revelada em Jesus Cristo, acolhendo cada pessoa como Ele nos acolhe,
            e formar discípulos que vivem a fé em comunidade, na oração e no serviço ao próximo.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">Nossa visão</h2>
          <p className="text-sm leading-relaxed text-navy-600 dark:text-cream-100/70">
            Ser uma comunidade que irradia a mensagem "Jesus, eu confio em Vós" para todas as famílias do nosso
            bairro e além, através de grupos de oração, formação e ação social.
          </p>
        </div>
      </section>

      <section className="bg-cream-100 px-4 py-16 sm:px-6 lg:px-8 dark:bg-navy-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-10">
          <h2 className="text-center font-display text-2xl font-semibold text-navy-900 dark:text-cream-50">
            Pilares que sustentam nossa caminhada
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col items-start gap-3 text-left">
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
