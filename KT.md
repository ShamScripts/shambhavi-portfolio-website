# Knowledge Transfer Document
## Shambhavi Jha — Personal Portfolio Website

**Project:** `shambhavi-vite-portfolio`  
**Location:** `e:\New folder\personal_website\shambhavi-vite-portfolio`  
**Last updated:** April 2026  
**Tech stack:** Vite · React 18 · TypeScript · Tailwind CSS v3 · Framer Motion

---

## 1. Quick Start

> Node.js must be installed. Run `node -v` to confirm. If not recognized, add it:
> ```powershell
> $env:Path = "C:\Program Files\nodejs;" + $env:Path
> ```

```powershell
# Open terminal in the project folder
cd "e:\New folder\personal_website\shambhavi-vite-portfolio"

# Install dependencies (only needed once, or after adding packages)
npm install

# Start development server
npm run dev
```

Open **http://localhost:5173** in your browser.

| Command | Purpose |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production → outputs to `dist/` |
| `npm run preview` | Preview the production build locally |

---

## 2. Project Structure

```
shambhavi-vite-portfolio/
│
├── public/                        # Static files served as-is
│   ├── avatar/
│   │   └── profile.png            ← YOUR PROFILE PHOTO (add here)
│   ├── art/
│   │   ├── art-1.svg ... art-6.svg  ← Art gallery images (replace with real ones)
│   ├── resume.pdf                 ← YOUR RESUME (already added)
│   └── favicon.svg
│
├── src/
│   ├── components/                # All UI sections
│   │   ├── AvatarCanvas.tsx       ← AI avatar (canvas animation)
│   │   ├── ParticleBackground.tsx ← Neural net background animation
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Research.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Clubs.tsx
│   │   ├── Art.tsx                ← Gallery with lightbox
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeading.tsx     ← Reusable heading component
│   │   └── ScrollProgress.tsx     ← Scroll bar + cursor glow
│   │
│   ├── data/                      # ← ALL CONTENT LIVES HERE
│   │   ├── site.ts                ← Name, email, phone, social links
│   │   ├── projects.ts            ← All project cards
│   │   ├── skills.ts              ← Skill categories and tags
│   │   ├── education.ts           ← Education entries + coursework
│   │   ├── experience.ts          ← Internships and roles
│   │   ├── research.ts            ← Research papers / interests
│   │   ├── certifications.ts      ← Certifications list
│   │   └── art.ts                 ← Art gallery metadata
│   │
│   ├── lib/
│   │   └── utils.ts               ← cn() helper for class merging
│   │
│   ├── App.tsx                    ← Root layout, section order
│   ├── main.tsx                   ← React entry point
│   └── index.css                  ← Global styles, CSS variables, utilities
│
├── index.html                     ← HTML entry (title, meta, fonts)
├── vite.config.ts                 ← Vite config (@/ alias)
├── tailwind.config.ts             ← Tailwind theme (colors, fonts)
├── tsconfig.app.json              ← TypeScript config
├── postcss.config.js              ← PostCSS (Tailwind + Autoprefixer)
└── package.json                   ← Dependencies and scripts
```

---

## 3. Design System

### Color Palette (Muted Luxury)

| Variable | Hex | Usage |
|---|---|---|
| `--background` | `#0f0f0f` | Page background |
| `--card` | `#181818` | Card base |
| `--primary` | `#e6c79c` | Gold — headings, highlights, borders |
| `--secondary` | `#a3b18a` | Sage — tags, accents, bullets |
| `--accent` | `#d62828` | Deep red — CTA buttons only |
| `--text` | `#f5f5f5` | Body text |
| `--muted` | `#b0b0b0` | Subtle text, labels |

These are defined in `src/index.css` under `:root` and also in `tailwind.config.ts` as Tailwind color tokens.

### Fonts
- **Display / headings:** Cormorant Garamond (serif) — loaded via Google Fonts
- **Body:** DM Sans (sans-serif) — loaded via Google Fonts

### Reusable CSS Classes (`src/index.css`)
| Class | Effect |
|---|---|
| `.glass-card` | Dark glass card with blur + gold border |
| `.gold-glow` | Soft gold drop-shadow |
| `.gold-hover` | Lift + gold border on hover |
| `.section-container` | Max-width container with padding |
| `.section-title` | Gold serif heading style |
| `.grain-overlay` | Fixed film grain texture over the entire page |
| `.scroll-progress-bar` | Top gold progress bar |

