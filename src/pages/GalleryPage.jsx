import { useState, useEffect, useCallback } from 'react'
import PageBanner from '../components/shared/PageBanner'
import SectionHeading from '../components/shared/SectionHeading'
import { X, ZoomIn, ChevronLeft, ChevronRight, Images } from 'lucide-react'

// ─── All gallery images from the original site ───
const BASE = 'https://excellenceinternationalschool.com/wp-content/uploads/2026/03/'

const allImages = [
  // Campus & General
  { id: 1,  src: `${BASE}gallery2.jpg.jpeg`,             category: 'campus',   alt: 'Excellence International School Campus' },
  { id: 2,  src: `${BASE}About-US2.png`,                 category: 'campus',   alt: 'School Building View' },
  { id: 3,  src: `${BASE}Vision-Mission.png`,            category: 'campus',   alt: 'School Vision and Mission' },
  // Academics
  { id: 4,  src: `${BASE}best-primary-school-slider.jpg`,category: 'academics',alt: 'Primary School Classroom' },
  { id: 5,  src: `${BASE}pre-primary1.jpg`,              category: 'academics',alt: 'Pre-Primary Learning' },
  { id: 6,  src: `${BASE}pre-primary2.jpg`,              category: 'academics',alt: 'Pre-Primary Activities' },
  { id: 7,  src: `${BASE}primary1.jpg`,                  category: 'academics',alt: 'Primary School Students' },
  { id: 8,  src: `${BASE}primary2.jpg`,                  category: 'academics',alt: 'Primary Students Learning' },
  { id: 9,  src: `${BASE}middle1.jpg`,                   category: 'academics',alt: 'Middle School Class' },
  // Events & Activities
  { id: 10, src: `${BASE}holistic-development.jpg`,      category: 'events',   alt: 'Holistic Development Program' },
  { id: 11, src: `${BASE}activity1.jpg`,                 category: 'events',   alt: 'School Activity' },
  { id: 12, src: `${BASE}activity2.jpg`,                 category: 'events',   alt: 'Cultural Event' },
  { id: 13, src: `${BASE}slider1.jpg`,                   category: 'events',   alt: 'School Event 1' },
  { id: 14, src: `${BASE}slider2.jpg`,                   category: 'events',   alt: 'School Event 2' },
  { id: 15, src: `${BASE}slider3.jpg`,                   category: 'events',   alt: 'School Event 3' },
  // Infrastructure
  { id: 16, src: `${BASE}admission-enquiry-form-1.png`,  category: 'campus',   alt: 'Admissions Area' },
  { id: 17, src: `${BASE}Contact-_us.png`,               category: 'campus',   alt: 'School Contact Area' },
  { id: 18, src: `${BASE}infra1.jpg`,                    category: 'infrastructure', alt: 'Smart Classroom' },
  { id: 19, src: `${BASE}infra2.jpg`,                    category: 'infrastructure', alt: 'School Library' },
  { id: 20, src: `${BASE}infra3.jpg`,                    category: 'infrastructure', alt: 'Science Lab' },
  { id: 21, src: `${BASE}infra4.jpg`,                    category: 'infrastructure', alt: 'Computer Lab' },
  // Sports
  { id: 22, src: `${BASE}sports1.jpg`,                   category: 'sports',   alt: 'Sports Activity' },
  { id: 23, src: `${BASE}sports2.jpg`,                   category: 'sports',   alt: 'Physical Education' },
  { id: 24, src: `${BASE}sports3.jpg`,                   category: 'sports',   alt: 'School Sports Day' },
]

// Fallback images by category (Unsplash)
const fallbacks = {
  campus:         'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75',
  academics:      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=75',
  events:         'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&q=75',
  infrastructure: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=75',
  sports:         'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=75',
}

const filters = [
  { key: 'all',            label: '🏫 All Photos',      count: allImages.length },
  { key: 'campus',        label: '🏫 Campus',            count: allImages.filter(i => i.category === 'campus').length },
  { key: 'academics',     label: '📚 Academics',         count: allImages.filter(i => i.category === 'academics').length },
  { key: 'events',        label: '🎭 Events',            count: allImages.filter(i => i.category === 'events').length },
  { key: 'infrastructure',label: '🏗️ Infrastructure',   count: allImages.filter(i => i.category === 'infrastructure').length },
  { key: 'sports',        label: '⚽ Sports',            count: allImages.filter(i => i.category === 'sports').length },
]

