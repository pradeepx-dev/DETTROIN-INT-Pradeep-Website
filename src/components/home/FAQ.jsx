import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'

const faqs = [
  {
    id: 1,
    question: 'Why is Excellence International School considered one of the best schools in Aligarh?',
    answer:
      'Excellence International School stands out for its commitment to holistic education, experienced and dedicated faculty, modern infrastructure, safe campus environment, and a curriculum that balances academics with extracurricular activities. Our student-centered approach ensures every child receives the attention and support they need to thrive.',
  },
  {
    id: 2,
    question: 'What academic programs does Excellence International School offer?',
    answer:
      'We offer comprehensive programs from Pre-Primary (Playgroup, Nursery, KG) through Middle School (up to Class 8), along with a dedicated Daycare program. Each stage is designed with age-appropriate curriculum, experienced teachers, and modern learning tools to ensure strong foundations.',
  },
  {
    id: 3,
    question: 'What teaching methods are used at Excellence International School?',
    answer:
      'We use a blend of play-based learning (for early years), concept-based teaching, activity-based learning, hands-on experiments, group projects, and digital resources. Our smart classrooms and lab facilities make learning interactive and engaging for students at all levels.',
  },
  {
    id: 4,
    question: 'Are extracurricular activities included in the school program?',
    answer:
      'Yes, absolutely! We offer a wide range of co-curricular activities including music, dance, art & craft, sports and physical education, public speaking, cultural programs, leadership workshops, and science competitions. These activities are integral to our holistic development approach.',
  },
  {
    id: 5,
    question: 'How does the school ensure the safety of students?',
    answer:
      'Student safety is our top priority. We have 24/7 CCTV surveillance throughout the campus, monitored entry and exit points, supervised activities at all times, strict discipline policies, and trained staff. Parents can be confident that their children are in a completely safe and secure environment.',
  },
]

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div className={`border rounded-xl overflow-hidden transition-all duration-300
                   ${isOpen ? 'border-gold shadow-card' : 'border-gray-100 hover:border-gold/30'}`}>
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between px-5 py-4 text-left bg-white"
      aria-expanded={isOpen}
      id={`faq-btn-${faq.id}`}
    >
      <span className={`font-body font-semibold text-sm md:text-base pr-4 transition-colors duration-200
                        ${isOpen ? 'text-primary' : 'text-textDark'}`}>
        {faq.question}
      </span>
      <ChevronDown
        size={20}
        className={`flex-shrink-0 transition-all duration-300
                    ${isOpen ? 'rotate-180 text-gold' : 'text-textMuted'}`}
      />
    </button>

    {/* Answer */}
    <div
      className={`overflow-hidden transition-all duration-400 ease-in-out
                  ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
    >
      <div className="px-5 pb-5 pt-1 bg-cream border-t border-gray-100">
        <p className="font-body text-textMuted text-sm leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  </div>
)

const FAQ = () => {
  const [openId, setOpenId] = useState(1)

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="section-pad bg-white">
      <div className="container-eis">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left — Heading */}
          <div className="lg:col-span-2">
            <SectionHeading
              badge="Common Questions"
              title="Frequently Asked Questions"
              subtitle="Have questions about Excellence International School? Find answers to the most common queries below."
              align="left"
            />

            {/* Contact prompt */}
            <div className="mt-6 p-5 bg-cream rounded-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <HelpCircle size={22} className="text-gold" />
                <p className="font-heading text-primary text-base">Still have questions?</p>
              </div>
              <p className="font-body text-textMuted text-sm mb-4">
                Can't find what you're looking for? Reach out to us directly — we're happy to help!
              </p>
              <a
                href="tel:+917055582117"
                className="btn-primary text-sm px-5 py-2.5 inline-flex"
              >
                Call Us: +91 7055582117
              </a>
            </div>
          </div>

          {/* Right — FAQ List */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => toggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
