import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import APropos from './pages/APropos'
import Departements from './pages/Departements'
import Enseignants from './pages/Enseignants'
import Actualites from './pages/Actualites'
import Galerie from './pages/Galerie'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/departements" element={<Departements />} />
          <Route path="/enseignants" element={<Enseignants />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
