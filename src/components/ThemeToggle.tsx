'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle({ isFloating = false }: { isFloating?: boolean }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const icon = isDark ? (
    // Sun icon in dark mode
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ) : (
    // Moon icon in light mode
    <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  );

  if (isFloating) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Light/Dark Theme"
          title="Switch Theme"
          className="size-10 sm:size-11 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-yellow-300 flex items-center justify-center transition-all shadow-[0_4px_18px_-2px_rgba(20,19,16,0.18)] border border-[#e9e6df] dark:border-white/15 backdrop-blur shrink-0 hover:scale-105 active:scale-95"
        >
          {icon}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Light/Dark Theme"
      title="Switch Theme"
      className="size-8 sm:size-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-700 dark:text-yellow-300 flex items-center justify-center transition-all border border-[#e9e6df] dark:border-white/15 backdrop-blur shrink-0"
    >
      {icon}
    </button>
  );
}