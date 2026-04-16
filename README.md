# ordinarykids.com

A portfolio that doesn't sit still.

Built for Jason Herring — creative director, engineering leader, and someone who keeps pointing generative tools at things to see what happens. This is the public-facing record of two decades of work spanning Nike, KQED, Intuit, the Exploratorium, Sage, HUF, Dockers, Tracy Chapman, Aesop Rock, MoMA, Stussy, and a fish person in an orange cardigan who showed up uninvited during a Midjourney session and refused to leave.

The site is designed to feel like a photocopied zine that somehow learned to move. Every word on every page scatters away from your cursor. Click and they scatter harder. The paper has grain. The text reveals itself one character at a time, occasionally glitching into nonsense before resolving. Nothing loads all at once. Everything earns its presence on the page by arriving.

---

## The Stack

```
Next.js 16.2        App Router, Turbopack, static generation
React 19             Server components + client islands
TypeScript           Everything is typed
Tailwind CSS v4      @theme inline, CSS-first config
motion/react v12     Spring physics, viewport-triggered animation
```

No CMS. No database. No API calls. Content lives in TypeScript data files. If you want to add a project, you open a `.ts` file and type. The site rebuilds in under 2 seconds.

---

## The Design

**Experimental Jetset by way of a broken Xerox machine.**

- 12px root font size on an 8px baseline grid
- IBM Plex Mono for body text, Geist Black for headings
- Black ink on off-white paper. No color. No gradients. No rounded corners.
- SVG `feTurbulence` grain overlay — the whole page looks like it was photocopied twice
- Every image reveals with a scan-line wipe. Every text block slides in like paper feeding through a printer.

The aesthetic references are Experimental Jetset, Karel Martens, the Werkplaats Typografie, and the particular quality of light that comes through a dirty window in a San Francisco studio at 2 AM.

---

## The Motion System

Eight custom motion components, one pointer tracker for the entire page:

| Component | What it does |
|---|---|
| `PretextProvider` | Global pointer-proximity engine. Tracks cursor position, runs a single `requestAnimationFrame` loop, applies transform/opacity/weight to every registered word span on the page. Mouse down amplifies everything — wider radius, stronger push, bold weight, expanded tracking. |
| `PretextWords` | Splits any text string into word-level `<span>` elements that register with the provider. The atomic unit of disruption. |
| `Pretext` | Multi-paragraph variant for body copy. Accepts plain text arrays or raw HTML (strips tags, extracts paragraphs, renders as disrupted word spans). |
| `XeroxText` | Character-by-character reveal with optional glitch mode — each character cycles through random symbols before resolving to the correct letter. Used for page titles. |
| `GlitchText` | Persistent low-frequency character substitution. Text that never fully settles. |
| `PaperFeed` | Vertical slide-in with slight Y offset, like paper feeding through a printer. Viewport-triggered. |
| `ScanLineReveal` | Clip-path wipe that reveals images and video from top to bottom, simulating a flatbed scanner. |
| `StaggerLines` | Sequential fade-in for lists, each item delayed slightly after the previous. |

The pretext system is context-based: one `PretextProvider` wraps the entire layout, and individual `PretextWords` components register their DOM nodes via React context. A single pointer event handler and a single rAF loop cover every word on the page — header, footer, body copy, CV entries, skills lists, client names, everything. On mouse down, the disruption radius expands from 140px to 200px, push force doubles, skew more than doubles, and words near the cursor go weight 900 with expanding letter-spacing. Release and everything snaps back.

---

## Content Architecture

```
src/data/
  cv.ts              Bio, experience, education, skills, clients
  projects.ts        13 selected projects with full image arrays
  experiments.ts     15 experiments with mixed content blocks
  randoms.ts         6 archival projects
  questions.ts       Structured interview Q&A for the sesame gate
  sesame.ts          Password-gated sections (Current / Previous / Experiments / Questions)
  navigation.ts      Site nav (WORK, LAB, CV; SESAME nav from sesame.ts)
```

### Selected Projects (13)

HeySage.ai / Nike Free Plus 2 / Tracy Chapman / Aesop Rock / KQED / Aleph Rebrand / Mercurius Beer / Exploratorium / Nike NSW / Nike FuelBand / Dockers Super Hard Khakis / HUF / Stussy / OK Media Lab

