import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfUse from '@/pages/TermsOfUse'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-de-uso" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
