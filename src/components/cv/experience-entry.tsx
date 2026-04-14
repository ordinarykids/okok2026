"use client";

import type { CVExperience } from "@/types/project";
import { PaperFeed } from "@/components/motion/paper-feed";
import { PretextWords } from "@/components/motion/pretext-words";

interface ExperienceEntryProps {
  entry: CVExperience;
  index: number;
}

export function ExperienceEntry({ entry, index }: ExperienceEntryProps) {
  return (
    <PaperFeed delay={index * 0.08} className="mb-[var(--spacing-2xl)]">
      <h4 className="text-[16px]">
        <PretextWords text={entry.company} />
      </h4>
      <div className="text-[14px] text-ink-light">
        <PretextWords text={entry.role} />
      </div>
      <div className="mt-[var(--spacing-xs)] text-ink-faint uppercase">
        <PretextWords text={entry.period} />
      </div>
      <p className="mt-[var(--spacing-sm)]">
        <PretextWords text={entry.description} />
      </p>
      <ul className="mt-[var(--spacing-sm)] list-disc pl-[var(--spacing-lg)] text-ink-light">
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="mb-[var(--spacing-xs)]">
            <PretextWords text={bullet} />
          </li>
        ))}
      </ul>
    </PaperFeed>
  );
}
