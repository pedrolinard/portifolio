"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { CloseIcon, MenuIcon } from "./icons";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
                className={`transition-colors hover:text-accent ${
                  active === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-md border border-border px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            entre em contato
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-md border border-border text-foreground transition-colors hover:border-accent hover:text-accent sm:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul
          className="flex flex-col gap-1 border-t border-border px-6 py-4 text-sm font-semibold text-muted sm:hidden"
          style={{ background: "var(--nav-background)" }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-2 py-2.5 transition-colors hover:text-accent ${
                  active === link.href ? "text-accent" : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-md border border-border px-2 py-2.5 text-center font-mono text-xs text-foreground"
            >
              entre em contato
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
