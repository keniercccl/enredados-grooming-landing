import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { faq } from '@/data/faq'

function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="¿Tienes dudas?"
          align="center"
          accent="pink"
        />

        <div className="mt-10 space-y-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-neutral-50 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="shrink-0 text-xl leading-none text-brand-teal transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-neutral-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQ
