'use client';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Process() {
  return (
    <section
      id="pipeline"
      className="py-24 px-4 sm:px-8 border-t border-[#e9e6df]/80 dark:border-white/10"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <p className="hand text-[20px] text-[#ff595e]">how we get to production</p>
          <h2 className="font-poster text-[clamp(40px,6.5vw,78px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white mt-1">
            THE PROCESS
          </h2>
        </div>

        {/* Figma frame: thread.frame */}
        <div className="relative border border-dashed border-[#0d99ff]/60 rounded-3xl p-4 sm:p-8 bg-white/20 dark:bg-white/[0.01] backdrop-blur-sm">
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded bg-[#0d99ff] px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">
            thread.frame
          </span>
          <span className="absolute -top-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="absolute -top-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="absolute -bottom-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="absolute -bottom-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />

          <div className="rounded-2xl border border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#12161f] overflow-hidden shadow-sm">
            {/* Thread Header */}
            <div className="flex items-center justify-between border-b border-[#e9e6df] dark:border-white/10 px-6 py-4 bg-[#f7f6f1] dark:bg-[#181d28]/70">
              <div className="flex items-center gap-3">
                <span className="size-3 rounded-full bg-[#10b981] animate-ping" />
                <span className="font-mono text-xs font-bold text-[#16110e] dark:text-white">
                  # fahad × your-team
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#9c958d]">ASYNC COLLABORATION SPRINT</span>
            </div>

            {/* Simulated Chat Thread */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Message 1 */}
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0 flex items-center justify-center font-bold text-xs">
                  CP
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#16110e] dark:text-white">Client Product Lead</span>
                    <span className="text-[10px] font-mono text-[#9c958d]">Day 1 · 09:14 AM</span>
                  </div>
                  <div className="mt-1.5 rounded-2xl rounded-tl-none bg-[#f7f6f1] dark:bg-[#181d28] p-4 text-xs sm:text-sm text-[#5c554e] dark:text-zinc-300 max-w-xl leading-relaxed">
                    We have peak order surges this month. Checkout is locking our inventory table and crashing.
                  </div>
                </div>
              </div>

              {/* Message 2 */}
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="size-10 rounded-full overflow-hidden border border-[#ff595e] shrink-0">
                  <img
                    src={`${basePath}/assets/fahad_profile.webp`}
                    alt="Fahad Khan"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] font-mono text-[#9c958d]">Day 1 · 09:42 AM</span>
                    <span className="text-xs font-bold text-[#ff595e]">Fahad Khan</span>
                  </div>
                  <div className="mt-1.5 rounded-2xl rounded-tr-none bg-[#ff595e]/10 border border-[#ff595e]/20 p-4 text-xs sm:text-sm text-[#16110e] dark:text-white max-w-xl text-left leading-relaxed">
                    Send me the current DB schema and peak hourly volumes. I will design an event-driven Redis buffer to decouple checkout from inventory writes so the app never stalls.
                  </div>
                </div>
              </div>

              {/* Message 3 */}
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="size-10 rounded-full overflow-hidden border border-[#ff595e] shrink-0">
                  <img
                    src={`${basePath}/assets/fahad_profile.webp`}
                    alt="Fahad Khan"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] font-mono text-[#9c958d]">Day 4 · 03:10 PM</span>
                    <span className="text-xs font-bold text-[#ff595e]">Fahad Khan</span>
                  </div>
                  <div className="mt-1.5 rounded-2xl rounded-tr-none bg-[#ff595e]/10 border border-[#ff595e]/20 p-4 text-xs sm:text-sm text-[#16110e] dark:text-white max-w-xl text-left leading-relaxed">
                    Staging cluster deployed with Redis streams & synthetic load generator running 10k orders/sec. Latency down from 1,200ms to 42ms.
                  </div>
                </div>
              </div>

              {/* Message 4 */}
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-full bg-emerald-600 text-white shrink-0 flex items-center justify-center font-bold text-xs">
                  CTO
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#16110e] dark:text-white">Client CTO</span>
                    <span className="text-[10px] font-mono text-[#9c958d]">Day 4 · 03:45 PM</span>
                  </div>
                  <div className="mt-1.5 rounded-2xl rounded-tl-none bg-[#f7f6f1] dark:bg-[#181d28] p-4 text-xs sm:text-sm text-[#5c554e] dark:text-zinc-300 max-w-xl leading-relaxed">
                    Just stress-tested it. No lock contention at all. Let's harden and integrate with ERP.
                  </div>
                </div>
              </div>

              {/* Message 5 */}
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="size-10 rounded-full overflow-hidden border border-[#ff595e] shrink-0">
                  <img
                    src={`${basePath}/assets/fahad_profile.webp`}
                    alt="Fahad Khan"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] font-mono text-[#9c958d]">Day 8 · 11:20 AM</span>
                    <span className="text-xs font-bold text-[#ff595e]">Fahad Khan</span>
                  </div>
                  <div className="mt-1.5 rounded-2xl rounded-tr-none bg-[#ff595e]/10 border border-[#ff595e]/20 p-4 text-xs sm:text-sm text-[#16110e] dark:text-white max-w-xl text-left leading-relaxed">
                    Added idempotent retry queues for offline payment webhooks, database connection pooling, and circuit breakers on external courier APIs.
                  </div>
                </div>
              </div>

              {/* Message 6 */}
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="size-10 rounded-full overflow-hidden border border-[#ff595e] shrink-0">
                  <img
                    src={`${basePath}/assets/fahad_profile.webp`}
                    alt="Fahad Khan"
                    className="w-full h-full object-cover"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-[10px] font-mono text-[#9c958d]">Day 14 · 06:00 PM</span>
                    <span className="text-xs font-bold text-[#ff595e]">Fahad Khan</span>
                  </div>
                  <div className="mt-1.5 rounded-2xl rounded-tr-none bg-[#ff595e]/10 border border-[#ff595e]/20 p-4 text-xs sm:text-sm text-[#16110e] dark:text-white max-w-xl text-left leading-relaxed">
                    Production migration complete. Real-time telemetry dashboard live, 0 dropped transactions, and automated alerts hooked into your Slack.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}