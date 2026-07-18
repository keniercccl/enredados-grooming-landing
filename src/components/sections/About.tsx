import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import aboutImage from '@/assets/images/about/paola-sobre-ella.jpg'

function About() {
  return (
    <section id="sobre-ella" className="bg-neutral-50 py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <img
          src={aboutImage}
          alt="Paola Álvarez sonriendo junto a un gato persa blanco"
          width={800}
          height={1000}
          loading="lazy"
          className="aspect-4/5 w-full max-w-sm rounded-[2.5rem] object-cover shadow-xl mx-auto lg:mx-0"
        />

        <div className="text-center lg:text-left">
          <SectionHeading eyebrow="Sobre ella" title="Paola Álvarez" />

          <p className="mt-2 text-sm font-medium text-brand-teal">
            📍 Atiende en zona Norte de Bogotá (Usaquén, Chapinero, Suba) y en
            spa
          </p>

          <p className="mt-6 text-lg text-neutral-600">
            Hola, soy Paola Álvarez, groomer profesional de perros y gatos en Bogotá.
            Desde hace más de <strong>6 años</strong> ayudo a que las mascotas luzcan y se sientan mejor
            a través de baños, cortes personalizados y un manejo respetuoso que prioriza 
            su tranquilidad y bienestar. Atiendo tanto en spa como a domicilio en el norte
            de Bogotá, siempre con dedicación, paciencia y el cariño que cada mascota merece.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default About
