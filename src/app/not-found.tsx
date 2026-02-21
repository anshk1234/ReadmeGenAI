"use client";

import React from "react";
import Link from "next/link";
import { Home, MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    /* Layout synced with Hero: pt-32, pb-20, background black */
    <section className="relative min-h-screen pt-8 pb-20 overflow-hidden bg-black flex flex-col items-center justify-center">
      {/* Exact Background Glow logic from Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Constraints matched to Hero: max-w-5xl, px-4 */}
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10 w-full flex flex-col items-center">
        {/* Status Badge - Hero style animation */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-semibold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-3 duration-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Status 404: Resource Not Found
        </div>

        {/* Headline - Hero scaling: 5xl to 8xl */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Lost in the <br />
          <span className="bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
            codebase.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000">
          The page you&apos;re looking for doesn&apos;t exist. It might have
          been moved, deleted, or the repository was never initialized.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <Link href="/">
            <Button
              variant="primary"
              className="w-full sm:w-auto px-10 py-4 text-lg shadow-xl shadow-white/5"
            >
              <Home size={20} />
              Back to Safety
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-10 py-4 text-lg"
          >
            <MoveLeft size={20} />
            Go Back
          </Button>
        </div>

        <div className="w-full max-w-3xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]/50 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/50 shadow-inner"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]/50 shadow-inner"></div>
            </div>
            <span>BASH — ERROR_LOG</span>
          </div>

          <div className="p-6 md:p-8 font-mono text-sm md:text-base text-left space-y-2 leading-relaxed">
            <p className="flex items-center gap-2">
              <span className="text-blue-400 font-bold">➜</span>
              <span>
                readmegenai verify-route{" "}
                <span className="text-gray-600">--current</span>
              </span>
            </p>
            <p className="text-gray-400">● Analyzing repository tree...</p>
            <p className="text-red-400/90 bg-red-400/5 px-2 py-0.5 rounded inline-block">
              ✗ Error: Component not found in ./pages or ./app
            </p>
            <p className="text-emerald-500/80">
              ✓ Suggested action: Return to root index
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
