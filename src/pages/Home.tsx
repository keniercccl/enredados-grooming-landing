import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Coverage from '@/components/sections/Coverage'
import Booking from '@/components/sections/Booking'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Coverage />
      <Booking />
      <FAQ />
      <Contact />
    </main>
  )
}

export default Home
