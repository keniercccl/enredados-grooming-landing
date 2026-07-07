import type { ComponentType, SVGProps } from 'react'

export interface Service {
  id: string
  title: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}
