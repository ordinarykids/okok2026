import type { Project } from "@/types/project";

export const randoms: Project[] = [
  {
    slug: "sunset-cinema",
    title: "Sunset Cinema",
    date: "2008-06-01",
    role: "Creative Director",
    client: "Sunset Cinema",
    shortDescription:
      "An extremely creative execution on branding for a film festival.",
    longDescription: `<p>Developed the complete brand identity and collateral for Sunset Cinema film festival, from logo to environmental graphics.</p>`,
    featuredImage: {
      src: "/images/projects/sunset-cinema/01.jpg",
      alt: "Sunset Cinema branding",
      width: 746,
      height: 325,
    },
    images: [
      { src: "/images/projects/sunset-cinema/01.jpg", alt: "Sunset Cinema brand mark", width: 746, height: 325 },
      { src: "/images/projects/sunset-cinema/02.jpg", alt: "Sunset Cinema identity", width: 746, height: 325 },
      { src: "/images/projects/sunset-cinema/03.jpg", alt: "Sunset Cinema poster", width: 746, height: 497 },
      { src: "/images/projects/sunset-cinema/04.jpg", alt: "Sunset Cinema collateral", width: 746, height: 534 },
      { src: "/images/projects/sunset-cinema/05.jpg", alt: "Sunset Cinema program", width: 746, height: 497 },
    ],
    tags: ["branding", "identity", "film"],
    category: "random",
  },
  {
    slug: "pepsi-now",
    title: "Pepsi Now",
    date: "2012-01-01",
    role: "Creative Director, Developer",
    client: "Pepsi",
    shortDescription:
      "OrdinaryKids designed an iPad application that pulled data from users' personal Facebook photos and merged them with Pepsi branding.",
    longDescription: `<p>Designed and developed an iPad application for Pepsi that leveraged users' Facebook photo data to create personalized branded experiences. The app merged personal imagery with Pepsi's visual identity in real-time.</p>`,
    featuredImage: {
      src: "/images/projects/pepsi-now/01.jpg",
      alt: "Pepsi Now iPad app",
      width: 746,
      height: 414,
    },
    images: [
      { src: "/images/projects/pepsi-now/01.jpg", alt: "Pepsi Now interface", width: 746, height: 414 },
      { src: "/images/projects/pepsi-now/02.jpg", alt: "Pepsi Now detail", width: 746, height: 569 },
      { src: "/images/projects/pepsi-now/03.jpg", alt: "Pepsi Now personalization", width: 746, height: 485 },
      { src: "/images/projects/pepsi-now/04.png", alt: "Pepsi Now full layout", width: 746, height: 1091 },
    ],
    tags: ["mobile", "ipad", "social", "branding"],
    category: "random",
  },
  {
    slug: "adidas-skateboarding",
    title: "Adidas Skateboarding",
    date: "2009-01-01",
    role: "Designer, Developer",
    client: "Adidas",
    shortDescription:
      "Designed and developed the website for Adidas Skateboarding.",
    longDescription: `<p>Created the complete web presence for Adidas Skateboarding, featuring team riders, product showcases, and video content. The site captured the energy of skate culture through bold design and interactive elements.</p>`,
    featuredImage: {
      src: "/images/projects/adidas-skateboarding/01.jpg",
      alt: "Adidas Skateboarding website",
      width: 746,
      height: 497,
    },
    images: [
      { src: "/images/projects/adidas-skateboarding/01.jpg", alt: "Adidas Skate — home", width: 746, height: 497 },
      { src: "/images/projects/adidas-skateboarding/02.jpg", alt: "Adidas Skate — team", width: 746, height: 497 },
      { src: "/images/projects/adidas-skateboarding/03.jpg", alt: "Adidas Skate — product", width: 746, height: 497 },
      { src: "/images/projects/adidas-skateboarding/04.jpg", alt: "Adidas Skate — detail", width: 746, height: 497 },
      { src: "/images/projects/adidas-skateboarding/05.jpg", alt: "Adidas Skate — video", width: 746, height: 497 },
      { src: "/images/projects/adidas-skateboarding/06.jpg", alt: "Adidas Skate — gallery", width: 746, height: 497 },
    ],
    tags: ["interactive", "skateboarding", "flash"],
    category: "random",
  },
  {
    slug: "mitch-ranger",
    title: "Mitch Ranger",
    date: "2009-06-01",
    role: "Designer, Developer",
    client: "Mitch Ranger",
    shortDescription:
      "Experimental photography portfolio for Mitch Ranger. Dynamically created color palette based on the photograph's dominant colors.",
    longDescription: `<p>Built an experimental photography portfolio that extracted dominant colors from each photograph to dynamically generate the site's color palette. Every page felt unique, shaped by the imagery itself.</p>`,
    featuredImage: {
      src: "/images/projects/mitch-ranger/01.jpg",
      alt: "Mitch Ranger portfolio",
      width: 955,
      height: 612,
    },
    images: [
      { src: "/images/projects/mitch-ranger/01.jpg", alt: "Mitch Ranger — photo 1", width: 955, height: 612 },
      { src: "/images/projects/mitch-ranger/02.jpg", alt: "Mitch Ranger — photo 2", width: 955, height: 667 },
      { src: "/images/projects/mitch-ranger/03.jpg", alt: "Mitch Ranger — photo 3", width: 955, height: 667 },
      { src: "/images/projects/mitch-ranger/04.jpg", alt: "Mitch Ranger — photo 4", width: 955, height: 667 },
      { src: "/images/projects/mitch-ranger/05.jpg", alt: "Mitch Ranger — photo 5", width: 955, height: 667 },
    ],
    tags: ["interactive", "photography", "generative"],
    category: "random",
  },
  {
    slug: "falling-whistles",
    title: "Falling Whistles — White House Campaign",
    date: "2011-01-01",
    role: "Creative Director, Developer",
    client: "Falling Whistles",
    shortDescription:
      "Created an iPad application that let users take a photo of themselves that was turned into an African-inspired portrait for the White House campaign.",
    longDescription: `<p>Developed an iPad application for Falling Whistles' White House campaign. Users could take a photo of themselves which was algorithmically transformed into an African-inspired portrait, creating a personal connection to the cause.</p>`,
    featuredImage: {
      src: "/images/projects/falling-whistles/01.jpg",
      alt: "Falling Whistles campaign",
      width: 746,
      height: 451,
    },
    images: [
      { src: "/images/projects/falling-whistles/01.jpg", alt: "Falling Whistles — overview", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/02.jpg", alt: "Falling Whistles — portrait", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/03.jpg", alt: "Falling Whistles — interface", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/04.jpg", alt: "Falling Whistles — gallery", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/05.jpg", alt: "Falling Whistles — transform", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/06.jpg", alt: "Falling Whistles — result", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/07.jpg", alt: "Falling Whistles — event", width: 700, height: 423 },
      { src: "/images/projects/falling-whistles/08.jpg", alt: "Falling Whistles — White House", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/09.jpg", alt: "Falling Whistles — campaign", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/10.jpg", alt: "Falling Whistles — collage", width: 746, height: 451 },
      { src: "/images/projects/falling-whistles/11.jpg", alt: "Falling Whistles — closing", width: 746, height: 451 },
    ],
    tags: ["mobile", "ipad", "activism", "generative"],
    category: "random",
  },
];

export function getRandomProjects(count: number = 1): Project[] {
  const shuffled = [...randoms].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
