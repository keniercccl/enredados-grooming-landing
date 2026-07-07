import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import Button from '@/components/common/Button'
import { getWhatsAppLink } from '@/utils/whatsapp'

const NAV_LINKS = [
  { label: 'Sobre ella', href: '/#sobre-ella' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Galería', href: '/#galeria' },
  { label: 'Cobertura', href: '/#cobertura' },
  { label: 'Reservar', href: '/#reservar' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contacto', href: '/#contacto' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold text-brand-teal"
          onClick={() => setIsMenuOpen(false)}
        >
          Enrededados <span className="text-brand-pink">Grooming</span>
        </Link>

        <nav className="hidden lg:block" aria-label="Navegación principal">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-neutral-700 hover:text-brand-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href={getWhatsAppLink()}>Cotiza por WhatsApp</Button>
        </div>

        <button
          type="button"
          className="text-neutral-700 lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="border-t border-neutral-100 bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-4">
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="block text-base font-medium text-neutral-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={getWhatsAppLink()} className="w-full">
              Cotiza por WhatsApp
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Navbar
