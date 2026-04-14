"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggerLinesProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerLines({
  children,
  className,
  staggerDelay = 0.06,
  once = true,
}: StaggerLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-5%" });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={cn(className)}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={
            isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }
          }
          transition={{
            duration: 0.3,
            delay: i * staggerDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
