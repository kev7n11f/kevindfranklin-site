import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { siteConfig } from "@/content/siteConfig";
import Navbar from "@/components/Navbar";
import AIAssistant from "@/components/AIAssistant";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";

<Script
  src="https://umami-analytics-kohl.vercel.app/script.js"
  data-website-id="9b342ab8-8f78-4555-b4c3-bdc2371bda9c"
  strategy="afterInteractive"
/>

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Kevin D. Franklin",
    "AI Entrepreneur",
    "The Agential Gold Rush",
    "AI Business",
    "TalkBreaks",
    "AI Author",
    "Alexandria Louisiana",
    "Too Humble Couture",
    "The Mythological Thinker",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased noise-overlay">
        <Navbar />
        <main>{children}</main>
        <AIAssistant />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}