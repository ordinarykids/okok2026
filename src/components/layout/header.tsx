"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { navigation, sesameNavigation } from "@/data/navigation";
import { useEarcon } from "@/hooks/use-earcon";

export function Header() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isSesame = pathname.startsWith("/sesame");
  const isHome = pathname === "/";
  const isAuth = pathname === "/auth";
  const nav = isSesame ? sesameNavigation : navigation;
  const earcon = useEarcon();

  // Pre-load earcon buffer on first pointer event anywhere
  useEffect(() => {
    const handler = () => {
      earcon.init();
      window.removeEventListener("pointerdown", handler);
    };
    window.addEventListener("pointerdown", handler, { once: true });
    return () => window.removeEventListener("pointerdown", handler);
  }, [earcon]);

  // Home + auth pages render their own chrome
  if (isHome || isAuth) return null;

  return (
    <header className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter)] pt-[var(--spacing-xl)]">
      <div className="mb-[var(--spacing-sm)]">
        <Link
          href="/"
          className="text-[16px] font-light tracking-tight hover:no-underline"
        >
          Jason Herring
        </Link>
      </div>

      <nav>
        {nav.map((section, sectionIdx) => (
          <div key={section.label} className="mb-[var(--spacing-xs)] flex flex-wrap items-baseline">
            <span className="mr-[var(--spacing-sm)] shrink-0 font-bold">
              {section.label}
            </span>
            {section.links.map((link, linkIdx) => {
              const isActive = pathname === link.href;

              return (
                <span key={link.href} className="whitespace-nowrap">
                  {shouldReduceMotion ? (
                    <Link
                      href={link.href}
                      className={`${isActive ? "underline" : ""}`}
                      onMouseEnter={earcon.play}
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.15,
                        delay:
                          sectionIdx * 0.15 +
                          linkIdx * 0.04 +
                          0.2,
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`${isActive ? "underline" : ""}`}
                        onMouseEnter={earcon.play}
                      >
                        {link.title}
                      </Link>
                    </motion.span>
                  )}
                  {linkIdx < section.links.length - 1 && (
                    <span className="mx-[var(--spacing-xs)] text-ink-faint">
                      /
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        ))}
      </nav>

      <div className="mt-[var(--spacing-lg)] h-px bg-rule" />
    </header>
  );
}
