import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { IconBadge } from '../ui/IconBadge'
import { pillars } from '../../data/pillars'

export function Pillars() {
  return (
    <section className="bg-cream-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12">
        <SectionHeading kicker="Nossa Espiritualidade" title="Pilares que sustentam nossa caminhada" />

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-start gap-4 text-left">
              <IconBadge icon={pillar.icon} size="md" />
              <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-cream-50">{pillar.title}</h3>
              <p className="text-sm text-navy-600 dark:text-cream-100/70">{pillar.description}</p>
              <Link
                to="/nossa-missao"
                className="inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-gold-600 uppercase hover:text-gold-700 dark:text-gold-400 dark:hover:text-gold-300"
              >
                Saiba mais
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
