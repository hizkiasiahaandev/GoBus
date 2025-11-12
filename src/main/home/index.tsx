"use client"

import HeroSection from "./HeroSection"
import WhyJourneySection from "./WhyJourneySection"
import WhyChooseSection from "./WhyChooseSection"
import FAQSection from "./Faq"
import DaftarBusSection from "./DaftarBus"
import KontakPage from "./kontak"

export default function BerandaPage() {
  return (
    <main className="bg-white antialiased">
      <HeroSection />
      <DaftarBusSection />
      <WhyJourneySection />
      <WhyChooseSection />
      <FAQSection />
      <KontakPage />
    </main>
  )
}
