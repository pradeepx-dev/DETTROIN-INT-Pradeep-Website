import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const footerQuickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
]

const footerAcademics = [
  { label: 'Pre-Primary', path: '/academics/pre-primary' },
  { label: 'Primary', path: '/academics/primary' },
  { label: 'Middle School', path: '/academics/middle' },
  { label: 'Daycare', path: '/academics/daycare' },
]

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Grid */}
      <div className="container-eis py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-white p-1 flex-shrink-0">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/cropped-EIS-LOGO-192x192.png"
                  alt="EIS Logo"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div>
                <p className="font-heading text-white text-base leading-tight">Excellence International</p>
                <p className="text-gold text-xs font-alt font-semibold leading-tight">School, Aligarh</p>
              </div>
            </div>
            <p className="text-white/70 font-body text-sm leading-relaxed mb-5">
              Excellence International School is among the best schools in Aligarh, dedicated to
              academic excellence, holistic development, and value-based education for every child.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1GvbBbZqN5/" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center
                            hover:bg-gold hover:text-primary transition-all duration-200"
                 aria-label="Facebook">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center
                            hover:bg-gold hover:text-primary transition-all duration-200"
                 aria-label="Instagram">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
              <a href="https://youtube.com/@excellenceschoolinternational?si=cAvfCyy3WWmRWkg6" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center
                            hover:bg-gold hover:text-primary transition-all duration-200"
                 aria-label="YouTube">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#173E30"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="font-heading text-white text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-white/70 font-body text-sm
                               hover:text-gold transition-all duration-200 group"
                  >
                    <ChevronRight size={14} className="text-gold group-hover:translate-x-1 transition-transform duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Academics */}
          <div>
            <h3 className="font-heading text-white text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold pb-3">
              Academics
            </h3>
            <ul className="space-y-3">
              {footerAcademics.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-white/70 font-body text-sm
                               hover:text-gold transition-all duration-200 group"
                  >
                    <ChevronRight size={14} className="text-gold group-hover:translate-x-1 transition-transform duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-heading text-white text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-gold pb-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 font-body text-sm leading-relaxed">
                  Excellence International School,<br />
                  Ramghat Road, Aligarh 202001,<br />
                  Uttar Pradesh, India
                </span>
              </li>
              <li>
                <a href="tel:+917055582117"
                   className="flex items-center gap-3 text-white/70 font-body text-sm hover:text-gold transition-colors">
                  <Phone size={15} className="text-gold flex-shrink-0" />
                  +91 7055582117
                </a>
              </li>
              <li>
                <a href="mailto:rahulexcellence85@gmail.com"
                   className="flex items-center gap-3 text-white/70 font-body text-sm hover:text-gold transition-colors break-all">
                  <Mail size={15} className="text-gold flex-shrink-0" />
                  rahulexcellence85@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:info@excellenceinternationalschool.com"
                   className="flex items-center gap-3 text-white/70 font-body text-sm hover:text-gold transition-colors break-all">
                  <Mail size={15} className="text-gold flex-shrink-0" />
                  info@excellenceinternationalschool.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-eis py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 font-body text-xs text-center sm:text-left">
            © Copyright 2026 Excellence International School | All Rights Reserved
          </p>
          <p className="text-white/30 font-body text-xs">
            Designed &amp; Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
