/**
 * Reusable Section Heading Component
 * Props:
 *   badge     - Small label above title (string)
 *   title     - Main heading (string)
 *   subtitle  - Description text (string)
 *   align     - 'left' | 'center' (default: 'center')
 *   light     - If true, uses white text (for dark backgrounds)
 */
const SectionHeading = ({ badge, title, subtitle, align = 'center', light = false }) => {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-14`}>
      {badge && (
        <span className={`inline-block uppercase tracking-widest text-xs font-semibold font-alt mb-2
                          ${light ? 'text-gold/90' : 'text-gold'}`}>
          {badge}
        </span>
      )}

      <h2 className={`font-heading text-2xl md:text-3xl lg:text-4xl mb-3
                      ${light ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>

      {/* Gold underline */}
      <div className={`h-1 w-16 rounded-full bg-gold mb-4 ${align === 'center' ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className={`font-body text-base md:text-lg leading-relaxed max-w-2xl
                       ${light ? 'text-white/75' : 'text-textMuted'}
                       ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
