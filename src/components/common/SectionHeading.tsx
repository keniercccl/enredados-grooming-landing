type Accent = 'pink' | 'teal' | 'yellow'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  accent?: Accent
}

const accentClasses: Record<Accent, string> = {
  pink: 'bg-brand-pink/10 text-brand-pink',
  teal: 'bg-brand-teal/10 text-brand-teal',
  yellow: 'bg-brand-yellow/20 text-neutral-900',
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  accent = 'pink',
}: SectionHeadingProps) {
  const isCentered = align === 'center'

  return (
    <div className={isCentered ? 'text-center' : 'text-left'}>
      <span
        className={`inline-block rounded-full px-4 py-1 text-sm font-semibold ${accentClasses[accent]}`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-neutral-900 sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={`mt-3 text-lg text-neutral-600 ${isCentered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