---

## 4. Updating Content

All site content is in `src/data/`. **You never need to touch the component files** to update text.

### 4.1 Personal Info — `src/data/site.ts`
```ts
export const site = {
  name: "Shambhavi Jha",
  email: "f20230009@dubai.bits-pilani.ac.in",
  phoneDisplay: "+971 54 434 6689",
  github: "https://github.com/ShamScripts/",
  linkedin: "https://www.linkedin.com/in/shamscript009/",
  instagram: "https://www.instagram.com/love_shambhavi",
  languages: "English (Fluent) · Hindi · Arabic",
};
```

### 4.2 Projects — `src/data/projects.ts`
Add a new project by appending an object to the `projects` array:
```ts
{
  title: "Your Project Title",
  period: "2025",
  category: "Machine Learning",        // Must match projectCategories list
  tech: ["Python", "PyTorch", "..."],
  description: "One-line what it does.",
  result: "Key outcome or metric.",
  details: [                           // Optional: shown in expandable section
    "Extra detail one.",
    "Extra detail two.",
  ],
  githubUrl: "https://github.com/ShamScripts/your-repo",
},
```

**Category options:** `"All" | "Machine Learning" | "Data & Analytics" | "Systems & Web" | "Research"`  
To add a new category, add it to the `projectCategories` array at the top of `projects.ts`.

### 4.3 Skills — `src/data/skills.ts`
Add or edit a category:
```ts
{ title: "New category", items: ["Skill A", "Skill B", "Skill C"] },
```

### 4.4 Experience — `src/data/experience.ts`
Append to the `experienceItems` array. Fields:
```ts
{
  id: "unique-id",
  title: "Role Title",
  org: "Organisation Name",
  location: "City, Country",       // optional
  period: "Month Year — Month Year",
  summary: "One sentence summary.",
  highlights: ["Point 1.", "Point 2."],
  tools: ["Tool A", "Tool B"],     // optional, shown as chips
},
```

### 4.5 Education — `src/data/education.ts`
```ts
{
  id: "bits",
  institution: "BITS Pilani, Dubai Campus",
  degree: "B.E. Computer Science",
  detail: "Birla Institute...",    // subtitle under institution name
  location: "Dubai, UAE",
  period: "2023 — 2027",
  coursework: ["Course 1", "Course 2"],
},
```

### 4.6 Research — `src/data/research.ts`
```ts
{
  title: "Paper or topic title",
  period: "2025 · Ongoing",
  points: ["Key point 1.", "Key point 2.", "Key point 3."],
},
```

### 4.7 Certifications — `src/data/certifications.ts`
```ts
{ title: "Certification Name", provider: "Issuer", link: "https://..." },
// link is optional — if present, a "View credential" link appears
```

### 4.8 Art Gallery — `src/data/art.ts`
To replace placeholder SVGs with real artwork:
1. Add your image files to `public/art/` (any format: `.jpg`, `.png`, `.webp`, `.svg`)
2. Update the entries in `art.ts`:
```ts
{ id: "1", title: "Painting Title", medium: "Watercolour on paper", imageSrc: "/art/my-painting.jpg", alt: "Description" },
```

---

## 5. Replacing Static Assets

| Asset | Path | Notes |
|---|---|---|
| Profile photo | `public/avatar/profile.png` | Used in both the Hero avatar canvas and the About photo card. Any size works; canvas clips it to a circle. |
| Resume | `public/resume.pdf` | Already added. "Download Resume" button in Hero links here. |
| Art images | `public/art/art-1.svg` ... | Replace with real paintings. Update `src/data/art.ts` to match filenames. |
| Favicon | `public/favicon.svg` | SVG favicon with "SJ" initials. Replace or edit inline. |

---

## 6. The AI Avatar (`AvatarCanvas.tsx`)

The animated avatar is a **HTML5 Canvas** component with 7 rendering layers drawn at 60fps:

