import { CheckCircle } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'

const devAreas = [
  { icon: '⚽', title: 'Sports & Physical Education', desc: 'Regular sports activities, physical fitness programs, and inter-school competitions to build strength and teamwork.' },
  { icon: '🎭', title: 'Cultural Programs', desc: 'Annual cultural events, competitions, and festivals that celebrate talent, creativity, and national pride.' },
  { icon: '🎵', title: 'Music, Dance & Creative Arts', desc: 'Dedicated classes for music, dance, and visual arts that nurture creativity and self-expression in every child.' },
  { icon: '🎤', title: 'Public Speaking & Communication', desc: 'Debates, elocution contests, and group discussions that build confidence and strong communication skills.' },
  { icon: '🏆', title: 'Leadership Development', desc: 'Student council, group projects, and leadership workshops that build responsibility and decision-making abilities.' },
  { icon: '🧠', title: 'Critical Thinking & Problem Solving', desc: 'Project-based learning, puzzles, and STEM activities that develop logical reasoning and analytical skills.' },
]

const HolisticDev = () => {
  return (
    <section className="section-pad bg-cream">
      <div className="container-eis">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-[4/3]">
              <img
                src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/holistic-development.jpg"
                alt="Holistic Development at Excellence International School"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80'
                }}
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 md:-right-8 bg-gold text-primary rounded-2xl p-5 shadow-card-hover">
              <div className="font-heading text-3xl">6+</div>
              <div className="font-alt text-xs font-semibold">Dev Programs</div>
            </div>
            {/* Decorative ring */}
            <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full border-4 border-gold/30 -z-10" />
          </div>

          {/* Right — Content */}
          <div>
            <SectionHeading
              badge="Beyond Academics"
              title="Holistic Development"
              subtitle="We believe education is more than marks. Our programs nurture every dimension of a child's growth — physical, creative, social, and intellectual."
              align="left"
            />

            <div className="space-y-4">
              {devAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100
                             hover:border-gold/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center
                                  text-xl flex-shrink-0 group-hover:bg-gold transition-all duration-300">
                    {area.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-primary text-base mb-1">{area.title}</h4>
                    <p className="font-body text-textMuted text-xs leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HolisticDev
