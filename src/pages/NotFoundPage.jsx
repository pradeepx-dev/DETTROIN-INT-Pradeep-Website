import { Link } from 'react-router-dom'
import { Home, ArrowLeft, HelpCircle } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream px-4 py-20">
      <div className="text-center max-w-md">
        {/* Badge */}
        <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <HelpCircle size={40} className="text-primary" />
        </div>

        <h1 className="font-heading text-primary text-6xl mb-2">404</h1>
        <h2 className="font-heading text-primary text-2xl mb-3">Page Not Found</h2>
        <p className="font-body text-textMuted text-sm leading-relaxed mb-8">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={18} /> Back to Home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
