'use client';

import React, { useEffect, useState, useRef } from 'react';

const sectionMap = [
  { id: 'hero', href: '#hero' },
  { id: 'work', href: '#work' },
  { id: 'about', href: '#about' },
  { id: 'services', href: '#services' },
  { id: 'pipeline', href: '#pipeline' },
  { id: 'clients', href: '#clients' },
  { id: 'why', href: '#why' },
  { id: 'next-steps', href: '#contact' },
  { id: 'contact', href: '#contact' }
];

export default function FloatingNav() {
  const [activeHref, setActiveHref] = useState('#hero');
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      let currentActive = '#hero';

      if (scrollY < 120) {
        currentActive = '#hero';
      } else if (scrollY + viewportHeight >= docHeight - 60) {
        currentActive = '#contact';
      } else {
        const offset = 220;
        for (let i = 0; i < sectionMap.length; i++) {
          const el = document.getElementById(sectionMap[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= offset) {
              currentActive = sectionMap[i].href;
            }
          }
        }
      }

      setActiveHref(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#pipeline' },
    { name: 'Clients', href: '#clients' },
    { name: 'The Difference', href: '#why' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="fixed inset-x-0 top-7 z-40 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-center justify-between">
          
          <div className="hidden shrink-0 items-center gap-2 rounded-full bg-white/90 dark:bg-[#12161f]/90 px-4 py-2 shadow-[0_2px_14px_-6px_#14131033] border border-[#e9e6df] dark:border-white/15 backdrop-blur lg:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#10b981] opacity-60"></span>
              <span className="relative inline-flex size-2 rounded-full bg-[#10b981]"></span>
            </span>
            <span className="text-[12.5px] text-[#5c554e] dark:text-zinc-300 font-medium">Full-Stack Systems Engineer</span>
          </div>

          <nav ref={navRef} className="mx-auto flex min-w-0 items-center gap-0.5 sm:gap-1 overflow-x-auto rounded-full bg-white/95 dark:bg-[#12161f]/95 p-1.5 shadow-[0_4px_20px_-6px_#14131022] border border-[#e9e6df] dark:border-white/15 backdrop-blur text-[11.5px] sm:text-[13px] font-medium">
            {navLinks.map((link) => {
              const isTarget = link.href === activeHref;
              const isContact = link.href === '#contact';

              if (isContact) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-current={isTarget ? 'page' : undefined}
                    className={
                      isTarget
                        ? 'ml-1 whitespace-nowrap rounded-full bg-[#ff595e] px-4 sm:px-5 py-1.5 sm:py-2 font-semibold text-white transition-colors'
                        : 'ml-1 whitespace-nowrap rounded-full bg-[#16110e] dark:bg-white px-4 sm:px-5 py-1.5 sm:py-2 font-semibold text-white dark:text-[#16110e] transition-colors hover:bg-[#ff595e] dark:hover:bg-[#ff595e] dark:hover:text-white'
                    }
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isTarget ? 'page' : undefined}
                  className={
                    isTarget
                      ? 'whitespace-nowrap rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 bg-[#ffeef0] dark:bg-[#ff595e]/20 text-[#ff595e] font-semibold transition-colors'
                      : 'whitespace-nowrap rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 text-[#5c554e] dark:text-zinc-400 hover:text-[#16110e] dark:hover:text-white transition-colors'
                  }
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <a href="#contact" className="hidden shrink-0 items-center gap-2 rounded-full bg-[#16110e] text-white px-4 py-2 font-mono text-[12px] shadow-[0_2px_14px_-6px_#14131033] hover:bg-[#ff595e] transition-colors lg:flex">
            <span>Let's talk</span>
          </a>

        </div>
      </div>
    </div>
  );
}
