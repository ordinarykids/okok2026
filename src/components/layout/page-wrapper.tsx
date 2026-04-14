import { cn } from "@/lib/utils";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export function PageWrapper({
  children,
  className,
  narrow = false,
}: PageWrapperProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full px-[var(--gutter)] py-[var(--spacing-2xl)]",
        narrow ? "max-w-[var(--content-narrow)]" : "max-w-[var(--content-max)]",
        className
      )}
    >
      {children}
    </main>
  );
}
