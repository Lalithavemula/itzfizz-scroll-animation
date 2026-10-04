# ITZFIZZ — Scroll-Driven Hero Section Animation

> **Web Development Internship Assignment for Itzfizz Digital**  
> A high-performance, agency-grade interactive landing page featuring scroll-driven 3D animations powered by **React.js**, **GSAP ScrollTrigger**, and **Tailwind CSS**.

---

## 🚀 Live Demo & Overview

This project implements a scroll-responsive digital-agency landing page inspired by modern interactive web experiences. As the user scrolls through the hero section, the central 3D browser application mockup tilts, scales, and expands while surrounding satellite cards displace in 3D parallax depth — fully synchronized with the user's scroll progress.

---

## ✨ Key Features

- **GSAP ScrollTrigger Engine**: Scrub-interpolated 3D motion tied directly to scroll position with zero layout thrashing.
- **Initial Page Load Animation**: Staggered GSAP timeline revealing the headline (`W E L C O M E  I T Z F I Z Z`), navigation, and performance statistics.
- **Interactive 3D Dashboard Mockup**: Custom glassmorphism web app visual with live simulated metrics, FPS monitor, real-time code snippet, and node status indicators.
- **Hardware Accelerated**: Exclusively uses GPU-friendly CSS transforms (`translate3d`, `rotateX/Y`, `scale`, `opacity`) for 60fps performance.
- **Responsive Architecture**: Fully optimized layout for 1440px+, 1024px, 768px, 425px, and 375px screens with custom mobile drawer navigation.
- **Accessibility & UX**: Respects `prefers-reduced-motion` media queries, includes keyboard-accessible navigation, semantic HTML5, and ARIA roles.
- **Comprehensive Sections**:
  - `Hero`: Spaced headline, interactive visual, statistics bar.
  - `Services`: What We Do (Web Dev, Mobile, AI/ML, Digital Strategy).
  - `Impact`: Client case studies & metric highlights.
  - `Process`: 4-Step production workflow timeline.
  - `CTA`: Project inquiry & discovery booking.
  - `Footer`: Quick links & back-to-top feature.

---

## 🛠 Tech Stack

- **Framework**: [React.js](https://react.dev/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animation Engine**: [GSAP](https://greensock.com/gsap/) & [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Plus Jakarta Sans, Syne, JetBrains Mono

---

## 💻 Local Setup & Execution

### Prerequisites
Make sure you have Node.js (v18.0.0 or higher) and npm installed.

### Step 1: Clone Repository
```bash
git clone https://github.com/your-username/itzfizz-scroll-hero.git
cd itzfizz-scroll-hero
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 📦 Production Build

To test or generate the production build:

```bash
npm run build
```

Preview the build locally:
```bash
npm run preview
```

---

## 🌐 Deployment Guide (GitHub Pages / Netlify)

### Option A: GitHub Pages
1. In `vite.config.js`, `base: './'` is pre-configured for relative asset resolution.
2. Push your code to GitHub.
3. In GitHub Repository settings -> **Pages**, select **GitHub Actions** or deployment from `dist` branch.
4. Run:
```bash
npm run build
```
And deploy the generated `dist` folder.

### Option B: Netlify / Vercel
1. Connect your repository to Netlify or Vercel.
2. Build Command: `npm run build`
3. Publish Directory: `dist`

---

## 🎓 Senior-Level Architecture & Clean Code Notes

1. **React Ref Binding & Lifecycle Cleanups**:
   Animation targets use React `useRef` rather than raw DOM query selectors. All GSAP timelines are scoped inside `gsap.context()` with `ctx.revert()` cleanup inside `useLayoutEffect`, preventing memory leaks and duplicate triggers.

2. **Zero Scroll Listener React State Thrashing**:
   No `window.addEventListener('scroll')` state setters are used during scroll animations. GSAP ScrollTrigger handles all frame interpolation natively on the GPU thread.

3. **Responsive Animation Scaling**:
   Rotations and perspective offsets scale dynamically across mobile break points to prevent horizontal overflow (`overflow-x: hidden`).

---

## 📄 License

Created as a technical assignment for the **Web Development Internship at Itzfizz Digital**.
