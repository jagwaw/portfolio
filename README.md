# XC Portfolio — Nuxt 3

> Personal portfolio for Exiequielle John Frias (XC) — Frontend Engineer, Manila, Philippines.

## Stack

- **Framework**: Nuxt 3 + TypeScript (strict)
- **Styling**: Tailwind CSS v3
- **Animations**: GSAP + ScrollTrigger
- **Fonts**: Space Grotesk · Inter · JetBrains Mono

## Quick Start

Requires **Node 20** (`nvm use`).

```bash
npm install
npm run dev          # http://localhost:3000
npm run dev:clean    # if dev server errors after cache issues
npm run build
npm run preview
```

## Project Structure

```
portfolio/
├── app.vue
├── nuxt.config.ts
├── composables/
│   ├── useProjects.ts      # Work + personal project data
│   ├── useSiteLinks.ts     # Email, GitHub, resume URL
│   ├── useScrollTo.ts      # Smooth scroll to sections
│   └── useSectionReveal.ts # GSAP scroll animations
├── components/
│   ├── NavBar.vue
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   ├── ExperienceSection.vue
│   ├── ProjectsSection.vue # Work grid + personal GitHub grid
│   ├── ProjectCard.vue
│   ├── ProjectModal.vue
│   └── …
├── public/
│   ├── XCResume2026.pdf    # Resume download (visitors)
│   ├── XCResume2026.docx   # Editable source (regenerate: npm run resume)
│   └── images/projects/    # Thumbnails: {project-id}.jpg
└── scripts/
    └── patch-nuxt-callhook.mjs
```

## Adding Personal GitHub Projects

1. Open **`composables/useProjects.ts`**
2. Add an object to the **`personalProjects`** array (see commented example)
3. Set `id`, `name`, `description`, `stack`, `highlights`, `githubUrl`, `demoUrl`
4. Optional thumbnail: **`public/images/projects/{id}.jpg`**

They appear under **“Personal projects”** on the site, below your work history cards.

## Work Projects

Company/product UI stays in **`workProjects`** in the same file.

## Customization

Edit copy in **`content/`** — components read it via `useSiteContent()` / `useProjects()`.

| What | File |
|------|------|
| Person, links, nav, SEO | `content/site.ts` |
| Hero | `content/hero.ts` |
| About | `content/about.ts` |
| Skills | `content/skills.ts` |
| Experience | `content/experience.ts` |
| Work + personal projects | `content/projects.ts` |
| Contact | `content/contact.ts` |
| TypeScript models | `types/content.ts` |

## Deployment

```bash
npm run build
# Vercel: connect repo, Node 20, build command `npm run build`
```

Visitors download **`public/XCResume2026.pdf`**. The editable Word file **`public/XCResume2026.docx`** is kept in sync when you run `npm run resume` (see `scripts/build-resume.py`). Python deps: `pip install -r scripts/requirements-resume.txt`.
