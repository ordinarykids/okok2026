"use client";

import { useRef, useState, useCallback } from "react";

const VIMEO_ID = "1183827334";
const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_ID}?background=1&autoplay=1&loop=1&muted=1&autopause=0&title=0&byline=0&portrait=0&controls=0&badge=0`;

export function HomeContent() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;
    const next = !muted;
    // Vimeo Player API — send setMuted + setVolume via postMessage
    iframe.contentWindow.postMessage(
      JSON.stringify({ method: "setMuted", value: next }),
      "https://player.vimeo.com",
    );
    iframe.contentWindow.postMessage(
      JSON.stringify({ method: "setVolume", value: next ? 0 : 1 }),
      "https://player.vimeo.com",
    );
    setMuted(next);
  }, [muted]);

  return (
    <div className="flex min-h-[70vh] flex-col justify-between">
      {/* Video area */}
      <div className="mb-[var(--spacing-2xl)] flex-1">
        <button
          type="button"
          onClick={toggleSound}
          className="group relative block aspect-square w-full cursor-pointer overflow-hidden"
          aria-label={muted ? "Turn sound on" : "Turn sound off"}
        >
          <iframe
            ref={iframeRef}
            src={VIMEO_SRC}
            title="Other Stories — 2024"
            className="pointer-events-none absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          {/* Sound indicator */}
          <span
            className="absolute bottom-[var(--spacing-md)] right-[var(--spacing-md)] font-mono text-[10px] uppercase tracking-[0.2em] text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            {muted ? "click for sound" : "sound on"}
          </span>
        </button>
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
