import React from 'react';

export default function Process() {
  return (
    <section id="pipeline" className="py-24 px-4 sm:px-8 border-t border-[#e9e6df]/80">
      <div className="max-w-4xl mx-auto text-center mb-14">
        <p className="hand text-[20px] text-[#ff595e]">how it works</p>
        <h2 className="font-poster text-[clamp(44px,7vw,82px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white">
          NO DECKS. NO DETOURS.
        </h2>
        <p className="text-sm font-mono text-[#9c958d] mt-2">One thread, one build, zero bureaucracy.</p>
      </div>

      <div className="max-w-2xl mx-auto rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 shadow-xl overflow-hidden font-sans">
        
        <div className="h-10 bg-[#f7f6f1] dark:bg-[#181d28] border-b border-[#e9e6df] dark:border-white/10 px-4 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#16110e] dark:text-white"># fahad × your-team</span>
            <span className="size-2 rounded-full bg-[#10b981]"></span>
            <span className="text-[#9c958d]">2 online</span>
          </div>
          <span className="text-[#9c958d]">thread.frame</span>
        </div>

        <div className="p-6 space-y-6 text-sm bg-white dark:bg-[#12161f]">
          
          <div>
            <div className="font-mono text-[10px] text-[#ff595e] font-bold mb-2">01 ARCHITECT &amp; SCOPE</div>
            <div className="flex items-start gap-3">
              <div className="size-7 rounded-full bg-[#1982c4] text-white flex items-center justify-center font-bold text-xs shrink-0">Y</div>
              <div className="bg-[#f7f6f1] dark:bg-[#181d28] p-3 rounded-2xl rounded-tl-none border border-[#e9e6df] dark:border-white/10 text-[#16110e] dark:text-zinc-200 max-w-md">
                <span className="text-[11px] font-bold text-[#16110e] dark:text-white block mb-1">Product Lead</span>
                We need an order routing system that can sync thousands of inventory updates across multiple retail branches without locking rows or crashing checkout.
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3 ml-6">
              <div className="size-7 rounded-full bg-[#16110e] text-white flex items-center justify-center font-bold text-xs shrink-0">F</div>
              <div className="bg-[#fff1f2] dark:bg-[#201518] p-3 rounded-2xl rounded-tl-none border border-[#ffe4e6] dark:border-rose-900/40 text-[#16110e] dark:text-zinc-100 max-w-md">
                <span className="text-[11px] font-bold text-[#ff595e] block mb-1">Fahad</span>
                Send me the current DB schema and peak hourly volumes. I will design an event-driven Redis buffer to decouple checkout from inventory writes so the app never stalls.
                <div className="mt-2 text-[11px] text-emerald-600 font-mono font-bold">🎯 Architecture approved in 24 hours</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-[#ff595e] font-bold mb-2">02 RAPID PROTOTYPE</div>
            <div className="flex items-start gap-3 ml-6">
              <div className="size-7 rounded-full bg-[#16110e] text-white flex items-center justify-center font-bold text-xs shrink-0">F</div>
              <div className="bg-[#fff1f2] dark:bg-[#201518] p-3 rounded-2xl rounded-tl-none border border-[#ffe4e6] dark:border-rose-900/40 text-[#16110e] dark:text-zinc-100 max-w-md">
                <span className="text-[11px] font-bold text-[#ff595e] block mb-1">Fahad · Day 4</span>
                First end-to-end prototype is live on staging. Handling mock load of 5,000 simulated checkouts with sub-40ms latency.
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-[#ff595e] font-bold mb-2">03 HARDEN FOR PRODUCTION</div>
            <div className="flex items-start gap-3 ml-6">
              <div className="size-7 rounded-full bg-[#16110e] text-white flex items-center justify-center font-bold text-xs shrink-0">F</div>
              <div className="bg-[#fff1f2] dark:bg-[#201518] p-3 rounded-2xl rounded-tl-none border border-[#ffe4e6] dark:border-rose-900/40 text-[#16110e] dark:text-zinc-100 max-w-md">
                <span className="text-[11px] font-bold text-[#ff595e] block mb-1">Fahad · Week 2</span>
                Added retry queues for edge-case offline devices, database connection pooling, and real-time monitoring alerts.
              </div>
            </div>
          </div>

          <div>
            <div className="font-mono text-[10px] text-[#ff595e] font-bold mb-2">04 SHIP &amp; MONITOR</div>
            <div className="flex items-start gap-3 ml-6">
              <div className="size-7 rounded-full bg-[#16110e] text-white flex items-center justify-center font-bold text-xs shrink-0">F</div>
              <div className="bg-[#fff1f2] dark:bg-[#201518] p-3 rounded-2xl rounded-tl-none border border-[#ffe4e6] dark:border-rose-900/40 text-[#16110e] dark:text-zinc-100 max-w-md">
                <span className="text-[11px] font-bold text-[#ff595e] block mb-1">Fahad · Week 3</span>
                Deployed to production. Zero downtime, documentation handed over, telemetry alerts active. 🚀
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <div className="size-7 rounded-full bg-[#1982c4] text-white flex items-center justify-center font-bold text-xs shrink-0">Y</div>
              <div className="bg-[#f7f6f1] dark:bg-[#181d28] p-3 rounded-2xl rounded-tl-none border border-[#e9e6df] dark:border-white/10 text-[#16110e] dark:text-zinc-200 max-w-md text-xs font-mono">
                🎉 Flawless rollout.
              </div>
            </div>
          </div>

        </div>

        <div className="p-3 bg-[#f7f6f1] dark:bg-[#181d28] border-t border-[#e9e6df] dark:border-white/10 flex items-center gap-2 text-xs font-mono text-[#9c958d]">
          <span className="text-[#ff595e] font-bold">+</span>
          <span>Your next mission-critical system...</span>
          <a href="#contact" className="ml-auto rounded-full bg-[#16110e] dark:bg-white px-3 py-1.5 font-bold text-white dark:text-[#16110e] hover:bg-[#ff595e] dark:hover:bg-[#ff595e] dark:hover:text-white transition">Start the thread</a>
        </div>

      </div>
    </section>
  );
}
