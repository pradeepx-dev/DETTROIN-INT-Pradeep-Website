import SectionHeading from '../shared/SectionHeading'

const facilities = [
  { icon: '🖥️', title: 'Smart Classrooms', desc: 'Interactive digital boards and modern teaching aids for engaging lessons' },
  { icon: '🔬', title: 'Science Lab', desc: 'Fully equipped laboratory for hands-on experiments and scientific discovery' },
  { icon: '💻', title: 'Computer Lab', desc: 'Latest computers and internet access for digital literacy and coding skills' },
  { icon: '📐', title: 'Math Learning Space', desc: 'Dedicated math activity area with tools and manipulatives for concept clarity' },
  { icon: '📚', title: 'Library', desc: 'Well-stocked library with books, encyclopedias, and reading resources for all ages' },
  { icon: '🎨', title: 'Activity Rooms', desc: 'Creative spaces for arts, crafts, music, and co-curricular activities' },
  { icon: '📹', title: 'CCTV Surveillance', desc: 'Complete campus monitoring with 24/7 CCTV for student safety and security' },
  { icon: '🏫', title: 'Safe Campus', desc: 'Secure entry/exit with monitored access and supervised environments throughout' },
]

const Infrastructure = () => {
  return (
    <section className="section-pad bg-white">
      <div className="container-eis">
        <SectionHeading
          badge="Our Facilities"
          title="Modern Infrastructure"
          subtitle="Our state-of-the-art campus is designed to provide the best possible learning environment, equipped with modern facilities that inspire curiosity and excellence."
        />

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-5 md:p-6 rounded-2xl border border-gray-100 bg-cream
                         hover:bg-primary hover:border-primary hover:shadow-card-hover
                         hover:-translate-y-1 transition-all duration-300 cursor-default text-center"
            >
              {/* Icon */}
              <div className="text-3xl md:text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-primary text-sm md:text-base mb-2
                             group-hover:text-gold transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-body text-textMuted text-xs leading-relaxed
                            group-hover:text-white/80 transition-colors duration-300 hidden sm:block">
                {item.desc}
              </p>

              {/* Corner decoration */}
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gold
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* School image strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/infra1.jpg',
            'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/infra2.jpg',
            'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/infra3.jpg',
            'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/infra4.jpg',
          ].map((src, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden aspect-video shadow-card group">
              <img
                src={src}
                alt={`School Infrastructure ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  const fallbacks = [
                    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
                    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80',
                    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
                    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
                  ]
                  e.target.src = fallbacks[idx]
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Infrastructure
