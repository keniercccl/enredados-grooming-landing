import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToHash from '@/components/layout/ScrollToHash'

function Layout() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
