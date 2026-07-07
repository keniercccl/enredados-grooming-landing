import { BathIcon, ScissorsIcon, PawIcon, EarIcon, BrushIcon } from '@/components/common/icons'
import type { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'bano-spa',
    title: 'Baño y spa completo',
    description:
      'Limpieza, hidratación y secado profesional para dejar a tu mascota fresca, suave y feliz.',
    icon: BathIcon,
  },
  {
    id: 'corte-grooming',
    title: 'Corte de pelo / grooming estético',
    description:
      'Corte a la medida de cada raza o a tu gusto, con técnica y mucha paciencia.',
    icon: ScissorsIcon,
  },
  {
    id: 'unas',
    title: 'Corte de uñas',
    description: 'Corte seguro y sin estrés, cuidando el bienestar de tu mascota.',
    icon: PawIcon,
  },
  {
    id: 'oidos',
    title: 'Limpieza de oídos',
    description: 'Limpieza suave para prevenir molestias e infecciones.',
    icon: EarIcon,
  },
  {
    id: 'deslanado',
    title: 'Deslanado',
    description:
      'Manejo de la muda de pelo en razas de doble capa, para reducir la caída de pelo en casa.',
    icon: BrushIcon,
  },
]
