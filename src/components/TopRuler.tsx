'use client';

import { useEffect, useState } from 'react';

export default function TopRuler() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height <= 0) return;
      const scrolled = Math.min(100, Math.max(0, Math.round((winScroll / height) * 100)));
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-7 items-stretch border-b border-[#e9e6df] dark:border-white/10 bg-white/85 dark:bg-[#0c1017]/90 backdrop-blur-xl font-mono text-[9px]">
      <a
        href="#hero"
        className="flex shrink-0 items-center gap-2 border-r border-[#e9e6df] dark:border-white/10 px-3 font-semibold"
      >
        <span className="grid size-4 place-items-center rounded-[4px] bg-[#ff595e] text-[9px] font-bold text-white">
          F
        </span>
        <span className="hidden sm:block tracking-widest text-[#16110e] dark:text-white">
          FAHAD.DEV
        </span>
      </a>

      <div className="relative min-w-0 flex-1 overflow-hidden">
        <div
          id="ruler-progress"
          className="absolute inset-y-0 left-0 bg-[#ff595e]/15 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex justify-between items-end px-4 text-[#9c958d]"
        >
          <span>100</span>
          <span>200</span>
          <span>300</span>
          <span>400</span>
          <span>500</span>
          <span>600</span>
          <span>700</span>
          <span>800</span>
          <span>900</span>
          <span>1000</span>
          <span>1100</span>
          <span>1200</span>
        </div>
        <span
          id="scroll-pill"
          className="absolute top-1/2 -translate-y-1/2 rounded-[4px] bg-[#ff595e] px-1.5 py-0.5 text-white font-bold transition-all duration-75"
          style={{ left: `calc(${scrollProgress}% - ${scrollProgress > 95 ? 24 : 0}px)` }}
        >
          {scrollProgress}%
        </span>
      </div>

      <div className="flex shrink-0 items-center gap-2 border-l border-[#e9e6df] dark:border-white/10 px-3">
        <i className="size-1.5 animate-blink rounded-full bg-[#10b981]"></i>
        <span className="font-bold text-[#16110e] dark:text-white">LIVE</span>
        <span className="hidden sm:block text-[#9c958d]">· AVAILABLE FOR SYSTEMS</span>
      </div>
    </div>
  );
}