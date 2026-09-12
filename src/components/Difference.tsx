'use client';

const comparisonRows = [
  {
    typical: 'Scoped by an account manager, coded by junior contractors who rotate every month.',
    fahad: 'Direct engineer to engineer collaboration: I architect the system, write the core code, and own reliability.',
  },
  {
    typical: 'Naive HTTP polling loops that exhaust server threads and fail under sudden customer surges.',
    fahad: 'True event-driven WebSocket, Pub/Sub, and distributed Redis streaming pipelines with sub-50ms latency.',
  },
  {
    typical: '"That edge case is out of scope or an infrastructure issue you will need someone else to fix."',
    fahad: 'I actively solve messy edge cases: dead-letter queues, idempotent workers, device reconnects, and failovers.',
  },
  {
    typical: 'Throws oversized, expensive cloud clusters at unoptimized queries, ballooning your monthly infrastructure bill.',
    fahad: 'Profiles SQL indices, connection pooling, and in-memory caches to deliver lightning-fast speed on lean compute.',
  },
  {
    typical: 'Leaves behind undocumented spaghetti code and disappears right after the final invoice.',
    fahad: 'Clean git history, automated CI/CD suites, clear API schemas, and a full handover walkthrough so your team can scale it.',
  },
];

const protocols = [
  {
    num: '01',
    bg: 'bg-[#ffeef0] dark:bg-[#ff595e]/20 text-[#ff595e]',
    subColor: 'text-[#ff595e]',
    title: 'Architecture Review',
    subtitle: '30-MINUTE TECHNICAL CALL',
    desc: 'We jump on a call to unpack your core challenge: concurrency limits, database bottlenecks, hardware edge sync, or building a new product from scratch. No sales pitch, just engineer to engineer.',
    checks: ['✓ System audit', '✓ Stack fit'],
  },
  {
    num: '02',
    bg: 'bg-[#e5f4ff] text-[#0d99ff]',
    subColor: 'text-[#0d99ff]',
    title: 'Technical Blueprint',
    subtitle: 'WRITTEN ARCHITECTURAL SPEC',
    desc: 'Within 48 hours, you receive a concrete technical spec: database schema layouts, API contracts, concurrency models, and an honest milestone schedule. You see how it works before any code is merged.',
    checks: ['✓ Database schema', '✓ API contract'],
  },
  {
    num: '03',
    bg: 'bg-[#ecfdf5] text-[#10b981]',
    subColor: 'text-[#10b981]',
    title: 'You Decide',
    subtitle: 'ZERO LOCK-IN OR OBLIGATION',
    desc: 'If our architectural philosophy aligns with your vision, we begin building. If not, the technical notes and recommendations are yours to keep. Zero fluff, zero pressure, complete clarity.',
    checks: ['✓ Clear terms', '✓ Full ownership'],
  },
];

const alignmentCards = [
  {
    num: '01',
    title: 'Timezone Active',
    color: 'text-[#ff595e]',
    desc: 'Active across US PST/EST, Dubai GST, and Qatar AST. Synchronous communication via Slack, Discord, or Teams with daily commits.',
  },
  {
    num: '02',
    title: 'Code Ownership',
    color: 'text-[#0d99ff]',
    desc: '100% full intellectual property transfer. You own all repos, documentation, Docker configs, and CI/CD pipelines from day one.',
  },
  {
    num: '03',
    title: 'Performance SLAs',
    color: 'text-[#10b981]',
    desc: 'Sub-50ms cache hits, sub-second live telemetry ingestion, resilient dead-letter queues, and zero data loss on unexpected hardware drops.',
  },
  {
    num: '04',
    title: 'Production Handoff',
    color: 'text-[#ffca3a]',
    desc: 'Complete developer walkthrough, architectural diagrams, typed API schemas, and deployment playbooks so your internal team runs smoothly.',
  },
];

