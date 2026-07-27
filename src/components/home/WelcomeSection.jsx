import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Send, CheckCircle, BookOpen, Users, Award, Heart } from 'lucide-react'
import SectionHeading from '../shared/SectionHeading'

const highlights = [
  { icon: <BookOpen size={20} />, text: 'Academic Excellence & Strong Foundations' },
  { icon: <Users size={20} />, text: 'Experienced & Dedicated Faculty' },
  { icon: <Award size={20} />, text: 'Holistic Development — Sports, Arts & More' },
  { icon: <Heart size={20} />, text: 'Safe, Disciplined & Nurturing Campus' },
]

const classes = ['Playgroup', 'Nursery', 'KG', 'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8']

const WelcomeSection = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Enquiry:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-eis">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Welcome Text */}
          <div>
            <SectionHeading
              badge="Welcome to EIS"
              title="Excellence International School — A Leading School in Aligarh"
              align="left"
            />

            <p className="text-textMuted font-body text-base leading-relaxed mb-6">
              Excellence International School is a trusted educational institution in Aligarh, dedicated to
              providing quality education with a focus on academic excellence, discipline, and overall student
              development. We believe in creating an environment where every child can grow, learn, and thrive.
            </p>

            <p className="text-textMuted font-body text-base leading-relaxed mb-8">
              Our school combines modern teaching methods with value-based education to ensure that students
              not only excel academically but also develop strong character, leadership abilities, and life skills.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-cream rounded-xl p-4 border border-gray-100
                             hover:border-gold/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center
                                  text-primary flex-shrink-0 group-hover:bg-gold group-hover:text-white
                                  transition-all duration-300">
                    {item.icon}
                  </div>
                  <p className="font-body text-textDark text-sm font-medium leading-tight mt-1">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '10+', label: 'Years of Excellence' },
                { number: '500+', label: 'Students Enrolled' },
                { number: '50+', label: 'Expert Teachers' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 rounded-xl bg-primary text-white">
                  <div className="font-heading text-2xl md:text-3xl text-gold">{stat.number}</div>
                  <div className="font-alt text-xs text-white/80 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Quick Enquiry Form */}
          <div className="lg:sticky lg:top-28">
            <div className="card p-8 border border-gray-100 relative overflow-hidden">
              {/* Header stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

              <h3 className="font-heading text-primary text-2xl mb-1">Quick Enquiry</h3>
              <p className="font-body text-textMuted text-sm mb-6">
                Fill in your details and we'll get back to you shortly.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <CheckCircle size={52} className="text-green-500" />
                  <p className="font-heading text-primary text-xl">Thank You!</p>
                  <p className="font-body text-textMuted text-sm">
                    We've received your enquiry and will contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="quick-enquiry-form">
                  {/* Name */}
                  <div>
                    <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className={`input-field ${errors.name ? 'border-red-400' : ''}`}
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={`input-field ${errors.phone ? 'border-red-400' : ''}`}
                      {...register('phone', {
                        required: 'Phone is required',
                        pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Enter a valid phone number' },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Class */}
                  <div>
                    <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                      Admission For (Class)
                    </label>
                    <select className="input-field" {...register('class')}>
                      <option value="">Select Class</option>
                      {classes.map((cls) => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any additional information..."
                      className="textarea-field"
                      {...register('message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-base"
                  >
                    Send Enquiry
                    <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
