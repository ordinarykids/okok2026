import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "nike-free",
    title: "Nike Free Plus 2",
    date: "2011-09-23",
    role: "Creative Director",
    client: "Nike",
    shortDescription:
      "Creating the brand story and messaging for Nike Free. Visual center, zine production, product photography, and campaign narrative.",
    longDescription: `<p>For the visual center for Nike Free, we were tasked to do the following: frame the campaign in a narrative, create product photography, produce a zine. Ultimately the challenge led us down many paths and produced numerous results.</p>
<p>For the zine, we decided to shoot four editorials. Three were chosen because of their importance to the campaign: London, NYC and Tokyo. We also chose to do an editorial on the university that inspired the Nike Free with Oliver Helbig, a regular contributor to 032C magazine.</p>
<p>The 56 page zine was nearly all distressed with a heavy halftone pattern that conveyed the democratic and low fidelity technology that also drives the Nike Free shoe. We printed 16 pages in glossy color to highlight Oliver's editorial and call out the beauty in humanless photography.</p>
<p>Early on we photographed all of the shoes and delivered print ready files to Nike's BNX servers. We also created several hero images to be used in packaging, shirts and on the boxes.</p>`,
    featuredImage: {
      src: "/images/projects/nike-free/featured.jpg",
      alt: "Nike Free Plus 2 campaign photography",
      width: 746,
      height: 499,
    },
    images: [
      {
        src: "/images/projects/nike-free/01.jpg",
        alt: "Nike Free zine group spread",
        width: 746,
        height: 553,
      },
      {
        src: "/images/projects/nike-free/02.jpg",
        alt: "Nike Free Tokyo editorial",
        width: 746,
        height: 498,
      },
      {
        src: "/images/projects/nike-free/03.jpg",
        alt: "Nike Free campaign home spread",
        width: 746,
        height: 500,
      },
      {
        src: "/images/projects/nike-free/04.jpg",
        alt: "Nike Free editorial — Oliver Helbig",
        width: 746,
        height: 488,
      },
      {
        src: "/images/projects/nike-free/05.jpg",
        alt: "Nike Free product photography",
        width: 746,
        height: 495,
      },
    ],
    tags: ["branding", "print", "photography", "campaign"],
    category: "selected",
  },
  {
    slug: "tracy-chapman",
    title: "Tracy Chapman",
    date: "2012-06-15",
    role: "Creative Director, Developer",
    client: "Tracy Chapman / Elektra Records",
    shortDescription:
      "Tracy Chapman\u2019s album was called Our Bright Future. Optimistic. Possibly ironic. The title resisted resolution \u2014 and that resistance became the work.",
    longDescription: `<p>What we built had no precedent. Not a game. Not a website. Not an animation. Something that had never existed before: a participatory narrative where the meaning of the story was structurally dependent on the audience\u2019s choices. The coloring book was not metaphor \u2014 it was mechanism. Visitors painted directly onto the canvas while hand-drawn animations responded to Tracy\u2019s music. The world took shape under your hand. And the brightness of that future \u2014 the one the album promised, or questioned \u2014 was a direct consequence of how you chose to fill it in.</p>
<p>This was not interactivity in the conventional sense. It was authorship distributed across thousands of strangers, each one deciding, brush stroke by brush stroke, whether Chapman\u2019s titular optimism was sincere or elegiac. The work existed in the space between intention and interpretation \u2014 which is, of course, where all meaningful art lives.</p>
<p>Built entirely in Flash, it earned recognition from Communication Arts and the FWA. But the more enduring achievement was conceptual: we had made something the medium had never produced. A story with no fixed emotional valence. An artifact whose meaning you had to earn.</p>`,
    featuredImage: {
      src: "/images/projects/tracy-chapman/featured.jpg",
      alt: "Tracy Chapman interactive coloring book experience",
      width: 900,
      height: 605,
    },
    images: [
      {
        src: "/images/projects/tracy-chapman/01.jpg",
        alt: "Tracy Chapman site — animated scene 1",
        width: 1183,
        height: 710,
      },
      {
        src: "/images/projects/tracy-chapman/02.jpg",
        alt: "Tracy Chapman site — animated scene 2",
        width: 1183,
        height: 710,
      },
      {
        src: "/images/projects/tracy-chapman/03.jpg",
        alt: "Tracy Chapman site — animated scene 3",
        width: 1183,
        height: 710,
      },
      {
        src: "/images/projects/tracy-chapman/04.png",
        alt: "Tracy Chapman home screen",
        width: 1324,
        height: 1014,
      },
      {
        src: "/images/projects/tracy-chapman/05.png",
        alt: "Tracy Chapman alternate home layout",
        width: 1259,
        height: 766,
      },
      {
        src: "/images/projects/tracy-chapman/06.png",
        alt: "Tracy Chapman interactive interface — coloring mode",
        width: 1340,
        height: 994,
      },
      {
        src: "/images/projects/tracy-chapman/07.png",
        alt: "Tracy Chapman interactive interface — drawing mode",
        width: 1401,
        height: 1027,
      },
      {
        src: "/images/projects/tracy-chapman/08.png",
        alt: "Tracy Chapman interactive interface — animation",
        width: 1354,
        height: 1002,
      },
      {
        src: "/images/projects/tracy-chapman/09.png",
        alt: "Tracy Chapman interactive interface — paint tool",
        width: 1364,
        height: 1038,
      },
      {
        src: "/images/projects/tracy-chapman/10.png",
        alt: "Tracy Chapman interactive interface — gallery view",
        width: 1392,
        height: 1075,
      },
      {
        src: "/images/projects/tracy-chapman/11.png",
        alt: "Tracy Chapman interactive interface — music mode",
        width: 1468,
        height: 926,
      },
      {
        src: "/images/projects/tracy-chapman/12.png",
        alt: "Tracy Chapman interactive interface — detail",
        width: 1337,
        height: 955,
      },
      {
        src: "/images/projects/tracy-chapman/13.png",
        alt: "Tracy Chapman interactive interface — final",
        width: 1249,
        height: 906,
      },
      {
        src: "/images/projects/tracy-chapman/14.jpg",
        alt: "Tracy Chapman full-page experience",
        width: 622,
        height: 1595,
      },
    ],
    tags: ["interactive", "animation", "music", "flash"],
    category: "selected",
  },
  {
    slug: "kqed",
    title: "KQED",
    date: "2018-08-01",
    role: "Director of Design and Development",
    client: "KQED",
    shortDescription:
      "Complete redesign and rebuild of KQED.org. New audio workflows, election dashboards, and voice speaker experiences.",
    longDescription: `<p>Led the complete redesign of KQED.org, Northern California's largest public media organization. The project involved rebuilding the entire frontend in React with a Node/ElasticSearch backend managed by WordPress.</p>
<p>Developed segmented audio workflows that delivered content to Google News, reaching more than 600K audio downloads per month. Created Alexa and Google Home experiences for KQED's Pledge Free Stream.</p>
<p>The election night dashboard built for the 2016 election received more than 1M views, demonstrating the power of real-time data visualization in public media.</p>`,
    featuredImage: {
      src: "/images/projects/kqed/featured.jpg",
      alt: "KQED website redesign — homepage",
      width: 2456,
      height: 1280,
    },
    images: [
      {
        src: "/images/projects/kqed/01.jpg",
        alt: "KQED homepage design — alternate view",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/02.jpg",
        alt: "KQED article page design",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/03.jpg",
        alt: "KQED content layout",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/04-elections-dashboard.jpg",
        alt: "KQED Elections Dashboard — results view",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/05-elections-dashboard.jpg",
        alt: "KQED Elections Dashboard — data visualization",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/06-elections-dashboard.jpg",
        alt: "KQED Elections Dashboard — detail view",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/07-arts-app.jpg",
        alt: "KQED Arts iPad app",
        width: 1228,
        height: 640,
        caption:
          "KQED Arts iPad App, 2012\nOriginal iPad app for KQED Arts, built around a two-sided menu system that allowed for nearly infinite combinations of stories, media, and pathways. The experience was designed to feel fluid and dynamic, shaped around the early possibilities of tablet-native interaction for its 2012 launch.",
      },
      {
        src: "/images/projects/kqed/08-arts-app.jpg",
        alt: "KQED Arts iPad app — content view",
        width: 1228,
        height: 640,
      },
      {
        src: "/images/projects/kqed/09-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — overview",
        width: 2456,
        height: 1280,
        caption:
          "Our Turbulent Decade, 2019-2020\nA collaboration with KQED Arts journalists to create a reflective wrap-up of the 2010s, balancing editorial storytelling with motion-led interaction. The offset border animation helped frame each section with subtle movement and structure, and the project was developed in 2019 before launching in 2020.",
      },
      {
        src: "/images/projects/kqed/10-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — timeline",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/11-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — data view",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/kqed/12-turbulent-decade.jpg",
        alt: "KQED Our Turbulent Decade — detail",
        width: 2456,
        height: 1280,
      },
    ],
    tags: ["product", "design-systems", "react", "public-media"],
    category: "selected",
  },
  {
    slug: "helix",
    title: "Helix",
    date: "2021-03-01",
    role: "Director of Technology",
    client: "Helix / Aleph",
    shortDescription:
      "A mobile app for clinical trials that helped doctors and clinicians align to strict protocols through notifications, emails, and dashboards.",
    longDescription: `<p>Helix is a clinical trial management platform that connects researchers, doctors, and participants. As Director of Technology at Aleph, I led the development of their mobile application and dashboard systems.</p>
<p>The app improved protocol compliance by providing real-time notifications and streamlined workflows for clinicians. Our work increased the user acquisition success metric by over 22%.</p>
<p>At a time of exponential innovation in biotechnology, a focus on leveraging genomics at the scale of populations made Helix a vital repository of data and information during the COVID-19 pandemic.</p>
<p>Aleph delivered on a purposeful project plan, including the migration of content from multiple legacy platforms, a broad approach to content strategy and management, and a complete interactive design system featuring well-documented processes, usage and development recommendations.</p>`,
    featuredImage: {
      src: "/images/projects/helix/featured.webp",
      alt: "Helix clinical trial app",
      width: 2456,
      height: 1280,
    },
    images: [
      {
        src: "/images/projects/helix/01.webp",
        alt: "Helix app interface — dashboard",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/helix/02.webp",
        alt: "Helix app interface — protocol view",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/helix/03.webp",
        alt: "Helix app interface — notifications",
        width: 2456,
        height: 1280,
      },
      {
        src: "/images/projects/helix/04-ad.png",
        alt: "Helix advertising creative",
        width: 3323,
        height: 2471,
      },
      {
        src: "/images/projects/helix/05-hero.png",
        alt: "Helix hero image — campaign",
        width: 3784,
        height: 2815,
      },
      {
        src: "/images/projects/helix/06-hero.png",
        alt: "Helix hero image — variant 1",
        width: 3810,
        height: 2834,
      },
      {
        src: "/images/projects/helix/08-empower.png",
        alt: "Helix Empower campaign — overview",
        width: 2732,
        height: 1641,
      },
      {
        src: "/images/projects/helix/09-empower.png",
        alt: "Helix Empower campaign — detail",
        width: 2732,
        height: 1560,
      },
      {
        src: "/images/projects/helix/10-empower.png",
        alt: "Helix Empower campaign — mobile",
        width: 2732,
        height: 1350,
      },
    ],
    tags: ["mobile", "react-native", "healthcare", "ux"],
    category: "selected",
  },
  {
    slug: "aleph-rebrand",
    title: "Aleph Rebrand",
    date: "2024-01-31",
    role: "Creative Director",
    client: "Aleph",
    shortDescription:
      "A new website and brand evolution that reflects how Aleph provides creative direction and tech guidance to its clients, inspired by smart robots.",
    longDescription: `<p>Aleph's core offerings as a creative technology partner had expanded and shifted over the years as the studio's talents and focus evolved. The rebrand and new website were built to place those capabilities clearly inside a fast-changing technical landscape and make the latest expression of the studio visible.</p>
<p>The new identity was designed to reflect the collective diversity of Aleph's creative influences, the empathy the team brings to collaborators, and the irreverent nature of the work it wants to do. The studio's client work centers on shaping the space around information with a creative vision that is both ambitious and inherently possible.</p>
<p>A core tenet of the project was that coding is a creative act, not simply a byproduct of design. The brand system had to hold both the static logic of printed pages and the dynamic movement of interactive art, treating code as something foundational and transformative rather than downstream.</p>
<p>The work also embraced AI and LLMs as tools for creation. Prompting and generated imagery were used as a way to translate ideas into visual inspiration, accelerate mood boards, and surface surrealist references while keeping human judgment, taste, and experience at the center of the process.</p>
<p>The result was a brand and website that position Aleph as a guide for clients navigating rapid technical change. The supporting film and imagery extend that point of view into motion, framing the studio's identity around fearless experimentation, creative leadership, and new tools.</p>`,
    featuredImage: {
      src: "/images/experiments/refining-the-point/featured.jpg",
      alt: "Aleph rebrand hero composition",
      width: 3500,
      height: 2000,
    },
    images: [
      {
        src: "/images/experiments/refining-the-point/brand-mark.png",
        alt: "Aleph rebrand brand mark",
        width: 2382,
        height: 2336,
        caption:
          "Brand Mark\nA primary identity form from the rebrand, used to anchor the refreshed website and broader visual system.",
      },
      {
        src: "/images/experiments/refining-the-point/flowers.png",
        alt: "Aleph AI-assisted floral study",
        width: 1080,
        height: 541,
        caption:
          "AI Visual Reference\nGenerated imagery used as creative inspiration during the rebrand process, helping translate ideas into mood and atmosphere.",
      },
      {
        src: "/images/experiments/refining-the-point/animals.png",
        alt: "Aleph AI-assisted animal collage",
        width: 1448,
        height: 1056,
        caption:
          "Smart Robot Flourishes\nPart of the surreal visual language described in the essay, where AI acts as a creative partner rather than a replacement for authorship.",
      },
    ],
    embeds: [
      {
        type: "video",
        src: "/c8d8c5e87ed1917106545837de051d717c60de62.mp4",
        title: "Refining the Point — Aleph Rebrand Process Film",
      },
      {
        type: "instagram",
        src: "https://www.instagram.com/p/C2QU1e5Ocyv/embed/",
        title: "Aleph Rebrand — Instagram",
      },
    ],
    tags: ["branding", "identity", "creative-technology", "ai-art-direction"],
    category: "selected",
  },
  {
    slug: "mercurius",
    title: "Mercurius Beer",
    date: "2023-05-01",
    role: "Creative Director",
    client: "Mercurius",
    shortDescription:
      "Brand identity and packaging design for Mercurius craft beer.",
    longDescription: `<p>Designed the complete brand identity and packaging system for Mercurius, a craft beer brand. The project spanned from naming and logo design through to the final can and bottle label production.</p>`,
    featuredImage: {
      src: "/images/projects/mercurius/featured.jpg",
      alt: "Mercurius beer branding",
      width: 2491,
      height: 2183,
    },
    images: [
      {
        src: "/images/projects/mercurius/01.jpg",
        alt: "Mercurius brand — label design",
        width: 2457,
        height: 1500,
      },
      {
        src: "/images/projects/mercurius/02.jpg",
        alt: "Mercurius brand — final label",
        width: 1179,
        height: 720,
      },
      {
        src: "/images/projects/mercurius/03.jpg",
        alt: "Mercurius brand — logo variant",
        width: 1179,
        height: 720,
      },
      {
        src: "/images/projects/mercurius/04.jpg",
        alt: "Mercurius brand — color palette",
        width: 1600,
        height: 1600,
      },
      {
        src: "/images/projects/mercurius/05.jpg",
        alt: "Mercurius brand — can packaging",
        width: 2457,
        height: 1500,
      },
    ],
    tags: ["branding", "packaging", "identity"],
    category: "selected",
  },
  {
    slug: "exploratorium",
    title: "Exploratorium",
    date: "2015-06-01",
    role: "Design Director",
    client: "Exploratorium",
    shortDescription:
      "Complete website redesign for San Francisco's Exploratorium, timed to the museum's historic move from the Palace of Fine Arts to Pier 15.",
    longDescription: `<p>The Exploratorium's relocation to Pier 15 in 2013 was the biggest transformation in the museum's history — a new building, new galleries, a fundamentally different relationship to the waterfront and the city. The website needed to carry that same energy: not a refresh but a reimagining of how a science museum presents itself online.</p>
<p>We redesigned the full site from the ground up, building an information architecture that mirrored the museum's six gallery zones — the Tinkering Studio, Light and Sound, Human Behaviour, Living Systems, the Outdoor exhibits, and the Bay Observatory. Each section had its own visual rhythm while holding together as a coherent system. The Visit page became a portal to the new Pier 15 location, walking users through what they'd find in each gallery with photography and context that matched the museum's signature mix of wonder and rigour.</p>
<p>The Artists-in-Residence section received particular attention. The Exploratorium has long been a place where artists and scientists overlap, and the redesign gave that program a proper editorial home — profiles, project documentation, and a sense of the creative process behind each residency.</p>
<p>The store, events calendar, education resources, and membership flows were all rebuilt to feel native to the new identity. The result was a site that felt like walking into the museum itself: curious, layered, inviting you to go deeper.</p>`,
    featuredImage: {
      src: "/images/projects/exploratorium/01.jpg",
      alt: "Exploratorium website — homepage with 'more: science close up' feature",
      width: 1280,
      height: 1212,
    },
    images: [
      {
        src: "/images/projects/exploratorium/01.jpg",
        alt: "Exploratorium homepage — gallery grid with Tinkering Studio, Pier 15 move announcement",
        width: 1280,
        height: 1212,
      },
      {
        src: "/images/projects/exploratorium/02.jpg",
        alt: "Exploratorium Artists-in-Residence — editorial page with program history and current residents",
        width: 1280,
        height: 1640,
      },
      {
        src: "/images/projects/exploratorium/03.jpg",
        alt: "Exploratorium store — product grid",
        width: 1280,
        height: 1107,
      },
      {
        src: "/images/projects/exploratorium/04.jpg",
        alt: "Exploratorium store — detail view",
        width: 1280,
        height: 1107,
      },
      {
        src: "/images/projects/exploratorium/05.jpg",
        alt: "Exploratorium visit page — plan your trip to Pier 15",
        width: 1280,
        height: 1508,
      },
      {
        src: "/images/projects/exploratorium/06.jpg",
        alt: "Exploratorium visit portal — gallery zones with Light and Sound, Tinkering, Human Behaviour, Living Systems, Outdoor, Bay Observatory",
        width: 2644,
        height: 2438,
      },
    ],
    tags: ["product", "museum", "education", "information-architecture"],
    category: "selected",
  },
  {
    slug: "nike-nsw",
    title: "Nike NSW",
    date: "2010-06-01",
    role: "Creative Director, Director",
    client: "Nike",
    shortDescription:
      "Microsite and 6 short films for Nike Sportswear's flagship collection — merging fashion film, interactive product exploration, and technical storytelling.",
    longDescription: `<p>Nike Sportswear was Nike's bid to take its technical innovation and dress it in something you'd actually want to wear on the street. The NSW collection — Tech Composite Fleece, Featherweight Windrunner, and the rest — needed a digital presence that could hold both the fashion and the engineering.</p>
<p>We built a microsite that worked as both a collection browser and a film portal. The product grid floated garments in three-dimensional space against a cool studio backdrop, letting users navigate by category — MNS, WMNS, Jackets, Shirts, Sweats, Hats, Pants — with each piece linking out to detailed product pages featuring macro photography (riri zippers, ultrasonic seam taping, bonded hood peaks) and technical spec overlays.</p>
<p>Alongside the site, we directed 6 short films that treated the garments as characters rather than products. The films used timecode overlays and tight cinematography to create a sense of movement and precision that matched the engineering ethos of the line. Each film tied directly into the microsite, so the experience flowed between watching and shopping without a hard break.</p>
<p>The project was one of the first to blur the line between fashion film and interactive commerce at Nike — treating the web as a space where storytelling and product could coexist without one subordinating the other.</p>`,
    featuredImage: {
      src: "/images/projects/nike-nsw/01.jpg",
      alt: "Nike NSW — studio wall with production boards, film stills, and garment flats",
      width: 746,
      height: 495,
    },
    images: [
      {
        src: "/images/projects/nike-nsw/01.jpg",
        alt: "Nike NSW — production wall with film stills, wireframes, and garment photography",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/nike-nsw/02.jpg",
        alt: "Nike NSW — collection browser with floating garments in 3D grid",
        width: 746,
        height: 497,
      },
      {
        src: "/images/projects/nike-nsw/03.jpg",
        alt: "Nike NSW — film still with timecode overlay, neon Windrunner detail",
        width: 746,
        height: 420,
      },
      {
        src: "/images/projects/nike-nsw/04.jpg",
        alt: "Nike NSW — macro detail of riri zipper on Tech Composite Fleece",
        width: 746,
        height: 420,
      },
      {
        src: "/images/projects/nike-nsw/05.jpg",
        alt: "Nike NSW — Tech Composite Fleece product page with technical specs and hotspot annotations",
        width: 746,
        height: 497,
      },
      {
        src: "/images/projects/nike-nsw/06.jpg",
        alt: "Nike NSW — campaign editorial detail",
        width: 746,
        height: 497,
      },
    ],
    tags: ["film", "interactive", "fashion", "nike", "e-commerce"],
    category: "selected",
  },
  {
    slug: "dockers-shk",
    title: "Dockers Super Hard Khakis",
    date: "2013-06-01",
    role: "Creative Director",
    client: "Dockers",
    shortDescription:
      "A branded campaign for Dockers SHK that put skateboarders in khakis and asked what happens when workwear meets street culture.",
    longDescription: `<p>Dockers Super Hard Khakis were built to take a beating — reinforced seams, heavy-duty twill, a construction spec borrowed from workwear rather than fashion. The question was how to market a pair of khakis to people who would never self-identify as khaki wearers. The answer was skateboarding.</p>
<p>We produced a full campaign built around skaters wearing SHK in the wild — no studio shoots, no catalog posing. The photography used long exposures and desaturated tones to create a cinematic quality that felt more like an editorial in a skate mag than an ad for pants. One of the hero images composited a frozen skater against his own motion blur, a visual metaphor for the pants themselves: still holding their shape while everything around them moves.</p>
<p>The campaign ran across digital and print, with a lookbook that paired the motion photography with product detail and lifestyle context. The work succeeded because it took Dockers seriously as a material rather than a brand — treating the khaki as a substrate for culture rather than the other way around.</p>`,
    featuredImage: {
      src: "/images/projects/dockers-shk/01.jpg",
      alt: "Dockers SHK — skater frozen against motion blur, Super Hard Khakis lookbook cover",
      width: 792,
      height: 1224,
    },
    images: [
      {
        src: "/images/projects/dockers-shk/01.jpg",
        alt: "Dockers SHK — hero image with frozen skater and motion-blur double exposure",
        width: 792,
        height: 1224,
      },
      {
        src: "/images/projects/dockers-shk/02.jpg",
        alt: "Dockers SHK — skater grinding at SF industrial park, desaturated editorial tone",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/03.jpg",
        alt: "Dockers SHK — kickflip in Golden Gate Park, foggy morning light",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/04.jpg",
        alt: "Dockers SHK — skating San Francisco streets",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/05.jpg",
        alt: "Dockers SHK — lifestyle photography",
        width: 1920,
        height: 1281,
      },
      {
        src: "/images/projects/dockers-shk/06.jpg",
        alt: "Dockers SHK — skate session detail",
        width: 1920,
        height: 1280,
      },
      {
        src: "/images/projects/dockers-shk/07.jpg",
        alt: "Dockers SHK — campaign photography",
        width: 1920,
        height: 1280,
      },
    ],
    tags: ["photography", "skateboarding", "fashion", "campaign"],
    category: "selected",
  },
  {
    slug: "huf-sf",
    title: "HUF",
    date: "2008-01-01",
    role: "Designer, Developer",
    client: "HUF",
    shortDescription:
      "A long-running creative partnership with Keith Hufnagel and HUF — building the digital presence for one of San Francisco's defining streetwear brands.",
    longDescription: `<p>The relationship with HUF and its founder Keith Hufnagel spanned years and touched nearly every aspect of the brand's digital life. HUF was one of those rare brands that didn't need to be explained to its audience — if you knew, you knew — but it still needed a web presence that matched the precision and taste of what Keith was building in the physical world.</p>
<p>We designed and developed hufsf.com through multiple iterations, including the e-commerce platform, seasonal lookbooks, and collaboration launches. The site featured product photography with the kind of obsessive detail Keith brought to everything — the Nike SB x HUF Air Trainer collab got its own interactive showcase, with the shoe rendered from multiple angles against a clean white field, information overlays triggered by cursor position, and the HUF branding sitting quietly in the corner like a signature on a painting.</p>
<p>The seasonal product grids were designed to feel like a curated shop window rather than a catalog — beanies, button-downs, sneakers, and accessories arranged with the same eye that Keith brought to the physical retail space on Bush Street. The site's green accent color and Futura-adjacent type became as recognizable online as the HUF triple-triangle was on the street.</p>
<p>Keith passed in 2020. The work we did together remains some of the most satisfying of my career — not because of scale or awards, but because it was honest. The brand said what it was, and the digital work tried to do the same.</p>`,
    featuredImage: {
      src: "/images/projects/huf-sf/01.jpg",
      alt: "HUF — Nike SB x HUF Air Trainer collaboration product page",
      width: 1200,
      height: 800,
    },
    images: [
      {
        src: "/images/projects/huf-sf/01.jpg",
        alt: "HUF — Nike SB Air Trainer collaboration with product detail overlay",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/02.jpg",
        alt: "HUF — Nike SB Air Trainer top-down view",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/03.jpg",
        alt: "HUF — product page detail",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/04.jpg",
        alt: "HUF — e-commerce product grid",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/05.jpg",
        alt: "HUF — seasonal lookbook grid with product photography",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/06.jpg",
        alt: "HUF — campaign imagery",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/07.jpg",
        alt: "HUF — beanie product display",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/08.jpg",
        alt: "HUF — lookbook editorial",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/09.jpg",
        alt: "HUF — collection page",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/10.jpg",
        alt: "HUF — product photography",
        width: 1200,
        height: 800,
      },
      {
        src: "/images/projects/huf-sf/11.jpg",
        alt: "HUF — retail and brand presence",
        width: 1200,
        height: 800,
      },
    ],
    tags: ["interactive", "streetwear", "branding", "e-commerce"],
    category: "selected",
  },
  {
    slug: "okml",
    title: "OK Media Lab",
    date: "2014-03-01",
    role: "Founder, Instructor",
    client: "OrdinaryKids",
    shortDescription:
      "A 6-week workshop teaching creatives to build Arduino-based interactive installations, culminating in a gallery show at Lowerdeck Gallery in San Francisco.",
    longDescription: `<p>OK Media Lab grew out of a simple observation: designers and artists were surrounded by cheap, powerful hardware — Arduinos, sensors, LEDs, servos — but most of them had no idea how to use any of it. The gap between wanting to make physical interactive work and actually doing it was a soldering iron and six Tuesday nights.</p>
<p>OKML was a 6-week workshop held at the OrdinaryKids studio, open to creatives with zero electronics experience. Each session introduced a new concept — basic circuits, sensor input, servo control, Processing communication, projection mapping — and each participant worked toward a final installation piece. The structure was deliberately low-ceremony: free beer courtesy of the Sea Star, an Arduino starter kit, and a room full of people willing to blow up a few LEDs in the name of learning.</p>
<p>The workshop culminated in a group show at Lowerdeck Gallery in the Mission. Participants exhibited finished Arduino-based installations — interactive projections, sensor-triggered sound pieces, light sculptures — to a public audience. The gallery was dark, the projections were blue, and people brought their kids.</p>
<p>OKML ran for several sessions and represented something important to the studio's identity: the belief that creative technology isn't a specialisation but a literacy, and that the best way to learn it is to build something real and put it in front of people.</p>`,
    featuredImage: {
      src: "/images/projects/okml/01.jpg",
      alt: "OKML — workshop poster with Arduino board, electronic components, and moon",
      width: 1140,
      height: 749,
    },
    images: [
      {
        src: "/images/projects/okml/01.jpg",
        alt: "OKML — opening workshop poster, Lowerdeck Gallery, Feb 12 2010, 'Free Beer' and Arduino components",
        width: 1140,
        height: 749,
      },
      {
        src: "/images/projects/okml/02.jpg",
        alt: "OKML — workshop session in progress",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/okml/03.jpg",
        alt: "OKML — gallery show, visitors silhouetted against interactive projection installation",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/okml/04.jpg",
        alt: "OKML — children interacting with projected installation at gallery opening",
        width: 746,
        height: 495,
      },
      {
        src: "/images/projects/okml/05.jpg",
        alt: "OKML — gallery show, figure silhouetted against blue LED pixel wall installation",
        width: 746,
        height: 515,
      },
    ],
    tags: ["arduino", "workshop", "installation", "education", "gallery"],
    category: "selected",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
