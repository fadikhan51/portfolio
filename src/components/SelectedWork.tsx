'use client';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface Project {
  num: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  tech: string[];
}

const projects: Project[] = [
  {
    num: '01',
    tag: 'HIGH CONCURRENCY',
    title: 'Al Meera Commercial E-Com',
    category: 'Order Routing & Catalog Engine',
    description:
      'Enterprise B2B e-commerce platform with automated multi-warehouse routing, ERP inventory sync, and sub-100ms SKU queries.',
    image: `${basePath}/assets/work_commercial_portal.webp`,
    url: 'https://commercial.ecom.almeera.com.qa/',
    tech: ['Next.js', 'Fastify', 'ERP Sync', 'Redis'],
  },
  {
    num: '02',
    tag: 'REAL-TIME',
    title: 'Retail OS Loyalty Portal',
    category: 'Multi-Tenant POS Rewards Core',
    description:
      'Real-time customer rewards engine integrated into supermarket POS checkout counters with millisecond balance recalculation.',
    image: `${basePath}/assets/work_loyalty.webp`,
    url: 'https://portal.loyalty.preprod.retailos.cowlar.com/',
    tech: ['TypeScript', 'Fastify', 'Redis', 'Event Stream'],
  },
  {
    num: '03',
    tag: 'GEOSPATIAL SEARCH',
    title: 'Aqarat Property Search Engine',
    category: 'Geo-Spatial Listings Platform',
    description:
      'Geospatial real estate discovery engine with polygonal boundary filtering and sub-50ms elastic search index.',
    image: `${basePath}/assets/work_aqarat.webp`,
    url: 'https://aqarat.qa/',
    tech: ['Next.js', 'Geospatial', 'Python', 'Elastic'],
  },
  {
    num: '04',
    tag: 'EVENT LOCKS',
    title: 'Vupop Sports Marketplace',
    category: 'Live Booking & Venue Infrastructure',
    description:
      'Sports court booking platform with distributed double-booking locks and dynamic peak-hour court pricing.',
    image: `${basePath}/assets/work_vupop.webp`,
    url: 'https://vupop.com/',
    tech: ['Next.js', 'Redis Locks', 'WebSockets', 'Postgres'],
  },
  {
    num: '05',
    tag: '100K+ EVENTS/SEC',
    title: 'Telematics Core & Boxtech Cloud',
    category: 'High-Throughput Sensor Ingest',
    description:
      'Real-time kinematics platform processing 100k+ GPS and accelerometer packets per second with sub-50ms latency.',
    image: `${basePath}/assets/work_boxtech.webp`,
    url: 'https://boxtech.com/',
    tech: ['Python', 'Fastify', 'Kafka / Redis', 'Telemetry'],
  },
  {
    num: '06',
    tag: 'INDUSTRIAL IOT',
    title: 'Traccar Fleet OS Custom Engine',
    category: 'Industrial IoT Vehicle Tracker',
    description:
      'Hardened distributed fleet monitoring engine with geo-fencing alerts, TCP protocol decoding, and offline sync.',
    image: `${basePath}/assets/work_traccar.webp`,
    url: 'https://traccar.org/',
    tech: ['Java / Spring', 'Protocol Decoders', 'TimeSeries DB', 'Maps'],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-4 sm:px-8 border-t border-[#e9e6df]/80 dark:border-white/10">
      <div className="mx-auto max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="hand text-[20px] text-[#ff595e]">proof of execution</p>
            <h2 className="font-poster text-[clamp(40px,6.5vw,78px)] uppercase tracking-[-0.01em] text-[#16110e] dark:text-white mt-1">
              THE WORK
            </h2>
          </div>
          {/* Rotated sticky note */}
          <div className="inline-block self-start md:self-end rotate-[-3deg] rounded-xl bg-[#ffca3a] px-5 py-3 text-xs font-bold text-[#16110e] shadow-md">
            6 enterprise & startup systems shipped to live users.
          </div>
        </div>

        {/* Project cards grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.num}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border border-[#e9e6df] dark:border-white/10 bg-white dark:bg-[#12161f] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Browser window chrome */}
              <div className="flex items-center justify-between border-b border-[#e9e6df] dark:border-white/10 px-5 py-3 bg-[#f7f6f1] dark:bg-[#181d28]/80 text-xs font-mono text-[#9c958d]">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-[#ff595e]" />
                  <span className="size-2.5 rounded-full bg-[#ffca3a]" />
                  <span className="size-2.5 rounded-full bg-[#10b981]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-[#ff595e] tracking-wider">
                    {p.tag}
                  </span>
                  <span>·</span>
                  <span>SYS.{p.num}</span>
                </div>
              </div>

              {/* Card image container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={500}
                />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#ff595e]">
                        {p.category}
                      </span>
                      <h3 className="mt-1 text-[22px] sm:text-[26px] font-bold text-[#16110e] dark:text-white leading-tight">
                        {p.title}
                      </h3>
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-full border border-[#e9e6df] dark:border-white/15 px-4 py-1.5 font-mono text-xs font-medium text-[#16110e] dark:text-white hover:bg-[#ff595e] hover:text-white hover:border-[#ff595e] transition shadow-sm"
                    >
                      Visit Site
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#5c554e] dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>

                {/* Tech chips */}
                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[#e9e6df]/80 dark:border-white/10 font-mono text-[11px] text-[#5c554e] dark:text-zinc-400">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[#f7f6f1] dark:bg-[#181d28] px-2.5 py-1 border border-[#e9e6df] dark:border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}