import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import WhatsApp from './components/WhatsApp'
import CookieBanner from './components/CookieBanner'
import ProgressBar from './components/ProgressBar'
import Breadcrumb from './components/Breadcrumb'
import Loader from './components/Loader'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Departements from './pages/Departements'
import Enseignants from './pages/Enseignants'
import Actualites from './pages/Actualites'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'
import DepartementNTIC from './pages/DepartementNTIC'
import DepartementDLSI from './pages/DepartementDLSI'
import NotFound from './pages/NotFound'

// Scroll vers le haut à chaque changement de page
function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <Loader />
      <ProgressBar />
      <ScrollReset />
      <Navbar />
      <Breadcrumb />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/departements" element={<Departements />} />
          <Route path="/departements/ntic" element={<DepartementNTIC />} />
          <Route path="/departements/dlsi" element={<DepartementDLSI />} />
          <Route path="/enseignants" element={<Enseignants />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsApp />
      <CookieBanner />
    </>
  )
}

