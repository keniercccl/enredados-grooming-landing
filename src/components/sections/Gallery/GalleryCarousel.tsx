import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import GalleryCard from './GalleryCard'
import { ChevronLeftIcon, ChevronRightIcon } from '@/components/common/icons'
import type { GalleryPair } from '@/types/gallery'

interface GalleryCarouselProps {
  pairs: GalleryPair[]
  onCardClick: (index: number) => void
}

function GalleryCarousel({ pairs, onCardClick }: GalleryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: pairs.length > 1 })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="mx-auto w-full max-w-md sm:max-w-lg">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {pairs.map((pair, index) => (
            <div key={pair.id} className="min-w-0 flex-[0_0_100%] px-2">
              <GalleryCard pair={pair} onOpen={() => onCardClick(index)} />
              <p className="mt-2 text-center text-sm font-medium text-neutral-600">
                {pair.petName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {pairs.length > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Foto anterior"
            className="rounded-full border border-neutral-200 p-2 text-neutral-600 hover:border-brand-teal hover:text-brand-teal"
          >
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {pairs.map((pair, index) => (
              <button
                key={pair.id}
                type="button"
                onClick={() => scrollTo(index)}
                aria-label={`Ir a la foto de ${pair.petName}`}
                className={`h-2 w-2 rounded-full transition ${
                  index === selectedIndex ? 'bg-brand-teal' : 'bg-neutral-200'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Foto siguiente"
            className="rounded-full border border-neutral-200 p-2 text-neutral-600 hover:border-brand-teal hover:text-brand-teal"
          >
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  )
}

export default GalleryCarousel
