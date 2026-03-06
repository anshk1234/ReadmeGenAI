import React from "react";
import { CheckCircle } from "lucide-react";

const benefits = [
  {
    text: "Save hours of manual writing — generate a complete, production-ready GitHub README in under 5 seconds.",
  },
  {
    text: "AI README output adapts to your stack — whether it's Next.js, Go, Python, or any other framework.",
  },
  {
    text: "Your code stays private — ReadmeGenAI only reads public repository metadata, never stores your source.",
  },
];

export const SEOSection = () => (
  <section className="py-20 border-t border-white/5 bg-black">
    <div className="max-w-5xl mx-auto px-4">
      {/* Why section */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter mb-6 text-white">
          Why Use an AI README Generator?
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          Writing a great GitHub README takes time, expertise, and consistency.
          ReadmeGenAI automates the entire process—detecting your tech stack,
          summarizing your project&apos;s purpose, and formatting everything to
          GitHub best practices. Whether you&apos;re shipping a side project or
          an enterprise library, a polished AI README makes your work stand out.
        </p>
      </div>

      {/* Feature bullet points */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tighter mb-8 text-white">
          Key Benefits of ReadmeGenAI
        </h2>
        <ul className="space-y-4">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-blue-400 mt-0.5 shrink-0"
              />
              <span className="text-gray-300 text-base leading-relaxed">
                {benefit.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional H2 subheadings for keyword coverage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
            Instant GitHub README Generation
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Paste any public GitHub repository URL and receive a fully
            structured README in seconds. No templates to fill in, no markdown
            to learn—just a professional AI README, ready to ship.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
            Smart Codebase &amp; Framework Detection
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Our GitHub README generator automatically identifies your
            dependencies, frameworks, and project structure to produce accurate,
            context-aware documentation every time.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
            GitHub Best Practices, Built In
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Every AI README follows GitHub&apos;s formatting standards—badges,
            installation instructions, usage examples, and contribution
            guidelines are included automatically.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3 text-white">
            Free AI README Generator for Every Developer
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            ReadmeGenAI is free to use for all public repositories. Whether
            you&apos;re a solo developer or an open-source maintainer, quality
            documentation is now just one click away.
          </p>
        </div>
      </div>
    </div>
  </section>
);
