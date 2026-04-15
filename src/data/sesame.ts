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

  const featuredImage = imageAssets[0] ?? LAB_FALLBACK_IMAGE;
  const images =
    imageAssets.length > 0 ? imageAssets.slice(1) : [];

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

/** LAB nav order minus Claude #2 and Moirés; Her is listed first separately. */
const SESAME_LAB_AFTER_HER = [
  "chaotic-desktop",
  "junk-drawer",
  "early-covid-gans",
  "claude-self-portrait",
  "surrealist-dreams",
  "touchdesigner",
] as const;

/**
 * Special projects visible only behind the password gate.
 * These follow the same Project type as selected work.
 */
export const sesameProjects: Project[] = [
  experimentToSesameProject(getExperimentBySlug("her")),
  getProjectBySlug("nike-free"),
  ...SESAME_LAB_AFTER_HER.map((slug) =>
    experimentToSesameProject(getExperimentBySlug(slug)),
  ),
  getProjectBySlug("exploratorium"),
  getProjectBySlug("kqed"),
];
