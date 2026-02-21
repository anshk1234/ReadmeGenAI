"use client";

import { useState, useEffect } from "react";
import { Terminal, Code2, Cpu } from "lucide-react";
export default function LoadingOverlay() {
  const [loadingStep, setLoadingStep] = useState(0);

  const steps = [
    "Initializing neural engine...",
    "Scanning repository structure...",
    "Analyzing codebase patterns...",
    "Generating professional documentation...",
    "Finalizing markdown output...",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 800);

    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <div className="fixed inset-0 z-9999 bg-black text-white selection:bg-blue-500/30 font-sans antialiased flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="z-10 flex flex-col items-center justify-center text-center max-w-4xl w-full">
        {/* Hero Loading Text */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
          Crafting your <br />
          <span className="bg-linear-to-b from-white to-gray-500 bg-clip-text text-transparent">
            documentation.
          </span>
        </h1>

        <div className="flex items-center gap-3 text-gray-400 font-medium mb-12 h-6">
          <span className="inline-block w-4 h-4 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></span>
          <span className="animate-in fade-in slide-in-from-bottom-1 duration-300">
            {steps[loadingStep]}
          </span>
        </div>

        {/* Simulation Terminal */}
        <div className="w-full max-w-xl bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={12} />
              <span>AI_RUNTIME_STATUS</span>
            </div>
          </div>
          <div className="p-6 font-mono text-xs text-left space-y-2 leading-relaxed h-40 overflow-hidden">
            <div className="flex gap-2 text-blue-400/80">
              <span className="shrink-0">[INFO]</span>
              <span className="text-gray-400">
                Loading generative weights... OK
              </span>
            </div>
            <div className="flex gap-2 text-blue-400/80">
              <span className="shrink-0">[INFO]</span>
              <span className="text-gray-400">
                Context window initialized (128k tokens)
              </span>
            </div>
            {loadingStep >= 1 && (
              <div className="flex gap-2 text-green-400/80 animate-in fade-in duration-300">
                <span className="shrink-0">[SUCCESS]</span>
                <span className="text-gray-400">
                  Repository tree parsed: 42 files found
                </span>
              </div>
            )}
            {loadingStep >= 2 && (
              <div className="flex gap-2 text-green-400/80 animate-in fade-in duration-300">
                <span className="shrink-0">[SUCCESS]</span>
                <span className="text-gray-400">
                  Exporting vector embeddings...
                </span>
              </div>
            )}
            {loadingStep >= 3 && (
              <div className="flex gap-2 text-purple-400 animate-in fade-in duration-300">
                <span className="shrink-0">[PROCESS]</span>
                <span className="text-gray-300 animate-pulse">
                  Generating README.md via LLM-v4...
                </span>
              </div>
            )}
            <div className="pt-1">
              <span className="text-blue-500">➜</span>
              <span className="w-2 h-4 bg-white/20 inline-block animate-pulse align-middle ml-1"></span>
            </div>
          </div>
        </div>

        {/* Feature Hints */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
          <div className="p-3 rounded-lg border border-white/5 bg-white/2 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center shrink-0">
              <Cpu size={16} className="text-blue-400" />
            </div>
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-400">
                Pro Tip
              </h4>
              <p className="text-xs text-gray-500">
                Add a .readmegenai config for custom styles.
              </p>
            </div>
          </div>
          <div className="p-3 rounded-lg border border-white/5 bg-white/2 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center shrink-0">
              <Code2 size={16} className="text-purple-400" />
            </div>
            <div>
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-400">
                Integration
              </h4>
              <p className="text-xs text-gray-500">
                Supports JS, Python, Go, and Rust natively.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
