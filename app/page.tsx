import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustStripSection } from "@/components/trusted-by"
import { StatsSection } from "@/components/stats-section"
import { WhyVidhee } from "@/components/why-vidhee"
import { Footer } from "@/components/footer"
import { WhatWeDoSection } from "@/components/whatdowedo"
import { IndiaUaePathwaysSection } from "@/components/india-uae-pathway"
import { WhoWeHelpSection } from "@/components/whowehelp"
import { ProgramsServicesSection } from "@/components/programe"
import { Testimonials } from "@/components/testimonials"

export default function Home() {
  return (
    <main >
      <HeroSection />
      <TrustStripSection/>
      <StatsSection />
      <WhyVidhee />
      <WhatWeDoSection />
      <IndiaUaePathwaysSection />
      <WhoWeHelpSection />
      <ProgramsServicesSection />
      <Testimonials />
    </main>
  )
}
