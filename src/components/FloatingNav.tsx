'use client';

import { useEffect, useState, useRef } from 'react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'pipeline', label: 'Process' },
  { id: 'clients', label: 'Clients' },
  { id: 'why', label: 'The Difference' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElements = ['hero', 'work', 'about', 'services', 'pipeline', 'clients', 'why', 'contact']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-7 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between">
          {/* Status badge */}
          <div className="hidden shrink-0 items-center gap-2 rounded-full bg-white/90 dark:bg-[#12161f]/90 px-4 py-2 shadow-[0_2px_14px_-6px_#14131033] border border-[#e9e6df] dark:border-white/15 backdrop-blur lg:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#10b981] opacity-60"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#10b981]"></span>
            </span>
            <span className="text-[12.5px] text-[#5c554e] dark:text-zinc-300 font-medium">
              Full-Stack Systems Engineer
            </span>
          </div>

          {/* Nav pills */}
          <nav
            ref={navRef}
            className="mx-auto flex min-w-0 items-center gap-0.5 sm:gap-1 overflow-x-auto rounded-full bg-white/95 dark:bg-[#12161f]/95 p-1.5 shadow-[0_4px_20px_-6px_#14131022] border border-[#e9e6df] dark:border-white/15 backdrop-blur text-[11.5px] sm:text-[13px] font-medium"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`whitespace-nowrap rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 transition-colors ${
                    isActive
                      ? 'bg-[#ffeef0] dark:bg-[#ff595e]/20 text-[#ff595e] font-semibold'
                      : 'text-[#5c554e] dark:text-zinc-400 hover:text-[#16110e] dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-1 whitespace-nowrap rounded-full bg-[#16110e] dark:bg-white px-4 sm:px-5 py-1.5 sm:py-2 font-semibold text-white dark:text-[#16110e] transition-colors hover:bg-[#ff595e] dark:hover:bg-[#ff595e] dark:hover:text-white"
            >
              Contact
            </a>
          </nav>

          {/* Quick CTA */}
          <a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-[#16110e] text-white px-4 py-2 font-mono text-[12px] shadow-[0_2px_14px_-6px_#14131033] hover:bg-[#ff595e] transition-colors lg:flex"
          >
            <span>Let's talk</span>
          </a>
        </div>
      </div>
    </div>
  );
}