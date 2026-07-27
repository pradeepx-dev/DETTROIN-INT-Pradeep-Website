import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, GraduationCap } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/slider1.jpg',
    fallback: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
    headline: 'Shaping Tomorrow\'s Leaders Today',
    subheadline: 'Excellence International School — Where Every Child\'s Potential Blooms',
  },
  {
    id: 2,
    image: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/slider2.jpg',
    fallback: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80',
    headline: 'Quality Education in Aligarh',
    subheadline: 'A nurturing environment for academic excellence and holistic development',
  },
  {
    id: 3,
    image: 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/slider3.jpg',
    fallback: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=80',
    headline: 'Admissions Open 2026–27',
    subheadline: 'Pre-Primary | Primary | Middle School | Daycare — Enroll Your Child Today',
  },
]

const HeroSlider = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Dynamically import Swiper
    const loadSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { Autoplay, Pagination, Navigation, EffectFade } = await import('swiper/modules')

      if (swiperRef.current && !swiperRef.current.swiper) {
        new Swiper(swiperRef.current, {
          modules: [Autoplay, Pagination, Navigation, EffectFade],
          effect: 'fade',
          fadeEffect: { crossFade: true },
          loop: true,
          autoplay: { delay: 5000, disableOnInteraction: false },
          pagination: { el: '.hero-pagination', clickable: true },
          navigation: {
            nextEl: '.hero-next',
            prevEl: '.hero-prev',
          },
        })
      }
    }
    loadSwiper()
  }, [])

  return (
    <section className="relative w-full h-[88vh] min-h-[520px] max-h-[780px] overflow-hidden">
      <div ref={swiperRef} className="swiper w-full h-full">
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <div key={slide.id} className="swiper-slide relative">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => { e.target.src = slide.fallback }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-hero-overlay" />

              {/* Slide Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container-eis w-full">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-0.5 bg-gold" />
                      <span className="text-gold font-alt text-sm font-semibold uppercase tracking-widest">
                        Excellence International School
                      </span>
                    </div>
                    <h1 className="font-heading text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 drop-shadow-xl">
                      {slide.headline}
                    </h1>
                    <p className="text-white/85 font-body text-base md:text-lg lg:text-xl mb-8 leading-relaxed max-w-xl">
                      {slide.subheadline}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/admissions" className="btn-primary text-sm md:text-base px-6 py-3 shadow-lg">
                        Apply Now
                        <ChevronRight size={18} />
                      </Link>
                      <Link to="/about" className="btn-outline-gold text-sm md:text-base px-6 py-3">
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="hero-pagination swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2" />

        {/* Navigation Arrows */}
        <button className="hero-prev swiper-button-prev !left-4 md:!left-8" aria-label="Previous slide" />
        <button className="hero-next swiper-button-next !right-4 md:!right-8" aria-label="Next slide" />
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,60 C480,20 960,20 1440,60 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-16 right-8 z-20 hidden md:flex flex-col items-center gap-1 opacity-60">
        <span className="text-white text-xs font-alt tracking-widest rotate-90 mb-2">SCROLL</span>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  )
}

export default HeroSlider
