import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import TopBar from './components/layout/TopBar'
import Footer from './components/layout/Footer'
import PageTransition from './components/shared/PageTransition'
import ScrollToTopButton from './components/shared/ScrollToTopButton'
import MetaTags from './components/shared/MetaTags'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import AdmissionsPage from './pages/AdmissionsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import PrePrimaryPage from './pages/academics/PrePrimaryPage'
import PrimaryPage from './pages/academics/PrimaryPage'
import MiddlePage from './pages/academics/MiddlePage'
import DaycarePage from './pages/academics/DaycarePage'
import NotFoundPage from './pages/NotFoundPage'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Main Routes */}
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/admissions" element={<PageTransition><AdmissionsPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />

        {/* Academic Routes */}
        <Route path="/academics/pre-primary" element={<PageTransition><PrePrimaryPage /></PageTransition>} />
        <Route path="/academics/primary" element={<PageTransition><PrimaryPage /></PageTransition>} />
        <Route path="/academics/middle" element={<PageTransition><MiddlePage /></PageTransition>} />
        <Route path="/academics/daycare" element={<PageTransition><DaycarePage /></PageTransition>} />

        {/* Legacy WordPress URL Redirects */}
        <Route path="/admission-procedure" element={<Navigate to="/admissions" replace />} />
        <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="/best-pre-primary-school-in-aligarh" element={<Navigate to="/academics/pre-primary" replace />} />
        <Route path="/best-primary-school-in-aligarh" element={<Navigate to="/academics/primary" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />

        {/* 404 Catch-all */}
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <MetaTags />
      <TopBar />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <ScrollToTop />
        <AnimatedRoutes />
      </main>
      <Footer />
      <ScrollToTopButton />
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
