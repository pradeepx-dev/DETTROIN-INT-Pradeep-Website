import PageBanner from '../components/shared/PageBanner'
import SectionHeading from '../components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import {
  Target, Rocket, CheckCircle, Shield, BookOpen,
  Users, Award, Heart, ArrowRight, Star
} from 'lucide-react'

const visionPoints = [
  'Independent thinking and responsible actions',
  'Respect for values and strong moral principles',
  'Positive social contribution and leadership',
  'Excellence in academics and in life',
  'Building the next generation of leaders',
]

const missionPoints = [
  'Maintain high academic standards consistently',
  'Provide value-based and holistic education',
  'Create a modern and innovative learning environment',
  'Develop essential life skills for the future',
  'Ensure a safe and disciplined campus for all',
]

const coreValues = [
  { icon: '🤝', label: 'Honesty', desc: 'We build trust through truthful conduct in all our actions.' },
  { icon: '🙏', label: 'Respect', desc: 'We treat every individual with dignity and consideration.' },
  { icon: '💪', label: 'Responsibility', desc: 'We take ownership of our actions and their consequences.' },
  { icon: '📏', label: 'Discipline', desc: 'We follow structured routines that build character and focus.' },
  { icon: '⭐', label: 'Integrity', desc: 'We uphold our principles even when no one is watching.' },
  { icon: '🌱', label: 'Growth Mindset', desc: 'We embrace learning, challenges, and continuous improvement.' },
]

const commitments = [
  { icon: <BookOpen size={22} />, title: 'Quality Education', desc: 'Delivering a rigorous, up-to-date curriculum that prepares students for future challenges.' },
  { icon: <Award size={22} />, title: 'Academic Standards', desc: 'Maintaining high benchmarks through regular assessments, feedback, and support.' },
  { icon: <Shield size={22} />, title: 'Student Safety', desc: 'Providing a fully secure campus with CCTV, monitored access, and trained staff.' },
  { icon: <Heart size={22} />, title: 'Student Growth', desc: 'Nurturing each child\'s unique potential through personalized attention and care.' },
  { icon: <Users size={22} />, title: 'Modern Facilities', desc: 'Equipping classrooms and labs with the best tools for 21st-century learning.' },
  { icon: <Star size={22} />, title: 'Holistic Development', desc: 'Balancing academics with sports, arts, leadership, and value-based education.' },
]

const teamStats = [
  { number: '10+', label: 'Years of Excellence' },
  { number: '500+', label: 'Students Enrolled' },
  { number: '50+', label: 'Expert Teachers' },
  { number: '8', label: 'Classes Offered' },
]

