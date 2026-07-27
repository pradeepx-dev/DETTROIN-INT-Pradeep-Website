import { Target, Rocket, CheckCircle } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'

const visionPoints = [
  'Independent thinking and responsible actions',
  'Respect for values and moral principles',
  'Positive social contribution',
  'Excellence in academics and life',
  'Leadership abilities and strong character',
]

const missionPoints = [
  'Maintain high academic standards consistently',
  'Provide value-based and holistic education',
  'Create a modern and innovative learning environment',
  'Develop essential skills for the future',
  'Ensure a safe and disciplined campus for all',
]

const AboutSection = () => {
  return (
    <section className="section-pad bg-cream">
      <div className="container-eis">
        <SectionHeading
          badge="Who We Are"
          title="Our Vision & Mission"
          subtitle="We are committed to shaping well-rounded individuals who excel academically, lead responsibly, and contribute positively to society."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <div className="card overflow-hidden group">
            {/* Card Top Bar */}
            <div className="bg-gradient-to-r from-primary to-primary-light px-6 py-5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center">
                <Target size={22} className="text-gold" />
              </div>
              <h3 className="font-heading text-white text-xl">Our Vision</h3>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <p className="font-body text-textMuted text-sm leading-relaxed mb-5">
                To be one of the most respected educational institutions in Aligarh, delivering quality
                education that shapes academic excellence, leadership abilities, and strong moral values
                in every student.
              </p>
              <ul className="space-y-3">
                {visionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={17}
                      className="text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    />
                    <span className="font-body text-textDark text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission Card */}
          <div className="card overflow-hidden group">
            {/* Card Top Bar */}
            <div className="bg-gradient-to-r from-gold to-gold-light px-6 py-5 flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center">
                <Rocket size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-primary text-xl">Our Mission</h3>
            </div>

            {/* Card Body */}
            <div className="p-6">
              <p className="font-body text-textMuted text-sm leading-relaxed mb-5">
                To provide high-quality, value-based education in a modern learning environment that
                nurtures academic excellence, skill development, and the holistic growth of every child
                under our care.
              </p>
              <ul className="space-y-3">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle
                      size={17}
                      className="text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    />
                    <span className="font-body text-textDark text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Image banner below */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-card-hover relative h-56 md:h-72">
          <img
            src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Vision-Mission.png"
            alt="Excellence International School Vision and Mission"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80'
            }}
          />
          <div className="absolute inset-0 bg-hero-overlay flex items-center justify-center">
            <div className="text-center px-4">
              <p className="font-heading text-white text-2xl md:text-4xl mb-2 drop-shadow">
                "Shaping Leaders of Tomorrow"
              </p>
              <p className="text-white/75 font-body text-sm md:text-base">
                Excellence International School — Aligarh
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
