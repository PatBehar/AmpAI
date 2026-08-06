# AmpAI Landing Page — Visual QA

final result: passed

## Scope

- Local V1 landing page only; no publication, analytics, backend, CMS, cookies, or API integrations.
- AmpAI visual source of truth: `/var/folders/ld/7h3qbdtd2jbgkr9c3szynqt80000gn/T/codex-clipboard-70f234bc-b516-4e81-b5fd-c74552eb8535.png` supplied by the user.
- AmpAI source image: `935 × 1683 px`, including browser chrome.
- Latest desktop evidence: `/private/tmp/ampai-laptop-brain-sections-v14.png` at `1702 × 1063 px`.
- Final preview evidence: `/private/tmp/ampai-final-v14.png` at `1480 × 1023 px`.
- Safari-width evidence: `/private/tmp/ampai-safari-width-v9.png` and current `1366 × 900` metrics after the brain-scale pass.
- Glass-on-scroll evidence: `/private/tmp/ampai-glass-contained-v12.png` at `1480 × 1023 px`.
- Section evidence: `/private/tmp/ampai-sections-extra-large-v13.png` and `/private/tmp/ampai-lower-extra-large-v13.png`.
- Latest mobile evidence: `/private/tmp/ampai-mobile-lower-readable-v14.png` at `390 × 844 px`.
- Autostep was reviewed only as a scale reference: [https://www.autostep.ai/](https://www.autostep.ai/). Its observed desktop hero uses approximately `72 px / 90 px` headline type, `20 px / 32.5 px` supporting copy, and `56 px` controls; AmpAI uses a contained version of that scale within its own approved white two-column system.

## Reference comparison

1. **Hero scale:** The hero now occupies the first desktop screen (`987 px` at a `1702 × 1063` viewport), with a centered `72 px` three-line headline, `20 px` supporting copy, `52 px` actions, and a roughly `360 × 360 px` right-side brain mark. The measured gap from headline to brain is `89 px` at laptop width, with the brain kept inside the right margin; the following section begins below the first viewport.
2. **Hero composition:** The approved dark/green headline hierarchy, left-aligned copy/actions, right-side brain, white canvas, and final Notion CTA are preserved. The scale increased proportionally without changing the order or copy.
3. **Problem and cards:** Wide desktop section type and card geometry were increased together without increasing inter-section padding: `34 px` section headings, `178 px` information cards, `64 px` icon wells, `16 px / 13.5 px` title/body type, and the same three-card structure.
4. **How AmpAI Works:** Four enlarged `86 px` circular steps retain their sequence and centered layout. The dotted lines above/before the arrows were removed; only the arrows remain. Computed process connector borders are `none` on desktop and mobile.
5. **Workflow, outcomes, pilot, final CTA:** These sections now use larger content inside the existing breathing-room system: `150 px` workflow cards, `160 px` outcomes cards, `42 px` pilot numbers, and `34 px` final CTA type. No horizontal overflow was detected.
6. **Responsive behavior:** Mobile keeps the single-column rhythm while using a more readable baseline: process type is `14.5 px / 11.5 px`, card type is `13.5 px / 11.5 px`, and the existing inter-section padding is unchanged. Mobile menu and anchor navigation remain functional.
7. **Brain motion:** Colored nodes no longer fade to reveal the underlying lines. They use `nodeDrift` transforms with opacity fixed at `1`; the full SVG uses a subtle `brainFloat` animation. The wrapper now follows smooth autonomous random waypoints with circular oscillation, then hands control to the cursor magnet on pointer entry and resumes autonomous drift on pointer leave. Browser CUA verification produced live transforms such as `translate3d(9.84px, -4.15px, 0px) rotate(0.53deg)` and `translate3d(8.41px, -6.92px, 0px) rotate(0.32deg)`.
8. **Safari icon compatibility:** Section icons no longer depend on an external SVG `<use>` reference. They use an inline SVG symbol sprite with both `href` and `xlink:href` references, preserving the brand drawings in Safari-style rendering paths.
9. **Brand system:** Computed runtime colors remain `#1B2B2E` → `rgb(27, 43, 46)`, `#FF914D` → `rgb(255, 145, 77)`, and `#00FE7F` → `rgb(0, 254, 127)` on white. No gradients, glow effects, stock imagery, robots, or generic AI motifs were introduced; the only translucent treatment is the explicitly requested sticky-header state.
10. **Scroll banner:** The sticky header transitions into a larger button-like rounded shell after `18 px` of scroll: only the inner banner uses the translucent background and `blur(20px)`, with no full-width translucent layer behind it. The logo/navigation remain readable while the section content passes beneath it; mobile uses the same treatment.

## Copy comparison

- Visible runtime copy matches the final TSK-28 Notion copy for the hero, problem, process, workflow, outcomes, pilot, final CTA, footer, and CTA destination.
- Earlier screenshot terms such as `Explore a Design Partnership`, `AI tools are widely available`, and `Not the only ones` are intentionally absent.
- The Notion hero category label remains hidden because the supplied AmpAI reference has no visible hero eyebrow and the user prioritized visual fidelity.

## Interaction and technical checks

- Page identity passed: `http://127.0.0.1:8796/`; title `AmpAI — Applied AI Adoption Platform`.
- Non-blank semantic DOM snapshot passed; snapshot length `5316` characters and expected hero/workflow copy were present.
- No framework error overlay was present.
- Desktop and mobile console QA returned no `error` or `warn` entries after fresh reloads.
- All `Start a Pilot Conversation` CTAs and the footer LinkedIn link use `https://www.linkedin.com/company/ampai-platform/` with `target="_blank"` and `rel="noopener noreferrer"`.
- Mobile menu passed: `Open navigation` sets `aria-expanded="true"`, opens the navigation, locks body scrolling, and closes after `How It Works` navigation.
- Safari-style desktop pass at `1366 × 900`: no horizontal overflow, three-line hero headline, roughly `360 px` brain, and `75 px` measured gap between headline and brain while retaining a `53 px` right margin.
- Mobile responsive pass at `390 × 844`: no horizontal overflow, hero remains readable, autonomous brain motion runs without pointer input, card/process type is enlarged, inline icons are present, menu opens/closes, and the glass header state activates on scroll.
- Glass header pass: `body.is-scrolled` activates after scrolling; the outer header layer is fully transparent with no backdrop filter, while only the inner banner uses `rgba(255, 255, 255, 0.54)`, `blur(20px)`, `12px` radius, a transparent border, and a restrained downward-only shadow (`0 16px 30px -22px`).
- Refresh position passed: after scrolling the root route to `950 px`, reloading returned to `scrollY = 0` with no hash and reset the glass state. Scheduled resets stop early enough not to interrupt a normal user scroll after load.
- `node --check script.js` passed.
- `prefers-reduced-motion` rules disable the brain, node, reveal, connector, and interaction animation/transition behavior.
- Codec Pro font files were not present in the supplied workspace; the documented fallback stack is used in `assets/fonts/README.md`.

## Material fixes history

- Expanded the hero from a compact block to a first-screen desktop hero.
- Increased hero and wide-desktop page scale based on the Autostep size reference while preserving AmpAI's visual system.
- Widened the desktop shell and stabilized the hero grid so the brain remains visually separated from the green headline across laptop-width layouts.
- Aligned the sticky banner to the exact same `--shell` margins as the hero and lower sections on desktop and mobile.
- Removed the visible banner outline and tightened the shadow spread so the glass treatment has no hard vertical edges.
- Removed the full-width translucent layer behind the banner so content only passes through the glass container itself.
- Replaced external SVG sprite references with an inline, Safari-compatible symbol sprite so section icons render consistently.
- Increased lower-section text, icon, card, process and pilot-stage scale while preserving the established inter-section padding.
- Increased the lower-section baseline again for improved reading comfort on smaller viewports, without changing the external section spacing.
- Enlarged the desktop brain to approximately `360 px` and added continuous autonomous wandering with smooth cursor takeover and return.
- Removed the unwanted dotted process connector lines, leaving only arrows.
- Replaced fading colored-node behavior with gentle movement and added a visible cursor-magnet interaction.
- Added deterministic root-route scroll reset on refresh.
- Hardened the root-route reset for Safari-style restoration timing without resetting an intentional scroll after the initial load window.
- Preserved generous inter-section breathing room and the final Notion copy.

## Review gate

The local package is ready for Marco's review. Do not publish or prepare a GitHub-ready handoff until that local review confirms V1.
