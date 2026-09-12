import React from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SelectedWork() {
  const projects = [
    {
      num: '01',
      urlDisplay: 'commercial.ecom.almeera.com.qa',
      title: 'Commercial Retail Portal',
      link: 'https://commercial.ecom.almeera.com.qa/',
      img: `${basePath}/assets/work_commercial_portal.webp`,
      alt: 'Commercial Portal Dashboard - Enterprise Retail OS by Fahad Khan',
      desc: 'Commercial hypermarket management portal. Real-time order management, multi-branch fulfillment metrics, sales telemetry, and catalog orchestration.',
      tags: [
        { name: 'Retail OS', color: 'bg-[#ffeef0] text-[#ff595e] font-semibold' },
        { name: 'Operations', color: 'bg-[#e5f4ff] text-[#0d99ff]' },
        { name: 'Enterprise', color: 'bg-[#f3e8ff] text-[#6a4c93]' },
      ],
    },
    {
      num: '02',
      urlDisplay: 'almeera.com.qa (Wafa Loyalty)',
      title: 'Wafa Loyalty Program',
      link: 'https://portal.loyalty.preprod.retailos.cowlar.com/',
      img: `${basePath}/assets/work_loyalty.webp`,
      alt: 'Wafa Loyalty Platform - High-Concurrency Rewards by Fahad Khan',
      desc: 'Customer loyalty and rewards engine. Features multi-tier points accumulation, personalized offers, and instant barcode redemption at in-store checkout counters.',
      tags: [
        { name: 'POS Integration', color: 'bg-[#ecfdf5] text-[#10b981] font-semibold' },
        { name: 'Gamification', color: 'bg-[#eff6ff] text-[#2563eb]' },
        { name: 'Fastify', color: 'bg-[#fffbeb] text-[#d97706]' },
      ],
    },
    {
      num: '03',
      urlDisplay: 'vupop.io',
      title: 'Vupop Sports Marketplace',
      link: 'https://vupop.io/',
      img: `${basePath}/assets/work_vupop.webp`,
      alt: 'Vupop Sports Marketplace - Real-Time Video Streaming by Fahad Khan',
      desc: 'Sports video footage broadcasting marketplace. Engineered a custom monetization engine letting media companies purchase and export user-generated clips per second.',
      tags: [
        { name: 'Video Streaming', color: 'bg-[#f3e8ff] text-[#6a4c93] font-semibold' },
        { name: 'Micro-Billing', color: 'bg-[#eff6ff] text-[#2563eb]' },
        { name: 'Sports Tech', color: 'bg-[#ffeef0] text-[#ff595e]' },
      ],
    },
    {
      num: '04',
      urlDisplay: 'pilot.aqarat.cowlar.com',
      title: 'Aqarat PropTech Pilot',
      link: 'https://pilot.aqarat.cowlar.com/',
      img: `${basePath}/assets/work_aqarat.webp`,
      alt: 'Aqarat PropTech Pilot Dashboard - Real Estate Automation by Fahad Khan',
      desc: "Real estate regulatory intelligence and market telemetry platform for Qatar's regulatory authority. Consolidated executive dashboards monitoring sales KPIs, rental contracts, mortgages, and municipal market metrics.",
      tags: [
        { name: 'PropTech', color: 'bg-[#e0f2fe] text-[#0369a1] font-semibold' },
        { name: 'Market Intelligence', color: 'bg-[#f1f5f9] text-[#475569]' },
        { name: 'React / Node', color: 'bg-[#fdf2f8] text-[#db2777]' },
      ],
    },
    {
      num: '05',
      urlDisplay: 'boxtech.ai',
      title: 'Boxtech AI Platform',
      link: 'https://boxtech.ai/',
      img: `${basePath}/assets/work_boxtech.webp`,
      alt: 'Boxtech B2B Operations Suite - Multi-Tenant Logistics by Fahad Khan',
      desc: 'Smart mobility, smart city, and IoT hardware telemetry suite. Powering possibilities through IoT with high-throughput device communication, sensor streaming, and fleet telemetry.',
      tags: [
        { name: 'IoT Software', color: 'bg-[#f0f9ff] text-[#0284c7] font-semibold' },
        { name: 'Smart Mobility', color: 'bg-[#ecfdf5] text-[#059669]' },
        { name: 'Hardware Telemetry', color: 'bg-[#fef2f2] text-[#dc2626]' },
      ],
    },
    {
      num: '06',
      urlDisplay: 'www.traccar.org',
      title: 'Traccar Fleet Core',
      link: 'https://www.traccar.org/',
      img: `${basePath}/assets/work_traccar.webp`,
      alt: 'Traccar GPS Fleet Engine - Real-Time Kinematics and IoT Telemetry by Fahad Khan',
      desc: 'Real-time high-throughput GPS fleet tracking engine. Ingests live TCP/UDP telemetry streams with sub-second polygon geofencing alerts, geospatial event indexing, and live vehicle kinematics.',
      tags: [
        { name: 'Geofencing', color: 'bg-[#fff1f2] text-[#e11d48] font-semibold' },
        { name: 'TCP / UDP Core', color: 'bg-[#f8fafc] text-[#334155]' },
        { name: 'GPS Telemetry', color: 'bg-[#eff6ff] text-[#2563eb]' },
      ],
    },
  ];

  return (
    <section id="work" className="relative pt-20 pb-24 px-4 sm:px-8 border-t border-[#e9e6df]/80">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <p className="hand text-[20px] text-[#ff595e] mb-1">things I’ve shipped</p>
        <h2 className="font-poster text-[clamp(44px,7vw,82px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white">
          THE WORK
        </h2>

        <div className="mt-5 flex justify-center">
          <p className="rotate-[-1.2deg] rounded-md bg-[#FFF1CC] dark:bg-amber-950/60 border border-transparent dark:border-amber-800/40 px-5 py-2.5 text-center text-[14px] font-medium text-[#16110e] dark:text-amber-200 shadow-[0_8px_20px_-10px_rgba(20,19,16,0.15)] border border-[#f3e3ad]">
            Shipped under my technical execution: real users, live hardware, and production scale.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.num}
            className="group relative rounded-2xl bg-white dark:bg-[#12161f] border border-[#e9e6df] dark:border-white/10 p-3 shadow-sm hover:shadow-[0_25px_60px_-20px_rgba(20,19,16,0.18)] dark:hover:border-[#0d99ff]/50 transition-all duration-300 flex flex-col"
          >
            <div className="overflow-hidden rounded-xl border border-[#e9e6df] bg-[#f7f6f1]">
              <div className="flex items-center gap-2 border-b border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#181d28] px-3 py-2 text-[10px] font-mono">
                <span className="flex items-center gap-1">
                  <i className="size-2 rounded-full bg-[#ff595e]"></i>
                  <i className="size-2 rounded-full bg-[#ffca3a]"></i>
                  <i className="size-2 rounded-full bg-[#8ac926]"></i>
                </span>
                <span className="flex min-w-0 flex-1 items-center gap-1 rounded bg-[#f7f6f1] dark:bg-[#12161f] px-2 py-0.5 text-[#5c554e] dark:text-zinc-300 truncate">
                  <span className="text-[#10b981]">🔒</span> {p.urlDisplay}
                </span>
                <span className="rounded bg-[#16110e] px-1.5 py-0.5 text-[9px] font-bold text-white">{p.num}</span>
              </div>

              <div className="aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="p-3 pt-4 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="font-bold text-lg text-[#16110e] dark:text-white">{p.title}</h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-[#16110e] dark:bg-white px-3 py-1 text-xs font-semibold text-white dark:text-[#16110e] hover:bg-[#ff595e] dark:hover:bg-[#ff595e] dark:hover:text-white transition"
                >
                  Visit Site
                </a>
              </div>
              <p className="text-xs text-[#5c554e] dark:text-zinc-400 leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5 text-[10.5px] font-mono">
                {p.tags.map((t) => (
                  <span key={t.name} className={`rounded-full px-2 py-0.5 ${t.color}`}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
