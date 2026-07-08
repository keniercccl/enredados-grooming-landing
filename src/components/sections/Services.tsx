import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { services } from '@/data/services'
import { getWhatsAppLink } from '@/utils/whatsapp'

function Services() {
  return (
    <section id="servicios" className="bg-white py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu mascota necesita"
          description="Cotiza por WhatsApp el servicio que más se ajuste a tu perro o gato."
          align="center"
          accent="teal"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="flex flex-col rounded-2xl bg-neutral-50 p-6 shadow-sm"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-neutral-600">
                  {service.description}
                </p>
                <a
                  href={getWhatsAppLink(`Hola, quiero cotizar: ${service.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-sm font-semibold text-brand-pink hover:underline"
                >
                  Cotiza este servicio →
                </a>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default Services
