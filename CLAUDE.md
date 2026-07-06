# Portfolio Website — Manjot Saggu

## Project Overview
Personal portfolio website for Manjot Saggu, Compliance Engineer (EIT) at Manitoba Hydro (NERC reliability compliance).
React 18 + TypeScript 5, Vite 5, deployed to GitHub Pages at https://msaggu204.github.io/portfolio-manjot/

## Tech Stack
- React 18 + TypeScript 5 + Vite 5 — **zero animation libraries**; all motion is CSS + canvas + IntersectionObserver
- CSS Modules for scoped component styles
- EmailJS (`@emailjs/browser`) for contact form
- Vitest + jsdom for testing
- GitHub Pages via gh-pages package

## Architecture
```
src/
├── data/          ← ALL site content + structure
│   ├── profile.ts, experiences.ts, projects.ts, volunteering.ts
│   ├── spheres.ts   ← life buckets (U of A, Personal, Community, Manitoba Hydro, …) items are tagged with
│   ├── ventures.ts  ← ongoing side hustles/businesses (section hidden while empty)
│   └── sections.ts  ← homepage section registry → nav links, numbering, hashes
├── sections/      ← One file per top-level homepage section + NotFound
├── components/    ← Reusable UI (Nav, Hero, Splash, Footer, Reveal, PowerGrid,
│                    ScrollProgress, SectionHeading, SphereBadge, Timeline, Projects, Contact)
├── hooks/         ← useInView (scroll-triggered visibility)
└── styles/        ← variables.css (design tokens — single source of truth)
```

Homepage composition (App.tsx): `Splash → ScrollProgress → Nav → Hero → About → Experience → Projects → (Ventures) → Involvement → Contact → Footer`.
Section order/labels live in `src/data/sections.ts`; nav links, "0N //" numbering, and valid hashes all derive from it. Legacy `#workexperience`/`#volunteering` anchors are aliased in App.tsx — keep them.

**The site is an umbrella portfolio.** It covers all of Manjot's life, not just engineering: every project/volunteering/venture item carries a `sphereId` (see `spheres.ts`) identifying which bucket of life it belongs to. Spheres drive the primary filter in Projects and the badges on cards/timelines.

## How to Extend (recipes for future sessions)
- **Update any content** (bio, jobs, projects, facts, skills): edit `src/data/*.ts` only. Components never hardcode content.
- **Add a project**: append an object to `src/data/projects.ts` with a `sphereId`. Categories, sphere filters, and badges derive automatically.
- **Add a venture / side hustle / business**: append to `src/data/ventures.ts`. The Ventures section, nav link, and section numbering appear automatically — zero component changes. Statuses: `active` / `building` / `paused`.
- **Add a sphere** (e.g. music, a business, guitar teaching): add an entry to `src/data/spheres.ts` (optionally with a logo in `public/`), then tag items with its id. The U of A (`public/UofA_Eng.png`) and Manitoba Hydro (`public/MH_logo.jpeg`) spheres use badge logos — follow that pattern. A sphere only appears as a Projects filter once a project is tagged with it.
- **Add a homepage section**: create `src/sections/<Name>Section.tsx` + module.css, use `<SectionHeading index={sectionIndex('<id>')} title="…" />` and wrap content in `<Reveal>`. Register the id/label in `src/data/sections.ts` (ordering there controls numbering + nav) and render it in App.tsx.
- **Spin off a separate site**: when a venture develops its own brand/audience, give it its own site and set its `link` in `ventures.ts` — this site stays the hub that points everywhere.
- **Swap the headshot**: replace `public/headshot.jpg` (4:5-ish portrait; keep it ≤ ~400 KB — downscale with `sips -Z 1600 -s format jpeg -s formatOptions 78`). To use a different filename, change `profile.headshot`.
- **Animate anything**: use `<Reveal direction delay>` (components/Reveal) — never hand-roll IntersectionObserver. The hero background is `components/PowerGrid` (canvas).

