# zeinsleiman.com

Personal blog and portfolio — now powered by [Astro](https://astro.build/) and deployed on GitHub Pages.

## Quick start

```bash
npm install        # install dependencies
npm run dev        # start local dev server at http://localhost:4321
npm run build      # build static site to dist/
npm run preview    # preview production build locally
```

## Structure

```
src/
├── layouts/        BaseLayout (shared sidebar, nav, contact block, footer)
├── pages/          index, about, archive, readings
├── components/     ContactBlock, ReadingCard
├── data/           contact-links.ts, navigation.ts, readings.ts
└── styles/         site.css
public/             favicon, robots.txt
```

## Contact links

Only **GitHub** and **LinkedIn** are shown. Email and Keybase were intentionally removed.

## Legacy content

Existing Jekyll posts were not migrated. The site starts fresh — add new content to `src/data/readings.ts` or create Markdown files under `src/content/`.
