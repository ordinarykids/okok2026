"use client";

import Image from "next/image";
import type { Project } from "@/types/project";
import { XeroxText } from "@/components/motion/xerox-text";
import { ScanLineReveal } from "@/components/motion/scan-line-reveal";
import { PaperFeed } from "@/components/motion/paper-feed";
import { GlitchText } from "@/components/motion/glitch-text";
import { PretextProjectCopy } from "@/components/project/pretext-project-copy";

interface ProjectContentProps {
  project: Project;
}

/** Gallery images only: never repeat the hero, never repeat the same asset twice. */
function uniqueGalleryImages(project: Project) {
  const seen = new Set<string>();
  if (project.featuredImage) seen.add(project.featuredImage.src);
  const out: Project["images"] = [];
  for (const image of project.images) {
    if (seen.has(image.src)) continue;
    seen.add(image.src);
    out.push(image);
  }
  return out;
}

export function ProjectContent({ project }: ProjectContentProps) {
  const galleryImages = uniqueGalleryImages(project);

  return (
    <article>
      {project.featuredImage && (
        <ScanLineReveal className="mb-[var(--spacing-2xl)]">
          <div
            className={`overflow-hidden ${isPortrait(project.featuredImage) ? "mx-auto w-1/2" : "w-full"}`}
          >
            <Image
              src={project.featuredImage.src}
              alt={project.featuredImage.alt}
              width={project.featuredImage.width}
              height={project.featuredImage.height}
              className="h-auto w-full"
              priority
            />
          </div>
        </ScanLineReveal>
      )}

      {/* Title block */}
      <div className="mb-[var(--spacing-3xl)]">
        <XeroxText
          text={project.title}
          as="h1"
          className="mb-[var(--spacing-md)] text-[clamp(32px,4vw,54px)] leading-none"
          glitch
        />

        <PaperFeed delay={0.3}>
          <div className="flex flex-wrap items-baseline gap-[var(--spacing-lg)]">
            <GlitchText className="text-[14px] font-bold uppercase tracking-[0.1em]">
              {project.role}
            </GlitchText>
            {project.client && (
              <span className="text-ink-faint">for {project.client}</span>
            )}
          </div>
        </PaperFeed>

      </div>

      {/* Project copy */}
      <PaperFeed delay={0.4}>
        <PretextProjectCopy
          shortDescription={project.shortDescription}
          longDescription={project.longDescription}
        />
      </PaperFeed>

      {/* Embeds (directly under description) */}
      <EmbedGallery embeds={project.embeds} />

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <PaperFeed>
          <div className="mb-[var(--spacing-3xl)] flex flex-wrap gap-[var(--spacing-sm)]">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-rule px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-[10px] uppercase tracking-[0.15em] text-ink-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        </PaperFeed>
      )}

      {/* Image gallery */}
      <ImageGallery images={galleryImages} />
    </article>
  );
}

/** Returns true when the image is portrait (taller than wide). */
function isPortrait(img: { width: number; height: number }) {
  return img.height / img.width > 1.2;
}

/**
 * Smart gallery that pairs portrait images side-by-side (2-up)
 * and shows landscape/square images full-width.
 */
function ImageGallery({ images }: { images: Project["images"] }) {
  const elements: React.ReactNode[] = [];
  let i = 0;
  let keyIdx = 0;

  while (i < images.length) {
    const img = images[i];
    const next = images[i + 1];

    // If both current and next are portrait, pair them
    if (next && isPortrait(img) && isPortrait(next)) {
      elements.push(
        <div key={`pair-${keyIdx++}`} className="grid grid-cols-2 gap-[var(--spacing-lg)]">
          <GalleryImage image={img} index={i} />
          <GalleryImage image={next} index={i + 1} />
        </div>,
      );
      i += 2;
    } else {
      elements.push(
        <GalleryImage key={`single-${keyIdx++}`} image={img} index={i} />,
      );
      i += 1;
    }
  }

  return <div className="flex flex-col gap-[var(--spacing-lg)]">{elements}</div>;
}

