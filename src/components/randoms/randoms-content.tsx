"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { randoms } from "@/data/randoms";
import { XeroxText } from "@/components/motion/xerox-text";
import { PaperFeed } from "@/components/motion/paper-feed";
import { ScanLineReveal } from "@/components/motion/scan-line-reveal";
import { motion, AnimatePresence } from "motion/react";

const allProjects = randoms;

function getRandomProject() {
  return allProjects[Math.floor(Math.random() * allProjects.length)];
}

export function RandomsContent() {
  const [current, setCurrent] = useState(() => getRandomProject());
  const [key, setKey] = useState(0);

  const shuffle = useCallback(() => {
    let next = getRandomProject();
    while (next.slug === current.slug && allProjects.length > 1) {
      next = getRandomProject();
    }
    setCurrent(next);
    setKey((k) => k + 1);
  }, [current.slug]);

  return (
    <div>
      <div className="mb-[var(--spacing-2xl)] flex items-baseline justify-between">
        <XeroxText
          text="Random Projects"
          as="h1"
          className="text-[clamp(28px,3.5vw,48px)] leading-none"
        />

        <button
          onClick={shuffle}
          className="border border-ink px-[var(--spacing-lg)] py-[var(--spacing-sm)] text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper"
        >
          Shuffle
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <ScanLineReveal className="mb-[var(--spacing-2xl)]">
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src={current.featuredImage.src}
                alt={current.featuredImage.alt}
                width={current.featuredImage.width}
                height={current.featuredImage.height}
                className="h-full w-full object-cover"
              />
            </div>
          </ScanLineReveal>

          <h2 className="mb-[var(--spacing-md)] font-heading text-[clamp(24px,3vw,40px)] leading-none">
            {current.title}
          </h2>

          <PaperFeed>
            <p className="mb-[var(--spacing-lg)] max-w-[var(--content-narrow)] text-[14px] leading-relaxed text-ink-light">
              {current.shortDescription}
            </p>
          </PaperFeed>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-[var(--spacing-lg)] md:grid-cols-2">
            {current.images.map((image, i) => (
              <ScanLineReveal key={i} delay={i * 0.15}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full"
                />
              </ScanLineReveal>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
