import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://readmegen-ai.vercel.app",
  ),
  title: {
    default: "AI README Generator for GitHub Projects | ReadmeGenAI",
    template: "%s | ReadmeGenAI",
  },
  description:
    "Instantly create professional GitHub README files with ReadmeGenAI. Our AI README generator analyzes your repo and produces polished markdown docs in seconds.",
  icons: {
    icon: "/ReadmeGenAI.png",
    shortcut: "/ReadmeGenAI.png",
    apple: "/ReadmeGenAI.png",
  },
  openGraph: {
    title: "AI README Generator for GitHub Projects | ReadmeGenAI",
    description:
      "Instantly create professional GitHub README files with ReadmeGenAI. Our AI README generator analyzes your repo and produces polished markdown docs in seconds.",
    url: "/",
    siteName: "ReadmeGenAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ReadmeGenAI - AI README Generator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Generate README Files with AI",
    description:
      "Paste your GitHub repository URL and get a professional readme.md instantly.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://readmegen-ai.vercel.app";

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ReadmeGenAI",
    applicationCategory: "DeveloperTool",
    operatingSystem: "Web",
    description:
      "AI-powered GitHub README generator that creates professional markdown documentation automatically from any public GitHub repository.",
    url: siteUrl,
    image: `${siteUrl}/ReadmeGenAI.png`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "AI-generated GitHub README files",
      "Framework and dependency detection",
      "Instant markdown output",
      "GitHub Octokit integration",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareAppJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
