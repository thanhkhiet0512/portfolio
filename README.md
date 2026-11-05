# thanhkhiet.dev

Portfolio of **Nguyễn Thanh Khiết**, a backend engineer. Built with **Next.js** (App Router, static export) and **Tailwind CSS**, deployed to GitHub Pages at https://thanhkhiet.dev.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # static site in ./out
npm run typecheck
```

## Edit content

All copy lives in `content/`. You don't need to touch the components to change it:

| File | What's in it |
|---|---|
| `content/profile.ts` | Name, links, hero text, about, profile.yml facts, principles, contact |
| `content/experience.ts` | Jobs (newest first) |
| `content/projects.ts` | Case studies. Each one gets a page at `/projects/<slug>/` |
| `content/stack.ts` | Tech stack and the "now" section |

Every string is bilingual: `{ en: "...", vi: "..." }`. Wrap words in `**double asterisks**` to make them bold.

**Add a project:** copy an object in `content/projects.ts`, give it a new `slug` and choose a diagram (`nexq`, `satori` or `esmiles`), or add a new one in `components/diagrams.tsx`. The home page card, the detail page, the command palette and the sitemap update automatically.

## Structure

```
app/
  layout.tsx              # <html>, header, command palette, theme/lang boot script
  page.tsx                # home page
  projects/[slug]/page.tsx  # case study pages (generated from content/projects.ts)
  not-found.tsx, sitemap.ts, robots.ts
  globals.css             # Tailwind + design tokens (dark/light)
components/               # Header, Terminal, CommandPalette, diagrams, shared UI
content/                  # all the copy
public/                   # photo, favicons, CNAME (custom domain)
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages. `public/CNAME` keeps the custom domain.
