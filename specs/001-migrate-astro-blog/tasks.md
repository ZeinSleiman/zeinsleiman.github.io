---

description: "Task list template for feature implementation"
---

# Tasks: Astro migration with trimmed contact links

**Input**: Design documents from `/specs/001-migrate-astro-blog/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize the Astro blog example and shared assets.

- [x] T001 [P] Create `package.json` with the `astro` blog example dependencies and scripts (`npm run dev`, `npm run build`, `npm run deploy`) so the repo roots knows this project is Astro-based.  
- [x] T002 [P] Configure `astro.config.mjs` to use the `@astrojs/github-pages` adapter and set the `site`/`base` values required by GitHub Pages.  
- [x] T003 [P] Add `assets/css/site.css` and the supporting `public/` paths so the blog theme’s base styles and icons are in place before building pages.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Build the shared data and layouts that every story relies on.

- [x] T004 Create `src/data/contact-links.ts` that exports only LinkedIn and GitHub links in the order they should appear in the contact block.  
- [x] T005 Create `src/data/navigation.ts` describing the Home, Archive, About, and Readings entries so the header/sidebar can render consistent navigation.  
- [x] T006 Implement `src/components/ContactBlock.astro` to render entries from `contact-links.ts` and ensure it can be reused on every page.  
- [x] T007 Implement `src/layouts/BaseLayout.astro` (or an equivalent shared layout) that imports `ContactBlock`, maps over `navigation.ts`, and wraps its `<slot />` so every page inherits the navigation/contact block structure.

---

## Phase 3: User Story 1 - Keep the contact block focused (Priority: P1) 🎯 MVP

**Goal**: Surface only the LinkedIn and GitHub links in the contact block on the homepage so visitors see the current connection paths without email or Keybase noise.  
**Independent Test**: Load `src/pages/index.astro` render and verify `<section>`/`<aside>` only contains the two allowed contact links regardless of layout.

### Implementation for User Story 1

- [x] T008 [US1] Update `src/pages/index.astro` to consume `BaseLayout` and render the shared contact block, verifying it only references the LinkedIn and GitHub data from `contact-links.ts`.  
- [x] T009 [US1] Polish `assets/css/site.css` to style the contact block links clearly (e.g., bullet list or divider) so the two remaining entries remain highlighted on the homepage.

---

## Phase 4: User Story 2 - Preserve the archive/about/readings navigation (Priority: P2)

**Goal**: Recreate the Archive and About pages in Astro while keeping the shared navigation/contact layout so readers can still access those sections.  
**Independent Test**: From the navigation rendered by `BaseLayout`, click Archive and About and ensure each page loads with the shared navigation/contact block intact and a relevant heading/description.

### Implementation for User Story 2

- [x] T010 [US2] Create `src/pages/archive.astro` that wraps Archive content in `BaseLayout`, uses `navigation.ts` for the menu, and shows a placeholder message explaining that legacy posts were not migrated.  
- [x] T011 [US2] Create `src/pages/about.astro` that wraps the About narrative in `BaseLayout`, includes the shared contact block, and mirrors the previous biography structure.

---

## Phase 5: User Story 3 - Enable future content on a clean slate (Priority: P3)

**Goal**: Provide a readings page that renders future entries from structured data so new content can be added without carrying over the old posts.  
**Independent Test**: Build the readings page, add a mock entry to the data file, rebuild, and confirm the new card appears without relying on legacy Markdown.

### Implementation for User Story 3

- [x] T012 [US3] Create `src/data/readings.ts` (or `.js`) that defines the `ReadingItem` array with title, summary, tags, optional link, and `publishedDate` fields ready for future additions.  
- [x] T013 [US3] Create `src/pages/readings.astro` (or update it if it exists) to import `readings.ts`, render each card inside `BaseLayout`, and show a friendly empty state when the array is empty.  
- [x] T014 [US3] Add `src/components/ReadingCard.astro` (or a similar partial) referenced by `readings.astro` so each entry displays title, summary, tags, and a link if provided.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Tie the Atlas quickstart, documentation, and deployment guidance together while ensuring all stories are consistent.  

- [x] T015 [P] Update `quickstart.md` to reflect the Astro setup steps (`npm install`, `npm run dev`, `npm run build`, `npm run deploy`) and confirm the contact/navigation rules.  
- [x] T016 [P] Sync `README.md` (or another doc) with the migration status so future maintainers understand the Astro replacement and trimmed contact list.  
- [x] T017 [P] Run `npm run build` and `npm run deploy` locally (or simulate) to verify GitHub Pages compatibility and document any adjustments in `quickstart.md`.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies; can start immediately.  
- **Foundational (Phase 2)**: Depends on Setup completion; blocks all user stories.  
- **User Stories (Phase 3+ Regular)**: Depend on Foundational completion; can run in parallel afterwards.  
- **Polish (Phase 6)**: Depends on all user stories being usable.

### User Story Dependencies

- **User Story 1 (P1)**: Requires Phases 1 & 2 before touching `src/pages/index.astro`.  
- **User Story 2 (P2)**: Requires Phases 1 & 2 to stabilize navigation before adding `archive.astro` and `about.astro`.  
- **User Story 3 (P3)**: Requires Phases 1 & 2 as well for data/layout before new readings logic.

### Parallel Opportunities

- Setup Phase tasks (T001–T003) can run in parallel.  
- Foundational Phase tasks (T004–T007) can run in parallel if different files are edited.  
- After Phase 2, User Stories 1–3 can proceed concurrently by separate people because they operate on different pages/data.  
- Polish Phase tasks (T015–T017) can run in parallel because they touch docs/deploy scripts.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup  
2. Complete Phase 2: Foundational (must finish before pages consume data)  
3. Implement User Story 1 (contact block)  
4. Validate the homepage shows only LinkedIn & GitHub  
5. Deploy/demo if ready

### Incremental Delivery

1. Foundation ready → allows User Story 1  
2. User Story 1 validated → add User Story 2 (Archive + About)  
3. User Story 2 validated → add User Story 3 (Readings + data)  
4. Verify each story independently (per spec acceptance scenarios)

### Parallel Team Strategy

1. Team pairs finish Setup + Foundational  
2. Developer A: User Story 1  
3. Developer B: User Story 2  
4. Developer C: User Story 3  
5. Polish tasks combine docs + deployment work

---

## Summary

- **Total tasks**: 17  
- **Tasks per story**: Phase 1 (3), Phase 2 (4), US1 (2), US2 (2), US3 (3), Polish (3)  
- **Parallel opportunities**: Setup/Foundational phases and all story phases after Phase 2  
- **Independent test criteria**: US1 (homepage renders only LinkedIn/GitHub); US2 (Archive/About navigate with shared layout); US3 (readings page renders new entries without legacy data)  
- **Suggested MVP scope**: Deliver User Story 1 only (contact block) once Phases 1–2 finish, then iterate on US2/US3
- **Checklist format**: All tasks follow `- [ ] T### [P?] [US?] Description` with file paths embedded
