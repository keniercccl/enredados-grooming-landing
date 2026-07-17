import { ImageIcon } from '@/components/common/icons'

interface GalleryPlaceholderCardProps {
  message?: string
}

function GalleryPlaceholderCard({ message }: GalleryPlaceholderCardProps) {
  if (message) {
    return (
      <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50 p-6 text-center">
        <ImageIcon className="h-8 w-8 text-neutral-300" aria-hidden="true" />
        <span className="text-sm font-medium text-neutral-500">{message}</span>
      </div>
    )
  }

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

export default GalleryPlaceholderCard
