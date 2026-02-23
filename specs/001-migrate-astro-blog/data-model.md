# Data Model for Astro migration with trimmed contact links

## ContactLink

- **Description**: Represents an entry in the contact block (LinkedIn or GitHub) that lives in the shared layout across all pages.  
- **Fields**:
  - `id` (string): Unique identifier for the link (e.g., `linkedin`, `github`).  
  - `label` (string): Visible text such as “LinkedIn” or “GitHub.”  
  - `url` (string): Fully qualified destination URL verified before deployment.  
  - `order` (number): Display order for rendering the links consistently.  
- **Validation rules**: `url` must start with `https://`; `label` must match the canonical contact name; only two entries exist.  
- **Relationships**: Rendered inside the `SharedLayout` contact slot for every page.

## NavigationPage

- **Description**: Represents the static pages in the navigation (Home, Archive, About, Readings).  
- **Fields**:
  - `slug` (string): URL path (`/`, `/archive/`, `/about/`, `/readings/`).  
  - `title` (string): Page title used in `<title>` tags and headings.  
  - `description` (string): Short summary displayed on the navigation menu.  
  - `layout` (string): Layout identifier (shares the same base layout).  
- **Validation rules**: Each `slug` must be unique; the layout must include the shared contact block.  
- **Relationships**: Connected to `ReadingItem` when slug = `/readings/`, but otherwise independent to keep navigation logic simple.

## ReadingItem

- **Description**: Holds metadata for curated readings/posts that may appear on the Readings page.  
- **Fields**:
  - `title` (string): Headline of the reading.  
  - `sharedLink` (string, optional): External URL to the reading if available.  
  - `summary` (string): One-paragraph explanation of why it matters.  
  - `tags` (string[]): Optional labels for filtering or badges.  
  - `publishedDate` (string, ISO 8601): Used for ordering (newest first).  
- **Validation rules**: `title` and `summary` required; `publishedDate` defaults to the current date when missing; `sharedLink` must be https when provided.  
- **Relationships**: Aggregated within `ReadingsPage` rendering to create cards; stored in `src/data/readings.ts`.

## SharedLayout

- **Description**: Template that stitches the contact block, navigation, sidebar, and content area for all pages.  
- **Fields**:
  - `contactLinks` (ContactLink[]): Injected link list.  
  - `navPages` (NavigationPage[]): Navigation definitions for the header/ sidebar.  
  - `slot` (HTML): Page-specific content.  
- **Validation rules**: `contactLinks` length must be 2 and correspond to LinkedIn + GitHub; `navPages` must include Archive, About, Readings, and Home.  
- **Relationships**: Wraps `NavigationPage` and `ReadingItem` content; reused by every page component.
