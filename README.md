# Excellence International School — Website Redesign

A modern, responsive, and high-performance website redesign for **Excellence International School, Aligarh** ([excellenceinternationalschool.com](https://excellenceinternationalschool.com/)). Built with **React 18**, **Vite**, **TailwindCSS**, and **Framer Motion**.

---

## 🌟 Key Improvements Made vs. Original Site

| Area | Original Website (WordPress + Elementor) | Redesigned Website (React + Tailwind) |
|---|---|---|
| **Tech Architecture** | Legacy WordPress, Elementor builder, 40+ plugins, heavy PHP overhead | Lightning-fast Single Page Application (React 18 + Vite) |
| **Page Speed & Load Time** | 4-6+ seconds initial load time | Instant sub-second page transitions with client-side routing |
| **Mobile Experience** | Basic responsive layout, rigid Elementor blocks | Native touch drawer navigation, fluid typography, mobile-first design |
| **Hero & Media** | Static image blocks / basic WordPress carousel | Full-screen interactive Swiper slider with dark overlay & smooth wave transitions |
| **Navigation & Header** | Standard WordPress menu | Sticky glassmorphism Navbar with animated dropdowns & active indicator |
| **Interactive Gallery** | Basic WordPress image grid | Filterable Masonry grid with category tabs & full-screen keyboard-navigable Lightbox |
| **Testimonials** | Static text blocks | Auto-scrolling interactive review carousel with star ratings & avatar badges |
| **FAQ Section** | Basic text list | Smooth Framer Motion animated accordion with quick-contact prompts |
| **Forms & Admissions** | Standard Contact Form 7 | Validated forms (React Hook Form) with real-time feedback & multi-step admission timeline |
| **Page Transitions** | Full page refresh reloads on every link click | Framer Motion page entrance/exit fade & slide transitions without reloads |
| **SEO & Social Sharing** | Basic Yoast plugin defaults | Dynamic meta tags, OpenGraph cards, Twitter cards, and Schema.org `School` JSON-LD |

---

## 🛠️ Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: TailwindCSS 3.4
- **Routing**: React Router DOM 6
- **Animations**: Framer Motion
- **Carousels**: Swiper.js 11
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Typography**: Google Fonts (`Hammersmith One`, `Inter`, `Open Sans`)

---

## 📁 Project Structure

```
Redesign School Website/
├── index.html                  # Root HTML with SEO meta tags & JSON-LD
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Custom theme, colors & animations
├── postcss.config.js           # PostCSS setup
├── src/
│   ├── main.jsx                # Entry point
│   ├── App.jsx                 # App routes, Layout, & AnimatePresence
│   ├── index.css               # Global styles, Tailwind directives & utilities
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.jsx      # Contact strip & social links
│   │   │   ├── Navbar.jsx      # Sticky navbar, dropdowns & mobile drawer
│   │   │   └── Footer.jsx      # 4-column footer
│   │   ├── home/
│   │   │   ├── HeroSlider.jsx      # Swiper hero carousel
│   │   │   ├── WelcomeSection.jsx  # Intro & Quick Enquiry form
│   │   │   ├── AboutSection.jsx    # Vision & Mission cards
│   │   │   ├── AcademicStages.jsx  # Academic program cards
│   │   │   ├── WhyEIS.jsx          # Feature grid on dark green
│   │   │   ├── HolisticDev.jsx     # Co-curricular development
│   │   │   ├── Infrastructure.jsx  # School facility cards & photo grid
│   │   │   ├── Testimonials.jsx    # Parent review carousel
│   │   │   └── FAQ.jsx             # Accordion Q&A
│   │   └── shared/
│   │       ├── PageBanner.jsx         # Inner page hero banner
│   │       ├── SectionHeading.jsx     # Section titles & badges
│   │       ├── PageTransition.jsx     # Framer motion wrapper
│   │       ├── MetaTags.jsx           # Dynamic title & meta updater
│   │       └── ScrollToTopButton.jsx  # Floating scroll-to-top button
│   └── pages/
│       ├── HomePage.jsx               # Home page
│       ├── AboutPage.jsx              # About Us & Core Values
│       ├── AdmissionsPage.jsx         # Admission procedure & form
│       ├── GalleryPage.jsx            # Masonry grid & lightbox
│       ├── ContactPage.jsx            # Contact cards, form & Google map
│       ├── NotFoundPage.jsx           # 404 page
│       └── academics/
│           ├── PrePrimaryPage.jsx     # Playgroup, Nursery, KG
│           ├── PrimaryPage.jsx        # Class 1 to 5
│           ├── MiddlePage.jsx         # Class 6 to 8
│           └── DaycarePage.jsx        # Childcare program
```

---

## 🚦 Getting Started

### Installation

1. Clone or navigate to the repository:
   ```bash
   cd "Redesign School Website"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

---

## 👨‍💻 Developer Details

- **Full Name**: Pradeep Kumar Maurya
- **Email Address**: pradeepx135@gmail.com
- **GitHub Username**: [Pradeepx-dev](https://github.com/Pradeepx-dev)
- **Selected Website**: Excellence International School, Aligarh
- **Live Demo Link**: [https://dettroin-pradeep-zeta.vercel.app](https://dettroin-pradeep-zeta.vercel.app)