### Experiments (15)

Early Covid GANs / Undertrained GANs (print) / Other Stories (2024) / Claude #1 / Claude #2 / Surrealist Dreams / Portraits / TouchDesigner / Moires 01 / Her — A Manifesto About Now / Chaotic Desktop / Junk Drawer / Refining the Point / Lead Lingo / Earcon Generator

### Randoms (6)

MoMA / Sunset Cinema / Pepsi Now / Adidas Skateboarding / Mitch Ranger / Falling Whistles

### Sesame

`/sesame` is a client-side gate: visitors enter a password whose SHA-256 is compared against the hash in `sesame.ts`. Behind the gate, content is organized into three curated sections — **Current Thinking** (active projects and provocations like Sage, Her, Lead Lingo, and the Earcon Generator), **Previous Work** (Nike Free, Exploratorium, KQED, Refining the Point), and **Experiments** (the generative/visual lab work). A fourth section, **Questions**, surfaces structured interview-style Q&A from `questions.ts`.

Each project has an optional `featuredImage`, an `images[]` array with dimensions, optional `embeds[]` (video, YouTube, Vimeo, Instagram), tags, and category. Portrait-orientation embeds are automatically paired side-by-side in a 2-up grid by the `EmbedGallery` component. Experiments use a flexible content block system (`text`, `image`, `video`, `youtube`, `vimeo`) that lets each page compose its own layout from mixed media. All native video embeds autoplay muted and loop.

---

## Project Structure

```
src/
  app/
    layout.tsx                        PretextProvider wraps everything
    page.tsx                          Homepage
    cv/page.tsx                       Dedicated CV / resume page
    projects/[slug]/page.tsx          Project detail (generateStaticParams)
    experiments/[slug]/page.tsx       Experiment detail (generateStaticParams)
    randoms/page.tsx                  Shuffle-based random archive
    sesame/page.tsx                   Gated index (SesameGate + SesameContent)
    sesame/[slug]/page.tsx            Gated project detail (generateStaticParams)
    sesame/questions/page.tsx         Structured Q&A behind the gate
  components/
    motion/                           All 8 animation primitives
    cv/                               Homepage + CV sections
    project/                          Project detail, EmbedGallery, PretextProjectCopy
    experiment/                       Experiment detail
    randoms/                          Random project viewer
    sesame/                           Gate + gated listing
    layout/                           Header + Footer
  data/                               All content (no CMS)
  types/                              TypeScript interfaces
  fonts/                              Geist Black, Geist Variable, IBM Plex Mono
  lib/                                Utilities
public/
  images/
    projects/{slug}/                  Organized as featured.ext, 01.ext, 02.ext...
    experiments/{slug}/               Experiment-specific assets
    cv/                               Headshot video
  videos/                             Local video assets (MP4, compressed H.264)
  intuit-videos/                      Voice brand + desktop recordings
```

Build generates 42+ static routes. Build time stays under a few seconds.

---

## Running It

```bash
npm install
npm run dev          # localhost:3000, Turbopack
npm run build        # Production build
npm run start        # Serve production build
```

---

## Deploying It

The site is deployed on Vercel under the `ordinarykids` team, pointed at `ordinarykids.com`. It's a static export — no serverless functions, no edge middleware, no runtime dependencies. Push to main and it's live.

---

## The Vibe

This portfolio was built in conversation with Claude over several sessions. The prompts that shaped it asked for things like:

> *"make it more current.. lean into AI machine learning and the intersection of art tech and culture"*

> *"i need the write up to be longer, more academic, more like art theory/criticism"*

> *"make this into something fun.. and weird"*

> *"all text should have the pretext distortion effect"*

> *"on press on the pretext hover, make the link text bold and distort even more"*

The result is a site that takes itself seriously as a design object without taking itself seriously as a website. It has opinions about typography and baseline grids. It has a fish person. It treats a screen recording of a messy desktop as a valid art historical document and writes about it like it's a Rauschenberg combine. It quotes Courbet and Bacon in the same paragraph as Mulatu Astatke's Ethiopian jazz.

The junk drawer stays open.

---

Jason Herring / OrdinaryKids / San Francisco
