import { Link } from 'react-router-dom'
import { SectionHeading } from '../ui/SectionHeading'
import { Button } from '../ui/Button'
import { GroupCard } from '../common/GroupCard'
import { communityGroups } from '../../data/community'

export function CommunityCarousel() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-navy-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">
        <SectionHeading kicker="Nossa Comunidade" title="Uma família de fé e amor" />

        <div className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-7">
          {communityGroups.map((group) => (
            <div key={group.slug} className="snap-start">
              <GroupCard group={group} />
            </div>
          ))}
        </div>

        <Button as={Link} to="/comunidade" variant="outline">
          Conheça todos os grupos
        </Button>
      </div>
    </section>
  )
}
