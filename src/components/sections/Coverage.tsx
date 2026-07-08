import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { coverageZones } from '@/data/coverageZones'
import { getWhatsAppLink } from '@/utils/whatsapp'

function Coverage() {
  return (
    <section id="cobertura" className="bg-neutral-50 py-16 lg:py-24">
      <Container className="max-w-3xl text-center">
        <SectionHeading
          eyebrow="Cobertura"
          title="¿Dónde te podemos visitar?"
          description="Por ahora llegamos a domicilio a estas zonas de Bogotá. También puedes visitarnos en el spa."
          align="center"
          accent="teal"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {coverageZones.map((zone) => (
            <span
              key={zone}
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm"
            >
              📍 {zone}
            </span>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-500">
          ¿Tu zona no aparece?{' '}
          <a
            href={getWhatsAppLink('Hola, quiero saber si llegan a mi zona')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-pink hover:underline"
          >
            Escríbenos y lo confirmamos
          </a>
          .
        </p>
      </Container>
    </section>
  )
}

export default Coverage