function GalleryImage({
  image,
  index,
}: {
  image: Project["images"][number];
  index: number;
}) {
  return (
    <ScanLineReveal delay={index * 0.1}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="w-full"
        loading="lazy"
      />
      {image.caption &&
        (() => {
          const [captionTitle, ...captionBodyLines] =
            image.caption.split("\n");
          const captionBody = captionBodyLines.join("\n").trim();

          return (
            <div className="mt-[var(--spacing-sm)] text-ink-faint">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink">
                {captionTitle}
              </p>
              {captionBody && (
                <p className="mt-[var(--spacing-xs)] text-[10px] leading-relaxed whitespace-pre-line">
                  {captionBody}
                </p>
              )}
            </div>
          );
        })()}
    </ScanLineReveal>
  );
}

function getVideoMimeType(src: string) {
  if (src.endsWith(".mov")) return "video/quicktime";
  if (src.endsWith(".webm")) return "video/webm";
  return "video/mp4";
}

import type { Embed } from "@/types/project";

function isPortraitEmbed(embed: Embed) {
  return embed.aspectClass === "portrait";
}

function SingleEmbed({ embed }: { embed: Embed }) {
  if (embed.type === "youtube") {
    return (
      <div className={`relative w-full overflow-hidden ${embed.aspectClass ?? "aspect-video"}`}>
        <iframe
          src={embed.src}
          title={embed.title}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  if (embed.type === "vimeo") {
    return (
      <div className={`relative w-full overflow-hidden ${embed.aspectClass ?? "aspect-video"}`}>
        <iframe
          src={(() => {
            const url = new URL(embed.src, "https://player.vimeo.com");
            url.searchParams.set("title", "0");
            url.searchParams.set("byline", "0");
            url.searchParams.set("portrait", "0");
            return url.toString();
          })()}
          title={embed.title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }
  if (embed.type === "instagram") {
    return (
      <div className="mx-auto max-w-[540px]">
        <iframe
          src={embed.src}
          title={embed.title}
          className="w-full border border-rule bg-white"
          style={{ minWidth: 326, borderRadius: 3 }}
          height={536}
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <video
      controls
      playsInline
      preload="metadata"
      muted
      autoPlay
      loop
      className="mx-auto w-full bg-black"
    >
      <source src={embed.src} type={getVideoMimeType(embed.src)} />
    </video>
  );
}

/**
 * Smart embed gallery that pairs portrait videos side-by-side (2-up)
 * and shows landscape/standard embeds full-width.
 */
function EmbedGallery({ embeds }: { embeds?: Embed[] }) {
  if (!embeds || embeds.length === 0) return null;

  const elements: React.ReactNode[] = [];
  let i = 0;
  let keyIdx = 0;

  while (i < embeds.length) {
    const embed = embeds[i];

    // Count how many consecutive portrait embeds start here
    let run = 0;
    while (i + run < embeds.length && isPortraitEmbed(embeds[i + run])) run++;

    if (run >= 4) {
      // Pack 4 portrait embeds into a single 4-column row
      elements.push(
        <PaperFeed key={`quad-${keyIdx++}`} className="mb-[var(--spacing-2xl)]">
          <div className="grid grid-cols-4 gap-[var(--spacing-md)]">
            {embeds.slice(i, i + 4).map((e, idx) => (
              <SingleEmbed key={idx} embed={e} />
            ))}
          </div>
        </PaperFeed>,
      );
      i += 4;
    } else if (run >= 2) {
      elements.push(
        <PaperFeed key={`pair-${keyIdx++}`} className="mb-[var(--spacing-2xl)]">
          <div className="grid grid-cols-2 gap-[var(--spacing-lg)]">
            <SingleEmbed embed={embed} />
            <SingleEmbed embed={embeds[i + 1]} />
          </div>
        </PaperFeed>,
      );
      i += 2;
    } else {
      elements.push(
        <PaperFeed key={`single-${keyIdx++}`} className="mb-[var(--spacing-2xl)]">
          <SingleEmbed embed={embed} />
        </PaperFeed>,
      );
      i += 1;
    }
  }

  return <>{elements}</>;
}
