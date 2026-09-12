'use client';

import React, { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('fahad_theme');
    const hasDark = saved === 'dark' || document.documentElement.classList.contains('dark');
    setIsDark(hasDark);
  }, []);

  const toggleTheme = () => {
    const nextDark = !document.documentElement.classList.contains('dark');
    if (nextDark) {
      document.documentElement.classList.add('dark');
      try {
        localStorage.setItem('fahad_theme', 'dark');
      } catch (e) {}
    } else {
      document.documentElement.classList.remove('dark');
      try {
        localStorage.setItem('fahad_theme', 'light');
      } catch (e) {}
    }
    setIsDark(nextDark);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      <button
        id="floating-theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle Light/Dark Theme"
        title="Switch Theme"
        className="size-10 sm:size-11 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-yellow-300 flex items-center justify-center transition-all shadow-[0_4px_18px_-2px_rgba(20,19,16,0.18)] border border-[#e9e6df] dark:border-white/15 backdrop-blur shrink-0 hover:scale-105 active:scale-95"
      >
        {/* Sun icon (visible in dark mode) */}
        <svg
          className={`theme-icon-sun size-5 transition-transform duration-300 ${isDark ? 'block' : 'hidden'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" strokeWidth="2"></circle>
          <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2"></line>
          <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2"></line>
          <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2"></line>
          <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2"></line>
        </svg>

        {/* Moon icon (visible in light mode) */}
        <svg
          className={`theme-icon-moon size-5 transition-transform duration-300 ${isDark ? 'hidden' : 'block'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
    </div>
  );
}
