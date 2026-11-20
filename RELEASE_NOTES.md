# AmpAI Landing V4 — Bilingual + Favicon

- Public marketing page: keeps approved AmpAI V3 design and content.
- New persistent EN/ES control in header, available on mobile, without external translation dependencies.
- Full-page copy, title, meta descriptions, accessibility labels and navigation translated to Spanish. English remains default.
- Browser favicon: authentic brain-only AmpAI brand, optimized SVG, transparent PNG 16/32/48, ICO and Apple touch icon. Existing WhatsApp OG image preserved.
- Static Cloudflare Pages deployment: upload ZIP through Workers & Pages > ampai-landing > Create deployment. The GitHub connector is NOT linked, so a GitHub commit alone does NOT publish this update.
- Source: PatBehar/AmpAI, branch feat/ampai-landing-v3-cloudflare.
- QA: Chromium layout/i18n/navigation at 1440/1024/768/390/360. Not actual live-site or physical-device QA until deployment.
- No change to Mobile app/Business app, no claim of public Mobile beta.
