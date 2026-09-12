'use client';

import { useEffect, useRef } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const textHeading = textRef.current;
    if (!container || !canvas || !textHeading) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const letterPalette = [
      '#ff595e', '#0d99ff', '#8ac926', '#7b2cbf', '#ff924c', '#ffca3a', '#ff4d8d', '#06d6a0',
      '#1982c4', '#f72585', '#48bfe3', '#e76f51', '#9d4edd', '#ff595e', '#0d99ff', '#8ac926',
      '#7b2cbf', '#ff924c', '#ffca3a', '#ff4d8d',
    ];

    let width = 0;
    let height = 0;
    let particles: Array<{
      x: number;
      y: number;
      origX: number;
      origY: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const mouse = { x: -9999, y: -9999, radius: 85 };
    let animationFrameId: number;

    const sampleParticles = () => {
      particles = [];
      const rect = container.getBoundingClientRect();
      width = canvas.width = rect.width;
      height = canvas.height = rect.height;

      const offCanvas = document.createElement('canvas');
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return;

      offCanvas.width = width;
      offCanvas.height = height;

      const style = window.getComputedStyle(textHeading);
      const fontSize = parseFloat(style.fontSize);
      const fontStr = `900 ${fontSize}px Anton, sans-serif`;

      offCtx.font = fontStr;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';

      const lines = ['THINK IT.', 'I\'LL BUILD IT.'];
      const lineHeight = fontSize * 0.88;
      const startY = height / 2 - lineHeight / 2;

      lines.forEach((line, lIdx) => {
        const y = startY + lIdx * lineHeight;
        const totalW = offCtx.measureText(line).width;
        let curX = width / 2 - totalW / 2;

        for (let c = 0; c < line.length; c++) {
          const char = line[c];
          const charW = offCtx.measureText(char).width;
          const charCenterX = curX + charW / 2;
          const color = letterPalette[(lIdx * 8 + c) % letterPalette.length];

          offCtx.fillStyle = color;
          offCtx.fillText(char, charCenterX, y);

          const step = width < 640 ? 6 : 7;
          const imgData = offCtx.getImageData(
            Math.floor(curX),
            Math.floor(y - lineHeight / 2),
            Math.ceil(charW),
            Math.ceil(lineHeight)
          );

          for (let py = 0; py < imgData.height; py += step) {
            for (let px = 0; px < imgData.width; px += step) {
              const alpha = imgData.data[(py * imgData.width + px) * 4 + 3];
              if (alpha > 128) {
                const ptX = curX + px;
                const ptY = y - lineHeight / 2 + py;
                particles.push({
                  x: ptX + (Math.random() - 0.5) * 6,
                  y: ptY + (Math.random() - 0.5) * 6,
                  origX: ptX,
                  origY: ptY,
                  vx: (Math.random() - 0.5) * 0.5,
                  vy: (Math.random() - 0.5) * 0.5,
                  radius: width < 640 ? 1.8 : 2.4,
                  color: color,
                });
              }
            }
          }

          offCtx.clearRect(0, 0, width, height);
          curX += charW;
        }
      });

      textHeading.style.opacity = '0';
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - dist) / mouse.radius;
          const repulsion = force * 9;
          p.vx -= Math.cos(angle) * repulsion;
          p.vy -= Math.sin(angle) * repulsion;
        }

        const hx = p.origX - p.x;
        const hy = p.origY - p.y;
        p.vx += hx * 0.08;
        p.vy += hy * 0.08;

        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if ('touches' in e && e.touches.length > 0) {
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
      } else if ('clientX' in e) {
        mouse.x = (e as MouseEvent).clientX - rect.left;
        mouse.y = (e as MouseEvent).clientY - rect.top;
      }
    };

    const handlePointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    window.addEventListener('resize', sampleParticles);
    container.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    container.addEventListener('touchmove', handlePointerMove, { passive: true });
    container.addEventListener('touchend', handlePointerLeave);

    document.fonts.ready.then(() => {
      sampleParticles();
      animate();
    });

    return () => {
      window.removeEventListener('resize', sampleParticles);
      container.removeEventListener('mousemove', handlePointerMove);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('touchmove', handlePointerMove);
      container.removeEventListener('touchend', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col items-center justify-center px-4 pb-14 pt-32 sm:px-6"
    >
      <div className="my-auto flex w-full flex-col items-center">
        {/* Floating badge pill */}
        <div className="relative mb-8 sm:mb-10 group">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2.5 border border-dashed border-[#0d99ff]/50 rounded-[8px]"
          />
          <span className="pointer-events-none absolute -left-1.5 -top-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="pointer-events-none absolute -right-1.5 -top-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="pointer-events-none absolute -left-1.5 -bottom-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]" />
          <span className="font-mono text-[10px] pointer-events-none absolute -top-6 left-0 inline-flex items-center gap-1 rounded bg-[#0d99ff] px-1.5 py-0.5 text-white uppercase tracking-wider">
            badge
          </span>

          <div className="flex items-center gap-3 rounded-[6px] bg-white/90 dark:bg-[#12161f]/95 px-4 py-2 text-[14px] border border-[#e9e6df] dark:border-white/15 shadow-sm backdrop-blur">
            <div className="size-6 rounded-full overflow-hidden border border-[#e9e6df] dark:border-white/20">
              <img
                src={`${basePath}/assets/fahad_profile.webp`}
                alt="Fahad Khan - Full-Stack Systems Engineer"
                className="w-full h-full object-cover"
                width={400}
                height={500}
                loading="eager"
              />
            </div>
            <span className="text-[#5c554e] dark:text-zinc-100 font-medium">
              Full-Stack Software Engineer · High-Concurrency Systems
            </span>
          </div>
        </div>

        {/* Hero Interactive Title Container */}
        <div
          id="hero-title-container"
          ref={containerRef}
          className="relative w-full text-center max-w-[1400px] h-[clamp(10rem,30vw,30rem)] flex items-center justify-center cursor-crosshair select-none"
        >
          <h1
            id="hero-text"
            ref={textRef}
            className="font-poster uppercase text-[clamp(3.8rem,14.5vw,13rem)] leading-[0.88] tracking-[-0.01em] text-[#16110e] dark:text-white select-none transition-opacity duration-500"
          >
            <span className="block">
              <span style={{ color: '#ff595e' }}>T</span>
              <span style={{ color: '#0d99ff' }}>H</span>
              <span style={{ color: '#8ac926' }}>I</span>
              <span style={{ color: '#7b2cbf' }}>N</span>
              <span style={{ color: '#ff924c' }}>K</span> <span style={{ color: '#ffca3a' }}>I</span>
              <span style={{ color: '#ff4d8d' }}>T</span>
              <span style={{ color: '#06d6a0' }}>.</span>
            </span>
            <span className="block">
              <span style={{ color: '#1982c4' }}>I</span>
              <span style={{ color: '#f72585' }}>'</span>
              <span style={{ color: '#48bfe3' }}>L</span>
              <span style={{ color: '#e76f51' }}>L</span> <span style={{ color: '#9d4edd' }}>B</span>
              <span style={{ color: '#ff595e' }}>U</span>
              <span style={{ color: '#0d99ff' }}>I</span>
              <span style={{ color: '#8ac926' }}>L</span>
              <span style={{ color: '#7b2cbf' }}>D</span> <span style={{ color: '#ff924c' }}>I</span>
              <span style={{ color: '#ffca3a' }}>T</span>
              <span style={{ color: '#ff4d8d' }}>.</span>
            </span>
          </h1>

          <canvas
            id="hero-canvas"
            ref={canvasRef}
            className="absolute inset-0 size-full z-10 touch-none"
          />

          {/* Collaborative Cursor */}
          <div className="pointer-events-none absolute left-[62%] top-[45%] hidden sm:flex items-start z-20">
            <svg
              className="size-5 drop-shadow text-[#0d99ff]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
            </svg>
            <span className="rounded-full bg-[#0d99ff] px-2.5 py-0.5 font-mono text-[11px] font-bold text-white shadow">
              You (Figma)
            </span>
          </div>
        </div>

        {/* Hero description & CTAs */}
        <div className="relative mt-8 sm:mt-12 max-w-2xl text-center px-4">
          <p className="text-center text-[15.5px] sm:text-[18px] leading-relaxed text-[#5c554e] dark:text-zinc-300 bg-white/85 dark:bg-[#12161f]/90 p-5 sm:p-6 rounded-2xl border border-[#e9e6df] dark:border-white/10 shadow-sm backdrop-blur-sm max-w-3xl mx-auto">
            I engineer resilient backend architectures, hardware-to-cloud telemetry pipelines (100k+ events/sec), and real-time distributed platforms that never break during traffic surges.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-[#16110e] dark:bg-white px-7 py-3.5 text-[14.5px] font-bold text-white dark:text-[#16110e] hover:bg-[#ff595e] dark:hover:bg-[#ff595e] dark:hover:text-white transition-all shadow-md"
            >
              <span>See Shipped Systems</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#e9e6df] dark:border-white/15 bg-white dark:bg-[#12161f] px-7 py-3.5 text-[14.5px] font-bold text-[#16110e] dark:text-white hover:border-[#ff595e] transition-all shadow-sm"
            >
              <span>Start a Conversation</span>
            </a>
          </div>

          {/* Shipped note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-[#9c958d]">
            <span className="size-2 rounded-full bg-[#10b981]"></span>
            <span>4 PRODUCTION PLATFORMS ACTIVE NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
}