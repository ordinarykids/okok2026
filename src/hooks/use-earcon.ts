"use client";

import { useCallback, useRef } from "react";

/**
 * Returns a function that plays the earcon hover sound.
 * Pools a few AudioBufferSourceNodes for rapid re-triggering.
 */
export function useEarcon(src = "/audio/earcon-hover.wav") {
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const loadingRef = useRef(false);

  const ensureLoaded = useCallback(async () => {
    if (bufferRef.current || loadingRef.current) return;
    loadingRef.current = true;
    try {
      const ctx = new AudioContext();
      ctxRef.current = ctx;
      const res = await fetch(src);
      const arrayBuf = await res.arrayBuffer();
      bufferRef.current = await ctx.decodeAudioData(arrayBuf);
    } catch {
      // Silently fail — audio is decorative
    }
    loadingRef.current = false;
  }, [src]);

  const play = useCallback(() => {
    const ctx = ctxRef.current;
    const buffer = bufferRef.current;
    if (!ctx || !buffer) {
      // Lazy init on first interaction
      ensureLoaded();
      return;
    }
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Keep it subtle — low gain
    const gain = ctx.createGain();
    gain.gain.value = 0.15;
    source.connect(gain);
    gain.connect(ctx.destination);

    source.start(0);
  }, [ensureLoaded]);

  // Pre-load on first user gesture (pointer down anywhere)
  const init = useCallback(() => {
    ensureLoaded();
  }, [ensureLoaded]);

  return { play, init };
}
