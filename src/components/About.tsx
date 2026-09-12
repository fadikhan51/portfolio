import React from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function About() {
  return (
    <section id="about" aria-label="About" className="px-6 py-20 sm:px-14 sm:py-28 border-t border-[#e9e6df]/80 dark:border-white/10 bg-white/40 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-[1400px]">
        
        <div className="text-center mb-16">
          <p className="hand text-[19px] text-[#ff595e] sm:text-[21px]">a little about me</p>
          <h2 className="font-poster mx-auto mt-1.5 uppercase text-[clamp(40px,6.2vw,78px)] text-[#16110e] dark:text-white">
            WHAT I DO
          </h2>
        </div>

        <div className="relative mt-12 grid gap-5 lg:grid-cols-3 border border-dashed border-[#0d99ff]/50 rounded-2xl p-4 sm:p-6 bg-white/20 dark:bg-white/[0.02] backdrop-blur-sm">
          
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded bg-[#0d99ff] px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
            about.grid
          </span>
          <span className="absolute -top-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white"></span>
          <span className="absolute -top-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white"></span>
          <span className="absolute -bottom-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white"></span>
          <span className="absolute -bottom-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white"></span>

          {/* CARD 1: Large Statement Card with Fahad's Portrait (2 Cols, 2 Rows) */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="relative grid h-full overflow-hidden rounded-[24px] border border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#12161f] shadow-sm lg:grid-cols-[1.12fr_0.88fr]">
              
              {/* Left Statement Text */}
              <div className="flex flex-col p-8 sm:p-11 justify-between">
                <div>
                  <span className="block text-[64px] font-serif leading-[0.6] text-[#ff595e]">“</span>
                  <h3 className="mt-6 text-[clamp(1.8rem,3vw,2.4rem)] font-extrabold leading-tight text-[#16110e] dark:text-white">
                    I build the unglamorous half <span className="text-[#ff595e]">that makes systems actually work.</span>
                  </h3>
                  <p className="mt-5 text-[15px] leading-[1.7] text-[#5c554e] dark:text-zinc-300">
                    Anyone can wire up a basic app and get a quick demo. The job is everything after that: real-time event sync, concurrency locks, hardware edge cases, retries, and knowing which problems shouldn't use complex layers at all. That is the part I like.
                  </p>
                </div>

                <div className="mt-8 border-t border-[#e9e6df] dark:border-white/10 pt-6">
                  <p className="text-[19px] font-bold text-[#16110e] dark:text-white">Fahad Khan</p>
                  <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-[#9c958d]">
                    <span>Full-Stack Software Engineer · SINCE 2021</span>
                    <span className="flex items-center gap-1.5 text-[#10b981] font-semibold">
                      <i className="size-1.5 animate-blink rounded-full bg-[#10b981]"></i>
                      AVAILABLE NOW
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Image: Fahad's Portrait with statement.txt pill */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full min-h-[380px] sm:min-h-[450px] overflow-hidden bg-slate-950">
                <img
                  src={`${basePath}/assets/fahad_profile.webp`}
                  alt="Fahad Khan - Full-Stack Systems Engineer and COMSATS Gold Medalist"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
                <span className="absolute right-5 top-5 rounded bg-[#16110e]/60 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur border border-white/10">
                  statement.txt
                </span>
              </div>

            </div>
          </div>

          {/* CARD 2: Metrics Dark Slab */}
          <div className="rounded-[24px] bg-[#16110e] dark:bg-[#0c0f14] text-white p-8 relative shadow-sm border border-black dark:border-white/15 flex flex-col justify-between">
            <span className="absolute right-7 top-7 font-mono text-xs text-[#9c958d]">metrics</span>
            <div className="mt-6 space-y-1">
              
              <div className="flex items-end justify-between gap-4 py-4 border-b border-white/10">
                <div className="text-[clamp(2rem,3.2vw,2.75rem)] font-poster tracking-tight text-white">
                  10,000<span className="text-[#ff595e]">+</span>
                </div>
                <div className="font-mono text-[11px] text-right text-slate-400 max-w-[12ch]">
                  Concurrent users handled
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 py-4 border-b border-white/10">
                <div className="text-[clamp(2rem,3.2vw,2.75rem)] font-poster tracking-tight text-white">
                  99.9<span className="text-[#ff595e]">%</span>
                </div>
                <div className="font-mono text-[11px] text-right text-slate-400 max-w-[12ch]">
                  Production uptime
                </div>
              </div>

              <div className="flex items-end justify-between gap-4 py-4">
                <div className="text-[clamp(2rem,3.2vw,2.75rem)] font-poster tracking-tight text-white">
                  &lt;1<span className="text-[#ff595e]">hr</span>
                </div>
                <div className="font-mono text-[11px] text-right text-slate-400 max-w-[12ch]">
                  Avg. response time
                </div>
              </div>

            </div>
          </div>

          {/* CARD 3: Capabilities Pills Card */}
          <div className="rounded-[24px] bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 p-8 relative shadow-sm flex flex-col justify-between">
            <span className="absolute right-7 top-7 font-mono text-xs text-[#9c958d]">capabilities</span>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] px-4 py-2 text-[13.5px] text-[#5c554e] dark:text-zinc-300 hover:border-[#ff595e]/40 hover:text-[#ff595e] transition">
                Full-Stack Systems
              </span>
              <span className="rounded-full border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] px-4 py-2 text-[13.5px] text-[#5c554e] dark:text-zinc-300 hover:border-[#ff595e]/40 hover:text-[#ff595e] transition">
                Retail OS & POS
              </span>
              <span className="rounded-full border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] px-4 py-2 text-[13.5px] text-[#5c554e] dark:text-zinc-300 hover:border-[#ff595e]/40 hover:text-[#ff595e] transition">
                IoT Telemetry
              </span>
              <span className="rounded-full border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] px-4 py-2 text-[13.5px] text-[#5c554e] dark:text-zinc-300 hover:border-[#ff595e]/40 hover:text-[#ff595e] transition">
                Real-Time Streams
              </span>
              <span className="rounded-full border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] px-4 py-2 text-[13.5px] text-[#5c554e] dark:text-zinc-300 hover:border-[#ff595e]/40 hover:text-[#ff595e] transition">
                Distributed Cache
              </span>
              <span className="rounded-full border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] px-4 py-2 text-[13.5px] text-[#5c554e] dark:text-zinc-300 hover:border-[#ff595e]/40 hover:text-[#ff595e] transition">
                Hardware Edge Sync
              </span>
            </div>
          </div>

          {/* CARD 4: Running Now Live Stage Monitor */}
          <div className="rounded-[24px] bg-[#16110e] dark:bg-[#0c0f14] text-white p-8 relative shadow-sm border border-black dark:border-white/15 overflow-hidden flex flex-col justify-between">
            <span className="absolute right-7 top-7 font-mono text-xs text-[#9c958d]">running now</span>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <i className="size-2 rounded-full bg-[#ff595e] animate-ping"></i>
                <span className="font-mono text-[13px] text-slate-200">ingest</span>
                <span className="ml-auto font-mono text-xs font-bold text-[#10b981]">ok</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="size-2 rounded-full bg-[#1982c4] animate-ping"></i>
                <span className="font-mono text-[13px] text-slate-200">route</span>
                <span className="ml-auto font-mono text-xs font-bold text-[#10b981]">ok</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="size-2 rounded-full bg-[#8ac926] animate-ping"></i>
                <span className="font-mono text-[13px] text-slate-200">cache</span>
                <span className="ml-auto font-mono text-xs font-bold text-[#10b981]">ok</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="size-2 rounded-full bg-[#ffca3a] animate-ping"></i>
                <span className="font-mono text-[13px] text-slate-200">dispatch</span>
                <span className="ml-auto font-mono text-xs font-bold text-[#10b981]">ok</span>
              </div>
            </div>

            <p className="font-mono text-[11px] text-[#9c958d] mt-6 border-t border-white/10 pt-4">
              4 STAGES · 0 DROPPED PACKETS
            </p>
          </div>

          {/* CARD 5: Stack with Equalizer Animation */}
          <div className="rounded-[24px] bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 p-8 relative shadow-sm flex flex-col justify-between">
            <span className="absolute right-7 top-7 font-mono text-xs text-[#9c958d]">stack</span>
            <div>
              <p className="font-mono text-xs font-bold text-[#ff595e]">Currently building in</p>
              <h4 className="mt-2 text-[24px] font-poster uppercase text-[#16110e] dark:text-white">Next.js &amp; Python</h4>
              
              <div className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                <span className="rounded-lg border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] text-[#5c554e] dark:text-zinc-200 px-3 py-1.5 font-medium">TypeScript</span>
                <span className="rounded-lg border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] text-[#5c554e] dark:text-zinc-200 px-3 py-1.5 font-medium">Fastify</span>
                <span className="rounded-lg border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] text-[#5c554e] dark:text-zinc-200 px-3 py-1.5 font-medium">PostgreSQL</span>
                <span className="rounded-lg border border-[#e9e6df] dark:border-white/10 bg-[#f7f6f1] dark:bg-[#181d28] text-[#5c554e] dark:text-zinc-200 px-3 py-1.5 font-medium">Redis</span>
              </div>
            </div>

            {/* Animated equalizer bars */}
            <div className="mt-6 flex h-5 items-end gap-1 border-t border-[#e9e6df] dark:border-white/10 pt-4">
              <i className="w-1.5 rounded-sm bg-[#ff595e] h-full animate-eq-1"></i>
              <i className="w-1.5 rounded-sm bg-[#ff595e] h-full animate-eq-2"></i>
              <i className="w-1.5 rounded-sm bg-[#ff595e] h-full animate-eq-3"></i>
              <i className="w-1.5 rounded-sm bg-[#ff595e] h-full animate-eq-4"></i>
              <i className="w-1.5 rounded-sm bg-[#ff595e] h-full animate-eq-2"></i>
            </div>
          </div>

          {/* CARD 6: Verified Credentials & Distinctions */}
          <div className="rounded-[24px] bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 p-8 relative shadow-sm flex flex-col justify-between">
            <span className="absolute right-7 top-7 font-mono text-xs text-[#9c958d]">certified</span>
            <div>
              <p className="font-mono text-xs font-bold text-[#10b981]">Verified credentials</p>
              
              <div className="mt-4 space-y-2.5 text-xs text-[#16110e] dark:text-zinc-200 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span>COMSATS BSCS · 3.94 / 4.00 CGPA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span>Campus Gold Medalist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span>Institute Bronze Medalist</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#10b981] font-bold">✓</span>
                  <span>Meta Professional Certifications</span>
                </div>
              </div>
            </div>

            <p className="font-mono text-[11px] text-[#9c958d] mt-6 border-t border-[#e9e6df] pt-4">
              4+ years engineering production systems
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
