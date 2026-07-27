import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-gold shadow-card-hover
                 border-2 border-gold flex items-center justify-center hover:bg-gold hover:text-primary
                 hover:scale-110 active:scale-95 transition-all duration-300 animate-fadeIn"
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <ChevronUp size={24} strokeWidth={2.5} />
    </button>
  )
}

export default ScrollToTopButton
