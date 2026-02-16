"use client";

import React, { useState, useEffect } from "react";

export const LoadingOverlay = () => {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "INITIALIZING_NEURAL_ENGINE... [OK]";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#050505] font-mono">
      {/* BACKGROUND GRID EFFECT */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* RING CONTAINER */}
      <div className="relative flex h-64 w-64 items-center justify-center">
        {/* Chromatic Orbiting Rings */}
        <div className="absolute h-36 w-36 rounded-full border border-red-500/40 mix-blend-screen blur-[2px] animate-[ring-pulse_4s_linear_infinite] scale-110"></div>
        <div className="absolute h-36 w-36 rounded-full border border-emerald-400/40 mix-blend-screen blur-[2px] animate-[ring-pulse_4s_linear_infinite_1s] scale-105"></div>
        <div className="absolute h-36 w-36 rounded-full border border-indigo-500/40 mix-blend-screen blur-[2px] animate-[ring-pulse_4s_linear_infinite_2s] scale-110"></div>

        {/* Technical Inner Ring */}
        <div className="absolute h-28 w-28 rounded-full border border-dashed border-white/20 animate-spin-slow"></div>

        {/* Core White Ring */}
        <div className="absolute h-32 w-32 rounded-full border-2 border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] animate-[ring-pulse_3s_ease-in-out_infinite]"></div>

        {/* Binary Data Bits (Decorative) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 text-[8px] text-emerald-500 pointer-events-none">
          <div className="animate-pulse">01011001</div>
        </div>
      </div>

      {/* CODING VIBE TEXT ELEMENTS */}
      <div className="mt-8 flex flex-col items-center gap-4 z-10">
        <div className="flex flex-col items-center">
          <p className="text-xs tracking-[0.5em] text-zinc-500 uppercase mb-1">
            System Status
          </p>
          <div className="flex items-baseline gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-xl font-bold tracking-tighter text-white">
              {terminalText}
              <span className="animate-bounce">_</span>
            </p>
          </div>
        </div>

        {/* DATA METRICS FOOTER */}
        <div className="mt-4 grid grid-cols-3 gap-8 text-[10px] text-zinc-600 border-t border-zinc-800 pt-4 uppercase tracking-widest">
          <div className="flex flex-col items-center">
            <span>CPU</span>
            <span className="text-emerald-400">88.4%</span>
          </div>
          <div className="flex flex-col items-center border-x border-zinc-800 px-8">
            <span>MEM</span>
            <span className="text-indigo-400">12GB</span>
          </div>
          <div className="flex flex-col items-center">
            <span>PING</span>
            <span className="text-red-400">14MS</span>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes ring-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.3; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 0.7; }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .mix-blend-screen {
          mix-blend-mode: screen;
        }
      `,
        }}
      />
    </div>
  );
};

export default LoadingOverlay;
