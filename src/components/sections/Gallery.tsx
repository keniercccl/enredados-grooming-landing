import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import { ImageIcon } from '@/components/common/icons'

const PLACEHOLDER_COUNT = 4

function BeforeAfterPlaceholder() {
  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl border-2 border-dashed border-neutral-200">
      {(['Antes', 'Después'] as const).map((label) => (
        <div
          key={label}
          className="flex aspect-square flex-col items-center justify-center gap-2 bg-neutral-50 p-4"
        >
          <ImageIcon className="h-8 w-8 text-neutral-300" aria-hidden="true" />
          <span className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

function Gallery() {
  return (
    <section id="galeria" className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galería"
          title="Transformaciones antes y después"
          description="Muy pronto vas a poder ver aquí el trabajo real con perros y gatos consentidos."
          align="center"
          accent="yellow"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, index) => (
            <BeforeAfterPlaceholder key={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
