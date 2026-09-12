import React from 'react';

export default function Services() {
  return (
    <section id="services" className="relative px-4 py-20 sm:px-8 sm:py-28 border-t border-[#e9e6df]/80 dark:border-white/10 bg-white/40 dark:bg-transparent overflow-hidden">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-16">
          <p className="hand text-[20px] text-[#ff595e]">which one sounds like you?</p>
          <h2 className="font-poster text-[clamp(40px,6.5vw,78px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white mt-1">
            THE SERVICES
          </h2>
        </div>

        <div className="relative mt-8 px-2 pb-10 xl:mt-12 xl:px-8 xl:pb-16 xl:pt-6 border border-dashed border-[#0d99ff]/60 rounded-2xl bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm">
          
          <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded bg-[#0d99ff] px-2 py-0.5 font-mono text-[10px] font-bold text-white tracking-wider uppercase shadow-sm">
            SERVICES.DECK
          </span>
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 hidden sm:inline-flex items-center gap-1 rounded bg-[#0d99ff] px-2 py-0.5 font-mono text-[10px] font-bold text-white tracking-wider uppercase shadow-sm">
            1338 × 818
          </span>
          <span className="absolute -top-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="absolute -top-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="absolute -bottom-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="absolute -bottom-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>

          <div className="flex flex-col items-stretch gap-6 xl:flex-row xl:items-start xl:justify-center xl:gap-0 pt-6">

            {/* CARD 1: Tilted Left (-4deg) */}
            <div className="group relative z-10 hover:z-30 xl:w-[33%] xl:-rotate-[4deg] xl:translate-y-5 xl:origin-bottom-right transition-all duration-500">
              <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#12161f] p-5 sm:p-6 shadow-[0_12px_35px_-15px_rgba(20,19,16,0.1)] transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:scale-[1.04] group-hover:shadow-[0_40px_90px_-30px_rgba(255,202,58,0.35)] group-hover:border-[#ffca3a]">
                
                <div className="relative overflow-hidden rounded-[18px] bg-[#16110e] ring-1 ring-[#ffca3a]/30">
                  <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[10px] font-mono">
                    <i className="size-2 rounded-full bg-[#ff595e]"></i>
                    <i className="size-2 rounded-full bg-[#ffca3a]"></i>
                    <i className="size-2 rounded-full bg-[#8ac926]"></i>
                    <span className="ml-1 text-slate-300">pipeline.py</span>
                    <span className="ml-auto text-slate-400">✓ no problems</span>
                  </div>
                  <div className="p-3 text-[10.5px] font-mono text-slate-200 leading-relaxed overflow-x-auto">
                    <div><span className="text-[#1982c4]">@schedule</span>(<span className="text-[#8ac926]">&quot;*/15 * * * *&quot;</span>)</div>
                    <div><span className="text-[#ff595e]">def </span><span className="text-[#1982c4]">sync_orders</span>():</div>
                    <div>&nbsp;&nbsp;docs = <span className="text-[#1982c4]">inbox.fetch</span>(unread=<span className="text-[#ffca3a]">True</span>)</div>
                    <div>&nbsp;&nbsp;rows = <span className="text-[#1982c4]">extract</span>(docs, Order)</div>
                    <div>&nbsp;&nbsp;ok, review = <span className="text-[#1982c4]">verify</span>(rows, <span className="text-[#ffca3a]">0.8</span>)</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-3 py-2 text-[9.5px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-[#ffca3a]"></i>runs on a schedule</span>
                    <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-[#ffca3a]"></i>human-in-the-loop</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg text-[13px] font-bold bg-[#ffca3a] text-[#16110e]">01</span>
                  <h3 className="text-[22px] font-bold leading-tight text-[#16110e] dark:text-white">AI Automation <span className="text-[#8a6a00] dark:text-[#ffca3a]">that runs itself.</span></h3>
                </div>

                <p className="mt-3 text-[13.5px] font-semibold text-[#8a6a00] dark:text-[#ffca3a]">For teams where someone&apos;s whole morning disappears into copy-paste.</p>

                <p className="mt-3 text-[14px] leading-relaxed text-[#5c554e] dark:text-zinc-400">
                  You already know which task is eating the week. I turn it into a pipeline that runs on a schedule, survives the messy cases, and tells you when it isn&apos;t sure, instead of guessing and getting it quietly wrong.
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-[#e9e6df] dark:border-white/10 pt-4 text-xs text-[#5c554e] dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#ffca3a] text-[#16110e]">✓</span>
                    <span>Someone re-types the same data between two systems every day</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#ffca3a] text-[#16110e]">✓</span>
                    <span>You tried a no-code tool and it broke on the first real edge case</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#ffca3a] text-[#16110e]">✓</span>
                    <span>The work is high-volume, boring, and expensive to get wrong</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5 text-[10.5px] font-mono">
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Workflow automation</span>
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Document extraction</span>
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Inbox &amp; CRM agents</span>
                </div>

                <a href="#contact" className="mt-6 w-full rounded-full bg-[#ffca3a] hover:bg-[#f5be24] py-3 text-center text-[13.5px] font-bold text-[#16110e] transition shadow-sm block">
                  Discuss Architecture
                </a>

              </article>
            </div>

            {/* CARD 2: Centered Straight (0deg) with -ml-6 overlap */}
            <div className="group relative z-20 hover:z-30 xl:w-[33%] xl:-ml-6 transition-all duration-500">
              <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#12161f] p-5 sm:p-6 shadow-[0_16px_40px_-15px_rgba(20,19,16,0.12)] transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.04] group-hover:shadow-[0_40px_90px_-30px_rgba(13,153,255,0.35)] group-hover:border-[#0d99ff]">
                
                <div className="relative overflow-hidden rounded-[18px] bg-[#16110e] ring-1 ring-[#0d99ff]/30">
                  <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[10px] font-mono">
                    <i className="size-2 rounded-full bg-[#ff595e]"></i>
                    <i className="size-2 rounded-full bg-[#ffca3a]"></i>
                    <i className="size-2 rounded-full bg-[#8ac926]"></i>
                    <span className="ml-1 text-slate-300">billing.ts</span>
                    <span className="ml-auto text-slate-400">✓ no problems</span>
                  </div>
                  <div className="p-3 text-[10.5px] font-mono text-slate-200 leading-relaxed overflow-x-auto">
                    <div><span className="text-[#ff595e]">export async function </span><span className="text-[#1982c4]">subscribe</span>(org) &#123;</div>
                    <div>&nbsp;&nbsp;<span className="text-[#ff595e]">const </span>cus = <span className="text-[#ff595e]">await </span>stripe.customers</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-[#1982c4]">create</span>(&#123; orgId: org.id &#125;)</div>
                    <div>&nbsp;&nbsp;<span className="text-[#ff595e]">await </span>db.org.<span className="text-[#1982c4]">update</span>(&#123;</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;where: &#123; id: org.id &#125;,</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-3 py-2 text-[9.5px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-[#0d99ff]"></i>auth + billing</span>
                    <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-[#0d99ff]"></i>multi-tenant</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg text-[13px] font-bold bg-[#0d99ff] text-white">02</span>
                  <h3 className="text-[22px] font-bold leading-tight text-[#16110e] dark:text-white">SaaS Products <span className="text-[#0265a8] dark:text-[#38bdf8]">end to end.</span></h3>
                </div>

                <p className="mt-3 text-[13.5px] font-semibold text-[#0265a8] dark:text-[#38bdf8]">For founders who need the whole product, not another prototype.</p>

                <p className="mt-3 text-[14px] leading-relaxed text-[#5c554e] dark:text-zinc-400">
                  Empty repo to paying users. Schema, API, front end, auth, billing and the AI layer on top, built by one person who holds the whole picture, so nothing falls down the gap between contractors.
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-[#e9e6df] dark:border-white/10 pt-4 text-xs text-[#5c554e] dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#0d99ff] text-white">✓</span>
                    <span>You have the idea and the customers, but no engineering team yet</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#0d99ff] text-white">✓</span>
                    <span>A previous build got 80% there and then stalled</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#0d99ff] text-white">✓</span>
                    <span>You need something another developer can pick up later</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5 text-[10.5px] font-mono">
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Full-stack builds</span>
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Auth &amp; multi-tenancy</span>
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Stripe billing</span>
                </div>

                <a href="#contact" className="mt-6 w-full rounded-full bg-[#0d99ff] hover:bg-[#0284c7] py-3 text-center text-[13.5px] font-bold text-white transition shadow-sm block">
                  Discuss Architecture
                </a>

              </article>
            </div>

            {/* CARD 3: Tilted Right (+4deg) with -ml-6 overlap */}
            <div className="group relative z-10 hover:z-30 xl:w-[33%] xl:rotate-[4deg] xl:translate-y-5 xl:origin-bottom-left xl:-ml-6 transition-all duration-500">
              <article className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#12161f] p-5 sm:p-6 shadow-[0_12px_35px_-15px_rgba(20,19,16,0.1)] transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:scale-[1.04] group-hover:shadow-[0_40px_90px_-30px_rgba(255,89,94,0.35)] group-hover:border-[#ff595e]">
                
                <div className="relative overflow-hidden rounded-[18px] bg-[#16110e] ring-1 ring-[#ff595e]/30">
                  <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[10px] font-mono">
                    <i className="size-2 rounded-full bg-[#ff595e]"></i>
                    <i className="size-2 rounded-full bg-[#ffca3a]"></i>
                    <i className="size-2 rounded-full bg-[#8ac926]"></i>
                    <span className="ml-1 text-slate-300">retrieve.ts</span>
                    <span className="ml-auto text-slate-400">✓ no problems</span>
                  </div>
                  <div className="p-3 text-[10.5px] font-mono text-slate-200 leading-relaxed overflow-x-auto">
                    <div><span className="text-[#ff595e]">const </span>hits = <span className="text-[#ff595e]">await </span>index.<span className="text-[#1982c4]">query</span>(&#123;</div>
                    <div>&nbsp;&nbsp;vector: <span className="text-[#ff595e]">await </span><span className="text-[#1982c4]">embed</span>(question),</div>
                    <div>&nbsp;&nbsp;topK: <span className="text-[#ffca3a]">5</span>,</div>
                    <div>&nbsp;&nbsp;<span className="text-slate-500">// never cross tenants</span></div>
                    <div>&nbsp;&nbsp;filter: &#123; tenant: org.id &#125;,</div>
                    <div>&#125;)</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-3 py-2 text-[9.5px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-[#ff595e]"></i>evals in CI</span>
                    <span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-[#ff595e]"></i>sources cited</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg text-[13px] font-bold bg-[#ff595e] text-white">03</span>
                  <h3 className="text-[22px] font-bold leading-tight text-[#16110e] dark:text-white">AI Agents &amp; RAG <span className="text-[#d1383d] dark:text-[#ff595e]">you can trust.</span></h3>
                </div>

                <p className="mt-3 text-[13.5px] font-semibold text-[#d1383d] dark:text-[#ff595e]">For teams who&apos;ve seen a great demo and don&apos;t trust it in production.</p>

                <p className="mt-3 text-[14px] leading-relaxed text-[#5c554e] dark:text-zinc-400">
                  Retrieval and agents with evals from day one, so you know what they get wrong before your users do, and can prove it to whoever asks.
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-[#e9e6df] dark:border-white/10 pt-4 text-xs text-[#5c554e] dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#ff595e] text-white">✓</span>
                    <span>Your assistant is confidently wrong and nobody knows how often</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#ff595e] text-white">✓</span>
                    <span>You have documents nobody can actually find answers in</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full text-[9px] font-bold bg-[#ff595e] text-white">✓</span>
                    <span>Someone asked &quot;how do we know it won&apos;t say that again?&quot;</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5 text-[10.5px] font-mono">
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">RAG over your docs</span>
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Tool-calling agents</span>
                  <span className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 text-[#5c554e] dark:text-zinc-300 border border-[#e9e6df] dark:border-white/10">Eval suites</span>
                </div>

                <a href="#contact" className="mt-6 w-full rounded-full bg-[#ff595e] hover:bg-[#e04449] py-3 text-center text-[13.5px] font-bold text-white transition shadow-sm block">
                  Discuss Architecture
                </a>

              </article>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
