import type { CommunityGroup } from '../../types'

interface GroupCardProps {
  group: CommunityGroup
  expanded?: boolean
}

export function GroupCard({ group, expanded = false }: GroupCardProps) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-3 text-center">
      <div
        className={`overflow-hidden rounded-2xl shadow-sm shadow-navy-900/10 ${
          expanded ? 'h-40 w-40 sm:h-44 sm:w-44' : 'h-28 w-28 sm:h-32 sm:w-32'
        }`}
      >
        <img src={group.image} alt={group.name} loading="lazy" className="h-full w-full object-cover" />
      </div>
      <span className="text-xs font-semibold tracking-wide text-navy-800 uppercase dark:text-cream-100">
        {group.name}
      </span>
      {expanded && (
        <p className="max-w-[14rem] text-sm text-navy-600 dark:text-cream-100/70">{group.description}</p>
      )}
    </div>
  )
}
