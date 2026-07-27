import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import TopBar from './components/layout/TopBar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import PrePrimaryPage from './pages/academics/PrePrimaryPage'
import PrimaryPage from './pages/academics/PrimaryPage'
import MiddlePage from './pages/academics/MiddlePage'
import DaycarePage from './pages/academics/DaycarePage'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/academics/pre-primary" element={<PrePrimaryPage />} />
          <Route path="/academics/primary" element={<PrimaryPage />} />
          <Route path="/academics/middle" element={<MiddlePage />} />
          <Route path="/academics/daycare" element={<DaycarePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
