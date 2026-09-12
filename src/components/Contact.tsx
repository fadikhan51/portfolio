'use client';

const marqueeItems = [
  'FULL-STACK SOFTWARE ENGINEER',
  'HIGH-CONCURRENCY SYSTEMS',
  'REAL-TIME TELEMETRY',
  'AVAILABLE FOR COLLABORATION',
  'DISTRIBUTED ARCHITECTURE',
  'EVENT-DRIVEN BACKENDS',
  'IOT HARDWARE INTEGRATION',
  'LOW-LATENCY WEBSOCKETS',
  'FULL-STACK SOFTWARE ENGINEER',
  'HIGH-CONCURRENCY SYSTEMS',
  'REAL-TIME TELEMETRY',
  'AVAILABLE FOR COLLABORATION',
  'DISTRIBUTED ARCHITECTURE',
  'EVENT-DRIVEN BACKENDS',
  'IOT HARDWARE INTEGRATION',
  'LOW-LATENCY WEBSOCKETS',
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative pt-20 pb-16 px-4 sm:px-8 border-t border-[#e9e6df] dark:border-white/10 bg-[#16110e] dark:bg-[#06080a] text-white"
    >
      {/* Zero-gap continuous marquee ticker */}
      <div className="marquee-container overflow-hidden whitespace-nowrap border-b border-white/10 pb-8 mb-16 text-xs font-mono text-[#9c958d] select-none">
        <div className="marquee-track">
          {/* Sequence Block A */}
          <div className="flex shrink-0 items-center gap-8 pr-8">
            {marqueeItems.map((item, idx) => (
              <span key={`a-${idx}`} className="flex items-center gap-8">
                <span>{item}</span>
                <span>◆</span>
              </span>
            ))}
          </div>

          {/* Sequence Block B (Exact Duplicate for Infinite Seamless Loop) */}
          <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <span key={`b-${idx}`} className="flex items-center gap-8">
                <span>{item}</span>
                <span>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <p className="font-mono text-xs text-[#ff595e] uppercase tracking-widest mb-3">
          // HAVE A SYSTEM WORTH BUILDING?
        </p>
        <h2 className="font-poster text-[clamp(40px,7.5vw,90px)] uppercase tracking-[-0.01em] leading-none mb-8">
          LET’S BUILD IT.
        </h2>

        <a
          href="mailto:fahad203433@gmail.com"
          className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-bold text-[#16110e] hover:bg-[#ff595e] hover:text-white transition-all duration-300 shadow-xl"
        >
          Start a Conversation
        </a>

        <div className="mt-12 flex items-center justify-center gap-6 font-mono text-xs text-[#9c958d]">
          <a
            href="https://www.linkedin.com/in/fahad-khan-13ab35249"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href="https://github.com/fadikhan51"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-[11px] font-mono text-[#9c958d]/60">
          Islamabad, Pakistan · © 2026 Fahad Khan · made by hand, not by template
        </div>
      </div>
    </section>
  );
}