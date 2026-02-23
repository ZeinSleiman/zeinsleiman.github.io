# Contracts: Static pages for the Astro migration

## GET /

- **Response**: 200 OK with fully rendered HTML matching the shared Astro layout.  
- **Expectations**: The contact block includes exactly two links (LinkedIn, GitHub) with the proper `href`s, and the primary navigation lists Archive, About, and Readings.  
- **Verification**: Rendered HTML contains a `<nav>` with four items and a `<section>` or `<aside>` labeled as the contact block that references only the two allowed links.

## GET /archive

- **Response**: HTML reusing the shared layout with archive content (section heading and metadata).  
- **Expectations**: Archive page renders with the same header/ contact block and includes a placeholder or list describing missing posts, since legacy entries are not migrated.  
- **Verification**: The served HTML has the navigation highlighting Archive and shows a message like “Archive is empty” or similar while keeping layout consistent.

## GET /about

- **Response**: HTML with personal/about narrative and the shared contact/navigation components.  
- **Expectations**: Contact block and sidebar remain identical to the homepage, and the content area contains biography text derived from the original Jekyll About page.  
- **Verification**: Page loads with `<main>` content describing the owner and includes the navigation and contact block with the mandated links.

## GET /readings

- **Response**: HTML featuring reading cards generated from `ReadingItem` data plus the shared layout.  
- **Expectations**: Each card shows a title, summary, optional link, and tags; the contact block remains unchanged.  
- **Verification**: Rendering sample data produces at least one card with `title`, `summary`, and `link` elements, and the page can be built even if no legacy readings exist (empty state message is acceptable).
