'use client';

import React, { useEffect } from 'react';
import { AlertCircle, RefreshCw, Home, Terminal, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface ErrorProps {
  error?: Error & { digest?: string };
  reset?: () => void;
}

// In this environment, the main component must be named App and be the default export
export default function App({ error, reset }: ErrorProps) {
  useEffect(() => {
    if (error) {
      console.error('Captured Error:', error);
    }
  }, [error]);

  // Fallback values in case props are undefined during a manual preview or direct render
  const errorMessage = error?.message || "An unexpected system interruption occurred.";
  const errorDigest = error?.digest || "N/A";
  const handleReset = reset || (() => window.location.reload());

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30 font-sans antialiased flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Background Glows - Red/Amber for Error Context */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="z-10 flex flex-col items-center justify-center text-center max-w-4xl py-20">
        
        {/* Error Badge - Replicating the style from mainpage.png */}
        <div className="mb-8 flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs font-semibold uppercase tracking-wider animate-pulse">
          <AlertCircle size={14} />
          Runtime Exception Detected
        </div>

        {/* Hero Title with Gradient Text */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]">
          Something went <br />
          <span className="bg-linear-to-b from-white to-red-600 bg-clip-text text-transparent">
            wrong.
          </span>
        </h1>

        <p className="max-w-md mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          An unexpected error occurred during the generation process. 
          The codebase remains secure, but the current operation was halted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button 
            onClick={handleReset}
            className="group flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,55,55,0.25)] active:scale-95"
          >
            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
            Try Again
          </button>
          <Link 
            href="/"
            className="flex items-center gap-2 px-8 py-3 bg-transparent text-white border border-white/20 rounded-full font-bold text-lg hover:bg-white/5 transition-all active:scale-95"
          >
            <Home size={20} />
            Return Home
          </Link>
        </div>

        {/* Debugging Terminal - Visual match for terminal in mainpage.png */}
        <div className="w-full max-w-2xl bg-[#0a0a0a] border border-red-500/20 rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5 text-[10px] font-mono text-gray-500 tracking-widest uppercase">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
              <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            </div>
            <div className="flex items-center gap-2">
              <Terminal size={12} />
              <span>STACK_TRACE_SNAPSHOT</span>
            </div>
          </div>
          <div className="p-6 font-mono text-sm text-left space-y-3 leading-relaxed">
            <div className="flex gap-2">
              <span className="text-red-400 font-bold shrink-0">[CRITICAL]</span>
              <span className="text-gray-300 wrap-break-word">{errorMessage}</span>
            </div>
            <div className="pl-4 border-l border-red-500/30 space-y-1">
              <div className="text-gray-500 text-xs flex justify-between">
                <span>digest:</span>
                <span className="text-gray-400">{errorDigest}</span>
              </div>
              <div className="text-gray-500 text-xs flex justify-between">
                <span>timestamp:</span>
                <span className="text-gray-400">{new Date().toISOString().split('T')[1].split('.')[0]} UTC</span>
              </div>
              <div className="text-gray-500 text-xs flex justify-between">
                <span>module:</span>
                <span className="text-gray-400">core/generator-v2.bin</span>
              </div>
            </div>
            <div className="flex gap-2 text-blue-400/80 pt-2">
              <span>➜</span>
              <span className="text-gray-400 italic">Self-healing protocol initiated...</span>
            </div>
            <div className="flex gap-2 text-green-400/80">
              <span>✓</span>
              <span>Workspace state preserved. Ready for manual reset.</span>
            </div>
          </div>
        </div>

        {/* Replicating feature-page.png style for secondary info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
           <div className="p-4 rounded-xl border border-white/5 bg-white/2 flex items-center gap-4 text-left group hover:border-red-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ShieldAlert size={20} className="text-red-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm">IP Protected</h4>
                <p className="text-xs text-gray-500">Your code was not compromised during this crash.</p>
              </div>
           </div>
           <div className="p-4 rounded-xl border border-white/5 bg-white/2 flex items-center gap-4 text-left group hover:border-orange-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <RefreshCw size={20} className="text-orange-400" />
              </div>
              <div>
                <h4 className="font-bold text-sm">State Recovery</h4>
                <p className="text-xs text-gray-500">Cache has been purged to prevent recursive errors.</p>
              </div>
           </div>
        </div>
      </main>

      {/* Brand Footer */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20 hover:opacity-100 transition-opacity cursor-default">
        <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
          <span className="text-black font-black text-xs">R</span>
        </div>
        <span className="font-bold text-xs tracking-tight">ReadmeGenAI</span>
      </div>
    </div>
  );
}