"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { homeVideos } from "@/data/home-videos";
import { PretextWords } from "@/components/motion/pretext-words";

function pickRandom() {
  return Math.floor(Math.random() * homeVideos.length);
}

export function HomeContent() {
  const [index, setIndex] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  // Pick on mount (client only to avoid hydration mismatch)
  useEffect(() => {
    setIndex(pickRandom());
  }, []);

  const shuffle = useCallback(() => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      let next = pickRandom();
      // Avoid same video twice in a row
      if (homeVideos.length > 1) {
        while (next === index) next = pickRandom();
      }
      setIndex(next);
      setFading(false);
    }, 400);
  }, [index, fading]);

  if (index === null) return null;

  const video = homeVideos[index];

  return (
    <div className="flex min-h-[70vh] flex-col justify-between">
      {/* Video area */}
      <div className="relative mb-[var(--spacing-2xl)] flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={video.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative cursor-pointer"
            onClick={shuffle}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full"
            >
              <source src={video.src} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* Label */}
        <AnimatePresence mode="wait">
          <motion.p
            key={video.label}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mt-[var(--spacing-md)] font-mono text-[10px] uppercase tracking-[0.15em] text-ink-faint"
          >
            <PretextWords text={video.label} />
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom: name + studio */}
      <div className="flex items-baseline justify-between border-t border-rule pt-[var(--spacing-lg)]">
        <span className="font-heading text-[clamp(14px,2vw,18px)] tracking-tight">
          Jason Herring
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">
          ordinarykids
        </span>
      </div>
    </div>
  );
}
