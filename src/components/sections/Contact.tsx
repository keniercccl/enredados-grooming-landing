import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { getWhatsAppLink } from '@/utils/whatsapp'

function Contact() {
  return (
    <section id="contacto" className="bg-brand-teal-dark py-16 text-white lg:py-24">
      <Container className="max-w-2xl text-center">
        <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-semibold">
          Contacto
        </span>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
          Escríbenos y agenda la cita de tu mascota
        </h2>

        <p className="mt-4 text-white/80">
          Horario de atención: <strong>[Martes 9:00 a 18:00]</strong>
        </p>

        <div className="mt-8">
          <Button href={getWhatsAppLink()}>
            323 659 6976 — Escríbenos por WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Contact
