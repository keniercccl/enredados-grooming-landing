import { Link } from 'react-router-dom'
import Container from '@/components/common/Container'
import { getWhatsAppLink } from '@/utils/whatsapp'

// Código Café aun no tiene sitio propio. Cuando lo tengan, solo hay que
// completar esta URL y el credito del footer se vuelve un link automaticamente.
const CODIGO_CAFE_URL = ''

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-teal-dark text-white">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:justify-between">
        <div>
          <p className="text-lg font-bold">Enrededados Grooming</p>
          <p className="mt-1 text-sm text-white/80">
            Grooming a domicilio y en spa · Bogotá, Colombia
          </p>
        </div>

        <div className="text-sm">
          <p className="font-semibold tracking-wide text-white/70 uppercase">
            Contacto
          </p>
          <a href={getWhatsAppLink()} className="mt-2 block hover:underline">
            WhatsApp: 323 659 6976
          </a>
        </div>

        <div className="text-sm">
          <p className="font-semibold tracking-wide text-white/70 uppercase">
            Legal
          </p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/politica-de-privacidad" className="hover:underline">
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos-de-uso" className="hover:underline">
                Términos de Uso
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        <p>© {year} Enrededados Grooming. Todos los derechos reservados.</p>
        <p className="mt-1">
          Creado por{' '}
          {CODIGO_CAFE_URL ? (
            <a
              href={CODIGO_CAFE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
            >
              Código Café
            </a>
          ) : (
            <span className="font-semibold">Código Café</span>
          )}
        </p>
      </div>
    </footer>
  )
}

export default Footer
