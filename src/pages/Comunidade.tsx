import { PageHero } from '../components/common/PageHero'
import { GroupCard } from '../components/common/GroupCard'
import { communityGroups } from '../data/community'

export function Comunidade() {
  return (
    <>
      <PageHero
        kicker="Nossa Comunidade"
        title="Uma família de fé e amor"
        description="Cada grupo é um espaço de acolhida, formação e serviço. Encontre onde você pode viver e partilhar a fé conosco."
      />

      <section id="pedido-de-oracao" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {communityGroups.map((group) => (
            <GroupCard key={group.slug} group={group} expanded />
          ))}
        </div>
      </section>
    </>
  )
}
