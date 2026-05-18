# DeJoule Assignment

A modern landing page for DeJoule’s smart building operations platform, built as a Next.js 16 app-router site.

The page showcases an AFDD-powered smart alerts experience for facilities management, with:
- personalized operational alerts
- real-time analytics and monitoring
- intelligent automation and control
- a polished marketing-style UI with motion and responsive layout

## Project Overview

This repository contains a landing page demo built around the DeJoule brand and product messaging.

Key sections:
- `Hero` — headline, smart alert cards, and phone visual
- `Alerts Redefined` — role-based alerts, root-cause analysis, and actionable solutions
- `Feature Showcase` — analytics, alerts, monitoring, and automation
- `Connect CTA` — contact invitation for building performance
- `Site Footer`

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lenis
- Lucide React

## Scripts

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run linting:

```bash
npm run lint
```

## Repository Structure

- `app/` — main Next.js app router files and global styles
- `components/` — reusable UI sections and motion components
- `lib/` — content constants, design tokens, and motion utilities
- `public/` — static assets and images

## Notes

- The page uses custom copy and branding for DeJoule, including smart alert workflows and facility monitoring.
- The project entrypoint is `app/page.tsx`, which composes the homepage sections.
- Assets are stored under `public/images` and referenced by the page components.