| Layer | Description |
|---|---|
| 1 — Radial glow | Gold bloom from center |
| 2 — Reference rings | 4 dashed concentric circles |
| 3 — Madhubani petals | 16 rotating petal shapes (artistic soul) |
| 4 — Neural connections | Lines between nearby nodes (ML/data theme) |
| 5 — Outer nodes | 12 orbital gold/sage/red dots |
| 6 — Inner nodes | 8 smaller sage orbital dots |
| 7 — Particles | Gold flecks flowing outward from center |
| 8 — Portrait circle | Photo (`profile.png`) clipped to circle, or "SJ" initials if no photo |

**Mouse interaction:** outer nodes softly drift toward the cursor position.  
**Breathing:** the entire canvas scales subtly in/out (sine wave, ~7s period).  
**Rotation:** the portrait border ring has a rotating conic gradient (gold → sage → gold).

To change avatar colors, edit the `COLORS` object at the top of `AvatarCanvas.tsx`:
```ts
const COLORS = {
  gold: (a: number) => `rgba(230,199,156,${a})`,
  sage: (a: number) => `rgba(163,177,138,${a})`,
  red:  (a: number) => `rgba(214,40,40,${a})`,
};
```

---

## 7. Section Order

The page section order is set in `src/App.tsx`. To reorder, cut and paste component lines:

```tsx
<Hero />
<About />
<Skills />
<Projects />
<Research />
<Education />
<Experience />
<Clubs />
<Art />
<Certifications />
<Contact />
<Footer />
```

---

## 8. Deployment (Vercel — recommended)

1. Push the `shambhavi-vite-portfolio` folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import the repo.
3. Vercel auto-detects Vite. Settings to confirm:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**.

Every `git push` to `main` will trigger an automatic re-deploy.

---

## 9. Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3 | UI framework |
| `react-dom` | ^18.3 | DOM rendering |
| `framer-motion` | ^11 | Scroll animations, transitions, spring physics |
| `lucide-react` | ^0.468 | Icon library |
| `vite` | ^5 | Build tool and dev server |
| `tailwindcss` | ^3 | Utility CSS framework |
| `typescript` | ^5 | Type safety |
| `@vitejs/plugin-react` | ^4 | Vite React plugin |
| `autoprefixer` | ^10 | CSS vendor prefixes |
| `postcss` | ^8 | CSS processing |

---

## 10. Common Tasks

### Add a new section
1. Create `src/components/NewSection.tsx`
2. Add a data file `src/data/newSection.ts` if needed
3. Import and add `<NewSection />` in `src/App.tsx`
4. Add a nav link in `src/components/Navbar.tsx` → `links` array

### Change the accent / CTA color
Edit in `src/index.css`:
```css
--accent: #d62828;   /* change to any hex */
```
Also update in `tailwind.config.ts` → `colors.accent`.

### Change fonts
Replace the Google Fonts `@import` URL in `src/index.css` and update `tailwind.config.ts`:
```ts
fontFamily: {
  display: ["Your Display Font", "serif"],
  body: ["Your Body Font", "sans-serif"],
},
```

### Disable particle background
In `src/App.tsx`, comment out or remove:
```tsx
{/* <ParticleBackground /> */}
```

### Disable cursor glow
In `src/App.tsx`, comment out:
```tsx
{/* <CursorGlow /> */}
```

---

## 11. File to Edit for Each Change

| What you want to change | File to edit |
|---|---|
| Name, email, phone, social links | `src/data/site.ts` |
| Add/edit a project | `src/data/projects.ts` |
| Add/edit a skill | `src/data/skills.ts` |
| Add/edit a job or internship | `src/data/experience.ts` |
| Update education or coursework | `src/data/education.ts` |
| Add a research topic | `src/data/research.ts` |
| Add a certification | `src/data/certifications.ts` |
| Add art to gallery | `src/data/art.ts` + `public/art/` |
| Profile photo | `public/avatar/profile.png` |
| Resume file | `public/resume.pdf` |
| Page title / SEO meta | `index.html` |
| Section order | `src/App.tsx` |
| Nav links | `src/components/Navbar.tsx` |
| Hero typing roles | `src/components/Hero.tsx` → `ROLES` array |
| About biography text | `src/components/About.tsx` |
| Color palette | `src/index.css` + `tailwind.config.ts` |
| Avatar animation settings | `src/components/AvatarCanvas.tsx` |

---

*Document prepared April 2026.*
