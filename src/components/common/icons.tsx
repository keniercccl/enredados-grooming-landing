import type { SVGProps } from 'react'

const defaultProps: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function BathIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z" />
      <path d="M4 12V7a2 2 0 0 1 2-2c1 0 1.5.6 1.5 1.5" />
      <path d="M3 19h18" />
      <path d="M9.5 4.5c.6-.6.6-1.4 0-2" />
    </svg>
  )
}

export function ScissorsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultProps} {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="m20 4-12.5 12.5" />
      <path d="m7.5 7.5 12.5 12.5" />
    </svg>
  )
}

export function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultProps} {...props}>
      <ellipse cx="12" cy="16" rx="4.5" ry="4" />
      <ellipse cx="5.5" cy="10" rx="2" ry="2.5" />
      <ellipse cx="18.5" cy="10" rx="2" ry="2.5" />
      <ellipse cx="8.5" cy="5.5" rx="1.8" ry="2.2" />
      <ellipse cx="15.5" cy="5.5" rx="1.8" ry="2.2" />
    </svg>
  )
}

export function EarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultProps} {...props}>
      <path d="M8 13c-1-4 1-9 6-9a5 5 0 0 1 5 5c0 3-2 4-2 7a4 4 0 0 1-8 1" />
      <circle cx="11" cy="11" r="1.5" />
      <path d="M15 19c-2 1.5-5 1.5-7-1" />
    </svg>
  )
}

export function ImageIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultProps} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 17 5-5 3 3 4-4 4 4" />
    </svg>
  )
}

export function BrushIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...defaultProps} {...props}>
      <rect x="3" y="3" width="9" height="9" rx="2" />
      <path d="M6 6v3M9 6v3" />
      <path d="M12 7.5 20 15" />
      <path d="M17.5 12.5 21 16a2 2 0 1 1-3 3l-3.5-3.5" />
    </svg>
  )
}
