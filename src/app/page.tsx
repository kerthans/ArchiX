import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Features } from '@/components/Features'
import { Schedule } from '@/components/Schedule'
import { Sponsors } from '@/components/Sponsors'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </main>
  )
}