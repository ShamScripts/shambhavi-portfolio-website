# Shambhavi Jha — Personal Portfolio

A premium, futuristic personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

**Live site:** _coming soon_

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Styling | Tailwind CSS v3 + custom CSS |
| Animation | Framer Motion 11 |
| Smooth Scroll | Lenis |
| Icons | Lucide React |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/       # All UI sections and shared components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── WhatIBring.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Research.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Clubs.tsx
│   ├── Volunteering.tsx
│   ├── Art.tsx
│   ├── Certifications.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   ├── FloatingNav.tsx
│   ├── SectionDots.tsx
│   └── ...
├── data/             # Content data files (projects, education, etc.)
├── hooks/            # Custom React hooks (useSmoothScroll)
└── index.css         # Global styles and CSS variables

public/
├── avatar/           # Avatar and profile images
├── art/              # Artwork / drawings
├── gallery/          # Photo gallery (ACM, ACM-W, College Events)
├── conferences/      # Conference event images
└── resume.pdf        # Downloadable resume
```

## Sections

- **Hero** — Orbital avatar hub with radial navigation and animated typing
- **About** — Personal introduction
- **What I Bring** — Four core pillars: ML, Execution, Communication, HR Tech
- **Skills** — Technical skill categories
- **Projects** — ML and data analytics projects with impact metrics
- **Research** — Ongoing and completed research work
- **Education** — BITS Pilani Dubai + DPS Dubai
- **Experience** — Industry internships (TechMantra Gulf, EvotAI)
- **Clubs & Leadership** — ACM-W, ACM, Supernova roles
- **Volunteering** — CINS, WiCoDE, ICAIN conference experience
- **Art** — Drawings and paintings gallery
- **Certifications** — Professional certifications
- **Gallery** — Personal photos and college event memories
- **Contact** — Contact form + social links

## Deployment

This project is ready to deploy on **Vercel** (recommended):

```bash
npm i -g vercel
vercel        # follow prompts — Vite is auto-detected
vercel --prod # promote to production
```

Or on **Netlify**:
```bash
npm run build
# drag & drop the dist/ folder to Netlify's dashboard
```

---

Built with React, Vite & Framer Motion