// ─── Lightbox Component ───
const Lightbox = ({ images, currentIdx, onClose, onPrev, onNext }) => {
  const img = images[currentIdx]

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose, onPrev, onNext])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 text-white
                   flex items-center justify-center hover:bg-gold hover:text-primary transition-all"
        aria-label="Close lightbox"
      >
        <X size={20} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 text-white
                      font-body text-sm px-4 py-1.5 rounded-full">
        {currentIdx + 1} / {images.length}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-3 md:left-6 w-11 h-11 rounded-full bg-white/10 text-white
                   flex items-center justify-center hover:bg-gold hover:text-primary transition-all z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image */}
      <div className="max-w-5xl max-h-[85vh] mx-12 md:mx-20" onClick={(e) => e.stopPropagation()}>
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
          onError={(e) => { e.target.src = fallbacks[img.category] }}
        />
        <p className="text-white/60 font-body text-sm text-center mt-3">{img.alt}</p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-3 md:right-6 w-11 h-11 rounded-full bg-white/10 text-white
                   flex items-center justify-center hover:bg-gold hover:text-primary transition-all z-10"
        aria-label="Next image"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}

// ─── Single Gallery Image Card ───
const GalleryCard = ({ img, idx, onOpen }) => {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div
      className="gallery-item group relative cursor-pointer rounded-xl overflow-hidden shadow-card"
      onClick={() => onOpen(idx)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(idx)}
      aria-label={`View ${img.alt}`}
    >
      {/* Skeleton loader */}
      {!loaded && !errored && (
        <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-xl" />
      )}

      <img
        src={errored ? fallbacks[img.category] : img.src}
        alt={img.alt}
        className={`w-full h-auto object-cover rounded-xl transition-transform duration-500
                    group-hover:scale-105 ${loaded ? 'block' : 'hidden'}`}
        onLoad={() => setLoaded(true)}
        onError={() => { setErrored(true); setLoaded(true) }}
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300
                      flex items-center justify-center rounded-xl">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
            <ZoomIn size={20} className="text-primary" />
          </div>
        </div>
      </div>

      {/* Category badge */}
      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-gold text-primary font-alt text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
          {img.category}
        </span>
      </div>
    </div>
  )
}

// ─── Main Page ───
const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIdx, setLightboxIdx] = useState(null)

  const filtered = activeFilter === 'all'
    ? allImages
    : allImages.filter((img) => img.category === activeFilter)

  const openLightbox = useCallback((idx) => setLightboxIdx(idx), [])
  const closeLightbox = useCallback(() => setLightboxIdx(null), [])
  const prevImage = useCallback(() =>
    setLightboxIdx((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length])
  const nextImage = useCallback(() =>
    setLightboxIdx((i) => (i + 1) % filtered.length), [filtered.length])

  return (
    <div className="page-enter">
      {/* Page Banner */}
      <PageBanner
        title="Gallery"
        subtitle="A visual journey through life at Excellence International School"
        bgImage={`${BASE}gallery2.jpg.jpeg`}
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      {/* ─── Gallery Section ─── */}
      <section className="section-pad bg-white">
        <div className="container-eis">
          <SectionHeading
            badge="Our Moments"
            title="School Photo Gallery"
            subtitle="Browse through memorable moments, events, activities, and the vibrant life at Excellence International School, Aligarh."
          />

          {/* ─── Filter Tabs ─── */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full font-body font-medium
                            text-sm transition-all duration-300 border-2
                            ${activeFilter === f.key
                              ? 'bg-primary text-white border-primary shadow-md scale-105'
                              : 'bg-white text-textMuted border-gray-200 hover:border-primary hover:text-primary'
                            }`}
                id={`filter-${f.key}`}
              >
                {f.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold
                                  ${activeFilter === f.key ? 'bg-gold text-primary' : 'bg-gray-100 text-textMuted'}`}>
                  {f.count}
                </span>
              </button>
            ))}
          </div>

          {/* ─── Results Count ─── */}
          <div className="flex items-center gap-2 mb-6">
            <Images size={18} className="text-gold" />
            <p className="font-body text-textMuted text-sm">
              Showing <span className="font-semibold text-primary">{filtered.length}</span> photos
              {activeFilter !== 'all' && (
                <> in <span className="font-semibold text-primary capitalize">{activeFilter}</span></>
              )}
            </p>
          </div>

          {/* ─── Masonry Grid ─── */}
          {filtered.length > 0 ? (
            <div className="gallery-grid">
              {filtered.map((img, idx) => (
                <GalleryCard
                  key={img.id}
                  img={img}
                  idx={idx}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-heading text-primary text-2xl mb-2">No Photos Found</p>
              <p className="font-body text-textMuted text-sm">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-14 bg-cream">
        <div className="container-eis text-center">
          <h2 className="font-heading text-primary text-2xl md:text-3xl mb-3">
            Want to See More? Visit Us!
          </h2>
          <p className="font-body text-textMuted text-base mb-6 max-w-xl mx-auto">
            Come visit our campus in Aligarh and experience the vibrant school life at Excellence
            International School firsthand.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+917055582117" className="btn-primary">
              📞 Call Us: +91 7055582117
            </a>
            <a
              href="https://www.instagram.com/excellence_school_aligarh?igsh=a2NudW0zcnlqeTVu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ─── Lightbox ─── */}
      {lightboxIdx !== null && (
        <Lightbox
          images={filtered}
          currentIdx={lightboxIdx}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}

export default GalleryPage
