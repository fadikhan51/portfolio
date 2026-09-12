'use client';

interface Review {
  initial: string;
  name: string;
  location: string;
  quote: string;
  repeat?: boolean;
}

const reviews: Review[] = [
  {
    initial: 'S',
    name: 'Sarah Jenkins',
    location: 'US · United States',
    quote:
      'He is such an exceptional, and solid worker. He exceeds expectations, is cooperative, and truly an expert at what he does!',
    repeat: true,
  },
  {
    initial: 'T',
    name: 'Tariq Al-Mansoor',
    location: 'QA · Qatar',
    quote:
      'Great experience working with this developer. Communication was clear, delivery was on time, and the final result matched exactly what I needed. Will work again.',
    repeat: true,
  },
  {
    initial: 'O',
    name: 'Omar Al-Falasi',
    location: 'AE · United Arab Emirates',
    quote:
      'The best! For sure! I am so happy with their work and keep going back and back. Thanks',
    repeat: true,
  },
  {
    initial: 'D',
    name: 'David Sterling',
    location: 'US · United States',
    quote: 'Great experience. Recommended',
  },
  {
    initial: 'H',
    name: 'Hamad Al-Kuwari',
    location: 'QA · Qatar',
    quote: 'Highly recommended.',
    repeat: true,
  },
  {
    initial: 'M',
    name: 'Marcus Vance',
    location: 'US · United States',
    quote:
      'Very talented and proactive engineer. Clear communication, fast turnaround, and delivers high quality work without back-and-forth.',
    repeat: true,
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-24 px-4 sm:px-8 border-t border-[#e9e6df]/80 dark:border-white/10 bg-white/60 dark:bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="hand text-[20px] text-[#ff595e]">// my clients</p>
          <h2 className="font-poster text-[clamp(44px,7vw,82px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white">
            DON'T TAKE IT FROM ME
          </h2>
          <p className="text-sm font-mono text-[#9c958d] mt-2">
            High-concurrency systems and production builds delivered for clients across the US, Dubai, and Qatar.
          </p>
        </div>

        {/* Global Footprint Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 shadow-sm hover:border-[#1982c4]/40 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">🇺🇸</span>
              <span className="font-mono text-[10.5px] text-[#1982c4] bg-[#e5f4ff] dark:bg-[#1982c4]/20 px-2.5 py-1 rounded-full font-bold">
                UNITED STATES
              </span>
            </div>
            <h4 className="font-bold text-lg text-[#16110e] dark:text-white mb-1.5">
              Streaming &amp; Marketplaces
            </h4>
            <p className="text-xs sm:text-[13px] text-[#5c554e] dark:text-zinc-300 leading-relaxed">
              Sports video streaming marketplace (Vupop), dynamic per-second monetization engine, and high-throughput HLS delivery pipelines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 shadow-sm hover:border-[#10b981]/40 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">🇦🇪</span>
              <span className="font-mono text-[10.5px] text-[#10b981] bg-[#ecfdf5] dark:bg-[#10b981]/20 px-2.5 py-1 rounded-full font-bold">
                DUBAI, UAE
              </span>
            </div>
            <h4 className="font-bold text-lg text-[#16110e] dark:text-white mb-1.5">
              IoT Telemetry &amp; Smart Mobility
            </h4>
            <p className="text-xs sm:text-[13px] text-[#5c554e] dark:text-zinc-300 leading-relaxed">
              Live vehicle kinematics telemetry, Traccar-based TCP/UDP listeners, and sub-second geofencing alerts for fleet operations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 shadow-sm hover:border-[#ff595e]/40 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl">🇶🇦</span>
              <span className="font-mono text-[10.5px] text-[#ff595e] bg-[#ffeef0] dark:bg-[#ff595e]/20 px-2.5 py-1 rounded-full font-bold">
                QATAR
              </span>
            </div>
            <h4 className="font-bold text-lg text-[#16110e] dark:text-white mb-1.5">
              Retail OS &amp; E-Commerce
            </h4>
            <p className="text-xs sm:text-[13px] text-[#5c554e] dark:text-zinc-300 leading-relaxed">
              Commercial retail hypermarket platforms, real-time inventory synchronization across multi-branch hubs, and POS integrations.
            </p>
          </div>
        </div>

        {/* Reviews Grid with Technical Frame */}
        <div className="relative pt-4">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-3 sm:-inset-6 z-10 hidden sm:block">
            <span className="absolute inset-x-0 top-0 border-t-2 border-dotted border-[#0d99ff]/40" />
            <span className="absolute inset-x-0 bottom-0 border-t-2 border-dotted border-[#0d99ff]/40" />
            <span className="absolute inset-y-0 left-0 border-l-2 border-dotted border-[#0d99ff]/40" />
            <span className="absolute inset-y-0 right-0 border-l-2 border-dotted border-[#0d99ff]/40" />
            <span className="absolute left-0 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d99ff]" />
            <span className="absolute right-0 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d99ff]" />
            <span className="absolute left-0 bottom-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d99ff]" />
            <span className="absolute right-0 bottom-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d99ff]" />
            <span className="absolute -top-3 left-5 rounded-[4px] px-2 py-0.5 text-white bg-[#0d99ff] text-[10.5px] font-mono font-bold uppercase tracking-wider">
              reviews
            </span>
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {reviews.map((r, i) => (
              <figure
                key={r.name}
                className="rounded-[20px] bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span aria-hidden="true" className="text-[13px] text-[#ffca3a]">
                      ★★★★★
                    </span>
                    <span className="text-xs font-mono text-[#9c958d]">5.0</span>
                    {r.repeat && (
                      <span className="ml-auto rounded-full bg-[#ffeef0] dark:bg-[#ff595e]/20 px-2 py-0.5 text-[11px] font-mono text-[#ff595e]">
                        repeat client
                      </span>
                    )}
                  </div>
                  <blockquote className="text-[14.5px] leading-relaxed text-[#16110e] dark:text-zinc-200 font-sans">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="mt-6 pt-4 border-t border-[#e9e6df] dark:border-white/10 flex items-center gap-2.5">
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#16110e] dark:bg-white text-[11px] font-bold uppercase text-white dark:text-[#16110e]">
                    {r.initial}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-mono text-[12.5px] font-bold text-[#16110e] dark:text-white">
                      {r.name}
                    </span>
                    <span className="text-xs font-mono text-[#5c554e] dark:text-zinc-400">
                      {r.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Rating Summary Bar */}
        <div className="relative mt-12 flex flex-wrap items-center gap-x-8 gap-y-5 overflow-hidden rounded-2xl bg-[#16110e] dark:bg-[#0c0f14] border border-black dark:border-white/15 px-7 py-6 text-white shadow-md">
          <div className="relative flex items-baseline gap-3">
            <span className="font-poster text-[38px] leading-none text-white">5.0</span>
            <span className="text-xs font-mono text-zinc-400">from 24 verified reviews</span>
          </div>
          <p className="text-xs font-mono text-zinc-400">Top Rated Systems Engineer · Responds in &lt; 1 hour</p>
          <a
            href="#contact"
            className="relative ml-auto inline-flex items-center gap-2 rounded-full bg-[#ff595e] px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#e04449]"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}