export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <p className="mx-auto max-w-5xl text-center font-mono text-xs text-muted">
        © {new Date().getFullYear()} Pedro Linard. Construído com Next.js
        &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
