# Knowledge Transfer Document
## Shambhavi Jha — Personal Portfolio Website

**Project:** `shambhavi-vite-portfolio`
**Location:** `e:\New folder\personal_website\shambhavi-vite-portfolio`
**Last updated:** April 2026
**Tech stack:** Vite 5 · React 18 · TypeScript · Tailwind CSS v3 · Framer Motion 11 · Lenis · Lucide React

---

## 1. Quick Start

> Node.js must be installed. Run `node -v` to confirm.

```powershell
# Navigate to project
cd "e:\New folder\personal_website\shambhavi-vite-portfolio"

# Install dependencies (first time only, or after adding packages)
npm install

# Start dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build → outputs to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 2. Project Structure

```
shambhavi-vite-portfolio/
│
├── public/                          # Static files — served as-is, no processing
│   ├── avatar/
│   │   ├── avatar.png               ← Transparent-bg avatar (used in Hero orbital hub)
│   │   └── profile.png              ← Profile photo (used in About section)
│   ├── art/                         ← 15 real artwork JPEGs + 6 old SVG placeholders
│   ├── gallery/
│   │   ├── ACM/                     ← 7 ACM event photos (.jpg)
│   │   ├── ACMW/                    ← 7 ACM-W photos (.jpg)
│   │   └── COLLEGE EVENTS/          ← 17 campus/conference photos (.jpg)
│   ├── conferences/
│   │   ├── cins.jpg                 ← CINS conference image
│   │   ├── icain.jpeg               ← ICAIN 2025 image
│   │   └── wicode.jpg               ← WiCoDE'26 image
│   ├── resume.pdf                   ← Downloadable resume (linked in Hero CTA)
│   └── favicon.svg                  ← "SJ" initials favicon
│
├── src/
│   ├── components/                  # All UI sections and shared components
│   │   ├── Hero.tsx                 ← Full-screen orbital hub with avatar + radial nav
│   │   ├── About.tsx                ← Bento-grid about section
│   │   ├── WhatIBring.tsx           ← 4 pillars (ML, Execution, Comms, HR Tech)
│   │   ├── Skills.tsx               ← 6-card skill category grid
│   │   ├── Projects.tsx             ← Filterable project cards with impact metrics
│   │   ├── Research.tsx             ← Research topics grid with bullet points
│   │   ├── Education.tsx            ← BITS Pilani + DPS Dubai cards
│   │   ├── Experience.tsx           ← Industry internship timeline cards
│   │   ├── Clubs.tsx                ← Clubs & Leadership with bullet-point cards
│   │   ├── Volunteering.tsx         ← Conference volunteering (CINS, WiCoDE, ICAIN)
│   │   ├── Certifications.tsx       ← Certification cards with provider colours
│   │   ├── Art.tsx                  ← Artwork masonry gallery with lightbox
│   │   ├── Gallery.tsx              ← Personal photo gallery with filters + lightbox
│   │   ├── Contact.tsx              ← Contact form (mailto) + social links
│   │   ├── Footer.tsx               ← Three-column footer with nav + socials
│   │   │
│   │   ├── FloatingNav.tsx          ← Scroll-triggered floating pill navbar
│   │   ├── SectionDots.tsx          ← Right-side scroll progress dots
│   │   ├── BackToTop.tsx            ← Fixed back-to-top button
│   │   ├── ParticleBackground.tsx   ← Animated particle canvas background
│   │   ├── ScrollProgress.tsx       ← Top progress bar + cursor glow
│   │   ├── SectionHeading.tsx       ← Reusable eyebrow + title + highlight heading
│   │   └── LazyImage.tsx            ← Shimmer skeleton + blur-up fade-in image loader
│   │
│   ├── data/                        # ← ALL CONTENT LIVES HERE — edit these, not components
│   │   ├── site.ts                  ← Name, email, phone, GitHub, LinkedIn, Instagram
│   │   ├── projects.ts              ← All project cards (title, tech, description, result)
│   │   ├── skills.ts                ← Skill categories and tags
│   │   ├── education.ts             ← Education entries (BITS + DPS Dubai)
│   │   ├── experience.ts            ← Internship / work experience
│   │   ├── research.ts              ← Research papers and ongoing topics
│   │   ├── certifications.ts        ← Certifications list
│   │   ├── art.ts                   ← Artwork metadata (title, medium, image path)
│   │   ├── gallery.ts               ← Photo gallery metadata (caption, category, path)
│   │   └── volunteering.ts          ← Conference volunteering entries
│   │
│   ├── hooks/
│   │   └── useSmoothScroll.ts       ← Lenis smooth scroll initialisation
│   │
│   ├── lib/
│   │   └── utils.ts                 ← cn() helper for conditional class merging
│   │
│   ├── App.tsx                      ← Root layout — section order lives here
│   ├── main.tsx                     ← React entry point
│   └── index.css                    ← Global styles, CSS variables, utility classes
│
├── index.html                       ← HTML entry (title, OG meta tags, Google Fonts)
├── .gitignore                       ← Excludes node_modules, dist, .env
├── .gitattributes                   ← Consistent LF line endings, images as binary
├── README.md                        ← Public-facing project README
├── vite.config.ts                   ← Vite config (@/ path alias → src/)
├── tailwind.config.ts               ← Tailwind theme (colors, fonts)
├── tsconfig.app.json                ← TypeScript config
├── postcss.config.js                ← PostCSS (Tailwind + Autoprefixer)
└── package.json                     ← Dependencies and npm scripts
```

---

## 3. Design System — "Cyber Editorial"

### Colour Palette

| CSS Variable | Hex | Usage |
|---|---|---|
| `--background` | `#07070A` | Page background |
| `--surface` | `#11131A` | Card backgrounds |
| `--primary` | `#7C3AED` | Purple — headings, borders, primary glow |
| `--secondary` | `#22D3EE` | Cyan — accents, chips, secondary glow |
| `--accent` | `#F43F5E` | Rose — CTA highlights, error states |
| `--text` | `#F8FAFC` | Primary body text |
| `--muted` | `#94A3B8` | Subtle labels, secondary text |

