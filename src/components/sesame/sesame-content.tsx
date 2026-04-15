"use client";

import Image from "next/image";
import Link from "next/link";
import { sesameProjects } from "@/data/sesame";
import { XeroxText } from "@/components/motion/xerox-text";
import { PaperFeed } from "@/components/motion/paper-feed";
import { ScanLineReveal } from "@/components/motion/scan-line-reveal";
import { Pretext } from "@/components/motion/pretext";

export function SesameContent() {
  if (sesameProjects.length === 0) {
    return (
      <div>
        <XeroxText
          text="Sesame"
          as="h1"
          className="mb-[var(--spacing-md)] text-[clamp(36px,5vw,60px)] leading-none"
          glitch
        />
        <PaperFeed delay={0.3}>
          <p className="text-[14px] text-ink-light">
            Nothing here yet. Projects added to{" "}
            <code className="text-ink">src/data/sesame.ts</code> will appear
            behind this gate.
          </p>
        </PaperFeed>
      </div>
    );
  }

  return (
    <div>
      <XeroxText
        text="Sesame"
        as="h1"
        className="mb-[var(--spacing-2xl)] text-[clamp(36px,5vw,60px)] leading-none"
        glitch
      />

      <div className="grid grid-cols-1 gap-[var(--spacing-4xl)]">
        {sesameProjects.map((project, i) => {
          const thumb = project.featuredImage ?? project.images[0];
          return (
          <PaperFeed key={project.slug} delay={i * 0.15}>
            <article>
              {thumb && (
              <ScanLineReveal className="mb-[var(--spacing-lg)]">
                <Link href={`/sesame/${project.slug}`}>
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    width={thumb.width}
                    height={thumb.height}
                    className="w-full"
                  />
                </Link>
              </ScanLineReveal>
              )}

              <Link
                href={`/sesame/${project.slug}`}
                className="hover:no-underline"
              >
                <h2 className="mb-[var(--spacing-sm)] font-heading text-[clamp(24px,3vw,40px)] leading-none">
                  {project.title}
                </h2>
              </Link>

              <div className="mb-[var(--spacing-sm)] flex flex-wrap items-baseline gap-[var(--spacing-lg)]">
                <span className="text-[14px] font-bold uppercase tracking-[0.1em]">
                  {project.role}
                </span>
                {project.client && (
                  <span className="text-ink-faint">for {project.client}</span>
                )}
              </div>

              <Pretext
                paragraphs={[project.shortDescription]}
                className="max-w-[var(--content-narrow)] text-[14px] text-ink-light"
              />
            </article>
          </PaperFeed>
          );
        })}
      </div>
    </div>
  );
}
