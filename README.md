# Hamza Ibrahem — Portfolio

Personal portfolio built with Next.js 16, Tailwind CSS v4, Framer Motion and [Nur UI](https://www.nurui.dev/) components, following the "Premium Dark Gold" design guide. Supports dark (default) and light modes.

```bash
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Editing content

All content lives in `data/` — the section components read from these files, so you never need to touch the UI to add things.

| What | File | Notes |
| --- | --- | --- |
| Name, bio, contact info, social links | `data/profile.ts` | |
| Projects | `data/projects.ts` | Add a screenshot to `public/projects/` and set `image`, or set `logo` (in `public/projects/logos/`) for private projects. With neither, a "Screenshot coming soon" placeholder shows. `featured: true` shows the project before "Show all projects"; the first featured project gets the large spotlight card. |
| Certifications | `data/certifications.ts` | Put a preview `image` (1200×927 WebP works best) and the `pdf` in `public/certificates/`. Certificates with an image appear in the gallery (with lightbox and issuer filter); the rest are listed under "More credentials". |
| Experience timeline | `data/experience.ts` | Newest role first. |
| Education | `data/education.ts` | |
| Tech stack | `data/skills.ts` | Icons come from `react-icons/si`. |


## Structure

```
app/                  layout (fonts, theme script, metadata), page, global styles & design tokens
components/nurui/     Nur UI components (gradient hero, gradient text, spotlight glow card, shiny inputs, …)
components/sections/  one component per page section
components/cards/     ProjectCard, CertificationCard, ExperienceItem
components/layout/    Navbar, Footer, ThemeToggle
data/                 all portfolio content
```

The theme is stored on `<html data-theme>` and in `localStorage`; colours are CSS variables in `app/globals.css`.

Set `NEXT_PUBLIC_SITE_URL` to the deployed domain (e.g. `https://hamzaibrahem.dev`). It drives the canonical URL, `sitemap.xml`, `robots.txt`, the structured data (JSON-LD) and social preview links. On Vercel the production URL is used automatically if it is not set.

SEO files: `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/opengraph-image.tsx` (generated share card), `app/icon.svg` + `app/apple-icon.png`, and `components/seo/json-ld.tsx` (Person / WebSite / ProfilePage schema).
