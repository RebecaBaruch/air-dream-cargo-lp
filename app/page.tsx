import { DifferentialsSection } from '@/components/differentials-section'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services-section'

export default function Home() {
  return (
    <main className="min-h-full bg-gray-0">
      <Hero />
      <ServicesSection />
      <DifferentialsSection />
    </main>
  )
}
