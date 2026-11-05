import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { CommandPalette } from "@/components/CommandPalette";
import { RevealObserver, Toaster } from "@/components/client-bits";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} — Software Engineer`, template: `%s — ${profile.name}` },
  description: "Nguyễn Thanh Khiết — backend-focused Software Engineer in Ho Chi Minh City. NestJS, PostgreSQL, Odoo ERP, Clean Architecture.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: `${profile.name} — Software Engineer`,
    description: "Backend-focused software engineer building systems that stay clean as they grow.",
    images: [profile.photo],
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32.png?v=2", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
};

export const viewport: Viewport = { themeColor: "#0b0d0e" };

// Runs before paint: restore theme + language, and mark JS as available (for reveal animations).
const bootScript = `
document.documentElement.classList.add("js");
try { var t = localStorage.getItem("theme"); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
try { var l = localStorage.getItem("lang"); } catch (e) {}
document.documentElement.lang = l || (/^vi\\b/i.test(navigator.language) ? "vi" : "en");
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
        <CommandPalette />
        <Toaster />
        <RevealObserver />
      </body>
    </html>
  );
}
