import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { getWhatsAppLink } from '@/utils/whatsapp'
import heroImage from '@/assets/images/hero/paola-hero.jpg'

function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div className="text-center lg:text-left">
          <span className="inline-block rounded-full bg-brand-teal/10 px-4 py-1 text-sm font-semibold text-brand-teal">
            Grooming a domicilio y en spa · Bogotá
          </span>

          <h1 className="mt-4 text-4xl font-bold text-neutral-900 sm:text-5xl">
            Grooming con <span className="text-brand-pink">amor</span> para
            tu perro o gato
          </h1>

          <p className="mt-4 text-lg text-neutral-600">
            Baños relajantes, cortes a la medida y mucho cariño — en nuestro
            spa o directamente en la comodidad de tu casa, en la zona Norte
            de Bogotá.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/#reservar">Reserva tu cita</Button>
            <Button href={getWhatsAppLink()} variant="secondary">
              Cotiza por WhatsApp
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            className="absolute -inset-6 -z-10 rounded-[3rem] bg-brand-yellow/40 blur-2xl"
            aria-hidden="true"
          />
          <img
            src={heroImage}
            alt="Paola Álvarez, groomer de Enrededados, sosteniendo a un gato persa blanco"
            width={900}
            height={1125}
            className="aspect-4/5 w-full rounded-[2.5rem] object-cover shadow-xl"
            fetchPriority="high"
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
