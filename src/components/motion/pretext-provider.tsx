"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type PointerEvent,
  type ReactNode,
} from "react";
import { useReducedMotion } from "motion/react";

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

interface PretextContextValue {
  register: (el: HTMLSpanElement) => () => void;
}

const PretextContext = createContext<PretextContextValue | null>(null);

export function usePretextRegister() {
  return useContext(PretextContext);
}

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

const FALLOFF = 200;
const PUSH = 40;
const SKEW = 14;

export function PretextProvider({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  const wordsRef = useRef(new Set<HTMLSpanElement>());
  const rafRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0, pressed: false });
  const motionScale = shouldReduceMotion ? 0.3 : 1;

  const register = useCallback((el: HTMLSpanElement) => {
    wordsRef.current.add(el);
    return () => {
      wordsRef.current.delete(el);
    };
  }, []);

  const applyDisruption = useCallback(() => {
    rafRef.current = null;
    const { x, y, pressed } = pointerRef.current;
    const words = wordsRef.current;

    for (const el of words) {
      if (!pressed) {
        el.style.transform = "";
        el.style.opacity = "";
        el.style.fontWeight = "";
        el.style.letterSpacing = "";
        continue;
      }

      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = cx - x;
      const dy = cy - y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const t = Math.max(0, 1 - dist / FALLOFF);

      if (t < 0.01) {
        el.style.transform = "";
        el.style.opacity = "";
        el.style.fontWeight = "";
        el.style.letterSpacing = "";
        continue;
      }

      const angle = Math.atan2(dy, dx);
      const push = t * t * PUSH * motionScale;
      const tx = Math.cos(angle) * push;
      const ty = Math.sin(angle) * push;
      const skew =
        ((el.offsetLeft ^ el.offsetTop) & 1 ? 1 : -1) *
        t *
        SKEW *
        motionScale;

      el.style.transform = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) skewX(${skew.toFixed(2)}deg)`;
      el.style.opacity = `${1 - t * 0.4}`;

      if (t > 0.3) {
        el.style.fontWeight = "900";
        el.style.letterSpacing = `${(t * 2).toFixed(2)}px`;
      } else {
        el.style.fontWeight = "";
        el.style.letterSpacing = "";
      }
    }
  }, [motionScale]);

  const scheduleUpdate = useCallback(() => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(applyDisruption);
  }, [applyDisruption]);

  // Continuous rAF loop while pressed (pointer may not move during hold)
  const loopRef = useRef<number | null>(null);

  const startLoop = useCallback(() => {
    const tick = () => {
      applyDisruption();
      if (pointerRef.current.pressed) {
        loopRef.current = requestAnimationFrame(tick);
      } else {
        loopRef.current = null;
      }
    };
    if (loopRef.current === null) {
      loopRef.current = requestAnimationFrame(tick);
    }
  }, [applyDisruption]);

  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
    },
    [],
  );

  const handlePointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.pressed = true;
      startLoop();
    },
    [startLoop],
  );

  const handlePointerUp = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      pointerRef.current.pressed = false;
      scheduleUpdate();
    },
    [scheduleUpdate],
  );

  const handlePointerLeave = useCallback(() => {
    pointerRef.current.pressed = false;
    scheduleUpdate();
  }, [scheduleUpdate]);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (loopRef.current !== null) cancelAnimationFrame(loopRef.current);
    };
  }, []);

  return (
    <PretextContext.Provider value={{ register }}>
      <div
        onPointerMove={handlePointerMove}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerLeave}
        className="relative"
      >
        {children}
      </div>
    </PretextContext.Provider>
  );
}
