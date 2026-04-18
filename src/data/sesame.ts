import type { Embed, Experiment, ImageAsset, Project } from "@/types/project";
import { experiments } from "@/data/experiments";
import { projects } from "@/data/projects";

/**
 * Password hash for the sesame gate.
 * To change the password, run in Node:
 *   require("crypto").createHash("sha256").update("newpassword").digest("hex")
 *
 * Current password: "let's talk"
 */
export const SESAME_HASH =
  "77dfcc0955728960f2c2c055b9da41db51389caebf1fab8b70f61e701e79507a";

/** Used when an experiment has no image block before video or text-only bodies. */
const LAB_FALLBACK_IMAGE: ImageAsset = {
  src: "/images/experiments/junk-drawer/01.jpg",
  alt: "Lab work",
  width: 1998,
  height: 1998,
};

function getProjectBySlug(slug: string): Project {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`sesame: unknown project slug "${slug}"`);
  return p;
}

function getExperimentBySlug(slug: string): Experiment {
  const e = experiments.find((x) => x.slug === slug);
  if (!e) throw new Error(`sesame: unknown experiment slug "${slug}"`);
  return e;
}

function experimentToSesameProject(exp: Experiment): Project {
  const imageAssets: ImageAsset[] = [];
  const embeds: Embed[] = [];

  for (const block of exp.content) {
    if (block.type === "image") imageAssets.push(block.asset);
    if (block.type === "video") {
      embeds.push({
        type: "video",
        src: block.src,
        title: block.title ?? exp.title,
        aspectClass: block.aspectClass,
      });
    }
    if (block.type === "vimeo") {
      embeds.push({
        type: "vimeo",
        src: block.src,
        title: block.title ?? exp.title,
        aspectClass: block.aspectClass,
      });
    }
  }

  const featuredImage = imageAssets[0] ?? undefined;
  const images = imageAssets.length > 0 ? imageAssets.slice(1) : [];

  const longDescription = exp.content
    .filter((b): b is { type: "text"; body: string } => b.type === "text")
    .map((b) => b.body)
    .join("");

  return {
    slug: exp.slug,
    title: exp.title,
    date: exp.date,
    role: "Lab",
    shortDescription: exp.description ?? "",
    longDescription: longDescription || `<p>${exp.description ?? ""}</p>`,
    featuredImage,
    images,
    embeds: embeds.length > 0 ? embeds : undefined,
    tags: exp.tags,
    category: "experiment",
  };
}

/** Current thinking — active projects and recent provocations. */
const CURRENT_THINKING_SLUGS = {
  projects: ["sage", "hello-intuit"] as const,
  experiments: ["her", "lead-lingo", "earcon-generator"] as const,
};

/** Previous professional work. */
const EARLY_WORK_SLUGS = [
  "kqed",
  "moma",
  "nike-free",
  "nike-nsw",
  "nike-fuelband",
  "exploratorium",
  "stussy",
  "huf-sf",
] as const;

/** Experiments that sit in the "previous exports" section (rendered first). */
const EARLY_WORK_EXPERIMENT_SLUGS = ["refining-the-point"] as const;

/** Experimental / generative / visual work. */
const EXPERIMENTS_SLUGS = [
  "surrealist-dreams",
  "early-covid-gans",
  "undertrained-gans-print",
  "portraits",
  "touchdesigner",
] as const;

/** Current thinking section. */
export const sesameCurrentThinking: Project[] = [
  ...CURRENT_THINKING_SLUGS.projects.map(getProjectBySlug),
  ...CURRENT_THINKING_SLUGS.experiments.map((s) =>
    experimentToSesameProject(getExperimentBySlug(s)),
  ),
];

/** Previous / early work section. */
export const sesameEarlyWork: Project[] = [
  ...EARLY_WORK_EXPERIMENT_SLUGS.map((s) =>
    experimentToSesameProject(getExperimentBySlug(s)),
  ),
  ...EARLY_WORK_SLUGS.map(getProjectBySlug),
];

/** Experiments section. */
export const sesameExperiments: Project[] = EXPERIMENTS_SLUGS.map((s) =>
  experimentToSesameProject(getExperimentBySlug(s)),
);

/** All sesame projects (flat list for static generation). */
export const sesameProjects: Project[] = [
  ...sesameCurrentThinking,
  ...sesameEarlyWork,
  ...sesameExperiments,
];
