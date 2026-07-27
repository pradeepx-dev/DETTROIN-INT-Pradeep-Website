import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageBanner from '../components/shared/PageBanner'
import SectionHeading from '../components/shared/SectionHeading'
import { Link } from 'react-router-dom'
import {
  ClipboardList, FileText, GraduationCap, CreditCard,
  CheckCircle, ArrowRight, Phone, Mail, Send, Star, Info
} from 'lucide-react'

// ─── Admission Steps ───
const admissionSteps = [
  {
    step: '01',
    icon: <Phone size={24} />,
    title: 'Contact the School',
    desc: 'Visit or call the school front desk to inquire about available seats and the registration process for the desired class.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50 border-blue-200',
  },
  {
    step: '02',
    icon: <ClipboardList size={24} />,
    title: 'Collect Registration Form',
    desc: 'Collect the admission form from the school office. Fill in all required details and attach the necessary documents of the student and parents.',
    color: 'bg-gold',
    lightColor: 'bg-amber-50 border-amber-200',
  },
  {
    step: '03',
    icon: <GraduationCap size={24} />,
    title: 'Entrance Test',
    desc: 'All applications undergo a standard entrance test. This helps us prepare and counsel parents and students for a bright academic future.',
    color: 'bg-primary',
    lightColor: 'bg-green-50 border-green-200',
  },
  {
    step: '04',
    icon: <CreditCard size={24} />,
    title: 'Fee Payment & Confirmation',
    desc: 'Payment can be done directly in the bank or at the school office. All modes of payment are accepted. Admission is confirmed upon payment.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50 border-purple-200',
  },
]

// ─── Required Documents ───
const documents = [
  'Birth Certificate of the student',
  'Previous school Transfer Certificate (TC)',
  'Previous school Report Card / Mark Sheet',
  'Aadhaar Card of student',
  'Aadhaar Card of parent/guardian',
  'Passport-size photographs (student & parent)',
  'Address proof (if required)',
]

// ─── Classes Available ───
const classesAvailable = [
  'Playgroup', 'Nursery', 'KG', 'Class 1', 'Class 2',
  'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8',
]

// ─── Enquiry Form ───
const AdmissionForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Admission Enquiry:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <div className="card p-8 border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />

      <h3 className="font-heading text-primary text-2xl mb-1">Admission Enquiry</h3>
      <p className="font-body text-textMuted text-sm mb-6">
        Fill in your details and our admissions team will contact you within 24 hours.
      </p>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
          <CheckCircle size={52} className="text-green-500" />
          <p className="font-heading text-primary text-xl">Enquiry Submitted!</p>
          <p className="font-body text-textMuted text-sm">
            Thank you! Our admissions team will reach out to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="admission-enquiry-form">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Parent Name */}
            <div>
              <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                Parent Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Father / Mother name"
                className={`input-field ${errors.parentName ? 'border-red-400' : ''}`}
                {...register('parentName', { required: 'Parent name is required' })}
              />
              {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>}
            </div>

            {/* Student Name */}
            <div>
              <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                Student Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Child's full name"
                className={`input-field ${errors.studentName ? 'border-red-400' : ''}`}
                {...register('studentName', { required: 'Student name is required' })}
              />
              {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName.message}</p>}
            </div>
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

          {/* Email */}
          <div>
            <label className="block font-body text-sm font-medium text-textDark mb-1.5">Email Address</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input-field"
              {...register('email')}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Class Applying For */}
            <div>
              <label className="block font-body text-sm font-medium text-textDark mb-1.5">
                Class Applying For <span className="text-red-500">*</span>
              </label>
              <select
                className={`input-field ${errors.class ? 'border-red-400' : ''}`}
                {...register('class', { required: 'Please select a class' })}
              >
                <option value="">Select Class</option>
                {classesAvailable.map((cls) => (
                  <option key={cls} value={cls}>{cls}</option>
                ))}
              </select>
              {errors.class && <p className="text-red-500 text-xs mt-1">{errors.class.message}</p>}
            </div>

            {/* Academic Year */}
            <div>
              <label className="block font-body text-sm font-medium text-textDark mb-1.5">Academic Year</label>
              <select className="input-field" {...register('year')}>
                <option value="2026-27">2026–27</option>
                <option value="2027-28">2027–28</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block font-body text-sm font-medium text-textDark mb-1.5">Additional Message</label>
            <textarea
              rows={3}
              placeholder="Any queries or additional information..."
              className="textarea-field"
              {...register('message')}
            />
          </div>

          <button type="submit" className="btn-primary w-full justify-center text-base">
            Submit Enquiry <Send size={17} />
          </button>
        </form>
      )}
    </div>
  )
}

