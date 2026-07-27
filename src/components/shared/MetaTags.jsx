import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const metaByPath = {
  '/': {
    title: 'Best School in Aligarh | Top Schools in Aligarh – Excellence International School',
    description: 'Excellence International School is among the best schools in Aligarh, offering quality education, modern facilities, and holistic development from Pre-Primary to Middle School.',
  },
  '/about': {
    title: 'About Us | Excellence International School – Aligarh',
    description: 'Learn about Excellence International School, our vision, mission, core values, experienced faculty, and commitment to shaping future leaders in Aligarh.',
  },
  '/admissions': {
    title: 'Admission Procedure 2026–27 | Excellence International School Aligarh',
    description: 'Apply for admission at Excellence International School Aligarh. Check admission process, required documents, direct admission guidelines, and fee payment details.',
  },
  '/gallery': {
    title: 'Photo Gallery | Excellence International School Aligarh',
    description: 'Explore photos of campus facilities, classrooms, cultural events, sports days, and student activities at Excellence International School, Aligarh.',
  },
  '/contact': {
    title: 'Contact Us | Excellence International School Aligarh',
    description: 'Get in touch with Excellence International School, Ramghat Road, Aligarh. Phone: +91 7055582117, Email: info@excellenceinternationalschool.com.',
  },
  '/academics/pre-primary': {
    title: 'Best Pre-Primary School in Aligarh | Playgroup, Nursery, KG – EIS',
    description: 'Nurturing play-based pre-primary education for Playgroup, Nursery, and Kindergarten at Excellence International School, Aligarh.',
  },
  '/academics/primary': {
    title: 'Best Primary School in Aligarh | Class 1 to 5 – Excellence International School',
    description: 'Quality primary education focusing on academic excellence, concept-based curriculum, and character development in Aligarh.',
  },
  '/academics/middle': {
    title: 'Middle School (Class 6 - 8) | Excellence International School Aligarh',
    description: 'Empowering middle school students with analytical skills, science labs, computer education, and leadership activities.',
  },
  '/academics/daycare': {
    title: 'Daycare Program in Aligarh | Excellence International School',
    description: 'Safe, hygienic, and loving daycare program for children in Aligarh with supervised play, nutritious meals, and attentive care.',
  },
}

const MetaTags = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaByPath[pathname] || {
      title: 'Excellence International School – Aligarh',
      description: 'Excellence International School is a leading educational institution in Aligarh, Uttar Pradesh.',
    }

    // Update document title
    document.title = meta.title

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description)
    }

    // Update OG title & description
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)

    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)

  }, [pathname])

  return null
}

export default MetaTags
