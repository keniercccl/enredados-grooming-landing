import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router no hace scroll nativo al cambiar solo el hash de la URL (eso
// solo pasa con un click nativo en <a> o una carga completa de pagina). Este
// componente lo hace a mano para los links del Navbar (/#servicios, etc.),
// tanto si ya estabas en esa ruta como si vienes de otra pagina.
function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    document.getElementById(hash.slice(1))?.scrollIntoView()
  }, [hash, pathname])

  return null
}

export default ScrollToHash
