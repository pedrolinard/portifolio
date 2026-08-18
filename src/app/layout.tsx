import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Overpass, Overpass_Mono } from "next/font/google";
import Script from "next/script";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  EMAIL,
  GITHUB_HREF,
  LINKEDIN_HREF,
  NAME,
  SITE_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} — Desenvolvedor Back-End`,
    template: `%s — ${NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Pedro Linard",
    "desenvolvedor back-end",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "APIs REST",
    "portfólio",
  ],
  authors: [{ name: NAME, url: GITHUB_HREF }],
  creator: NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: `${NAME} — Portfólio`,
    title: `${NAME} — Desenvolvedor Back-End`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — Desenvolvedor Back-End`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0d10" },
    { media: "(prefers-color-scheme: light)", color: "#edf1f3" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  jobTitle: "Desenvolvedor Back-End",
  email: `mailto:${EMAIL}`,
  sameAs: [GITHUB_HREF, LINKEDIN_HREF],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
