import Link from "next/link";
import { PageWrapper } from "@/components/layout/page-wrapper";

export default function NotFound() {
  return (
    <PageWrapper>
      <div className="py-[var(--spacing-4xl)]">
        <h1 className="mb-[var(--spacing-lg)] text-[clamp(32px,4vw,54px)] leading-none">
          404
        </h1>
        <p className="mb-[var(--spacing-2xl)] text-ink-light">
          Page not found. The copier jammed.
        </p>
        <Link
          href="/"
          className="border border-ink px-[var(--spacing-lg)] py-[var(--spacing-sm)] text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-ink hover:text-paper"
        >
          Return Home
        </Link>
      </div>
    </PageWrapper>
  );
}
