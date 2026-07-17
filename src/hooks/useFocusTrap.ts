import { useEffect } from 'react'
import type { RefObject } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'

// Hook generico de modal: atrapa el foco con Tab/Shift+Tab dentro del
// contenedor, dispara onEscape con la tecla Escape, y bloquea el scroll
// del body mientras esta activo. Restaura el foco anterior al desactivarse.
export function useFocusTrap(
  containerRef: RefObject<HTMLElement | null>,
  active: boolean,
  onEscape: () => void,
) {
  useEffect(() => {
    if (!active) return

    const container = containerRef.current
    if (!container) return

    const previouslyFocused = document.activeElement as HTMLElement | null

    function getFocusable(): HTMLElement[] {
      return Array.from(container!.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR))
    }

    getFocusable()[0]?.focus()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onEscape()
        return
      }

      if (event.key !== 'Tab') return

      const items = getFocusable()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
      previouslyFocused?.focus()
    }
  }, [active, containerRef, onEscape])
}
