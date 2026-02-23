# Implementation Plan: Astro migration with trimmed contact links

**Branch**: `001-migrate-astro-blog` | **Date**: 2026-02-20 | **Spec**: [spec.md](spec.md)  
**Input**: Feature specification from `/specs/001-migrate-astro-blog/spec.md`

## Summary

Rebuild the personal website as an Astro site using the official blog example theme so the homepage, archive, about, and readings pages keep the same layout while the contact block drops email and Keybase links; continue targeting GitHub Pages for deployment and keep the site runnable locally for validation.

## Technical Context

**Language/Version**: Astro 4.x with TypeScript support running on Node.js 20 LTS  
**Primary Dependencies**: `astro`, `@astrojs/github-pages`, plus the preview/blog starter’s dependencies (e.g., `@astrojs/image`, `@astrojs/rss`) used by `withastro/astro/examples/blog`  
**Storage**: Static files only (Markdown/MDX content stored beside components in the `src/content` or `src/data` folders)  
**Testing**: Local validation via `npm run dev` for interactive preview and `npm run build` for the production-ready static output  
**Target Platform**: GitHub Pages (static site) and modern browsers when running locally or via the deployed domain  
**Project Type**: Static content-focused web frontend  
**Performance Goals**: Maintain sub-second first contentful paint by shipping minimal JavaScript (Astro islands only where needed) and efficient static assets  
**Constraints**: Keep LinkedIn and GitHub as the only contact links, preserve archive/about/readings navigation, deploy through GitHub Pages, and avoid migrating legacy Jekyll entries  
**Scale/Scope**: Single-page home plus three secondary pages and a lightweight readings list (small volume of curated content)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Violation**: The constitution mandates “Jekyll-first publishing,” yet this plan shifts the stack to Astro per the user request.  
  **Why needed**: Astro delivers faster static output, matches the requested theme, and gives a clean slate to rebuild without legacy posts while still generating plain HTML/CSS/JS that GitHub Pages can host.  
  **Simpler alternative rejected**: Remaining on Jekyll would ignore the mandate to switch to Astro and prevent the user from trimming the site and resetting content.  
- **Other gates**: The new plan continues to honor the remaining constitution items by keeping shared layouts, assets, and metadata at the repo root so the site stays compatible with GitHub Pages after migration.

*Post-design check*: After the research and design artifacts were produced, the original justification still applies—the site keeps GitHub Pages compatibility and the mandated contact/navigation constraints, so no new constitution violations emerged.

## Project Structure

### Documentation (this feature)

```text
specs/001-migrate-astro-blog/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # (Generated later via /speckit.tasks, not part of /speckit.plan)
```

### Source Code

```text
astro.config.mjs
package.json
package-lock.json
src/
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   └── ContactBlock.astro
├── pages/
│   ├── index.astro
│   ├── about.astro
│   ├── archive.astro
│   └── readings.astro
├── components/
│   ├── Navigation.astro
│   └── ReadingCard.astro
├── data/
│   └── readings.ts
└── content/
    └── (placeholders for future entries)
public/
├── favicon.svg
└── robots.txt
assets/
└── css/
    └── site.css
```

**Structure Decision**: One Astro frontend project mirrors the existing site; the blog example theme defines the layout, and content/reading metadata live in `src/data`. `public` holds static assets, while `assets/css/site.css` and Astro components reuse the shared layout/ includes from the original Jekyll site.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Jekyll-first publishing | Migration to Astro was explicitly requested; acknowledges improved performance and local dev experience while still outputting static assets | Staying on Jekyll would ignore the user’s directive and keep the outdated tooling even though Astro is the desired replacement |