Defined in `src/index.css` under `:root` and mirrored in `tailwind.config.ts`.

### Typography

| Role | Font | Weights |
|------|------|---------|
| Display / headings | **Syne** | 600, 700, 800 |
| Body / UI | **Inter** | 400, 500, 600, 700 |

Loaded via Google Fonts in `index.html`. Font classes: `font-display` (Syne), `font-body` / default (Inter).

### Key CSS Utility Classes (`src/index.css`)

| Class | Effect |
|-------|--------|
| `.cyber-card` | Glassmorphism card — dark bg, purple border, blur |
| `.gradient-text` | Purple→cyan gradient text |
| `.gradient-text-rose` | Rose→purple gradient text |
| `.gradient-text-cyan` | Cyan→purple gradient text |
| `.btn-primary` | Purple gradient CTA button with glow |
| `.btn-secondary` | Cyan-outline secondary button |
| `.tech-chip` | Purple mini tag chip |
| `.tech-chip-cyan` | Cyan mini tag chip |
| `.tech-chip-rose` | Rose mini tag chip |
| `.section-container` | Max-width (1280px) centred container with padding |
| `.section-eyebrow` | Small uppercase label with gradient left-bar |
| `.section-alt` | Slightly lighter background for alternating sections |
| `.section-divider` | 1px purple→cyan gradient line between sections |
| `.grain-overlay` | Fixed ultra-subtle film grain texture (fixed, z-9000) |
| `.scroll-progress-bar` | Top progress bar (purple→cyan→rose) |
| `.img-skeleton` | Animated shimmer for image loading state |

---

## 4. Page Section Order

Defined in `src/App.tsx`. Current order top to bottom:

