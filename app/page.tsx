import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { DifferentialsSection } from '@/components/differentials-section'
import { FaqSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { ScrollNavbar } from '@/components/scroll-navbar'
import { ServicesSection } from '@/components/services-section'

export default function Home() {
  return (
    <main className="min-h-full overflow-x-hidden bg-gray-0">
      <ScrollNavbar />
      <Hero />
      <ServicesSection />
      <DifferentialsSection />
      <AboutSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
