import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

/**
 * Reusable Page Banner for inner pages
 * Props:
 *   title      - Page title (string)
 *   subtitle   - Optional subtitle (string)
 *   bgImage    - Background image URL (string)
 *   breadcrumbs - Array of { label, path } — last item is current page (no path needed)
 */
const PageBanner = ({ title, subtitle, bgImage, breadcrumbs = [] }) => {
  const defaultBg =
    'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/About-US2.png'

  return (
    <section className="relative h-56 md:h-72 lg:h-80 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${bgImage || defaultBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl mb-3 drop-shadow-lg animate-fadeInUp">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 font-body text-base md:text-lg max-w-xl mb-4 animate-fadeIn">
            {subtitle}
          </p>
        )}

        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-1.5 flex-wrap justify-center animate-fadeIn"
          >
            <Link
              to="/"
              className="flex items-center gap-1 text-white/70 hover:text-gold text-sm font-body transition-colors"
            >
              <Home size={13} />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight size={13} className="text-gold/70" />
                {crumb.path ? (
                  <Link
                    to={crumb.path}
                    className="text-white/70 hover:text-gold text-sm font-body transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold text-sm font-body font-medium">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
}

export default PageBanner
