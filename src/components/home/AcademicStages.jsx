import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'

const stages = [
  {
    id: 1,
    emoji: '🎨',
    title: 'Pre-Primary',
    subtitle: 'Playgroup · Nursery · KG',
    description:
      'A nurturing play-based learning environment that builds early literacy, numeracy, creativity, and social skills for children aged 2–6 years.',
    highlights: ['Play-based learning', 'Storytelling & rhymes', 'Creative arts & craft', 'Social interaction'],
    path: '/academics/pre-primary',
    color: 'from-amber-400 to-orange-400',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-200 hover:border-amber-400',
  },
  {
    id: 2,
    emoji: '📚',
    title: 'Primary',
    subtitle: 'Class 1 to Class 5',
    description:
      'A structured curriculum that builds strong academic foundations in language, mathematics, science, and social studies through interactive methods.',
    highlights: ['Concept-based teaching', 'Activity learning', 'Regular assessments', 'STEM basics'],
    path: '/academics/primary',
    color: 'from-blue-500 to-cyan-500',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200 hover:border-blue-400',
  },
  {
    id: 3,
    emoji: '🔬',
    title: 'Middle School',
    subtitle: 'Class 6 to Class 8',
    description:
      'An advanced program that deepens subject knowledge, develops critical thinking, and prepares students for higher education with confidence.',
    highlights: ['Advanced subjects', 'Lab practicals', 'Leadership programs', 'Critical thinking'],
    path: '/academics/middle',
    color: 'from-green-500 to-emerald-500',
    lightColor: 'bg-green-50',
    borderColor: 'border-green-200 hover:border-green-400',
  },
  {
    id: 4,
    emoji: '🌟',
    title: 'Daycare',
    subtitle: 'Safe · Supervised · Caring',
    description:
      'A safe, supervised, and loving daycare environment with structured activities, nutritious meals, rest time, and emotional support for young children.',
    highlights: ['Supervised activities', 'Nutritious meals', 'Rest & play', 'Emotional support'],
    path: '/academics/daycare',
    color: 'from-purple-500 to-pink-500',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200 hover:border-purple-400',
  },
]

const AcademicStages = () => {
  return (
    <section className="section-pad bg-white">
      <div className="container-eis">
        <SectionHeading
          badge="Academic Programs"
          title="Our Academic Stages"
          subtitle="From early childhood through middle school, we offer comprehensive programs tailored to each stage of your child's development."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => (
            <div
              key={stage.id}
              className={`card border-2 ${stage.borderColor} ${stage.lightColor} overflow-hidden
                          flex flex-col group transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${stage.color}`} />

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Emoji */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stage.emoji}
                </div>

                {/* Title */}
                <h3 className="font-heading text-primary text-xl mb-1">{stage.title}</h3>
                <p className="font-alt text-textMuted text-xs font-semibold mb-3 uppercase tracking-wide">
                  {stage.subtitle}
                </p>

                {/* Description */}
                <p className="font-body text-textMuted text-sm leading-relaxed mb-4 flex-1">
                  {stage.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-6">
                  {stage.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs font-body text-textDark">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={stage.path}
                  className="flex items-center gap-1.5 text-primary font-body font-semibold text-sm
                             hover:text-gold transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight
                    size={15}
                    className="group-hover/link:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicStages
