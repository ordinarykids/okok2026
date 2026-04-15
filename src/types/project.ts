export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface Embed {
  type: "youtube" | "vimeo" | "video" | "instagram";
  src: string;
  title: string;
  /** Tailwind aspect-ratio utility for iframe embeds (default: `aspect-video`). */
  aspectClass?: string;
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  role: string;
  client?: string;
  shortDescription: string;
  longDescription: string;
  /** When omitted, the project page opens with the title block (no hero image). */
  featuredImage?: ImageAsset;
  images: ImageAsset[];
  embeds?: Embed[];
  tags?: string[];
  category: "selected" | "random" | "experiment";
}

export interface Experiment {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: ExperimentContent[];
  tags?: string[];
}

export type ExperimentContent =
  | { type: "text"; body: string }
  | { type: "image"; asset: ImageAsset }
  | { type: "video"; src: string; title?: string }
  | { type: "youtube"; embedId: string; title?: string }
  | {
      type: "vimeo";
      src: string;
      title?: string;
      aspectClass?: string;
    };

export interface CVExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface CVEducation {
  institution: string;
  degree: string;
  note?: string;
}

export interface CVReference {
  name: string;
  title: string;
  email: string;
}

export interface CVData {
  name: string;
  title: string;
  bio: string[];
  experience: CVExperience[];
  education: CVEducation[];
  awards: string[];
  references: CVReference[];
  skills?: string[];
  clients?: string[];
}

export interface NavSection {
  label: string;
  links: { href: string; title: string }[];
}