```
Hero              → id="home"
About             → id="about"
WhatIBring        → id="what-i-bring"
Skills            → id="skills"
Projects          → id="projects"
Research          → id="research"
Education         → id="education"
Experience        → id="experience"
Clubs             → id="clubs"
Volunteering      → id="volunteering"
Certifications    → id="certifications"
Art               → id="art"
Gallery           → id="gallery"
Contact           → id="contact"
Footer
```

To reorder, cut/paste the `<ComponentName />` lines and their surrounding `<div className="section-divider" />` in `App.tsx`. Also update `SectionDots.tsx` to match.

---

## 5. Navigation Components

### FloatingNav (`src/components/FloatingNav.tsx`)
- Appears after scrolling 480px past the top
- Desktop: pill with logo "SJ", nav links, GitHub + LinkedIn icons
- Mobile: hamburger dropdown menu
- Active section highlighted via `IntersectionObserver`
- Links: About · Projects · Education · Experience · Clubs · Art · Gallery · Contact

To add/remove links, edit the `NAV_LINKS` array at the top of `FloatingNav.tsx`.

### SectionDots (`src/components/SectionDots.tsx`)
- Fixed right-side dots, one per section, hidden on mobile
- Hover reveals a label tooltip
- Active dot has a glowing purple ring
- Tracks all 14 sections via `IntersectionObserver`

To add a new section dot, append to the `SECTIONS` array in `SectionDots.tsx`:
```ts
{ id: "your-section-id", label: "Label" },
```

---

## 6. Updating Content

All content lives in `src/data/`. **Edit these files — never touch the component files** just to update text.

### 6.1 Personal Info — `src/data/site.ts`
```ts
export const site = {
  name: "Shambhavi Jha",
  shortTagline: "Computer Science · AI · Machine Learning · Data Analytics",
  location: "Dubai, UAE",
  email: "f20230009@dubai.bits-pilani.ac.in",
  phoneDisplay: "+971 54 434 6689",
  phoneTel: "+971544346689",
  github: "https://github.com/ShamScripts/",
  linkedin: "https://www.linkedin.com/in/shamscript009/",
  instagram: "https://www.instagram.com/love_shambhavi",  // personal
  languages: "English (Fluent) · Hindi · Arabic",
};
```

### 6.2 Projects — `src/data/projects.ts`
```ts
{
  title: "Project Title",
  period: "2025",
  category: "Machine Learning",   // used for filter pills
  tech: ["Python", "scikit-learn"],
  description: "One-line what it does.",
  result: "Key outcome or metric.",
  details: ["Extra bullet 1.", "Extra bullet 2."],  // optional
  githubUrl: "https://github.com/...",
},
```
**Available categories:** `"Machine Learning"` · `"Data & Analytics"` · `"Systems & Web"` · `"Research"`
To add a new category, add it to `projectCategories` at the top of `projects.ts`.

### 6.3 Research — `src/data/research.ts`
```ts
{
  title: "Research Topic Title",
  period: "Ongoing",   // or "2025", "2024", etc.
  points: ["Point 1.", "Point 2.", "Point 3."],
},
```

### 6.4 Education — `src/data/education.ts`
```ts
{
  id: "unique-id",
  institution: "Institution Name",
  degree: "Degree Title",
  detail: "Subtitle / board / type",
  location: "City, Country",
  period: "YYYY to YYYY",
  coursework: ["Subject 1", "Subject 2"],
},
```
Currently has two entries: BITS Pilani Dubai (purple card) and DPS Dubai (cyan card).

### 6.5 Experience — `src/data/experience.ts`
```ts
{
  id: "unique-id",
  title: "Role Title",
  org: "Organisation Name",
  location: "City, Country",
  period: "Month YYYY to Month YYYY",
  summary: "One sentence summary.",
  highlights: ["Bullet 1.", "Bullet 2.", "Bullet 3."],
  tools: ["Tool A", "Tool B"],
},
```