// ─── Main Page ───
const AdmissionsPage = () => {
  return (
    <div className="page-enter">
      {/* Page Banner */}
      <PageBanner
        title="Admission Procedure"
        subtitle="Simple, transparent, and student-friendly — here's how to join the EIS family"
        bgImage="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/admission-enquiry-form-1.png"
        breadcrumbs={[{ label: 'Admission Procedure' }]}
      />

      {/* ─── Section 1: Overview + Steps + Form ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left — Steps (2 cols) */}
            <div className="lg:col-span-2">
              <SectionHeading
                badge="How to Apply"
                title="Admission Overview"
                subtitle="Follow these simple steps to secure your child's admission at Excellence International School."
                align="left"
              />

              {/* Steps Timeline */}
              <div className="relative space-y-6">
                {/* Vertical line */}
                <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gray-100 hidden sm:block" />

                {admissionSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 items-start group">
                    {/* Step circle */}
                    <div className={`relative z-10 w-14 h-14 rounded-full ${step.color} flex items-center justify-center
                                     text-white flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                      {step.icon}
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 border-gray-200
                                       flex items-center justify-center font-heading text-xs text-textDark">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 p-5 rounded-2xl border-2 ${step.lightColor} group-hover:shadow-card transition-all duration-300`}>
                      <p className="font-alt text-xs font-semibold text-textMuted uppercase tracking-widest mb-1">Step {step.step}</p>
                      <h4 className="font-heading text-primary text-lg mb-2">{step.title}</h4>
                      <p className="font-body text-textMuted text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Notes */}
              <div className="mt-8 space-y-4">
                {/* First come first serve */}
                <div className="flex gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <Info size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-amber-800 text-sm leading-relaxed">
                    <strong>First Come, First Served:</strong> Admission is granted on a first come, first basis.
                    We encourage early application to secure a seat.
                  </p>
                </div>

                {/* Single girl child */}
                <div className="flex gap-4 p-4 bg-pink-50 border border-pink-200 rounded-xl">
                  <Star size={20} className="text-pink-600 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-pink-800 text-sm leading-relaxed">
                    <strong>Special Provision:</strong> There is a special term/concession in the case of a single girl
                    child of parents. Please contact the school office for more details.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-1 lg:sticky lg:top-28">
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Direct Admission + Entrance Test + Payment ─── */}
      <section className="section-pad bg-cream">
        <div className="container-eis">
          <SectionHeading
            badge="Key Information"
            title="Admission Types & Policies"
            subtitle="Everything you need to know about direct admission, entrance tests, and payment options."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Direct Admission */}
            <div className="card p-7 border border-gray-100 hover:border-gold/30 group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4
                              group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <GraduationCap size={24} className="text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="font-heading text-primary text-xl mb-3">Direct Admission</h3>
              <p className="font-body text-textMuted text-sm leading-relaxed mb-4">
                Direct admission for class <strong>Play Group to Class VIII</strong> is also offered
                to meritorious students. In case of direct admission, kindly approach the school
                with your previous school documents.
              </p>
              <ul className="space-y-2">
                {['Bring previous school TC', 'Last report card required', 'Open to all meritorious students', 'Applicable from Playgroup to Class VIII'].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-textDark text-sm">
                    <CheckCircle size={14} className="text-blue-500 flex-shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Entrance Test */}
            <div className="card p-7 border border-gray-100 hover:border-gold/30 group">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4
                              group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <FileText size={24} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="font-heading text-primary text-xl mb-3">Entrance Test</h3>
              <p className="font-body text-textMuted text-sm leading-relaxed mb-4">
                All applications undergo a standard procedure of an entrance test to prepare
                and counsel the parents and students to get a bright future ahead with confidence.
              </p>
              <ul className="space-y-2">
                {['Age-appropriate assessment', 'Counseling for parents & students', 'Helps identify student\'s level', 'Guided preparation support given'].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-textDark text-sm">
                    <CheckCircle size={14} className="text-primary flex-shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* Payment */}
            <div className="card p-7 border border-gray-100 hover:border-gold/30 group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4
                              group-hover:bg-gold group-hover:text-white transition-all duration-300">
                <CreditCard size={24} className="text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="font-heading text-primary text-xl mb-3">Payment Method</h3>
              <p className="font-body text-textMuted text-sm leading-relaxed mb-4">
                Payment can be done either directly in the bank or at the school office.
                <strong> All modes of payment are accepted</strong> for your convenience.
              </p>
              <ul className="space-y-2">
                {['Cash payment at school office', 'Bank transfer / NEFT / RTGS', 'UPI & digital wallets accepted', 'Receipt provided for all payments'].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 font-body text-textDark text-sm">
                    <CheckCircle size={14} className="text-amber-500 flex-shrink-0" /> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Required Documents ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-card-hover aspect-video">
              <img
                src="https://excellenceinternationalschool.com/wp-content/uploads/2026/03/admission-enquiry-form-1.png"
                alt="Admission Documents Required"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
                }}
              />
            </div>

            {/* Documents list */}
            <div>
              <SectionHeading
                badge="Documents Needed"
                title="Required Documents for Admission"
                subtitle="Please bring the following documents when visiting the school for the admission process."
                align="left"
              />
              <ul className="space-y-3 mb-8">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-cream border border-gray-100
                                            hover:border-gold/30 transition-colors duration-200">
                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="font-heading text-primary text-xs">{idx + 1}</span>
                    </div>
                    <span className="font-body text-textDark text-sm">{doc}</span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:excellenceinternationalschool@gmail.com"
                className="btn-primary inline-flex"
              >
                Email for Enquiry <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 4: Classes & Contact CTA ─── */}
      <section className="section-pad bg-green-gradient relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
        <div className="container-eis relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Classes */}
            <div>
              <SectionHeading
                badge="Seats Available"
                title="Classes Accepting Admissions"
                light
                align="left"
              />
              <div className="flex flex-wrap gap-3">
                {classesAvailable.map((cls) => (
                  <span
                    key={cls}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white
                               font-body text-sm font-medium hover:bg-gold hover:text-primary
                               hover:border-gold transition-all duration-200 cursor-default"
                  >
                    {cls}
                  </span>
                ))}
              </div>
              <p className="font-body text-white/70 text-sm mt-5">
                * Availability subject to vacant seats. Contact the school to confirm current availability.
              </p>
            </div>

            {/* Contact CTA */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="font-heading text-white text-2xl mb-4">Have Questions?</h3>
              <p className="font-body text-white/75 text-sm leading-relaxed mb-6">
                For any admission-related queries, feel free to call us, visit the school, or email us at:
              </p>
              <div className="space-y-4">
                <a href="tel:+917055582117"
                   className="flex items-center gap-3 text-white hover:text-gold transition-colors font-body text-sm">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Phone size={18} className="text-gold" />
                  </div>
                  +91 7055582117
                </a>
                <a href="mailto:excellenceinternationalschool@gmail.com"
                   className="flex items-center gap-3 text-white hover:text-gold transition-colors font-body text-sm break-all">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  excellenceinternationalschool@gmail.com
                </a>
                <a href="mailto:info@excellenceinternationalschool.com"
                   className="flex items-center gap-3 text-white hover:text-gold transition-colors font-body text-sm break-all">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  info@excellenceinternationalschool.com
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary text-sm">
                  Contact Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdmissionsPage
