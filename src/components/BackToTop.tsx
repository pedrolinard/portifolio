"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Voltar ao topo"
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground shadow-lg transition-[opacity,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUpIcon className="h-4.5 w-4.5" />
    </a>
  );
}
