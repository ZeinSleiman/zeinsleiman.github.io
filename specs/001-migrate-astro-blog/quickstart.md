# Quickstart: Astro migration with trimmed contact links

1. Install Node.js (v20+ recommended) and clone the repository.
2. Run `npm install` from the repo root to install Astro and its dependencies.
3. Start the local dev server with `npm run dev` and open `http://localhost:4321`. Verify the homepage, Archive, About, and Readings render with the shared layout and only LinkedIn/GitHub in the contact block.
4. Build the production output with `npm run build`. The static site is written to `dist/`.
5. Preview the production build locally with `npm run preview`.
6. Deploy to GitHub Pages by pushing to the configured branch. The `dist/` output contains valid static HTML/CSS/JS ready for GitHub Pages.
7. Repeat `npm run dev` / `npm run build` before each PR to catch regressions in contact links or navigation.