export default function Difference() {
  return (
    <>
      {/* 1. Comparison Matrix */}
      <section
        id="why"
        className="py-24 px-4 sm:px-8 border-t border-[#e9e6df]/80 dark:border-white/10 bg-[#f7f6f1]/50 dark:bg-transparent"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="hand text-[21px] text-[#ff595e]">why engineering teams build with me</p>
            <h2 className="font-poster text-[clamp(40px,6.8vw,80px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white mt-1">
              SAME BRIEF. DIFFERENT ENGINEER.
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#9c958d] mt-2">
              The measurable differences between agency hand-offs and senior execution.
            </p>
          </div>

          <div className="rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 shadow-md overflow-hidden font-sans">
            <div className="grid grid-cols-2 p-5 sm:p-6 bg-[#f7f6f1] dark:bg-[#181d28] border-b border-[#e9e6df] dark:border-white/10 font-mono text-xs sm:text-sm font-bold tracking-wide">
              <div className="text-[#9c958d] uppercase">Typical Agency / Freelancer</div>
              <div className="text-[#16110e] dark:text-white flex items-center gap-2 uppercase">
                <span className="size-2.5 rounded-full bg-[#ff595e]" /> Fahad Khan
              </div>
            </div>

            <div className="divide-y divide-[#e9e6df] dark:divide-white/10">
              {comparisonRows.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 p-5 sm:p-6 items-start gap-4 hover:bg-slate-50/50 dark:hover:bg-white/[0.02] transition"
                >
                  <div className="text-[#78716c] dark:text-zinc-400 flex items-start gap-3 pr-2 text-[13.5px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    <span className="mt-0.5 size-5 shrink-0 grid place-items-center rounded-full bg-red-100 text-red-600 font-bold text-xs">
                      ✕
                    </span>
                    <span>{row.typical}</span>
                  </div>
                  <div className="text-[#16110e] dark:text-zinc-100 font-semibold flex items-start gap-3 pl-2 text-[13.5px] sm:text-[15px] md:text-[16px] leading-relaxed">
                    <span className="mt-0.5 size-5 shrink-0 grid place-items-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs">
                      ✓
                    </span>
                    <span>{row.fahad}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Next Steps Protocol Cards */}
      <section
        id="next-steps"
        className="py-24 px-4 sm:px-8 border-t border-[#e9e6df]/80 dark:border-white/10 bg-white/70 dark:bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="hand text-[20px] text-[#ff595e]">how we start</p>
            <h2 className="font-poster text-[clamp(40px,6.8vw,80px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white">
              NO DECKS. NO DETOURS. JUST THIS.
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#9c958d] mt-2">
              A transparent, disciplined framework to take your architecture from idea to production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {protocols.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 p-7 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`size-10 rounded-xl ${p.bg} font-bold font-mono text-base flex items-center justify-center mb-5`}
                  >
                    {p.num}
                  </div>
                  <h3 className="text-xl font-bold text-[#16110e] dark:text-white mb-2">{p.title}</h3>
                  <p className={`font-mono text-xs ${p.subColor} mb-3`}>{p.subtitle}</p>
                  <p className="text-xs sm:text-[13.5px] text-[#5c554e] dark:text-zinc-300 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e9e6df] dark:border-white/10 mt-6 flex items-center gap-2 font-mono text-[11px] text-[#9c958d]">
                  {p.checks.map((chk, cIdx) => (
                    <span key={chk} className="flex items-center gap-2">
                      {cIdx > 0 && <span>·</span>}
                      <span>{chk}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Alignment Bento Grid */}
          <div className="rounded-2xl bg-[#16110e] dark:bg-[#0c0f14] text-white p-8 sm:p-10 border border-black dark:border-white/15 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
              <div>
                <p className="font-mono text-xs text-[#ff595e] uppercase tracking-wider">
                  Operational Alignment
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  Frequently aligned parameters with engineering teams
                </h3>
              </div>
              <a
                href="mailto:fahad203433@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#16110e] hover:bg-[#ff595e] hover:text-white transition"
              >
                Book an Architecture Review
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              {alignmentCards.map((c) => (
                <div key={c.num} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className={`font-mono ${c.color} font-bold text-sm mb-2`}>
                    {c.num} / {c.title}
                  </div>
                  <p className="text-slate-300 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}