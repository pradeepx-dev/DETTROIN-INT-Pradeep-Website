import { Phone, Mail } from 'lucide-react'

const TopBar = () => {
  return (
    <div className="bg-gold py-2 px-4">
      <div className="container-eis flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Contact Info */}
        <div className="flex flex-wrap items-center gap-4 text-primary font-body text-sm font-medium">
          <a
            href="tel:+917055582117"
            className="flex items-center gap-1.5 hover:text-primary-dark transition-colors duration-200"
          >
            <Phone size={14} strokeWidth={2.5} />
            <span>+91 7055582117</span>
          </a>
          <a
            href="mailto:info@excellenceinternationalschool.com"
            className="flex items-center gap-1.5 hover:text-primary-dark transition-colors duration-200"
          >
            <Mail size={14} strokeWidth={2.5} />
            <span className="hidden sm:inline">info@excellenceinternationalschool.com</span>
            <span className="sm:hidden">Email Us</span>
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-2">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1GvbBbZqN5/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center
                       hover:bg-primary-dark transition-all duration-200 hover:scale-110"
            aria-label="Facebook"
          >
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center
                       hover:bg-primary-dark transition-all duration-200 hover:scale-110"
            aria-label="Instagram"
          >
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17.5" cy="6.5" r="1.5"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@excellenceschoolinternational?si=cAvfCyy3WWmRWkg6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center
                       hover:bg-primary-dark transition-all duration-200 hover:scale-110"
            aria-label="YouTube"
          >
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
              <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopBar
