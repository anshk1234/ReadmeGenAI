import type { Metadata } from "next";
import GeneratePageClient from "./GeneratePageClient";

export const metadata: Metadata = {
  title: "Generate README | ReadmeGenAI",
  description:
    "Paste any GitHub repository URL and instantly generate a polished, professional README with ReadmeGenAI — the free AI README generator for developers.",
  openGraph: {
    title: "Generate README | ReadmeGenAI",
    description:
      "Paste any GitHub repository URL and instantly generate a polished, professional README with ReadmeGenAI — the free AI README generator for developers.",
    url: "/generate",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://readmegen-ai.vercel.app/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Generate README",
      item: "https://readmegen-ai.vercel.app/generate",
    },
  ],
};

export default function GeneratePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GeneratePageClient />
    </>
  );
}
