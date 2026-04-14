"use client";

import { Pretext } from "@/components/motion/pretext";

interface PretextProjectCopyProps {
  shortDescription: string;
  longDescription: string;
  className?: string;
}

export function PretextProjectCopy({
  shortDescription,
  longDescription,
  className,
}: PretextProjectCopyProps) {
  return (
    <Pretext
      paragraphs={[shortDescription.trim()]}
      html={longDescription}
      className={`mb-[var(--spacing-3xl)] columns-1 gap-[var(--spacing-2xl)] text-ink-light lg:columns-2 ${className ?? ""}`}
      paragraphClassName="break-inside-avoid-column text-[14px]"
    />
  );
}
