import type { GalleryPair } from '@/types/gallery'

interface GalleryCardProps {
  pair: GalleryPair
}

function GalleryCard({ pair }: GalleryCardProps) {
  return (
    <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl border-2 border-dashed border-neutral-200">
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
    </div>
  )
}

export default GalleryCard
