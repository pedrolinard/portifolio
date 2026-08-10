import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border backdrop-blur"
      style={{ background: "var(--nav-background)" }}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-heading text-base font-bold text-foreground">
          Pedro<span className="text-accent">.</span>Linard
        </a>
        <ul className="hidden items-center gap-8 text-sm font-semibold text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#contato"
            className="hidden rounded-md border border-border px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            disponível p/ estágio
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
