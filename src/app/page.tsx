import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { SEOSection } from "@/components/sections/SEOSection";
import { Footer } from "@/components/layout/Footer";
import { Code, Layout, FileText } from "lucide-react";
import { navLinks } from "@/constants/navLinks";

export const metadata: Metadata = {
  title: "AI README Generator for GitHub Projects | ReadmeGenAI",
  description:
    "Instantly create professional GitHub README files with ReadmeGenAI. Our AI README generator analyzes your repo and produces polished markdown docs in seconds.",
  openGraph: {
    title: "AI README Generator for GitHub Projects | ReadmeGenAI",
    description:
      "Instantly create professional GitHub README files with ReadmeGenAI. Our AI README generator analyzes your repo and produces polished markdown docs in seconds.",
    url: "/",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ReadmeGenAI",
  url: "https://readmegen-ai.vercel.app",
  description:
    "AI README generator for GitHub projects. Instantly create professional markdown documentation from any public repository.",
  potentialAction: {
    "@type": "SearchAction",
    target:
      "https://readmegen-ai.vercel.app/generate?repo={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  const featureList = [
    {
      icon: <Code size={24} />,
      title: "Context Awareness",
      desc: "Detects frameworks and dependencies automatically using advanced AST parsing.",
    },
    {
      icon: <Layout size={24} />,
      title: "Clean Templates",
      desc: "Formatted Markdown following GitHub best practices for maximum readability.",
    },
    {
      icon: <FileText size={24} />,
      title: "AI Optimization",
      desc: "Leverages Gemini 3 Flash to ensure project clarity and SEO-friendly documentation.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <Navbar links={navLinks} />

      <main>
        <Hero />

        <SEOSection />

        {/* Removed the wrapper div that had the duplicate id="features" */}
        <Features items={featureList} />
      </main>

      <Footer />
    </div>
  );
}
