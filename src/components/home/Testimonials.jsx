import { useEffect, useRef } from 'react'
import { Quote } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'

const testimonials = [
  {
    id: 1,
    name: 'Sanjay Patel',
    role: 'Parent of Krish Patel, Class 6',
    initial: 'S',
    color: 'bg-blue-500',
    quote:
      'The school gives my children a global view of the world. They learn about different cultures, teamwork, and respect while developing skills that prepare them for the future academically and personally.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Anita Singh',
    role: 'Parent of Aarohi Singh, Class 2',
    initial: 'A',
    color: 'bg-pink-500',
    quote:
      'Excellence International School makes learning exciting with hands-on activities, group projects, and creative lessons. My child is developing critical thinking, confidence, and problem-solving skills while enjoying school.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Kavita Agarwal',
    role: 'Parent of Diya Agarwal, Class 1',
    initial: 'K',
    color: 'bg-purple-500',
    quote:
      'The school not only focuses on academics but also builds strong values. My child is learning responsibility, honesty, respect, and teamwork while having fun, making friends, and enjoying every moment at school.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Rakesh Sharma',
    role: 'Parent of Aarav Sharma, Class 5',
    initial: 'R',
    color: 'bg-green-500',
    quote:
      'Excellence International School has been amazing for my child. The teachers are caring, lessons are fun, and my child is growing in confidence, learning new skills, and enjoying school every day.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Neha Verma',
    role: 'Parent of Anaya Verma, Class 3',
    initial: 'N',
    color: 'bg-orange-500',
    quote:
      'I love how safe and welcoming the school is. The staff know every student well, encourage them to do their best, and create a positive environment where learning and friendship thrive.',
    rating: 5,
  },
]

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" fill="#FFB606" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
)

const Testimonials = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    const loadSwiper = async () => {
      const { Swiper } = await import('swiper')
      const { Autoplay, Pagination } = await import('swiper/modules')

      if (swiperRef.current && !swiperRef.current.swiper) {
        new Swiper(swiperRef.current, {
          modules: [Autoplay, Pagination],
          loop: true,
          autoplay: { delay: 4500, disableOnInteraction: false },
          pagination: { el: '.testimonial-pagination', clickable: true },
          slidesPerView: 1,
          spaceBetween: 24,
          breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        })
      }
    }
    loadSwiper()
  }, [])

  return (
    <section className="section-pad bg-cream overflow-hidden">
      <div className="container-eis">
        <SectionHeading
          badge="What Parents Say"
          title="Testimonials"
          subtitle="Hear from the parents who trust us with their children's education and future."
        />

        <div ref={swiperRef} className="swiper pb-14">
          <div className="swiper-wrapper">
            {testimonials.map((t) => (
              <div key={t.id} className="swiper-slide h-auto">
                <div className="card p-6 h-full flex flex-col border border-gray-100">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <Quote size={32} className="text-gold opacity-50" />
                  </div>

                  {/* Star rating */}
                  <StarRating count={t.rating} />

                  {/* Quote */}
                  <p className="font-body text-textMuted text-sm leading-relaxed flex-1 mb-6 italic">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className={`w-11 h-11 rounded-full ${t.color} flex items-center justify-center
                                    text-white font-heading text-lg flex-shrink-0`}>
                      {t.initial}
                    </div>
                    <div>
                      <p className="font-heading text-primary text-sm">{t.name}</p>
                      <p className="font-body text-textMuted text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="testimonial-pagination swiper-pagination !bottom-0" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
