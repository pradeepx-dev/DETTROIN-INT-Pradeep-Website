import HeroSlider from '../components/home/HeroSlider'
import WelcomeSection from '../components/home/WelcomeSection'
import AboutSection from '../components/home/AboutSection'
import AcademicStages from '../components/home/AcademicStages'
import WhyEIS from '../components/home/WhyEIS'
import HolisticDev from '../components/home/HolisticDev'
import Infrastructure from '../components/home/Infrastructure'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

// CTA Banner between sections
const CTABanner = () => (
  <section className="py-14 bg-gold relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-primary" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-primary" />
    </div>
    <div className="container-eis relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="font-heading text-primary text-2xl md:text-3xl mb-1">
          Admissions Open for 2026–27
        </h2>
        <p className="font-body text-primary/70 text-base">
          Secure your child's bright future — limited seats available!
        </p>
      </div>
      <div className="flex flex-wrap gap-4 flex-shrink-0">
        <Link to="/admissions" className="btn-secondary">
          Apply Now <ArrowRight size={17} />
        </Link>
        <a href="tel:+917055582117" className="btn-outline flex items-center gap-2">
          <Phone size={16} /> Call Us
        </a>
      </div>
    </div>
  </section>
)

const HomePage = () => {
  return (
    <div className="page-enter">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Welcome + Enquiry Form */}
      <WelcomeSection />

      {/* Vision & Mission */}
      <AboutSection />

      {/* Academic Stages */}
      <AcademicStages />

      {/* CTA Banner */}
      <CTABanner />

      {/* Why EIS */}
      <WhyEIS />

      {/* Holistic Development */}
      <HolisticDev />

      {/* Modern Infrastructure */}
      <Infrastructure />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
    </div>
  )
}

export default HomePage
