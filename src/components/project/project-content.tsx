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

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <article>
      {/* Hero image */}
      <ScanLineReveal className="mb-[var(--spacing-2xl)]">
        <div className="w-full overflow-hidden">
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
            <span className="text-ink-faint">
              {new Date(project.date).getFullYear()}
            </span>
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

      {/* Embeds */}
      {project.embeds?.map((embed, i) => (
        <PaperFeed key={i} className="mb-[var(--spacing-2xl)]">
          {embed.type === "youtube" ? (
            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                src={embed.src}
                title={embed.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : embed.type === "instagram" ? (
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
          ) : (
            <video controls className="w-full">
              <source src={embed.src} type={getVideoMimeType(embed.src)} />
            </video>
          )}
        </PaperFeed>
      ))}

      {/* Image gallery */}
      <div className="grid grid-cols-1 gap-[var(--spacing-lg)]">
        {project.images.map((image, i) => (
          <ScanLineReveal
            key={i}
            delay={i * 0.1}
            className="mb-[var(--spacing-sm)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full"
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
        ))}
      </div>
    </article>
  );
}

function getVideoMimeType(src: string) {
  if (src.endsWith(".mov")) return "video/quicktime";
  if (src.endsWith(".webm")) return "video/webm";
  return "video/mp4";
}
