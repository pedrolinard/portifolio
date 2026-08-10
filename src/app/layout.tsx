import type { Metadata } from "next";
import { Space_Grotesk, Overpass, Overpass_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading-family",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const overpass = Overpass({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const overpassMono = Overpass_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Pedro Linard — Desenvolvedor Back-End",
  description:
    "Portfólio de Pedro Linard, Desenvolvedor Back-End. Projetos, skills e contato.",
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var theme = stored === "light" || stored === "dark" ? stored : "dark";
    document.documentElement.setAttribute("data-theme", theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${overpass.variable} ${overpassMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
