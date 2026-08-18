import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Overpass, Overpass_Mono } from "next/font/google";
import Script from "next/script";
import { ScrollProgress } from "@/components/ScrollProgress";
import {
  COMPANY_NAME,
  EMAIL,
  INSTAGRAM_HREF,
  SITE_DESCRIPTION,
  SITE_URL,
  TAGLINE,
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
    default: `${COMPANY_NAME} — ${TAGLINE}`,
    template: `%s — ${COMPANY_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "ByteStorm",
    "desenvolvimento de sistemas",
    "sistemas sob medida",
    "back-end",
    "Java",
    "Spring Boot",
    "Python",
    "Django",
    "APIs REST",
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} — ${TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_NAME} — ${TAGLINE}`,
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  email: `mailto:${EMAIL}`,
  sameAs: [INSTAGRAM_HREF],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
