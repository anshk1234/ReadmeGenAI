'use client';

import styles from './loading.module.css';

export default function Loading() {
  const dots = Array.from({ length: 12 });

  return (
    <div className="min-h-[80vh] bg-black text-white font-sans antialiased flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="z-10 flex flex-col items-center justify-center text-center">
        <div className="relative w-20 h-20 mb-12">
          {dots.map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full h-full ${styles.dotContainer}`}
            >
              <div
                className={`w-2.5 h-2.5 bg-white rounded-full mx-auto shadow-[0_0_10px_rgba(255,255,255,0.2)] ${styles.dotItem} ${styles.dotWrapper}`}
              />
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-black tracking-[0.4em] text-white animate-pulse uppercase">
            LOADING
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-[11px] text-gray-400 font-mono tracking-[0.2em] uppercase max-w-60 leading-relaxed">
              Synchronizing with <span className="text-blue-400">core.engine</span>
            </p>
            <div className="w-12 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
        </div>
      </main>

    </div>
  );
}