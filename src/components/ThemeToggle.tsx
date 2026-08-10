"use client";

import { useState } from "react";

function getInitialTheme(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Ativar tema escuro" : "Ativar tema claro"}
      aria-pressed={isLight}
      className="relative inline-flex h-6.5 w-11 shrink-0 items-center rounded-full border border-border bg-surface p-0.5 transition-colors"
    >
      <span
        suppressHydrationWarning
        className="grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] transition-transform duration-300"
        style={{
          transform: isLight ? "translateX(18px)" : "translateX(0)",
          color: "var(--fixed-white)",
        }}
      >
        {isLight ? "☀" : "☾"}
      </span>
    </button>
  );
}
