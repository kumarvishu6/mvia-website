# MVIA — Homepage Concepts

Three fully-built homepage concepts for THE MVIA INC, built with Next.js
(App Router). Same content across all three, different visual language —
same pattern as the picker page you already showed the client.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Pages

- `/` — the picker landing page (3 cards linking to each concept)
- `/templates/noir-gold` — **Noir & Gold** ("Ritual") — the client's requested
  black + gold direction. Deep near-black background, warm gold accents,
  serif display type, a thin gold "spine" running down each section.
- `/templates/grounded` — **Grounded** — forest green + ivory, matching the
  client's original written brief. Organic blob hero, curved "breath line"
  connecting the method section.
- `/templates/soft-clay` — **Soft Studio** — light, minimal, sans-serif,
  rounded pill-chip cards throughout. The most approachable of the three.

## Deploy to Vercel

Push this to a GitHub repo, then import it at vercel.com — zero config
needed, it's a standard Next.js app. Or from the CLI:

```bash
npm i -g vercel
vercel
```

## Notes for build-out

- All photography is currently a color/typography placeholder — no stock
  images were used. Once a direction is picked, swap in real photography
  (yoga, kettlebell training, breathwork, retreat locations, product shots)
  per the client's brief.
- Copy is demo copy pulled from the client's brief and lightly tightened.
  Confirm final wording (especially the "Led By" / founder bio block —
  currently generic placeholder) before this goes to production.
- Each concept's fonts are loaded via a single Google Fonts `<link>` in
  `app/layout.js` rather than `next/font`, so the build doesn't depend on
  fetching fonts at build time — works in restricted CI/build environments.
  If you don't need that constraint, swapping to `next/font/google` for
  slightly better font-loading performance is a straightforward follow-up.