### 6.6 Certifications — `src/data/certifications.ts`
```ts
{ title: "Cert Name", provider: "Issuer", link: "https://..." },
// link is optional
```

### 6.7 Art Gallery — `src/data/art.ts`
```ts
{
  id: "a1",
  title: "Artwork Title",
  medium: "Medium description",
  imageSrc: "/art/your-image.jpeg",
  alt: "Description for accessibility",
},
```
Add image files to `public/art/`, then add an entry here.
**Note:** filenames with spaces must be URL-encoded in the `imageSrc` path (space → `%20`, `(` → `%28`, `)` → `%29`).

### 6.8 Photo Gallery — `src/data/gallery.ts`
```ts
{
  id: "unique-id",
  caption: "Photo caption",
  category: "ACM-W",   // "ACM-W" | "ACM" | "College Events"
  src: "/gallery/ACMW/filename.jpg",
  aspect: "landscape", // "portrait" | "landscape" | "square"
},
```
Put photos in the matching subfolder under `public/gallery/`. Folder names with spaces need URL-encoding in `src` (`COLLEGE EVENTS` → `COLLEGE%20EVENTS`).

### 6.9 Volunteering — `src/data/volunteering.ts`
```ts
{
  id: "unique-id",
  conference: "Conference Name",
  role: "Your Role",
  image: "/conferences/image.jpg",
  color: "#22D3EE",
  highlights: ["Point 1.", "Point 2.", "Point 3."],
},
```
Add conference images to `public/conferences/`.

---

## 7. Static Assets — What Goes Where

| Asset | Location | Notes |
|-------|----------|-------|
| Transparent avatar | `public/avatar/avatar.png` | Central hub image in Hero. Transparent bg recommended. |
| Profile photo | `public/avatar/profile.png` | Used in About section card |
| Resume | `public/resume.pdf` | "Resume" button in Hero downloads this |
| Artwork images | `public/art/` | Any format — update `src/data/art.ts` to match |
| Gallery photos | `public/gallery/ACM/`, `ACMW/`, `COLLEGE EVENTS/` | Update `src/data/gallery.ts` |
| Conference images | `public/conferences/` | Update `src/data/volunteering.ts` |
| Favicon | `public/favicon.svg` | SVG favicon, editable |
| SEO meta / OG tags | `index.html` | Title, description, Open Graph, Twitter Card |

---

## 8. LazyImage Component

`src/components/LazyImage.tsx` is a reusable image wrapper used in Gallery and Art sections.

**What it does:**
- Shows an animated shimmer skeleton while the image is downloading
- Fades the image in with a blur-to-sharp effect once loaded (`blur-up`)
- Falls back to a text placeholder if the image errors

**Usage:**
```tsx
<LazyImage
  src="/gallery/ACM/photo.jpg"
  alt="ACM event"
  className="h-40"            // wrapper div class
  imgClassName="object-cover" // img tag class
  style={{ minHeight: 160 }}  // optional inline styles
/>
```

---

## 9. Smooth Scroll (Lenis)

`src/hooks/useSmoothScroll.ts` initialises Lenis and is called once in `App.tsx`:

```ts
export default function App() {
  useSmoothScroll();  // ← Lenis runs for the full app lifetime
  return ( ... );
}
```

**Settings (in `useSmoothScroll.ts`):**

| Setting | Value | Effect |
|---------|-------|--------|
| `duration` | `1.25s` | Scroll glide duration |
| `easing` | ease-out-expo | Fast start, graceful deceleration |
| `smoothWheel` | `true` | Smooth mouse wheel |
| `touchMultiplier` | `1.8` | Touch scroll sensitivity |

All anchor link clicks (`href="#section-id"`) are intercepted and handed to Lenis with a `-80px` offset so the floating nav doesn't cover headings.

---

## 10. Deployment — Vercel (Recommended)

The repo is already git-initialised with one commit. To deploy:

