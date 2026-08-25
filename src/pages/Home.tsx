import { Hero } from '../components/sections/Hero'
import { InfoBar } from '../components/sections/InfoBar'
import { Pillars } from '../components/sections/Pillars'
import { CommunityCarousel } from '../components/sections/CommunityCarousel'
import { AgendaPreview } from '../components/sections/AgendaPreview'

export function Home() {
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
