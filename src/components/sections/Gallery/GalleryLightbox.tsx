import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import useEmblaCarousel from 'embla-carousel-react'
import GalleryLightboxSlide from './GalleryLightboxSlide'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from '@/components/common/icons'
import { useFocusTrap } from '@/hooks/useFocusTrap'
import type { GalleryPair } from '@/types/gallery'

interface GalleryLightboxProps {
  pairs: GalleryPair[]
  initialIndex: number
  onClose: () => void
}

function GalleryLightbox({ pairs, initialIndex, onClose }: GalleryLightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex: initialIndex,
    loop: pairs.length > 1,
  })
  const [currentPetName, setCurrentPetName] = useState(pairs[initialIndex]?.petName ?? '')

  useFocusTrap(containerRef, true, onClose)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      const pair = pairs[emblaApi.selectedScrollSnap()]
      if (pair) setCurrentPetName(pair.petName)
    }
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, pairs])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'ArrowLeft') scrollPrev()
      if (event.key === 'ArrowRight') scrollNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [scrollPrev, scrollNext])

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de fotos de la galería"
      className="fixed inset-0 z-[100] flex flex-col bg-black/95"
    >
      <div className="flex items-center justify-between px-4 py-3">
        <p aria-live="polite" className="text-sm font-medium text-white">
          {currentPetName}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="rounded-full p-2 text-white hover:bg-white/10"
        >
          <CloseIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {pairs.map((pair) => (
            <GalleryLightboxSlide key={pair.id} pair={pair} />
          ))}
        </div>
      </div>

      {pairs.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Mascota anterior"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Mascota siguiente"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
          >
            <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </>
      )}
    </div>,
    document.body,
  )
}

export default GalleryLightbox
