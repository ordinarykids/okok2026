"use client";

import Image from "next/image";
import type { Experiment } from "@/types/project";
import { XeroxText } from "@/components/motion/xerox-text";
import { PaperFeed } from "@/components/motion/paper-feed";
import { ScanLineReveal } from "@/components/motion/scan-line-reveal";
import { GlitchText } from "@/components/motion/glitch-text";

interface ExperimentContentProps {
  experiment: Experiment;
}

export function ExperimentContent({ experiment }: ExperimentContentProps) {
  return (
    <article>
      <div className="mb-[var(--spacing-3xl)]">
        <XeroxText
          text={experiment.title}
          as="h1"
          className="mb-[var(--spacing-md)] text-[clamp(28px,3.5vw,48px)] leading-none"
          glitch
        />

        <PaperFeed delay={0.2}>
          <div className="flex items-baseline gap-[var(--spacing-lg)]">
            <GlitchText className="text-ink-faint">
              {new Date(experiment.date).getFullYear()}
            </GlitchText>
          </div>
        </PaperFeed>

        {experiment.description && (
          <PaperFeed delay={0.3}>
            <p className="mt-[var(--spacing-lg)] text-[14px] leading-relaxed text-ink-light">
              {experiment.description}
            </p>
          </PaperFeed>
        )}
      </div>

      {/* Tags */}
      {experiment.tags && experiment.tags.length > 0 && (
        <PaperFeed>
          <div className="mb-[var(--spacing-2xl)] flex flex-wrap gap-[var(--spacing-sm)]">
            {experiment.tags.map((tag) => (
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

      {/* Content blocks */}
      {experiment.content.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <PaperFeed key={i} delay={0.1 * i}>
                <div
                  className="mb-[var(--spacing-2xl)] leading-relaxed text-ink-light [&>p]:mb-[var(--spacing-lg)]"
                  dangerouslySetInnerHTML={{ __html: block.body }}
                />
              </PaperFeed>
            );

          case "image":
            return (
              <ScanLineReveal
                key={i}
                delay={0.1 * i}
                className="mb-[var(--spacing-2xl)]"
              >
                <Image
                  src={block.asset.src}
                  alt={block.asset.alt}
                  width={block.asset.width}
                  height={block.asset.height}
                  className="w-full"
                />
                {block.asset.caption && (
                  <p className="mt-[var(--spacing-sm)] text-[10px] text-ink-faint">
                    {block.asset.caption}
                  </p>
                )}
              </ScanLineReveal>
            );

          case "video":
            return (
              <PaperFeed key={i} delay={0.1 * i} className="mb-[var(--spacing-2xl)]">
                <video controls className="w-full">
                  <source src={block.src} type="video/mp4" />
                </video>
                {block.title && (
                  <p className="mt-[var(--spacing-sm)] text-[10px] text-ink-faint">
                    {block.title}
                  </p>
                )}
              </PaperFeed>
            );

          case "youtube":
            return (
              <PaperFeed key={i} delay={0.1 * i} className="mb-[var(--spacing-2xl)]">
                <div className="relative aspect-video w-full overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${block.embedId}`}
                    title={block.title ?? "YouTube video"}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </PaperFeed>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
