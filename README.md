# Dany Chan — Full Stack Developer Portfolio

A premium, responsive portfolio built with React 19, Vite, Tailwind CSS, React Router, and Framer Motion. The visual concept treats the page like a code editor: a title bar, file-tab navigation, and syntax-styled cards, tying the design to the subject — a full stack developer.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/   Reusable UI pieces (Hero, About, Skills, Projects, Contact, chrome/…)
  pages/        Route-level pages (Home, NotFound)
  layouts/      MainLayout wraps every page with nav, footer, scroll progress
  data/         Content: skills, projects, experience, education, social links
  hooks/        useTheme, useTypingEffect, useScrollSpy, useCountUp, useScrollProgress
  utils/        Small helpers (smooth scroll)
```

## Customizing content

All copy lives in `src/data/*.js` — update your name, projects, skills, experience,
and contact details there without touching component code.

To swap the profile photo placeholder, drop an image into `src/assets/` and
reference it inside `src/components/Hero.jsx`.

To wire up the contact form to a real backend or service (e.g. Formspree,
EmailJS, or your own API), replace the `handleSubmit` function in
`src/components/Contact.jsx`.

## Notes

- Dark/light mode preference is saved to `localStorage`.
- Reduced-motion is respected via a `prefers-reduced-motion` media query in `src/index.css`.
- Replace `public/resume.pdf` with your actual CV so the "Download CV" button works.
