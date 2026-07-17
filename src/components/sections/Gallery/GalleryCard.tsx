import type { GalleryPair } from '@/types/gallery'

interface GalleryCardProps {
  pair: GalleryPair
  onOpen: () => void
}

function GalleryCard({ pair, onOpen }: GalleryCardProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Ver fotos de ${pair.petName} en pantalla completa`}
      className="grid w-full grid-cols-2 gap-1 overflow-hidden rounded-2xl border-2 border-dashed border-neutral-200 text-left focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:outline-none"
    >
      <img
        src={pair.beforeUrl}
        alt={`${pair.petName} antes del grooming`}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
      <img
        src={pair.afterUrl}
        alt={`${pair.petName} después del grooming`}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
    </button>
  )
}

export default GalleryCard
