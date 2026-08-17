import { Hero } from '../components/sections/Hero'
import { InfoBar } from '../components/sections/InfoBar'
import { Pillars } from '../components/sections/Pillars'
import { SaintFeatureSplit } from '../components/sections/SaintFeatureSplit'
import { CommunityCarousel } from '../components/sections/CommunityCarousel'
import { EventsNewsPreview } from '../components/sections/EventsNewsPreview'
import { ContactCtaStrip } from '../components/sections/ContactCtaStrip'

export function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <Pillars />
      <SaintFeatureSplit />
      <CommunityCarousel />
      <EventsNewsPreview />
      <ContactCtaStrip />
    </>
  )
}
