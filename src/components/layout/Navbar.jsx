import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, GraduationCap } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  {
    label: 'Academics',
    dropdown: [
      { label: 'Pre-Primary', path: '/academics/pre-primary' },
      { label: 'Primary', path: '/academics/primary' },
      { label: 'Middle School', path: '/academics/middle' },
      { label: 'Daycare', path: '/academics/daycare' },
    ],
  },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileAcadOpen, setMobileAcadOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dropdownRef = useRef(null)
  const location = useLocation()

  // Sticky nav shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
    setMobileAcadOpen(false)
  }, [location])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <nav
        className={`bg-primary sticky top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'shadow-nav' : ''
        }`}
      >
        <div className="container-eis">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white p-1 flex items-center justify-center shadow">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/cropped-EIS-LOGO-192x192.png"
                  alt="Excellence International School Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <GraduationCap size={24} className="text-primary hidden" />
              </div>
              <div className="hidden sm:block">
                <p className="font-heading text-white text-base md:text-lg leading-tight">
                  Excellence International
                </p>
                <p className="text-gold text-xs md:text-sm font-alt font-semibold tracking-wide leading-tight">
                  School, Aligarh
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      className="nav-link flex items-center gap-1 px-3 py-2 rounded-md hover:bg-primary-light transition-all"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-card-hover
                                      border border-gray-100 overflow-hidden z-50 animate-scaleIn">
                        {item.dropdown.map((sub) => (
                          <NavLink
                            key={sub.path}
                            to={sub.path}
                            className={({ isActive }) =>
                              `block px-4 py-3 font-body text-sm font-medium transition-all duration-200
                              border-b border-gray-50 last:border-0
                              ${isActive
                                ? 'bg-gold text-primary'
                                : 'text-textDark hover:bg-gold/10 hover:text-primary hover:pl-6'
                              }`
                            }
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link px-3 py-2 rounded-md hover:bg-primary-light transition-all ${
                        isActive ? 'nav-link-active' : ''
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )
              )}

              {/* CTA Button */}
              <Link
                to="/admissions"
                className="ml-4 btn-primary text-sm px-5 py-2.5"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-primary-light transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-primary z-50 flex flex-col
                    transition-transform duration-350 ease-in-out lg:hidden
                    ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-primary-light">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <div className="w-9 h-9 rounded-full bg-white p-1 flex items-center justify-center">
              <img
                src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/cropped-EIS-LOGO-192x192.png"
                alt="EIS Logo"
                className="w-full h-full object-contain rounded-full"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <span className="font-heading text-white text-sm leading-tight">
              Excellence<br />
              <span className="text-gold text-xs">International School</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white hover:text-gold p-2 rounded-lg hover:bg-primary-light transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Drawer Nav Links */}
        <div className="flex-1 overflow-y-auto py-4">
          {navItems.map((item, idx) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileAcadOpen((v) => !v)}
                  className="w-full flex items-center justify-between px-6 py-4 text-white font-body
                             font-medium text-base hover:bg-primary-light hover:text-gold
                             transition-all duration-200 border-b border-primary-light/30"
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileAcadOpen ? 'rotate-180 text-gold' : ''}`}
                  />
                </button>

                {mobileAcadOpen && (
                  <div className="bg-primary-dark">
                    {item.dropdown.map((sub) => (
                      <NavLink
                        key={sub.path}
                        to={sub.path}
                        className={({ isActive }) =>
                          `block pl-10 pr-6 py-3 font-body text-sm transition-all duration-200
                          ${isActive ? 'text-gold font-semibold' : 'text-white/80 hover:text-gold hover:pl-12'}`
                        }
                      >
                        → {sub.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-6 py-4 font-body font-medium text-base border-b border-primary-light/30
                  transition-all duration-200
                  ${isActive ? 'text-gold bg-primary-light' : 'text-white hover:bg-primary-light hover:text-gold'}`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>

        {/* Drawer CTA */}
        <div className="px-6 py-6 border-t border-primary-light">
          <Link
            to="/admissions"
            className="btn-primary w-full justify-center text-base"
            onClick={() => setMobileOpen(false)}
          >
            Apply Now
          </Link>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a href="https://www.facebook.com/share/1GvbBbZqN5/" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-primary-light text-white flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-primary-light text-white flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
            <a href="https://youtube.com/@excellenceschoolinternational" target="_blank" rel="noopener noreferrer"
               className="w-9 h-9 rounded-full bg-primary-light text-white flex items-center justify-center hover:bg-gold hover:text-primary transition-all">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#173E30"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
