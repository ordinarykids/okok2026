# OK Portfolio 2026

Portfolio site for Jason Herring and OrdinaryKids, built as a fast, editorial-style web experience for CV content, selected client work, experiments, and archival "randoms."

## Overview

This project is a `Next.js 16` app using the App Router, `React 19`, `TypeScript`, `Tailwind CSS v4`, and motion-driven UI components. Content is primarily data-driven, which makes it easy to update the portfolio without rewriting page logic.

Current sections include:

- A CV-style landing page with biography, experience, skills, clients, awards, and references
- Selected project detail pages
- Experiment detail pages
- A random projects archive

## Tech Stack

- `Next.js 16`
- `React 19`
- `TypeScript`
- `Tailwind CSS v4`
- `motion`
- `agentation` for local development tooling

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project Structure

```text
src/
  app/
    page.tsx
    projects/[slug]/page.tsx
    experiments/[slug]/page.tsx
    randoms/page.tsx
  components/
    cv/
    layout/
    motion/
    project/
    randoms/
  data/
    cv.ts
    projects.ts
    experiments.ts
    randoms.ts
  lib/
    motion-variants.ts
    utils.ts
```

## Content Model

Most site content lives in `src/data`:

- `src/data/cv.ts`: biography, experience, skills, clients, awards, references
- `src/data/projects.ts`: selected portfolio projects
- `src/data/experiments.ts`: experimental work
- `src/data/randoms.ts`: smaller or archival projects

At the time of writing, the site includes:

- `7` selected projects
- `12` experiments
- `14` random projects

## Design Notes

The site leans into an editorial, analog-digital aesthetic with:

- local variable fonts
- grain and scan-line treatments
- staggered reveal and xerox/glitch motion patterns
- media-rich project storytelling

## Deployment

This app can be deployed anywhere that supports Next.js. Vercel is the simplest default option.

For a production build:

```bash
npm run build
npm run start
```

## Ownership

Created by Jason Herring / OrdinaryKids.
