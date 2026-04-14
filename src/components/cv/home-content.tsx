"use client";

import { cv } from "@/data/cv";
import { XeroxText } from "@/components/motion/xerox-text";
import { PaperFeed } from "@/components/motion/paper-feed";
import { ScanLineReveal } from "@/components/motion/scan-line-reveal";
import { StaggerLines } from "@/components/motion/stagger-lines";
import { ExperienceEntry } from "@/components/cv/experience-entry";
import { Pretext } from "@/components/motion/pretext";
import { PretextWords } from "@/components/motion/pretext-words";

export function HomeContent() {
  return (
    <div className="grid grid-cols-1 gap-[var(--spacing-2xl)] lg:grid-cols-[2fr_1fr] lg:gap-[var(--spacing-3xl)]">
      {/* Left column */}
      <div>
        <XeroxText
          text={cv.name}
          as="h1"
          className="mb-[var(--spacing-md)] text-[clamp(36px,5vw,60px)] leading-none"
          glitch
        />

        <PaperFeed delay={0.3}>
          <h2 className="mb-[var(--spacing-2xl)] font-mono text-[14px] font-bold leading-relaxed">
            <PretextWords text={cv.title} />
          </h2>
        </PaperFeed>

        <PaperFeed delay={0.4}>
          <Pretext
            paragraphs={cv.bio}
            className="text-ink-light"
          />
        </PaperFeed>

        {/* Experience */}
        <PaperFeed delay={0.1}>
          <h3 className="mb-[var(--spacing-lg)] mt-[var(--spacing-4xl)] text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
            <PretextWords text="Experience" />
          </h3>
        </PaperFeed>

        {cv.experience.map((entry, i) => (
          <ExperienceEntry key={entry.company + entry.role} entry={entry} index={i} />
        ))}

        {/* Education */}
        <PaperFeed>
          <h3 className="mb-[var(--spacing-lg)] mt-[var(--spacing-4xl)] text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
            <PretextWords text="Education" />
          </h3>
        </PaperFeed>

        {cv.education.map((edu, i) => (
          <PaperFeed key={edu.institution} delay={i * 0.08}>
            <div className="mb-[var(--spacing-lg)]">
              <h4 className="text-[12px]">
                <PretextWords text={edu.institution} />
              </h4>
              <div className="text-ink-light">
                <PretextWords text={edu.degree} />
              </div>
              {edu.note && (
                <p className="mt-[var(--spacing-xs)] text-ink-faint">
                  <PretextWords text={edu.note} />
                </p>
              )}
            </div>
          </PaperFeed>
        ))}
      </div>

      {/* Right column */}
      <div className="lg:sticky lg:top-[var(--spacing-xl)] lg:self-start">
        {/* Headshot video */}
        <ScanLineReveal className="mb-[var(--spacing-2xl)]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          >
            <source src="/images/cv/headshot.mp4" type="video/mp4" />
          </video>
        </ScanLineReveal>

        {/* Skills */}
        {cv.skills && (
          <>
            <PaperFeed>
              <h3 className="mb-[var(--spacing-lg)] text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                <PretextWords text="Skills" />
              </h3>
            </PaperFeed>

            <StaggerLines staggerDelay={0.04}>
              {cv.skills.map((skill) => (
                <div key={skill} className="mb-[var(--spacing-xs)] text-ink-light">
                  <PretextWords text={skill} />
                </div>
              ))}
            </StaggerLines>
          </>
        )}

        {/* Clients */}
        {cv.clients && (
          <>
            <PaperFeed>
              <h3 className="mb-[var(--spacing-lg)] mt-[var(--spacing-3xl)] text-[10px] font-bold uppercase tracking-[0.2em] text-ink-faint">
                <PretextWords text="Select Clients" />
              </h3>
            </PaperFeed>

            <StaggerLines staggerDelay={0.03}>
              {cv.clients.map((client) => (
                <div key={client} className="mb-[var(--spacing-xs)] text-ink-light">
                  <PretextWords text={client} />
                </div>
              ))}
            </StaggerLines>
          </>
        )}

      </div>
    </div>
  );
}
