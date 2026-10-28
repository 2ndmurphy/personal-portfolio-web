# 2ndmurphy portfolio

React + TypeScript + Vite portfolio. The visual and development blueprint lives in [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md).

## Run locally

```sh
pnpm install --frozen-lockfile
pnpm dev
```

```sh
pnpm lint
pnpm build
pnpm preview
```

The project uses pnpm and its existing lockfile. TypeScript 6.0 is used because the installed typescript-eslint integration does not support TypeScript 7. Tailwind is integrated through its Vite plugin.

## Current scope: Structure, Home layout

The first implementation slice includes the shared header/footer, semantic page shell, Home page, design tokens, and a typed profile/content module. Navigation uses native links to real Home sections. The sections are identity, work, experience, and contact.

The layout draws on reference 01's left-aligned headline, open spacing, paired work area, and oversized footer type. Reference 03 supplies the second-column portrait-card direction. Space Grotesk and Inter follow the owner's typography brief. Cream keeps narrative text readable; the blue portrait frame establishes the hero's secondary focal point, while black anchors the work section. Arrows indicate actual scroll direction rather than decorating every link. The portrait is an explicitly labeled placeholder.

Design dials for this slice: **ENERGY 3 / RHYTHM 3 / MOTION 2**. Section compositions vary between the split hero, work area, editorial biography, and experience rows. The Home revisions add an underlined active Home link, section-aware navigation, a sticky header, hover/focus feedback, smooth anchor scrolling, and a centered rounded CTA. At the owner's request, the CTA automatically bounces on a 3.6-second cycle with a rest between bounces, pausing on hover/focus. Header and hero entrance effects run once. The background uses solid cream; the previous gradient, redundant scroll link, and divider behind the CTA are removed. The hero uses content-driven height, allowing Work to follow naturally; the earlier viewport minimum was reverted at the owner's request. A blue SVG shape with an offset top and curved notch sits behind the portrait, drawing on reference 03. Reduced-motion preferences disable animation and smooth scrolling. The container is now 1440px wide at most, while prose retains its reading-width limits.

### Content editing

The latest composition revision aligns the hero copy and portrait toward the top, enlarges the Home headline to a maximum of 96px, and places the backend/API keywords above it. The profile introduction now appears in a compact Work opening above the work grid. The previous large Work headline and secondary description are removed so the section leads directly into the work area. The hero retains its centered CTA and grows naturally with its content.

The footer is a shared `SiteFooter` component. Following the owner's close-up reference, it places a compact introduction on the left and Site/Contact link groups on the right. Contact replaces the screenshot's Admin group, retaining reference 02's email and résumé content. Missing details remain plain-text empty states, not inactive links. LinkedIn, GitHub, and Dribbble icons sit beneath the introduction; they become links only when configured and otherwise show labeled placeholders with a visible unpublished note. Copyright stays beneath the introduction, with no full-width dividing row. A decorative SVG text treatment scales the display name across the footer width beneath a generous gap. The centered Back to the Top CTA sits below the large name and shares the hero CTA's pill styling, automatic bounce, hover/focus pause, and reduced-motion behavior. The main columns stack below 768px; Site and Contact remain adjacent, and long contact addresses wrap within their column.

- [src/content/profile.ts](src/content/profile.ts) holds the provisional repository-based display name, supplied professional background, portrait, email, and published-work records.
- Set `profile.portrait` to an actual image URL and meaningful alternative text. Keep the image in the project's assets or public directory.
- A transparent portrait cutout will show the reference 03 shape treatment most clearly. An opaque photo still displays with the shape visible around its edges.
- Set `profile.email` only after the public contact address is confirmed. Until then, the page displays a clear pending-content message.
- Set `profile.resume` to `{ href, sizeLabel }` only when the reviewed PDF exists. The footer displays the PDF label and file size with its download link; otherwise it shows a plain-text unpublished state.
- Set `profile.socials.linkedin`, `profile.socials.github`, and `profile.socials.dribbble` to verified profile URLs. Null values reserve icon space without rendering a clickable destination. The icons have accessible platform labels and 44×44px targets when active.
- Published work is empty. The work area shows labeled empty states, with no invented projects or outcomes. The current summary type is a Home-layout scaffold; implement the full case-study content contract before publishing records or adding detail links.
- Fonts currently load through Google Fonts with system fallbacks. Self-host the licensed WOFF2 files before launch, as required by the blueprint. Registry access was unavailable during this slice, and local font packages were not cached.

### Development sequence

1. **Structure: in progress.** Home and the shared shell are implemented. Additional page skeletons, React Router, route metadata/focus handling, and a pre-rendering proof remain before the full Structure stage exits. This change is specifically the requested Home-layout slice.
2. **Components:** expand the reusable UI patterns and full case-study template after the structure is settled.
3. **Responsive UI:** validate the breakpoint matrix, text zoom, overflow, and real touch behavior. Basic stacking rules are included now to keep the Home draft usable.
4. **Interactions:** add menu behavior if needed, route transitions/focus behavior, and restrained Motion enhancements. Native section links already work; the owner-requested Home revision adds CSS feedback and JavaScript section highlighting ahead of the broader interaction stage.
5. **Polish:** finish real content, self-host fonts, audit accessibility/performance, and verify the production artifact.
6. **Deploy:** configure and validate Cloudflare Pages after the earlier stages pass.

## Verification for this slice

- Build: **PASS**, including TypeScript checking and Vite production bundling.
- Lint: **PASS** after aligning TypeScript with the ESLint integration.
- Static rendering: **PASS**, Home renders with one H1, four labeled content sections, and explicit portrait/work/contact empty states.
- Link inspection: **PASS**, skip link targets `main`; wordmark targets `home`; header and footer Site navigation target `home`, `work`, `about`, and `contact`; View my work targets `work`; Back to top targets `home`. All twelve fragment links resolve to rendered IDs. Static rendering marks only Home with `aria-current="location"`; browser verification of scroll highlighting is pending.
- Purpose and direction: **PASS by source inspection**, visual choices and the three dials are documented above; no generated photos, fictional project claims, or inactive controls are included.
- Contrast calculation: **PASS**, ink on blue is 5.19:1, muted text on cream is 5.81:1. Other text pairings use the calculated combinations in the design system.
- Browser verification: **pending**. The development environment denied both localhost and public-interface server sockets (`EPERM`), and Windows Chrome could not execute through WSL. No browser click-through, screenshot comparison, mobile overflow test, console audit, or accessibility compliance result is claimed. Complete those checks locally before accepting the Responsive UI stage.

The layout is a development draft, not a launch-ready portfolio. The remaining verification and content requirements above are part of the development flow.
