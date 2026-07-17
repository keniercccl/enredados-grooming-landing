import { useState } from 'react'
import type { GalleryPair } from '@/types/gallery'

interface PhotoPanelProps {
  label: string
  url: string
  alt: string
}

function PhotoPanel({ label, url, alt }: PhotoPanelProps) {
  const [showFull, setShowFull] = useState(false)

  return (
    <div className="flex min-h-0 flex-1 flex-col items-center gap-2">
      <span className="text-xs font-semibold tracking-wide text-white/70 uppercase">
        {label}
      </span>
      <button
        type="button"
        onClick={() => setShowFull((value) => !value)}
        aria-label={showFull ? 'Ver foto recortada' : 'Ver foto completa sin recortar'}
        className="flex min-h-0 w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-black/40"
      >
        <img
          src={url}
          alt={alt}
          className={`h-full w-full ${showFull ? 'object-contain' : 'object-cover'}`}
        />
      </button>
    </div>
  )
}

interface GalleryLightboxSlideProps {
  pair: GalleryPair
}

function GalleryLightboxSlide({ pair }: GalleryLightboxSlideProps) {
  return (
    <div className="flex h-full min-w-0 flex-[0_0_100%] flex-col gap-4 px-4 py-4 sm:flex-row sm:gap-6 sm:px-8">
      <PhotoPanel
        label="Antes"
        url={pair.beforeLightboxUrl}
        alt={`${pair.petName} antes del grooming`}
      />
      <PhotoPanel
        label="Después"
        url={pair.afterLightboxUrl}
        alt={`${pair.petName} después del grooming`}
      />
    </div>
  )
}

export default GalleryLightboxSlide
