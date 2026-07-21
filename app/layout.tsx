/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://hendrivi.github.io/website-betterhealth-with-graphics";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "BetterHealth — the Predictive Energy Budget",
  description:
    "Physician-led brain and metabolic medicine, Zürich. We measure the gap between the brain's predicted demand and its available fuel, then close it with prescribed nutrition and targeted therapy.",
  applicationName: "BetterHealth",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BetterHealth — the Predictive Energy Budget",
    description:
      "Physician-led brain and metabolic medicine. Measured biology, nutrition as medicine, supervised throughout.",
    images: [{ url: `${siteUrl}/social/og-betterhealth.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterHealth — the Predictive Energy Budget",
    description: "Physician-led brain and metabolic medicine in Zürich.",
    images: [`${siteUrl}/social/og-betterhealth.png`],
  },
  icons: {
    icon: [{ url: `${basePath}/icons/icon-192.png`, sizes: "192x192", type: "image/png" }],
    apple: [{ url: `${basePath}/icons/icon-512.png`, sizes: "512x512", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#14201e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
