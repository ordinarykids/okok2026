"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { navigation } from "@/data/navigation";

export function Header() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

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
        {navigation.map((section, sectionIdx) => (
          <div key={section.label} className="mb-[var(--spacing-xs)]">
            <span className="mr-[var(--spacing-sm)] font-bold">
              {section.label}
            </span>
            {section.links.map((link, linkIdx) => {
              const isActive = pathname === link.href;

              return (
                <span key={link.href}>
                  {shouldReduceMotion ? (
                    <Link
                      href={link.href}
                      className={`${isActive ? "underline" : ""}`}
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