## Key Patterns
- **Data-driven rendering**: all content lives in `src/data/*.ts`.
- **CSS Modules**: every component gets a `.module.css`. Do NOT add global class names to `index.css` (global keyframes + reset only live there).
- **Design tokens**: colors/fonts/spacing/motion/z-index come from `src/styles/variables.css`. Never hardcode hex colors in modules — use the tokens (`--bg-*`, `--accent`, `--gradient-brand`, `--glow*`, `--text-*`, `--fs-*`, `--ease-*`, `--z-*`).
- **No inline styles**, with one sanctioned exception: per-instance dynamic values (Reveal's `transitionDelay`, ProjectCard's `--mx/--my` spotlight vars).
- **Reduced motion**: `index.css` globally disables animation for `prefers-reduced-motion`; JS-driven animation (PowerGrid, Hero cycler) must also check `matchMedia('(prefers-reduced-motion: reduce)')`.
- **Semantic HTML**: `<section>`, `<nav>`, `<main>`, `<footer>` — not bare `<div>` wrappers.
- **Env vars**: `VITE_` prefix, stored in `.env.local` (gitignored).
- **`import.meta.env.BASE_URL`** for public asset paths (site is served from a subpath).
- Images below the fold get `loading="lazy"`; external links get `target="_blank" rel="noopener noreferrer"`.

## Commands
- `npm start` — Dev server (Vite, hot reload)
- `npm run build` — Type-check + production build → `dist/`
- `npm run preview` — Preview production build locally
- `npm run deploy` — Build + deploy to GitHub Pages
- `npm test` — Run Vitest suite once

## Testing
- Suite lives in `src/App.test.tsx`; jsdom mocks for `IntersectionObserver` and `matchMedia` are in `src/setupTests.ts`.
- jsdom has no canvas — `PowerGrid` guards a null 2D context, so rendering `<Hero>` in tests is safe.
- Keep the suite green before deploying.

## Contact Form Setup (EmailJS)
1. Create account at https://www.emailjs.com
2. Add Email Service → note the **Service ID**
3. Create Email Template with vars: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`. Set "To Email" to your address. Note the **Template ID**.
4. Account → API Keys → note the **Public Key**
5. (Security) In EmailJS dashboard → Allowed Origins → add `https://msaggu204.github.io`
6. Copy `.env.local.example` → `.env.local` and fill in the three values
7. For GitHub Pages deployment, set these as repository secrets and add a build step, OR accept that they'll be baked into the bundle (EmailJS public keys are safe to expose — they're domain-restricted)

## Deployment
- Hosted at: https://msaggu204.github.io/portfolio-manjot/
- `npm run deploy` builds and pushes `dist/` to the `gh-pages` branch
- Resume at: `public/resume.html` → served at `/portfolio-manjot/resume.html` (content may need refreshing)

## Phase Roadmap
- **Phases 1–4** ✅ Architectural cleanup, visual overhaul, projects UX, Vite/Vitest migration
- **Phase 5** ✅ Full redesign — power-grid canvas hero, About section w/ headshot, named sections, shared Timeline, Reveal/ScrollProgress/SectionHeading primitives, NERC content
- **Phase 6** ✅ Umbrella-portfolio structure — spheres (life buckets) with filters + badges, ventures scaffold (hidden until populated), section registry
- **Future ideas**: first venture entry, refreshed resume.html, designed og:image card, custom domain (manjotsaggu.com would suit the umbrella positioning), blog/notes section, light-mode toggle (tokens are ready)

## Rules
- Never hardcode content in components — use `src/data/` files
- Never copy-paste `IntersectionObserver` — use `<Reveal>` or the `useInView` hook
- Never add styles to `index.css` (global) — use CSS Modules + tokens from `variables.css`
- `.env.local` is gitignored — never commit it
- Manitoba Hydro bullets in `experiences.ts` describe general NERC compliance duties — confirm specifics with Manjot before embellishing them
