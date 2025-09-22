# Copilot Instructions for website-draganddrop

## Project Overview
- **Type:** React single-page app using [Vite](https://vitejs.dev/) for fast development and build.
- **Purpose:** Interactive portfolio/creative site with drag-and-drop, parallax, and scroll-based animations.
- **Key Libraries:**
  - `react`, `react-dom` (UI)
  - `motion` (main animation lib, see `Header.jsx`)
  - `framer-motion` (used in `TypoOne.jsx`)

## Architecture & Structure
- **Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`
- **Components:**
  - `src/components/header/Header.jsx` — Drag-and-drop images, custom constraints, uses `motion`.
  - `src/components/about/About.jsx` — Animated section, uses `framer-motion`.
  - `src/components/typoone/TypoOne.jsx` — Parallax marquee, scroll velocity, uses `framer-motion`.
- **Assets:** All images in `src/assets/`.
- **Styling:**
  - Each component has a matching `.css` file (e.g., `Header.css`).
  - Global styles in `src/index.css`.

## Developer Workflows
- **Start dev server:** `npm run dev` (hot reload via Vite)
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`
- **Lint:** `npm run lint` (uses ESLint, see `eslint.config.js`)

## Patterns & Conventions
- **Component structure:**
  - Each major UI section is a folder in `src/components/` with its own `.jsx` and `.css`.
  - Use functional React components only.
- **Animation:**
  - Use `motion` for drag-and-drop and scroll-based effects (see `Header.jsx`, `TypoOne.jsx`).
  - Use `framer-motion` for scroll/entrance animations (see `About.jsx`, `TypoOne.jsx`).
- **Image imports:**
  - Import images as modules (e.g., `import pic1 from '../../assets/pic1.jpeg'`).
- **No TypeScript:**
  - Project is JS-only, but some dev dependencies reference types for editor support.
- **No routing:**
  - All content is rendered in a single page (`App.jsx`).

## Integration & External Dependencies
- **Vite plugins:** Uses `@vitejs/plugin-react` for React fast refresh.
- **ESLint:** Configured for React, React Hooks, and Vite-specific rules. See `eslint.config.js` for custom rules (e.g., ignore unused vars starting with uppercase).

## Examples
- **Drag-and-drop:** See `Header.jsx` for how images are made draggable with constraints.
- **Parallax/Marquee:** See `TypoOne.jsx` for scroll velocity and horizontal marquee logic.
- **Section animation:** See `About.jsx` for entrance animation on scroll.

## Tips for AI Agents
- Follow the per-component folder structure and CSS co-location.
- Use Vite's dev server for fast feedback.
- When adding new sections, mimic the structure of `header`, `about`, or `typoone`.
- For new animations, prefer `motion` or `framer-motion` as in existing components.
- Keep all assets in `src/assets/` and import them as modules.

---
If you add new conventions or workflows, update this file to help future agents.
