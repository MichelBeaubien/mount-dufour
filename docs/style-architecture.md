# Style Architecture

Use `app-*` classes for reusable visual building blocks: section headers, headings, copy, panels, banners, cards, grids, and calls to action. Their styles belong in `src/styles/theme.scss` or a shared partial.

Use a page prefix only for layout composition that is unique to a route. For example, `about-intro` may position the About page's image and content, but its text should use `app-eyebrow`, `app-heading`, and `app-copy`.

Do not create a page-specific class for a pattern that appears on a second page. Promote it to an `app-*` primitive first, then compose it in each page template.

Route paths, page titles, labels, summaries, breadcrumb ancestry, and navigation links come from `src/app/config/site-map.ts`.
