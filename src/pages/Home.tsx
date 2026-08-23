import { Hero } from '../components/sections/Hero'
import { InfoBar } from '../components/sections/InfoBar'
import { Pillars } from '../components/sections/Pillars'
import { CommunityCarousel } from '../components/sections/CommunityCarousel'
import { EventsNewsPreview } from '../components/sections/EventsNewsPreview'

export function Home() {
  return (
    <>
      <Hero />
      <InfoBar />
      <Pillars />
      <CommunityCarousel />
      <EventsNewsPreview />
    </>
  )
}
