import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageBanner from '../components/shared/PageBanner'
import SectionHeading from '../components/shared/SectionHeading'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'

// ─── Contact Info Cards ───
const contactCards = [
  {
    icon: <MapPin size={24} />,
    title: 'Our Address',
    color: 'bg-blue-500',
    lightBg: 'bg-blue-50 border-blue-100',
    lines: [
      'Excellence International School',
      'Ramghat Road, Aligarh – 202001',
      'Uttar Pradesh, India',
    ],
    action: {
      label: 'View on Google Maps',
      href: 'https://maps.google.com/?q=Excellence+International+School+Aligarh',
    },
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone Number',
    color: 'bg-primary',
    lightBg: 'bg-green-50 border-green-100',
    lines: ['+91 7055582117'],
    action: { label: 'Call Now', href: 'tel:+917055582117' },
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Address',
    color: 'bg-gold',
    lightBg: 'bg-amber-50 border-amber-100',
    lines: ['rahulexcellence85@gmail.com', 'info@excellenceinternationalschool.com'],
    action: { label: 'Send Email', href: 'mailto:info@excellenceinternationalschool.com' },
  },
  {
    icon: <Clock size={24} />,
    title: 'School Hours',
    color: 'bg-purple-500',
    lightBg: 'bg-purple-50 border-purple-100',
    lines: ['Monday – Saturday', '8:00 AM – 3:00 PM', 'Office: 9:00 AM – 5:00 PM'],
    action: null,
  },
]

// ─── Social Links ───
const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1GvbBbZqN5/',
    color: 'hover:bg-blue-600',
    bg: 'bg-blue-500',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu',
    color: 'hover:bg-pink-600',
    bg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@excellenceschoolinternational?si=cAvfCyy3WWmRWkg6',
    color: 'hover:bg-red-700',
    bg: 'bg-red-600',
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
]

// ─── Contact Form ───
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Contact Form:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div className="card p-8 border border-gray-100 relative overflow-hidden h-full">
      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
          <MessageSquare size={20} className="text-primary" />
        </div>
        <h3 className="font-heading text-primary text-2xl">Send a Message</h3>
      </div>
      <p className="font-body text-textMuted text-sm mb-6">
        Have a question or want to schedule a visit? Fill out the form and we'll get back to you soon.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <p className="font-heading text-primary text-xl">Message Sent!</p>
          <p className="font-body text-textMuted text-sm max-w-xs">
            Thank you for reaching out. We will contact you within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="contact-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full name"
                className={`input-field ${errors.name ? 'border-red-400' : ''}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
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
                  required: 'Phone number is required',
                  pattern: { value: /^[0-9+\s-]{8,15}$/, message: 'Enter a valid phone number' },
                })}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block font-body text-sm font-medium text-textDark mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className={`input-field ${errors.email ? 'border-red-400' : ''}`}
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address' },
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="block font-body text-sm font-medium text-textDark mb-1.5">Subject</label>
            <select className="input-field" {...register('subject')}>
              <option value="">Select a topic</option>
              <option value="admission">Admission Enquiry</option>
              <option value="fees">Fee Structure</option>
              <option value="visit">Schedule a Visit</option>
              <option value="general">General Query</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block font-body text-sm font-medium text-textDark mb-1.5">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className={`textarea-field ${errors.message ? 'border-red-400' : ''}`}
              {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'Message must be at least 10 characters' } })}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button type="submit" className="btn-primary w-full justify-center text-base">
            Send Message <Send size={17} />
          </button>
        </form>
      )}
    </div>
  )
}

// ─── Main Page ───
const ContactPage = () => {
  return (
    <div className="page-enter">
      {/* Page Banner */}
      <PageBanner
        title="Contact Us"
        subtitle="We'd love to hear from you — reach out for admissions, queries, or a school visit"
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/Contact-_us.png"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* ─── Section 1: Contact Cards ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <SectionHeading
            badge="Get In Touch"
            title="Contact Information"
            subtitle="Visit us, call us, or drop us an email — we're always happy to help."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className={`card p-6 border ${card.lightBg} hover:shadow-card-hover
                            hover:-translate-y-1 transition-all duration-300 group flex flex-col`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center
                                 text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-heading text-primary text-lg mb-3">{card.title}</h3>

                {/* Lines */}
                <div className="space-y-1 flex-1">
                  {card.lines.map((line, i) => (
                    <p key={i} className="font-body text-textMuted text-sm leading-relaxed">{line}</p>
                  ))}
                </div>

                {/* Action link */}
                {card.action && (
                  <a
                    href={card.action.href}
                    target={card.action.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-primary font-body font-semibold
                               text-sm hover:text-gold transition-colors duration-200 group/link"
                  >
                    {card.action.label}
                    <svg
                      width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"
                      viewBox="0 0 24 24"
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form + Info Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — Info Panel */}
            <div className="lg:col-span-2 space-y-6">
              {/* Reach Us */}
              <div className="bg-primary rounded-2xl p-7 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-heading text-white text-xl mb-5 relative z-10">Reach Us</h3>

                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-alt text-white/60 text-xs uppercase tracking-widest mb-0.5">Address</p>
                      <p className="font-body text-white/90 text-sm">
                        Excellence International School,<br />
                        Ramghat Road, Aligarh 202001,<br />
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-alt text-white/60 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                      <a href="tel:+917055582117" className="font-body text-white/90 text-sm hover:text-gold transition-colors">
                        +91 7055582117
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-alt text-white/60 text-xs uppercase tracking-widest mb-0.5">Email</p>
                      <a href="mailto:rahulexcellence85@gmail.com"
                         className="font-body text-white/90 text-xs hover:text-gold transition-colors block break-all">
                        rahulexcellence85@gmail.com
                      </a>
                      <a href="mailto:info@excellenceinternationalschool.com"
                         className="font-body text-white/90 text-xs hover:text-gold transition-colors block break-all">
                        info@excellenceinternationalschool.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Clock size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-alt text-white/60 text-xs uppercase tracking-widest mb-0.5">School Hours</p>
                      <p className="font-body text-white/90 text-sm">Mon – Sat: 8:00 AM – 3:00 PM</p>
                      <p className="font-body text-white/70 text-xs">Office: 9:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="card p-6 border border-gray-100">
                <h4 className="font-heading text-primary text-lg mb-4">Follow Us</h4>
                <p className="font-body text-textMuted text-sm mb-4">
                  Stay connected with us on social media for updates, events, and school activities.
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className={`w-11 h-11 rounded-xl ${social.bg} text-white flex items-center justify-center
                                  ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-card`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Google Map ─── */}
      <section className="bg-cream py-0">
        <div className="container-eis py-10 md:py-14">
          <SectionHeading
            badge="Find Us"
            title="Our Location on Map"
            subtitle="We are located on Ramghat Road, Aligarh. Visit us Monday to Saturday during school hours."
          />
        </div>

        <div className="relative w-full h-80 md:h-[450px] overflow-hidden shadow-card-hover">
          {/* Map overlay top fade */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none" />

          <iframe
            title="Excellence International School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.123456789!2d78.0879512!3d27.8853824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397473b1b8b74a3d%3A0x1bb6ff3d1db33a24!2sExcellence%20International%20School!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        <div className="container-eis py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-textMuted text-sm text-center sm:text-left">
            📍 Excellence International School, Ramghat Road, Aligarh 202001, Uttar Pradesh
          </p>
          <a
            href="https://maps.google.com/?q=Excellence+International+School+Aligarh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
