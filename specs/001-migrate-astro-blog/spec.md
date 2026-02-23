# Feature Specification: Astro migration with trimmed contact links

**Feature Branch**: `001-migrate-astro-blog`  
**Created**: 2026-02-20  
**Status**: Draft  
**Input**: User description: "We are going to migrate the blog site to using Astro. I dont care about existing entries. They will not be migrated. Currently the site shows linkedIn, email, Keybase and Github. In addition it has archive page, about and readings. I want to keep the same format but remove the email, keybase."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Keep the contact block focused (Priority: P1)

As a visitor who wants to reach out, I still need to see the direct contact links that remain (LinkedIn and GitHub) and never see the retired email or Keybase entries, so I know how to connect without confusion.

**Why this priority**: Contact links are the most visible proof of the site owner’s availability; any regression hurts discoverability and gives the impression that the site is stale.

**Independent Test**: Open the rebuilt homepage and verify that the contact list contains exactly two links, labeled LinkedIn and GitHub, and that no email or Keybase references exist anywhere in the contact section.

**Acceptance Scenarios**:

1. **Given** the Astro-based homepage is deployed, **When** a visitor views the contact column, **Then** only LinkedIn and GitHub appear and there is no email or Keybase text or link.
2. **Given** the same visitor clicks each contact link, **When** the action completes, **Then** the browser opens the correct LinkedIn or GitHub destination (behavior is tested via link targets rather than live authentication).

---

### User Story 2 - Preserve the archive/about/readings navigation (Priority: P2)

As a returning reader, I want the archive, about, and readings pages to live in the same layout and navigation structure so I can browse the same sections even though the implementation now uses Astro.

**Why this priority**: The site’s secondary pages define its roadmap and demonstrate liveliness; keeping them reachable prevents the migration from feeling like a regression.

**Independent Test**: From the homepage navigation, click Archive, About, and Readings in order; each page loads while reusing the same shared structure and the curated titles remain visible.

**Acceptance Scenarios**:

1. **Given** the new Astro site is deployed, **When** the visitor clicks Archive from the navigation, **Then** the archive page appears with the expected heading and no broken assets.
2. **Given** the visitor then selects About and Readings, **When** each page loads, **Then** the header/ sidebar stay consistent with the homepage and the links remain in the navigation menu.

---

### User Story 3 - Enable future content on a clean slate (Priority: P3)

As the site maintainer, I want the Astro project to start from a clean state so I can add new posts or readings without worrying about migrating the entire Jekyll history while still keeping the visible layout the same.

**Why this priority**: Migration must not double-work the entire archive; starting fresh lets me focus on the Astro setup without carrying over obsolete content.

**Independent Test**: After the migration, add a placeholder entry (e.g., a new reading note) and ensure it renders inside the readings section without requiring the legacy posts to exist.

**Acceptance Scenarios**:

1. **Given** the Astro site is built with no imported Jekyll files, **When** I add a new reading item and rebuild, **Then** the item appears in the readings list using the same card-style layout as before.

---

### Edge Cases

- What happens when the reading list or archive is empty? The page should still render, showing section titles and a friendly empty state hint without broken layout.
- How does the navigation behave if the LinkedIn or GitHub URLs become invalid? The feature should gracefully render the same link text and allow the reviewer to update the target without losing the navigation entry.
- What if a visitor loads the site while the Astro build is still propagating and assets are served from a cache? The static output must already match the desired layout so stale caches do not show email or Keybase links.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The personal website is rebuilt as an Astro-powered static site whose published output matches the previous layout, pagination, and GitHub Pages hosting expectations.
- **FR-002**: The shared layout (header, footer, sidebar, navigation) continues to reference LinkedIn and GitHub as the only external contact links while dropping email and Keybase from every rendered page.
- **FR-003**: Archive, About, and Readings remain accessible through the primary navigation, and they reuse the existing structure (section headings, sidebar cards, etc.) so visitors perceive no stylistic regression.
- **FR-004**: New content (posts, readings, or notes) can be added to the Astro project and will surface in their respective sections without relying on migrated entries.
- **FR-005**: Deployments continue to target GitHub Pages so that every push produces static HTML that can be served from the configured repository without manual hosting steps.
- **FR-006**: All styling uses Tailwind CSS utility classes with the site's visual identity preserved (sidebar `#2e2e3a`, accent `#f64929`, Roboto Slab/Roboto fonts) via a Tailwind theme configuration.
- **FR-007**: The site is fully responsive with no hardcoded pixel values. The sidebar is larger with bigger fonts on desktop and adapts to a horizontal layout on mobile.
- **FR-008**: The owner's profile photo is displayed in the sidebar alongside the name and title.

### Key Entities *(include if feature involves data)*

- **Navigation set**: The assembly of contact links (LinkedIn, GitHub) plus page links (Archive, About, Readings) that must stay synchronized across the homepage and each secondary page.
- **Content sections**: Archive list, About narrative, and Readings cards that show either curated text or placeholders; they drive the page content even when no legacy entries are present.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of QA checks on the contact block find exactly two links, labeled LinkedIn and GitHub, with no email or Keybase text or links displayed anywhere on the site.
- **SC-002**: Archive, About, and Readings pages remain reachable from the primary navigation, and 100% of manual navigation tests confirm the header/sidebar layout stays consistent across these pages.
- **SC-003**: Every deployed build outputs static assets that include the preserved navigation, the trimmed contact links, and the shared layout elements, so the GitHub Pages deployment requires no additional hand editing.
- **SC-004**: Adding a new reading or post entry after the migration successfully renders the new content in its section without errors, proving new data works on the clean slate.

## Assumptions

- Existing Jekyll posts will not be migrated; the Astro project starts with an empty content set that the maintainer can extend later.
- The reading list from the Jekyll `_books` collection has been migrated to the Astro site as structured TypeScript data in `src/data/readings.ts`.
- LinkedIn and GitHub URLs remain available and are updated in the Astro configuration; broken targets will be resolved outside this migration effort.
- GitHub Pages remains the deployment target, so the build output must continue to be valid static HTML/CSS/JS served from this repository.