```bash
# 1. Create a GitHub repo at github.com/new (public, no README)
# 2. Push your code
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main

# 3. Go to vercel.com → Add New Project → import the repo
# 4. Vercel auto-detects Vite — keep all defaults → Deploy
```

**Every `git push` to `main` auto-redeploys.**

After deploying, update the `og:url` in `index.html` to your live URL, then push again.

### For future changes:
```bash
# Make your edits, then:
git add .
git commit -m "describe what you changed"
git push
```
Vercel picks it up and redeploys in ~60 seconds.

---

## 11. Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^18.3 | UI framework |
| `react-dom` | ^18.3 | DOM rendering |
| `framer-motion` | ^11 | Scroll animations, transitions, spring physics |
| `lenis` | ^1.3 | Premium smooth scroll |
| `lucide-react` | ^0.468 | Icon library |
| `vite` | ^5 | Build tool and dev server |
| `@vitejs/plugin-react` | ^4 | Vite React plugin |
| `tailwindcss` | ^3 | Utility CSS framework |
| `typescript` | ^5 | Type safety |
| `postcss` | ^8 | CSS processing |
| `autoprefixer` | ^10 | CSS vendor prefixes |

---

## 12. Quick Reference — File to Edit for Each Change

| What you want to change | File to edit |
|-------------------------|-------------|
| Name, email, phone, social links | `src/data/site.ts` |
| Add/edit a project | `src/data/projects.ts` |
| Add/edit a skill category | `src/data/skills.ts` |
| Add/edit an internship | `src/data/experience.ts` |
| Update education or coursework | `src/data/education.ts` |
| Add a research topic | `src/data/research.ts` |
| Add a certification | `src/data/certifications.ts` |
| Add artwork to Art section | `src/data/art.ts` + `public/art/` |
| Add photo to Gallery | `src/data/gallery.ts` + `public/gallery/subfolder/` |
| Add conference to Volunteering | `src/data/volunteering.ts` + `public/conferences/` |
| Avatar image | `public/avatar/avatar.png` |
| Profile photo (About section) | `public/avatar/profile.png` |
| Resume download | `public/resume.pdf` |
| Page title / SEO / OG tags | `index.html` |
| Section order | `src/App.tsx` |
| Floating nav links | `src/components/FloatingNav.tsx` → `NAV_LINKS` |
| Right-side section dots | `src/components/SectionDots.tsx` → `SECTIONS` |
| Hero typing roles | `src/components/Hero.tsx` → `ROLES` array |
| Hero radial nav buttons | `src/components/Hero.tsx` → `RADIAL_ITEMS` array |
| Hero stats (10+ projects etc.) | `src/components/Hero.tsx` → `STATS` array |
| About biography text | `src/components/About.tsx` |
| "What I Bring" pillars | `src/components/WhatIBring.tsx` |
| Colour palette | `src/index.css` `:root` + `tailwind.config.ts` |
| Fonts | `index.html` Google Fonts URL + `tailwind.config.ts` |
| Smooth scroll speed | `src/hooks/useSmoothScroll.ts` → `duration` |

---

## 13. Common Tasks

### Add a new section
1. Create `src/components/NewSection.tsx` with `id="new-section"` on the root `<section>`
2. Add a data file `src/data/newSection.ts` if needed
3. Import and add `<NewSection />` in `src/App.tsx` at the correct position
4. Add to `SECTIONS` in `src/components/SectionDots.tsx`
5. Optionally add to `NAV_LINKS` in `src/components/FloatingNav.tsx`

### Add a new project category
In `src/data/projects.ts`, add the new string to the `projectCategories` array. The filter pill appears automatically.

### Change the primary colour
Edit in `src/index.css` → `--primary: #your-hex;` and in `tailwind.config.ts` → `primary: "#your-hex"`.

### Disable the particle background
In `src/App.tsx`, comment out `<ParticleBackground />`.

### Disable the grain texture
In `src/App.tsx`, comment out `<div className="grain-overlay" aria-hidden />`.

---

*Document updated April 2026.*
