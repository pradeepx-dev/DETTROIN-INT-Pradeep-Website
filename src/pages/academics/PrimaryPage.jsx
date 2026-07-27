import PageBanner from '../../components/shared/PageBanner'
import SectionHeading from '../../components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, BookOpen, Award, Cpu, Users } from 'lucide-react'

const subjects = [
  'English Language & Literature',
  'Mathematics & Logical Reasoning',
  'Environmental Studies & Science',
  'Hindi & Regional Language Skills',
  'Computer & Digital Literacy',
  'General Knowledge & Moral Science',
]

const features = [
  { icon: <BookOpen className="text-gold" size={24} />, title: 'Concept-Based Curriculum', desc: 'Focusing on deep understanding, problem solving, and analytical thinking rather than rote learning.' },
  { icon: <Cpu className="text-blue-500" size={24} />, title: 'Smart Classrooms', desc: 'Interactive digital displays and visual learning modules that bring lessons to life.' },
  { icon: <Award className="text-purple-500" size={24} />, title: 'Co-Curricular Integration', desc: 'Seamless integration of art, music, physical activities, and public speaking.' },
  { icon: <Users className="text-primary" size={24} />, title: 'Individual Care & Guidance', desc: 'Optimal student-teacher ratio ensuring every child receives personalized support.' },
]

const PrimaryPage = () => {
  return (
    <div className="page-enter">
      <PageBanner
        title="Best Primary School in Aligarh"
        subtitle="Empowering young learners with strong academic foundations and essential life skills."
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/primary1.jpg"
        breadcrumbs={[
          { label: 'Academics', path: '/academics/primary' },
          { label: 'Primary (Class 1-5)' },
        ]}
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Class 1 to Class 5"
                title="Building Academic Excellence & Confidence"
                align="left"
              />
              <div className="space-y-4 font-body text-textMuted text-base leading-relaxed">
                <p>
                  The Primary School stage (Classes 1 to 5) at Excellence International School is designed to foster intellectual curiosity, critical thinking, and fundamental academic skills.
                </p>
                <p>
                  We aim to make learning engaging and meaningful by bridging classroom knowledge with real-world applications. Our curriculum emphasizes language proficiency, numerical ability, scientific inquiry, and ethical values.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-primary">
                  Enroll Your Child <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Admissions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/primary2.jpg"
                  alt="Primary Students at EIS"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects & Curriculum */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Curriculum Focus"
                title="Core Subjects & Learning Areas"
                align="left"
              />
              <p className="font-body text-textMuted text-sm mb-6 leading-relaxed">
                Our primary curriculum is balanced and comprehensive, ensuring students develop strong competency across all key learning domains.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subjects.map((sub, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle className="text-gold flex-shrink-0" size={18} />
                    <span className="font-body text-textDark text-sm font-medium">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div key={i} className="card p-5 border border-gray-100 flex items-start gap-4 hover:border-gold/30 transition-all">
                  <div className="p-3 bg-cream rounded-xl flex-shrink-0">{f.icon}</div>
                  <div>
                    <h4 className="font-heading text-primary text-base mb-1">{f.title}</h4>
                    <p className="font-body text-textMuted text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-green-gradient text-white text-center">
        <div className="container-eis">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">Join Excellence International School</h2>
          <p className="font-body text-white/80 max-w-xl mx-auto text-sm md:text-base mb-6">
            Admissions open for Class 1 to Class 5 for the session 2026–27. Experience quality education in Aligarh.
          </p>
          <Link to="/admissions" className="btn-primary inline-flex">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PrimaryPage
