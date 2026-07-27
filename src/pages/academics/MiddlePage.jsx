import PageBanner from '../../components/shared/PageBanner'
import SectionHeading from '../../components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, FlaskConical, Globe, Brain } from 'lucide-react'

const highlights = [
  { icon: <FlaskConical className="text-gold" size={24} />, title: 'Practical Science Labs', desc: 'Hands-on experiments in Physics, Chemistry, and Biology to foster scientific temper.' },
  { icon: <Cpu className="text-blue-500" size={24} />, title: 'Advanced Computer Lab', desc: 'Coding basics, IT skills, and safe digital practices for future tech readiness.' },
  { icon: <Brain className="text-purple-500" size={24} />, title: 'Analytical & Critical Thinking', desc: 'Encouraging inquiry, problem solving, debates, and independent research.' },
  { icon: <Globe className="text-primary" size={24} />, title: 'Global Perspectives', desc: 'Developing awareness of contemporary world issues, social sciences, and ethics.' },
]

const MiddlePage = () => {
  return (
    <div className="page-enter">
      <PageBanner
        title="Middle School (Class 6 - 8)"
        subtitle="Preparing students for academic rigor, leadership, and lifelong learning."
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/middle1.jpg"
        breadcrumbs={[
          { label: 'Academics', path: '/academics/middle' },
          { label: 'Middle School' },
        ]}
      />

      {/* Intro */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="Class 6 to Class 8"
                title="Academic Rigor & Leadership Development"
                align="left"
              />
              <div className="space-y-4 font-body text-textMuted text-base leading-relaxed">
                <p>
                  Middle school is a crucial transition phase where students shift from foundational learning to subject specialization and analytical understanding.
                </p>
                <p>
                  At Excellence International School, our Middle School curriculum challenges students intellectually while fostering moral maturity, self-discipline, and leadership skills to prepare them for secondary education.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-primary">
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/middle1.jpg"
                  alt="Middle School Students"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <SectionHeading
            badge="Middle School Highlights"
            title="Comprehensive Learning Framework"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="card p-6 border border-gray-100 text-center flex flex-col items-center hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm">
                  {h.icon}
                </div>
                <h4 className="font-heading text-primary text-lg mb-2">{h.title}</h4>
                <p className="font-body text-textMuted text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-white text-center">
        <div className="container-eis">
          <h2 className="font-heading text-2xl md:text-3xl text-gold mb-3">Shape Your Child's Future with EIS</h2>
          <p className="font-body text-white/80 max-w-xl mx-auto text-sm md:text-base mb-6">
            Explore our Middle School program and secure admission for the upcoming academic session.
          </p>
          <Link to="/admissions" className="btn-primary inline-flex">
            Apply Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MiddlePage
