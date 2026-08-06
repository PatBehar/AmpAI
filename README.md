# AmpAI landing page — Version 1 local review

This is the first local review build of the AmpAI public landing page. It is a static website using the approved English copy, brand palette, motion rules and CTA behavior from the Notion build specification.

## Run locally

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

The site is intentionally dependency-free. It does not use a framework, build command, backend, analytics, cookies, forms, tracking or paid services.

## Review gates

- Review desktop, tablet and mobile widths.
- Check keyboard focus and navigation.
- Check the page with reduced motion enabled.
- Confirm every `Start a Pilot Conversation` link opens the official AmpAI LinkedIn page in a new tab.
- Confirm `See How AmpAI Works` scrolls to the process section.
- Do not publish or package for GitHub Pages until the local version is approved.

## Brand implementation note

The confirmed production palette is `#1B2B2E`, `#FF914D` and `#00FE7F` on a white canvas. Codec Pro is the approved typeface; the local fallback is documented in `assets/fonts/README.md` because licensed font files were not supplied in this checkout.
