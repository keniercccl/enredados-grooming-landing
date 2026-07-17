import Container from '@/components/common/Container'
import SectionHeading from '@/components/common/SectionHeading'
import GalleryPlaceholderCard from './GalleryPlaceholderCard'
import GalleryCarousel from './GalleryCarousel'
import { useGalleryPairs } from '@/hooks/useGalleryPairs'

const LOADING_PLACEHOLDER_COUNT = 4

function Gallery() {
  const { pairs, status } = useGalleryPairs()

  return (
    <section id="galeria" className="bg-neutral-50 py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galería"
          title="Transformaciones antes y después"
          description="Fotos reales de perros y gatos consentidos por Enrededados Grooming."
          align="center"
          accent="yellow"
        />

        <div className="mt-12" aria-live="polite">
          {status === 'loading' && (
            <div className="grid gap-6 sm:grid-cols-2">
              {Array.from({ length: LOADING_PLACEHOLDER_COUNT }).map((_, index) => (
                <GalleryPlaceholderCard key={index} />
              ))}
            </div>
          )}

          {status === 'error' && (
            <div className="mx-auto max-w-sm">
              <GalleryPlaceholderCard message="No pudimos cargar las fotos en este momento. Intenta de nuevo más tarde." />
            </div>
          )}

          {status === 'empty' && (
            <div className="mx-auto max-w-sm">
              <GalleryPlaceholderCard message="Muy pronto vas a poder ver aquí el trabajo real con perros y gatos consentidos." />
            </div>
          )}

          {status === 'success' && <GalleryCarousel pairs={pairs} />}
        </div>
      </Container>
    </section>
  )
}

export default Gallery
