import TopRuler from '@/components/TopRuler';
import FloatingNav from '@/components/FloatingNav';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Clients from '@/components/Clients';
import Difference from '@/components/Difference';
import Contact from '@/components/Contact';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <>
      {/* BACKGROUND AMBIENT GRADIENT CLOUDS (Exact Abiha aesthetic) */}
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-85">
        <div className="absolute inset-0 bg-dots opacity-35"></div>

        <div className="animate-cloud-1 absolute left-0 will-change-transform" style={{ top: '8%', width: '550px' }}>
          <svg viewBox="0 0 340 170" className="w-full">
            <defs>
              <radialGradient id="cga-0" cx="50%" cy="34%" r="72%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="55%" stopColor="#ffe6e7" />
                <stop offset="100%" stopColor="#ffb0b3" />
              </radialGradient>
              <filter id="cba-0" x="-35%" y="-35%" width="170%" height="170%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>
            <g filter="url(#cba-0)" fill="url(#cga-0)">
              <ellipse cx="170" cy="118" rx="128" ry="30" />
              <circle cx="100" cy="94" r="34" />
              <circle cx="156" cy="70" r="50" />
              <circle cx="214" cy="86" r="40" />
              <circle cx="262" cy="104" r="28" />
            </g>
          </svg>
        </div>

        <div className="animate-cloud-2 absolute left-0 will-change-transform" style={{ top: '38%', width: '480px' }}>
          <svg viewBox="0 0 380 140" className="w-full">
            <defs>
              <radialGradient id="cgb-1" cx="50%" cy="34%" r="72%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="55%" stopColor="#e4f1fb" />
                <stop offset="100%" stopColor="#a9d2ef" />
              </radialGradient>
              <filter id="cbb-1" x="-35%" y="-35%" width="170%" height="170%">
                <feGaussianBlur stdDeviation="11" />
              </filter>
            </defs>
            <g filter="url(#cbb-1)" fill="url(#cgb-1)">
              <ellipse cx="190" cy="98" rx="160" ry="26" />
              <circle cx="120" cy="80" r="30" />
              <circle cx="186" cy="62" r="44" />
              <circle cx="246" cy="78" r="34" />
            </g>
          </svg>
        </div>

        <div className="animate-cloud-3 absolute left-0 will-change-transform" style={{ top: '68%', width: '440px' }}>
          <svg viewBox="0 0 340 170" className="w-full">
            <defs>
              <radialGradient id="cga-4" cx="50%" cy="34%" r="72%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="55%" stopColor="#eff9dd" />
                <stop offset="100%" stopColor="#c9e894" />
              </radialGradient>
              <filter id="cba-4" x="-35%" y="-35%" width="170%" height="170%">
                <feGaussianBlur stdDeviation="10" />
              </filter>
            </defs>
            <g filter="url(#cba-4)" fill="url(#cga-4)">
              <ellipse cx="170" cy="118" rx="128" ry="30" />
              <circle cx="100" cy="94" r="34" />
              <circle cx="156" cy="70" r="50" />
            </g>
          </svg>
        </div>
      </div>

      {/* 1. FIXED TOP SYSTEM RULER */}
      <TopRuler />

      {/* 2. FLOATING PILL NAVIGATION */}
      <FloatingNav />

      {/* MAIN SECTIONS */}
      <main className="flex-1">
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Process />
        <Clients />
        <Difference />
        <Contact />
      </main>

      {/* Floating Theme Switcher Button */}
      <ThemeToggle />
    </>
  );
}
