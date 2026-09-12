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
    <div className="relative min-h-screen">
      {/* Ambient background drifting clouds & dot grid */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-30 dark:opacity-10">
        <div className="absolute inset-0 bg-dots" />
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#ff595e]/15 blur-3xl animate-cloud-1" />
        <div className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-[#0d99ff]/15 blur-3xl animate-cloud-2" />
        <div className="absolute -bottom-32 left-1/4 h-[550px] w-[550px] rounded-full bg-[#ffca3a]/15 blur-3xl animate-cloud-3" />
      </div>

      {/* 1. Fixed Top System Ruler */}
      <TopRuler />

      {/* 2. Floating Pill Navbar */}
      <FloatingNav />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* 3. Hero Section with Interactive Fluid Particles */}
        <Hero />

        {/* 4. Selected Work */}
        <SelectedWork />

        {/* 5. About Bento Grid */}
        <About />

        {/* 6. Productized Services Deck */}
        <Services />

        {/* 7. Process Simulated Chat Thread */}
        <Process />

        {/* 8. Global Clients & Testimonials */}
        <Clients />

        {/* 9. The Difference & Next Steps Protocol */}
        <Difference />

        {/* 10. Contact Marquee & Closing */}
        <Contact />
      </main>

      {/* Floating Theme Switcher Button */}
      <ThemeToggle isFloating={true} />
    </div>
  );
}