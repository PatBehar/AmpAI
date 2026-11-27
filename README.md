# AmpAI Landing V3

Founder-approved AmpAI public EdTech marketing website. One brand, two product lines:
- AmpAI Mobile — gamified practical AI learning, currently in private MVP validation.
- AmpAI Business — applied enterprise AI adoption, currently in development (product work paused).

## Source

Static HTML, CSS and JS. No framework, backend, package installation, analytics or forms.
The public source is the existing GitHub repository PatBehar/AmpAI.
Visual identity: official AmpAI assets and exact brand palette #1A2B2E / #00FF7F / #FF914D / white.

## Preview locally

Run `python3 -m http.server 8000` and visit http://localhost:8000.

## Deploy on Cloudflare Pages

Connect PatBehar/AmpAI, production branch `feat/ampai-landing-v3-cloudflare` until approved production cutover. Build command: empty, output directory: / (repository root). Default HTTPS, no Cloudflare Access needed for this public marketing page.

## Release safety

Do not merge to `main` or disable GitHub Pages until Cloudflare V3 is serving correctly. The current repository is PUBLIC. To convert it to private, first confirm Cloudflare Pages works independently because GitHub Pages availability may change. Update code/marketing statuses only with Founder approval. Do not present Mobile as publicly launched or Business as validated/live.

The five official Mimos illustrations are not yet embedded; no unapproved substitute mascots are used.
