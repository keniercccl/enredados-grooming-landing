import type { AvailabilityDay } from '@/types/availability'

const FIXED_SLOTS = ['09:00', '11:00', '13:00', '15:00', '17:00']
const DAYS_AHEAD = 7
const SUNDAY = 0

const dayFormatter = new Intl.DateTimeFormat('es-CO', {
  weekday: 'long',
  day: 'numeric',
  month: 'short',
})

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Disponibilidad mockeada: los proximos DAYS_AHEAD dias habiles (sin domingo),
// con los mismos horarios fijos. El backend real (fase futura) reemplazara esto.
function buildAvailability(): AvailabilityDay[] {
  const days: AvailabilityDay[] = []
  const cursor = new Date()
  cursor.setDate(cursor.getDate() + 1)

  while (days.length < DAYS_AHEAD) {
    if (cursor.getDay() !== SUNDAY) {
      days.push({
        date: cursor.toISOString().slice(0, 10),
        label: capitalize(dayFormatter.format(cursor)),
        slots: FIXED_SLOTS,
      })
    }
    cursor.setDate(cursor.getDate() + 1)
  }

  return days
}

export const availability: AvailabilityDay[] = buildAvailability()
