---
title: "Migrating This Blog from Jekyll to Astro"
date: 2026-02-20
tags: [astro, jekyll, migration, github-pages, web-development]
published: true
description: "How I migrated my personal blog from Jekyll to Astro — the reasoning, the process, and what the new stack looks like."
---

After years of running this site on Jekyll and GitHub Pages, I decided it was time for a change. This post walks through why I migrated to [Astro](https://astro.build), what the process looked like, and how the new site is structured.

## Why Leave Jekyll?

I did not leave Jekyll because it was broken. I left because I wanted a modern stack and, with AI agents now widely available, I wanted to experiment, learn in public, and share what I learned.
I had not updated this site in years. To break that cycle, I used this migration as a practical learning project: define the work with Spec Kit, then execute it end-to-end with Copilot CLI using GPT and Claude models as implementation partners.
Astro was the right fit for that goal: modern developer experience, static-first output for GitHub Pages, and a clean content model that made it easy to restart and iterate quickly.

## The Migration Plan

I took a deliberate, structured approach rather than hacking things together:

1. **Defined requirements with [Specify Kit (spec-kit)](https://github.com/github/spec-kit)** — all requirements were generated using Specify Kit, then refined to keep the same navigation (Home, About, Archive, Readings), keep only GitHub and LinkedIn contact links (removing email and Keybase), and start fresh without migrating legacy posts.
2. **Set up the Astro project** — configured `astro.config.mjs` for static output targeting `zeinsleiman.com`, added TypeScript support, and created the `package.json` with dev/build/preview scripts.
3. **Preserved the visual identity** — the original site had a distinctive dark sidebar (`#2e2e3a`), an orange accent color (`#f64929`), and Roboto Slab / Roboto font pairing. All of that carried over into the new `site.css`.
4. **Built the component architecture** — a shared `BaseLayout.astro` handles the sidebar, navigation, contact links, and footer. Individual pages just slot their content in.
5. **Created content infrastructure** — Astro's content collections with a Zod schema give me type-safe frontmatter validation for blog posts. No more silent failures from a typo in YAML.
6. **Validated the build** — the final build produces 5 static pages in about 1.2 seconds with zero client-side JavaScript.

## What the New Stack Looks Like

```
src/
├── content/blog/        # Markdown posts go here
├── components/          # ContactBlock, ReadingCard
├── data/                # contact-links.ts, navigation.ts, readings.ts
├── layouts/             # BaseLayout, PostLayout
├── pages/               # index, about, archive, readings, blog/[slug]
└── styles/site.css      # All styles in one file
```

Key technical choices:

- **Astro 5.x** with static output — no SSR, no adapter, just HTML files in `dist/`.
- **Content collections** with `content.config.ts` defining the blog schema (title, date, tags, published, description).
- **Dynamic routing** via `src/pages/blog/[slug].astro` — Astro generates a page for each published post at build time.
- **No external icon libraries** — contact link icons are inline SVGs, keeping the dependency count minimal.
- **GitHub Pages** for hosting — same as before, just deploying the `dist/` folder instead of relying on Jekyll's built-in GitHub Pages integration.

## Publishing a New Post

The workflow is straightforward:

1. Create a Markdown file in `src/content/blog/` with the required frontmatter:

```yaml
---
title: "Post Title"
date: 2026-02-20
tags: [tag1, tag2]
published: true
description: "A short summary."
---
```

2. Write the post content in Markdown below the frontmatter.
3. Run `npm run dev` to preview locally at `localhost:4321`.
4. Push to GitHub — the site builds and deploys.

The archive page automatically groups posts by year, and the homepage lists them in reverse chronological order. Setting `published: false` in the frontmatter hides a post from the build without deleting it.

## What I Didn't Migrate

I intentionally left all legacy Jekyll posts behind. The old `_posts/`, `_layouts/`, `_includes/`, and `_config.yml` files still exist in the repository history, but the Astro build ignores them entirely. This was a clean-slate decision — the old content had served its purpose, and starting fresh felt right.

## Final Thoughts

The migration took a single focused session. Using Copilot CLI with Opus 4.6 made the migration seamless and helped me move this simple site to Astro in about one hour, even with minimal Astro knowledge. Astro's learning curve is gentle if you're already comfortable with component-based frameworks, and the static output model maps perfectly to GitHub Pages.

If you're running a Jekyll blog and want to experiment with AI Agents, this might be a cool experiment.