const AboutPage = () => {
  return (
    <div className="page-enter">
      {/* Page Banner */}
      <PageBanner
        title="About Us"
        subtitle="Learn about our journey, values, and commitment to excellence in education"
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/About-US2.png"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ─── Section 1: School Introduction ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
                <img
                  src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/About-US2.png"
                  alt="Excellence International School Aligarh"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80'
                  }}
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-5 -right-4 md:-right-8 bg-primary text-white rounded-2xl p-5 shadow-card-hover">
                <div className="font-heading text-gold text-3xl">10+</div>
                <div className="font-alt text-white/80 text-xs font-semibold mt-1">Years of<br />Excellence</div>
              </div>
              {/* Decorative circle */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-4 border-gold/30 -z-10" />
            </div>

            {/* Text content */}
            <div>
              <SectionHeading
                badge="About Our School"
                title="Excellence International School – A Leading School in Aligarh"
                align="left"
              />
              <div className="space-y-4 text-textMuted font-body text-base leading-relaxed">
                <p>
                  Excellence International School is a trustworthy and reputed educational institution
                  located in Aligarh, Uttar Pradesh. We are dedicated to providing quality education
                  that focuses on academic excellence, discipline, and the holistic development of
                  every student.
                </p>
                <p>
                  Our school combines modern teaching methods with strong value-based education to
                  ensure that students not only excel academically but also develop strong character,
                  leadership abilities, and essential life skills that will serve them well throughout
                  their lives.
                </p>
                <p>
                  We believe that every child is unique and has immense potential waiting to be
                  discovered. Our dedicated teachers and staff work tirelessly to create a safe,
                  nurturing, and stimulating environment where every child can grow, learn, and thrive.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                {teamStats.map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-cream border border-gray-100 hover:border-gold/40 transition-colors">
                    <div className="font-heading text-2xl text-primary">{stat.number}</div>
                    <div className="font-alt text-xs text-textMuted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Vision & Mission ─── */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <SectionHeading
            badge="Our Direction"
            title="Vision & Mission"
            subtitle="Our vision and mission guide every decision we make — from curriculum design to school culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="card overflow-hidden group">
              <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center">
                  <Target size={22} className="text-gold" />
                </div>
                <h3 className="font-heading text-white text-xl">Our Vision</h3>
              </div>
              <div className="p-6">
                <p className="font-body text-textMuted text-sm leading-relaxed mb-5">
                  To be one of the most respected educational institutions in Aligarh, delivering
                  quality education that shapes academic excellence, leadership abilities, and strong
                  moral values in every student we nurture.
                </p>
                <ul className="space-y-3">
                  {visionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={17} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="font-body text-textDark text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="card overflow-hidden group">
              <div className="bg-gradient-to-r from-gold to-gold-light px-6 py-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
                  <Rocket size={22} className="text-primary" />
                </div>
                <h3 className="font-heading text-primary text-xl">Our Mission</h3>
              </div>
              <div className="p-6">
                <p className="font-body text-textMuted text-sm leading-relaxed mb-5">
                  To provide high-quality, value-based education in a modern learning environment
                  that nurtures academic excellence, skill development, and the holistic growth of
                  every child entrusted to our care.
                </p>
                <ul className="space-y-3">
                  {missionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={17} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-textDark text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Core Values ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <SectionHeading
            badge="What We Stand For"
            title="Our Core Values & Ethics"
            subtitle="These values are not just words on a wall — they are the principles that guide every interaction, every lesson, and every decision at our school."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="group text-center p-5 rounded-2xl border border-gray-100 bg-cream
                           hover:bg-primary hover:border-primary hover:shadow-card-hover
                           hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
                <h4 className="font-heading text-primary text-sm mb-1 group-hover:text-gold transition-colors duration-300">
                  {val.label}
                </h4>
                <p className="font-body text-textMuted text-xs leading-relaxed group-hover:text-white/70 transition-colors duration-300 hidden lg:block">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Academic Excellence & Holistic Dev ─── */}
      <section className="section-pad bg-green-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="container-eis relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Academic Excellence */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <BookOpen size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-white text-xl">Academic Excellence</h3>
              </div>
              <p className="font-body text-white/75 text-sm leading-relaxed mb-4">
                We maintain rigorous academic standards through well-planned syllabuses, regular
                assessments, concept-based teaching, and continuous performance monitoring to
                ensure every student builds a strong educational foundation.
              </p>
              <ul className="space-y-2.5">
                {['Well-planned syllabus & curriculum', 'Regular assessments & feedback', 'Concept-based teaching approach', 'Practical & activity-based learning', 'Continuous performance monitoring'].map((p, i) => (
                  <li key={i} className="flex items-center gap-2.5 font-body text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Holistic Development */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Heart size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-white text-xl">Holistic Development</h3>
              </div>
              <p className="font-body text-white/75 text-sm leading-relaxed mb-4">
                Beyond academics, we develop the whole child through a rich variety of co-curricular
                activities that build physical fitness, creativity, confidence, and leadership skills.
              </p>
              <ul className="space-y-2.5">
                {['Sports & physical education', 'Cultural programs & competitions', 'Music, dance & creative arts', 'Leadership & personality development', 'Public speaking & communication skills'].map((p, i) => (
                  <li key={i} className="flex items-center gap-2.5 font-body text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Our Commitment ─── */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <SectionHeading
            badge="Our Promise"
            title="Our Commitment to Students & Parents"
            subtitle="We are committed to providing the best possible education, facilities, and environment for every child who walks through our doors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item, idx) => (
              <div
                key={idx}
                className="card p-6 border border-gray-100 hover:border-gold/30 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center
                                text-primary mb-4 group-hover:bg-gold group-hover:text-white
                                transition-all duration-300">
                  {item.icon}
                </div>
                <h4 className="font-heading text-primary text-lg mb-2">{item.title}</h4>
                <p className="font-body text-textMuted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 6: Join Us CTA ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="bg-primary rounded-3xl overflow-hidden relative">
            {/* Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-gold/10 translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-gold font-alt text-sm font-semibold uppercase tracking-widest mb-2">
                  Admissions Open
                </p>
                <h2 className="font-heading text-white text-2xl md:text-4xl mb-3">
                  Join Our School Family Today
                </h2>
                <p className="font-body text-white/70 text-base max-w-xl">
                  Give your child the best start in life. Admissions are open for multiple classes
                  at Excellence International School, Aligarh. Limited seats available.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link to="/admissions" className="btn-primary">
                  Apply Now <ArrowRight size={17} />
                </Link>
                <Link to="/contact" className="btn-outline-gold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
