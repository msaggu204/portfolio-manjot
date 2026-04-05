# Portfolio Website — Manjot Saggu

## Project Overview
Personal portfolio website for Manjot Saggu, Compliance Engineer (EIT) at Manitoba Hydro.
React 18 + TypeScript 5, Vite 5, deployed to GitHub Pages at https://msaggu204.github.io/portfolio-manjot/

## Tech Stack
- React 18 + TypeScript 5 + Vite 5
- CSS Modules for scoped component styles
- EmailJS (`@emailjs/browser`) for contact form
- Vitest + jsdom for testing
- GitHub Pages via gh-pages package

## Architecture
- `src/data/` — **Centralized content** (experiences, projects, volunteering, profile). To add a project, add an object to `projects.ts`. No new component files needed.
- `src/components/` — Reusable UI components with co-located `.module.css` files
- `src/pages/` — Page-level section compositions
- `src/hooks/` — Custom hooks (`useInView` for scroll-triggered animations)
- `src/styles/variables.css` — CSS custom properties (design tokens)
- `index.html` — Root entry point (Vite, not in `public/`)

## Key Patterns
- **Data-driven rendering**: All content lives in `src/data/*.ts`. Adding/editing content never requires touching component files.
- **CSS Modules**: Every new component gets a `.module.css` file. Do NOT add global class names to `index.css`.
- **`useInView` hook**: Use this for all scroll-triggered animations. Never copy-paste `IntersectionObserver` directly.
- **Semantic HTML**: Use `<section>`, `<nav>`, `<header>`, `<footer>` — not bare `<div>` wrappers.
- **No inline styles**: All styling goes in CSS modules. Never use `style={{}}` props.
- **Environment variables**: Use `VITE_` prefix. Store in `.env.local` (gitignored). Never commit secrets.
- **`import.meta.env.BASE_URL`**: Use this for public asset paths (e.g. resume link), not `process.env.PUBLIC_URL`.

## Commands
- `npm start` — Dev server (Vite, hot reload)
- `npm run build` — Type-check + production build → `dist/`
- `npm run preview` — Preview production build locally
- `npm run deploy` — Build + deploy to GitHub Pages
- `npm test` — Run Vitest suite once
- `npm run test:ui` — Vitest browser UI

## Design Tokens (`src/styles/variables.css`)
- `--color-bg` `--color-accent` `--color-accent-light` `--color-text` `--color-text-sub` `--color-text-muted` `--color-text-pink` `--color-skill` `--color-border`
- `--font-mono` (Fira Code) `--font-sans` (Calibri)
- `--space-xs/sm/md/lg/xl` `--t-fast/med/slow` `--radius-sm/md`

## Contact Form Setup (EmailJS)
1. Create account at https://www.emailjs.com
2. Add Email Service → note the **Service ID**
3. Create Email Template with vars: `{{from_name}}`, `{{subject}}`, `{{message}}`. Set "To Email" to your address. Note the **Template ID**.
4. Account → API Keys → note the **Public Key**
5. (Security) In EmailJS dashboard → Allowed Origins → add `https://msaggu204.github.io`
6. Copy `.env.local.example` → `.env.local` and fill in the three values
7. For GitHub Pages deployment, set these as repository secrets and add a build step, OR accept that they'll be baked into the bundle (EmailJS public keys are safe to expose — they're domain-restricted)

## Deployment
- Hosted at: https://msaggu204.github.io/portfolio-manjot/
- Branch `gh-pages` is auto-published by `npm run deploy`
- Output folder: `dist/` (Vite default)
- Resume at: `public/resume.html` → served at `/portfolio-manjot/resume.html`

## Phase Roadmap
- **Phase 1** ✅ Architectural cleanup — data-driven components, CSS Modules, remove dead code
- **Phase 2** ✅ Visual/UX overhaul — Hero, Navbar, design tokens, splash screen, scroll animations
- **Phase 3** ✅ Projects — category filter pills, project detail modal, featured badges, splash screen
- **Phase 4** ✅ Performance — Vite 5 migration, TypeScript 5, Vitest, code splitting, tree-shaking
- **Phase 5** — Future: project detail pages, blog/notes section, dark/light mode toggle

## Rules
- Never hardcode content in components — use `src/data/` files
- Never copy-paste `IntersectionObserver` — use `useInView` hook
- Never add styles to `index.css` (global) — use CSS Modules
- Images below the fold must have `loading="lazy"`
- External links must have `target="_blank" rel="noopener noreferrer"`
- `.env.local` is gitignored — never commit it
