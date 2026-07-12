# Amit Roy — Cybersecurity Portfolio

A dark, terminal-inspired portfolio built with **React + TypeScript + Vite + Tailwind CSS v4**.

## Quick start

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploy to GitHub Pages (project page)

This repo is already set up for this — repo name assumed to be **`portfolio-v5`**.

1. Push this folder to a new GitHub repo named `portfolio-v5`.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
   `.github/workflows/deploy.yml` builds the site and publishes it automatically.
4. Your site goes live at `https://<your-username>.github.io/portfolio-v5/`.

**If you rename the repo**, open `vite.config.ts` and change:
```ts
base: '/portfolio-v5/',
```
to `base: '/<your-repo-name>/'` — then push again.

**If this will be a user/org page** (repo literally named `<username>.github.io`) or you're using a **custom domain**, change that same line to `base: '/'`.

## Deploy elsewhere

The `/dist` folder after `npm run build` is a fully static site — also works on:
- **Vercel / Netlify**: connect the repo, build command `npm run build`, output dir `dist` (set `base: '/'` in `vite.config.ts` first, since these serve from the domain root)
- Any static host (S3, Cloudflare Pages, etc.)


## Editing content

All resume content (skills, projects, experience, education, certifications, achievements)
lives in one place: **`src/data.ts`**. Edit that file to update anything on the site —
no need to touch components.

## Replacing files

- Profile photo: `public/assets/profile.jpg`
- Resume PDF (linked from the nav + hero "Download resume" button): `public/assets/Amit_Roy_Resume.pdf`
- Certificate files: `public/certificates/` — referenced by filename in `src/data.ts`

## Structure

```
src/
  components/     Hero, Nav, Skills, Projects, Experience, Education,
                   Certifications, Achievements, Interests, Contact, Footer
  data.ts         all resume content — edit here
  index.css       design tokens (colors, fonts) + global styles
```

## Design notes

- Theme: dark terminal / SOC console aesthetic — phosphor green (#39ff88) on near-black,
  with amber/red used sparingly for severity accents.
- Fonts: JetBrains Mono (headings/labels/code) + Inter (body).
- The hero types out a boot sequence on load; the profile photo sits in a
  "biometric clearance" card with a scanning sweep animation.
- Respects prefers-reduced-motion throughout.
