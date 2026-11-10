# Roomform website implementation plan

Build an original branded frontend inspired by the verified Imersian site, using the project's fixed TanStack Start stack (not the requested Next.js stack).

## Pages and interactions
- Replace `/` with the full room-first home experience: floating nav with working dropdowns, hero, trust strip, product stories, proof metrics, testimonials, FAQ, CTA and footer.
- Add verified public page types at `/demo`, `/contact`, and the four product pages (visualizer, shopping assistant, 3D creator, product photography), with distinct page metadata and links.
- Add a frontend-only room visualizer demo with category selection, room-photo upload, sample room and product/room controls; no external account or backend dependency.
- Use an original Roomform identity and generated room imagery rather than copying Imersian marks or proprietary assets. Keep all interactions local and meaningful.

## Visual direction
- Match the reference's floating capsule navigation, spacious white editorial sections, oversized typography, vivid rose accent, large room imagery, and responsive layouts.
- Define palette, font, radii, and motion tokens in `src/styles.css`; use semantic classes and existing Button component.

## Technical details
- Preserve TanStack Start and file-based routing. Build shared site chrome and product-page building blocks in small reusable modules.
- Every content route, including `/`, gets unique title, description, Open Graph title/description/type, and Twitter card metadata.
- Validate routes and interactions in the running preview, run relevant existing tests, and inspect build/runtime logs.
