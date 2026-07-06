# Manjot Saggu — Personal Portfolio

Personal portfolio of Manjot Saggu, Compliance Engineer (EIT) at Manitoba Hydro.

**Live site:** https://msaggu204.github.io/portfolio-manjot/

## Highlights

- ⚡ Animated "power grid" canvas hero — a nod to working on the bulk electric system
- 🎨 Token-driven dark design system (Space Grotesk / Inter / Fira Code, ember-red gradient brand)
- 🧩 Fully data-driven content — edit `src/data/*.ts`, never touch components
- ✨ Scroll-triggered reveals, cursor-tracking project cards, scroll-spy nav — zero animation libraries
- ♿ Reduced-motion support, focus management, semantic HTML, aria-live form status

## Stack

React 18 · TypeScript 5 · Vite 5 · CSS Modules · Vitest · EmailJS · GitHub Pages

## Development

```bash
npm install
npm start          # dev server
npm test           # vitest suite
npm run build      # type-check + production build
npm run deploy     # build + publish to gh-pages
```

## Structure

- `src/data/` — all site content (profile, experiences, projects, volunteering)
- `src/sections/` — homepage sections
- `src/components/` — reusable UI and animation primitives (`Reveal`, `PowerGrid`, `SectionHeading`, …)
- `src/styles/variables.css` — design tokens

## Resume

Accessible at [/resume.html](https://msaggu204.github.io/portfolio-manjot/resume.html) (embedded PDF viewer).

See `CLAUDE.md` for architecture details and extension recipes.
