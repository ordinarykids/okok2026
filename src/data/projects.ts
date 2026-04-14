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
      "An animated coloring book web experience that allowed users to color the website while animations unfolded to Tracy Chapman's music.",
    longDescription: `<p>For Tracy Chapman's album release, we created an interactive web experience that merged animation with user participation. The site functioned as a living coloring book — visitors could paint directly on the canvas while hand-drawn animations played in response to the music.</p>
<p>Built entirely in Flash, the experience pushed the boundaries of what interactive storytelling could be on the web, earning recognition from Communication Arts and the FWA.</p>`,
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
        src: "/images/projects/helix/07-hero.png",
        alt: "Helix hero image — variant 2",
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
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
