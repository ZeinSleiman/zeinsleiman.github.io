- **Decision**: Adopt the `withastro/astro` official blog example as the basis for the migration.  
  **Rationale**: The example already mirrors a content-focused blog layout, rendering Markdown-driven pages with a clear layout that matches the current site structure, and it keeps the JavaScript footprint minimal thanks to Astro’s islands-first architecture (Astro docs emphasize fast, static-first sites).  
  **Alternatives considered**: Staying on Jekyll (would ignore the requested migration) or hand-crafting a separate Astro theme (would cost more time with minimal added value compared to the ready-made example).

- **Decision**: Configure deployment through the `@astrojs/github-pages` adapter so each `astro build` output becomes the GitHub Pages site.  
  **Rationale**: The adapter is designed for GitHub Pages, producing static files that can be deployed via the branch, keeping within the constitution’s demand for GitHub Pages compatibility.  
  **Alternatives considered**: Pushing to a separate hosting provider (violates the GH Pages constraint) or relying on manual uploads to the `gh-pages` branch (risk of drift and extra steps that the adapter automates).

- **Decision**: Validate the migration locally using `npm run dev` for previews and `npm run build` for production verification.  
  **Rationale**: Astro’s CLI (per the doc’s install & dev guidance) makes local testing simple, ensuring the contact links and navigation stay correct before every push.  
  **Alternatives considered**: Skipping local builds (risking regressions) or using alternative dev servers (Astro’s built-in dev server is the standard for the stack).
