'use client';

interface ServiceCard {
  title: string;
  tag: string;
  filename: string;
  code: string;
  highlight?: boolean;
  tilt: string;
  color: string;
  description: string;
  features: string[];
  cta: string;
}

const services: ServiceCard[] = [
  {
    title: 'High-Concurrency E-Com & Retail Backends',
    tag: '1-3 WEEKS · FIXED SPRINT',
    filename: 'retail_order_router.ts',
    code: `export async function routeOrder(order: OrderPayload) {
  const lockKey = \`lock:stock:\${order.sku}\`;
  const acquired = await redis.set(lockKey, 'locked', 'NX', 'EX', 5);
  if (!acquired) throw new Error('CONCURRENCY_COLLISION');
  return await erpClient.commitBatch([order]);
}`,
    tilt: 'xl:-rotate-[4deg] xl:translate-y-5 xl:origin-bottom-right',
    color: '#ffca3a',
    description:
      'For founders & teams dealing with order spikes, double-booking race conditions, or slow ERP sync.',
    features: [
      'Multi-warehouse order routing',
      'Concurrency locks (Redis/Postgres)',
      'Automated ERP & inventory sync',
      'Sub-100ms API response times',
    ],
    cta: 'Discuss Architecture',
  },
  {
    title: 'IoT Kinematics & Sensor Streaming',
    tag: '2-4 WEEKS · HARDENED',
    filename: 'telemetry_ingest.py',
    code: `@app.post("/api/v1/telemetry/ingest")
async def ingest_packet(packet: SensorPacket):
    raw = await redis.xadd("stream:kinematics", packet.dict())
    await broadcast_ws(packet.device_id, raw)
    return {"status": "pipelined", "latency_ms": 1.2}`,
    highlight: true,
    tilt: 'xl:z-20 xl:-translate-y-2',
    color: '#ff595e',
    description:
      'For companies connecting hardware sensors, vehicle trackers, or sports tracking devices to live cloud telemetry.',
    features: [
      '100k+ events/sec streaming pipelines',
      'Protocol decoders (TCP, UDP, MQTT)',
      'Sub-50ms WebSocket live broadcast',
      'TimeSeries archival & aggregation',
    ],
    cta: 'Build Ingest Pipeline',
  },
  {
    title: 'Distributed Architecture & In-Memory Systems',
    tag: '1-2 WEEKS · AUDIT & BUILD',
    filename: 'cluster_cache.ts',
    code: `export class InvalidationBus {
  static async invalidateTag(tag: string) {
    await redis.publish('cache:invalidate', tag);
    metrics.increment('cache.bust.count');
  }
}`,
    tilt: 'xl:rotate-[4deg] xl:translate-y-5 xl:origin-bottom-left',
    color: '#0d99ff',
    description:
      'For platforms whose database is melting under peak read loads or struggling with distributed state across nodes.',
    features: [
      'Read-replica & cache architecture',
      'Event-driven Pub/Sub pipelines',
      'Zero-downtime database migrations',
      'Fault-tolerant retry mechanisms',
    ],
    cta: 'Scale Distributed Core',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-4 py-20 sm:px-8 sm:py-28 border-t border-[#e9e6df]/80 dark:border-white/10 bg-white/40 dark:bg-transparent overflow-hidden"
    >
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
          <span className="absolute -top-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="absolute -top-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="absolute -bottom-1.5 -right-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="absolute -bottom-1.5 -left-1.5 size-3 rounded-[2px] border-2 border-[#0d99ff] bg-white dark:bg-[#12161f]" />

          <div className="flex flex-col items-stretch gap-6 xl:flex-row xl:items-start xl:justify-center xl:gap-0 pt-6">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className={`group relative z-10 hover:z-30 xl:w-[33%] ${s.tilt} transition-all duration-500`}
              >
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-[24px] border ${
                    s.highlight
                      ? 'border-[#ff595e] shadow-[0_20px_50px_-20px_rgba(255,89,94,0.35)]'
                      : 'border-[#e9e6df] dark:border-white/10'
                  } bg-white dark:bg-[#12161f] p-5 sm:p-6 shadow-[0_12px_35px_-15px_rgba(20,19,16,0.1)] transition-all duration-500 group-hover:-translate-y-3 group-hover:rotate-0 group-hover:scale-[1.04]`}
                >
                  {s.highlight && (
                    <div className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full bg-[#ff595e] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      <span className="size-1.5 rounded-full bg-white animate-ping" />
                      MOST POPULAR
                    </div>
                  )}

                  {/* Code preview frame */}
                  <div className="rounded-xl overflow-hidden bg-[#0c1017] border border-white/10 mb-6">
                    <div className="flex items-center justify-between px-3 py-2 bg-white/5 border-b border-white/10 text-[10px] font-mono text-slate-400">
                      <span>{s.filename}</span>
                      <span className="text-emerald-400">● staged</span>
                    </div>
                    <pre className="p-3 text-[11px] font-mono text-slate-300 overflow-x-auto leading-relaxed">
                      <code>{s.code}</code>
                    </pre>
                  </div>

                  <span className="font-mono text-xs font-bold text-[#ff595e] uppercase tracking-wider">
                    {s.tag}
                  </span>
                  <h3 className="mt-2 text-[22px] sm:text-[24px] font-bold text-[#16110e] dark:text-white leading-tight">
                    {s.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#5c554e] dark:text-zinc-300 leading-relaxed">
                    {s.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-xs text-[#16110e] dark:text-zinc-300 font-medium border-t border-[#e9e6df] dark:border-white/10 pt-4">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2">
                        <span className="text-[#10b981] font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="mt-8 block w-full text-center rounded-xl bg-[#16110e] dark:bg-white text-white dark:text-[#16110e] py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#ff595e] dark:hover:bg-[#ff595e] dark:hover:text-white transition shadow"
                  >
                    {s.cta}
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}