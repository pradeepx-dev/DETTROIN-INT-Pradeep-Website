import PageBanner from '../../components/shared/PageBanner'
import SectionHeading from '../../components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Heart, Sparkles, Smile, ShieldCheck } from 'lucide-react'

const features = [
  { icon: <Sparkles className="text-gold" size={24} />, title: 'Play-Based Learning', desc: 'Interactive games, sensory play, and fun activities that foster curiosity and early cognitive skills.' },
  { icon: <Heart className="text-pink-500" size={24} />, title: 'Nurturing & Safe Environment', desc: 'Caring teachers and child-friendly classrooms designed for safety and emotional well-being.' },
  { icon: <Smile className="text-blue-500" size={24} />, title: 'Social & Emotional Growth', desc: 'Encouraging teamwork, sharing, self-expression, and confidence through group activities.' },
  { icon: <ShieldCheck className="text-primary" size={24} />, title: 'Foundational Literacy & Numeracy', desc: 'Phonics, storytelling, numbers, and basic concepts taught through joyful, memorable experiences.' },
]

const prePrimaryClasses = [
  { title: 'Play Group', age: '2 - 3 Years', desc: 'A gentle introduction to learning through free play, music, sensory exploration, and social interaction.' },
  { title: 'Nursery', age: '3 - 4 Years', desc: 'Developing motor skills, language, vocabulary, colors, shapes, and early social habits.' },
  { title: 'Kindergarten (KG)', age: '4 - 6 Years', desc: 'Preparing children for primary school with phonics, writing, basic math, logic, and creative arts.' },
]

const PrePrimaryPage = () => {
  return (
    <div className="page-enter">
      <PageBanner
        title="Best Pre-Primary School in Aligarh"
        subtitle="Nurturing young minds through play, discovery, and joyful early childhood education."
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/pre-primary1.jpg"
        breadcrumbs={[
          { label: 'Academics', path: '/academics/pre-primary' },
          { label: 'Pre-Primary' },
        ]}
      />

      {/* Intro Section */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Early Childhood Care"
                title="Building a Happy & Strong Foundation"
                align="left"
              />
              <div className="space-y-4 font-body text-textMuted text-base leading-relaxed">
                <p>
                  At Excellence International School, our Pre-Primary wing provides a warm, safe, and stimulating environment where toddlers and young learners take their first steps into formal education with joy and excitement.
                </p>
                <p>
                  We follow a modern child-centric approach blending Montessori principles, activity-based learning, and interactive play. Our goal is to make every child feel secure, curious, and confident as they explore the world around them.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-primary">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Schedule a Visit
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/pre-primary2.jpg"
                  alt="Pre-Primary Learning at EIS"
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

      {/* Program Levels */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <SectionHeading
            badge="Programs Offered"
            title="Pre-Primary Wings"
            subtitle="Tailored early education stages designed to meet the developmental milestones of your child."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {prePrimaryClasses.map((item, idx) => (
              <div key={idx} className="card p-7 border border-gray-100 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div>
                  <span className="inline-block px-3 py-1 bg-gold/20 text-primary font-alt font-semibold text-xs rounded-full mb-3">
                    Age: {item.age}
                  </span>
                  <h3 className="font-heading text-primary text-xl mb-3">{item.title}</h3>
                  <p className="font-body text-textMuted text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link to="/admissions" className="text-primary font-body text-sm font-semibold hover:text-gold flex items-center gap-1">
                    Enquire for {item.title} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <SectionHeading
            badge="Why Parents Love Us"
            title="Key Features of Pre-Primary Wing"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="card p-6 border border-gray-100 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h4 className="font-heading text-primary text-lg mb-2">{f.title}</h4>
                <p className="font-body text-textMuted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="container-eis">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">Give Your Child the Best Start</h2>
          <p className="font-body text-white/80 max-w-xl mx-auto text-sm md:text-base mb-6">
            Enroll your little one in Excellence International School Pre-Primary wing today. Limited seats available for 2026–27.
          </p>
          <Link to="/admissions" className="btn-primary inline-flex">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PrePrimaryPage
