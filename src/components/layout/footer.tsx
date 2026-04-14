export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-[var(--content-max)] px-[var(--gutter)] pb-[var(--spacing-2xl)] pt-[var(--spacing-4xl)]">
      <div className="h-px bg-rule" />
      <div className="mt-[var(--spacing-lg)] flex justify-between text-ink-faint">
        <span>jason@ordinarykids.com</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
