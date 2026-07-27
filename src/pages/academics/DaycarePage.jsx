import PageBanner from '../../components/shared/PageBanner'
import SectionHeading from '../../components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Heart, Shield, Clock, Utensils } from 'lucide-react'

const daycareFeatures = [
  { icon: <Shield className="text-primary" size={24} />, title: 'Safe & Hygienic Facilities', desc: 'Clean, sanitized, and child-proofed spaces with 24/7 CCTV surveillance.' },
  { icon: <Heart className="text-pink-500" size={24} />, title: 'Loving & Trained Staff', desc: 'Attentive caregivers who provide home-like care, affection, and personal attention.' },
  { icon: <Utensils className="text-gold" size={24} />, title: 'Healthy Meal Routine', desc: 'Clean dining area and assistance to ensure children enjoy nutritious meals on time.' },
  { icon: <Clock className="text-blue-500" size={24} />, title: 'Flexible Working Hours', desc: 'Designed for working parents needing dependable, safe child supervision.' },
]

const DaycarePage = () => {
  return (
    <div className="page-enter">
      <PageBanner
        title="Daycare Program"
        subtitle="A safe, loving, and home-away-from-home environment for your little ones."
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/holistic-development.jpg"
        breadcrumbs={[
          { label: 'Academics', path: '/academics/daycare' },
          { label: 'Daycare' },
        ]}
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Safe & Caring"
                title="Your Child's Second Home in Aligarh"
                align="left"
              />
              <div className="space-y-4 font-body text-textMuted text-base leading-relaxed">
                <p>
                  Excellence International School offers a premium Daycare facility designed to provide peace of mind for working parents while offering children a secure, engaging, and nurturing environment.
                </p>
                <p>
                  Our daycare program combines structured playtime, nap schedules, creative activities, and social interaction so children feel relaxed, happy, and cared for throughout the day.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-primary">
                  Inquire for Daycare <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/pre-primary1.jpg"
                  alt="EIS Daycare Caregivers & Children"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <SectionHeading
            badge="Why Choose EIS Daycare"
            title="What Makes Our Daycare Special"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {daycareFeatures.map((item, idx) => (
              <div key={idx} className="card p-6 border border-gray-100 text-center flex flex-col items-center hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h4 className="font-heading text-primary text-lg mb-2">{item.title}</h4>
                <p className="font-body text-textMuted text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-green-gradient text-white text-center">
        <div className="container-eis">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">Book a Tour of Our Daycare</h2>
          <p className="font-body text-white/80 max-w-xl mx-auto text-sm md:text-base mb-6">
            Visit our campus and see how we create a safe, joyful space for your child.
          </p>
          <Link to="/contact" className="btn-primary inline-flex">
            Schedule a Visit <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default DaycarePage
