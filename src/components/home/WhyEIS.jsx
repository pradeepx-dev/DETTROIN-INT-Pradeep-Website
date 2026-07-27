import SectionHeading from '../shared/SectionHeading'

const reasons = [
  {
    icon: '🌍',
    title: 'Global Education Approach',
    desc: 'We provide students with a global perspective, exposing them to diverse cultures, ideas, and international learning methodologies.',
  },
  {
    icon: '👩‍🏫',
    title: 'Experienced Faculty',
    desc: 'Our teachers are highly qualified, experienced, and deeply committed to each student\'s individual growth and academic success.',
  },
  {
    icon: '🛡️',
    title: 'Safe & Disciplined Campus',
    desc: 'CCTV surveillance, disciplined environment, monitored entry/exit, and supervised activities ensure complete safety for all students.',
  },
  {
    icon: '🏅',
    title: 'Holistic Development',
    desc: 'We focus on academic as well as physical, social, emotional, and creative development to build well-rounded individuals.',
  },
  {
    icon: '🏫',
    title: 'Modern Infrastructure',
    desc: 'Smart classrooms, science labs, computer labs, a well-stocked library, and activity rooms create an ideal learning space.',
  },
  {
    icon: '💡',
    title: 'Value-Based Education',
    desc: 'We instill strong values of honesty, respect, responsibility, and integrity that guide students throughout their lives.',
  },
]

const WhyEIS = () => {
  return (
    <section className="section-pad bg-green-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/3" />

      <div className="container-eis relative z-10">
        <SectionHeading
          badge="Why Choose Us"
          title="Why EIS is the Best School in Aligarh"
          subtitle="We go beyond textbooks to create an environment where children discover their potential and develop skills for life."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6
                         hover:bg-white/20 hover:border-gold/50 hover:-translate-y-1
                         transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/15 flex items-center justify-center mb-4
                              group-hover:bg-gold group-hover:scale-110 transition-all duration-300 text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-white text-lg mb-2">{item.title}</h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-gold rounded-full mb-3" />

              {/* Description */}
              <p className="font-body text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyEIS
