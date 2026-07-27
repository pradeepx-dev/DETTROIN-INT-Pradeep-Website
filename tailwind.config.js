/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#173E30',
          light: '#1E6B4D',
          dark: '#0f2a1f',
        },
        gold: {
          DEFAULT: '#FFB606',
          dark: '#e6a205',
          light: '#ffc933',
        },
        cream: '#FDFCF5',
        textDark: '#202020',
        textMuted: '#5A6472',
      },
      fontFamily: {
        heading: ['"Hammersmith One"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        alt: ['"Open Sans"', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(23,62,48,0.9) 0%, rgba(23,62,48,0.6) 100%)',
        'section-gradient': 'linear-gradient(180deg, #FDFCF5 0%, #f0efe6 100%)',
        'green-gradient': 'linear-gradient(135deg, #173E30 0%, #1E6B4D 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFB606 0%, #ffc933 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(23,62,48,0.15)',
        'nav': '0 4px 20px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
