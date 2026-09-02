import { Hero } from '../components/sections/Hero'
import { InfoBar } from '../components/sections/InfoBar'
import { Pillars } from '../components/sections/Pillars'
import { CommunityCarousel } from '../components/sections/CommunityCarousel'
import { AgendaPreview } from '../components/sections/AgendaPreview'
import { useSeo } from '../hooks/useSeo'

export function Home() {
  useSeo({
    title: 'Início',
    description:
      'Missão Santa Faustina — comunidade católica no bairro Eucaliptos, Fazenda Rio Grande, PR, reunida pela fé e devoção à Divina Misericórdia. Confira missas, catequese e grupos de oração.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <InfoBar />
      <Pillars />
      <CommunityCarousel />
      <AgendaPreview />
    </>
  )
}
