# DeJoule AI — Pixel Clone (Assignment)

Near pixel-accurate rebuild of [dejoule.ai](https://dejoule.ai/) and [dejoule.ai/smart-alerts](https://dejoule.ai/smart-alerts) using Next.js, Tailwind CSS, GSAP ScrollTrigger, Lenis, Swiper, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

- Homepage: http://localhost:3000
- Smart Alerts: http://localhost:3000/smart-alerts

```bash
npm run build
npm start
```

## Key implementation

| Area | Approach |
|------|----------|
| Typography | Work Sans (matches production site) |
| Smooth scroll | Lenis + `ScrollTrigger.scrollerProxy` |
| Smart Alerts hero | Full-viewport section, official `bgImage.png`, scrubbed floating cards |
| Sticky storytelling | GSAP `pin` + `scrub` timeline — left nav/steps change while phone mockup stays pinned |
| AFDD carousel | Swiper.js issue cards with official WebP assets |
| Assets | Downloaded from `dejoule.ai/assets/...` into `public/assets/` |

## Routes

- `/` — Homepage (hero + feature stack + alerts carousel + CTA)
- `/smart-alerts` — Full Smart Alerts page with sticky scroll storytelling

## Deliverables

- `dejoule-assignment-final.zip` — source snapshot (excludes `node_modules`, `.next`)
- `deliverables/screenshots/` — desktop capture references
