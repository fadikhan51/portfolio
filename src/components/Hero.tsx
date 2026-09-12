'use client';

import React, { useEffect, useRef } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const textHeading = textRef.current;
    if (!container || !canvas || !textHeading) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const lines = ['THINK IT.', "I'LL BUILD IT."];
    const letterPalette = [
      '#ff595e', '#0d99ff', '#8ac926', '#7b2cbf', '#ff924c', '#ffca3a', '#ff4d8d', '#06d6a0',
      '#1982c4', '#f72585', '#48bfe3', '#e76f51', '#9d4edd', '#ff595e', '#0d99ff', '#8ac926',
      '#7b2cbf', '#ff924c', '#ffca3a', '#ff4d8d'
    ];

    let width = 0;
    let height = 0;
    let particles: Array<{
      x: number;
      y: number;
      tx: number;
      ty: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];
    let animId: number | null = null;
    const mouse = { x: -9999, y: -9999 };

    function resize() {
      if (!container || !canvas || !ctx) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function sampleText() {
      if (!textHeading) return false;
      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext('2d');
      if (!offCtx) return false;

      offCtx.font = '900 100px Anton, sans-serif';
      let maxLineWidth = 1;
      for (const line of lines) {
        maxLineWidth = Math.max(maxLineWidth, offCtx.measureText(line).width);
      }

      const widthBound = ((width * 0.95) / maxLineWidth) * 100;
      const heightBound = height / (lines.length * 0.86 + 0.12);
      const fontSize = Math.floor(Math.min(widthBound, heightBound));

      offCtx.font = '900 ' + fontSize + 'px Anton, sans-serif';
      offCtx.textBaseline = 'alphabetic';
      offCtx.textAlign = 'left';

      const lineHeight = fontSize * 0.88;
      const totalBlockHeight = (lines.length - 1) * lineHeight + fontSize * 0.76;
      const startY = (height - totalBlockHeight) / 2 + fontSize * 0.74;

      const newParticles: typeof particles = [];
      const step = Math.max(3.2, Math.min(4.6, fontSize / 34));
      const ballRadius = Math.max(2.1, Math.min(3.2, fontSize / 48));

      let globalCharIdx = 0;

      lines.forEach((line, lineIdx) => {
        const lineY = startY + lineIdx * lineHeight;
        const lineWidth = offCtx.measureText(line).width;
        const lineX = (width - lineWidth) / 2;

        for (let c = 0; c < line.length; c++) {
          const char = line[c];
          if (char === ' ') continue;

          const charColor = letterPalette[globalCharIdx % letterPalette.length];
          globalCharIdx++;

          const charX = lineX + offCtx.measureText(line.slice(0, c)).width;
          const charMetrics = offCtx.measureText(char);
          const charWidth = charMetrics.width;

          offCtx.clearRect(0, 0, width, height);
          offCtx.fillStyle = '#000000';
          offCtx.fillText(char, charX, lineY);

          const minX = Math.max(0, Math.floor(charX - 2));
          const maxX = Math.min(width, Math.ceil(charX + charWidth + 2));
          const minY = Math.max(0, Math.floor(lineY - fontSize * 0.86));
          const maxY = Math.min(height, Math.ceil(lineY + fontSize * 0.26));
          const scanW = maxX - minX;

          if (scanW > 0 && maxY > minY) {
            const imgData = offCtx.getImageData(minX, minY, scanW, maxY - minY).data;

            for (let py = minY; py < maxY; py += step) {
              for (let px = minX; px < maxX; px += step) {
                const subX = Math.floor(px - minX);
                const subY = Math.floor(py - minY);
                const idx = (subY * scanW + subX) * 4;
                const alpha = imgData[idx + 3];

                if (alpha > 85) {
                  newParticles.push({
                    x: px + (Math.random() - 0.5) * 22,
                    y: py + (Math.random() - 0.5) * 22,
                    tx: px,
                    ty: py,
                    vx: 0,
                    vy: 0,
                    radius: ballRadius,
                    color: charColor,
                  });
                }
              }
            }
          }
        }
      });

      if (newParticles.length < 50) return false;
      particles = newParticles;
      textHeading.style.opacity = '0';
      return true;
    }

    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const repelRadius = 105;
      const repelRadiusSq = repelRadius * repelRadius;
      const spring = 0.025;
      const damping = 0.87;
      const gravity = 0.12;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSq = dx * dx + dy * dy;

        if (distSq < repelRadiusSq && distSq > 0) {
          const dist = Math.sqrt(distSq);
          const force = ((repelRadius - dist) / repelRadius) * 5.4;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
          p.vy += gravity * 2.2;
        }

        const fx = (p.tx - p.x) * spring;
        const fy = (p.ty - p.y) * spring;

        p.vx = (p.vx + fx) * damping;
        p.vy = (p.vy + fy) * damping;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(loop);
    }

    function updateMousePos(clientX: number, clientY: number) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
    }

    function resetMousePos() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    const onPointerMove = (e: PointerEvent) => updateMousePos(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        updateMousePos(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', resetMousePos);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', resetMousePos, { passive: true });

    let resizeTimer: NodeJS.Timeout;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        resize();
        sampleText();
      }, 120);
    };
    window.addEventListener('resize', onResize);

    Promise.all([
      document.fonts.ready,
      document.fonts.load('900 100px Anton').catch(() => true),
    ]).then(() => {
      resize();
      if (sampleText()) {
        loop();
      }
    });

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      if (canvas) {
        canvas.removeEventListener('pointermove', onPointerMove);
        canvas.removeEventListener('pointerleave', resetMousePos);
        canvas.removeEventListener('touchmove', onTouchMove);
        canvas.removeEventListener('touchend', resetMousePos);
      }
    };
  }, []);

  return (
    <section id="hero" className="relative flex min-h-[92svh] flex-col items-center justify-center px-4 pb-14 pt-32 sm:px-6">
      <div className="my-auto flex w-full flex-col items-center">
        
        <div className="relative mb-8 sm:mb-10 group">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-2.5 border border-dashed border-[#0d99ff]/50 rounded-[8px]"></span>
          <span className="pointer-events-none absolute -left-1.5 -top-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="pointer-events-none absolute -right-1.5 -top-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="pointer-events-none absolute -left-1.5 -bottom-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white dark:bg-[#12161f]"></span>
          <span className="font-mono text-[10px] pointer-events-none absolute -top-6 left-0 inline-flex items-center gap-1 rounded bg-[#0d99ff] px-1.5 py-0.5 text-white uppercase tracking-wider">badge</span>
          
          <div className="flex items-center gap-3 rounded-[6px] bg-white/90 dark:bg-[#12161f]/95 px-4 py-2 text-[14px] border border-[#e9e6df] dark:border-white/15 shadow-sm backdrop-blur">
            <div className="size-6 rounded-full overflow-hidden border border-[#e9e6df] dark:border-white/20">
              <img src={`${basePath}/assets/fahad_profile.webp`} alt="Fahad Khan - Full-Stack Systems Engineer" className="w-full h-full object-cover" width="400" height="500" loading="eager" />
            </div>
            <span className="text-[#5c554e] dark:text-zinc-100 font-medium">Full-Stack Software Engineer · High-Concurrency Systems</span>
          </div>
        </div>

        <div id="hero-title-container" ref={containerRef} className="relative w-full text-center max-w-[1400px] h-[clamp(10rem,30vw,30rem)] flex items-center justify-center cursor-crosshair select-none">
          <h1 id="hero-text" ref={textRef} className="font-poster uppercase text-[clamp(3.8rem,14.5vw,13rem)] leading-[0.88] tracking-[-0.01em] text-[#16110e] dark:text-white select-none transition-opacity duration-500">
            <span className="block">
              <span style={{ color: '#ff595e' }}>T</span><span style={{ color: '#0d99ff' }}>H</span><span style={{ color: '#8ac926' }}>I</span><span style={{ color: '#7b2cbf' }}>N</span><span style={{ color: '#ff924c' }}>K</span> <span style={{ color: '#ffca3a' }}>I</span><span style={{ color: '#ff4d8d' }}>T</span><span style={{ color: '#06d6a0' }}>.</span>
            </span>
            <span className="block">
              <span style={{ color: '#1982c4' }}>I</span><span style={{ color: '#f72585' }}>'</span><span style={{ color: '#48bfe3' }}>L</span><span style={{ color: '#e76f51' }}>L</span> <span style={{ color: '#9d4edd' }}>B</span><span style={{ color: '#ff595e' }}>U</span><span style={{ color: '#0d99ff' }}>I</span><span style={{ color: '#8ac926' }}>L</span><span style={{ color: '#7b2cbf' }}>D</span> <span style={{ color: '#ff924c' }}>I</span><span style={{ color: '#ffca3a' }}>T</span><span style={{ color: '#ff4d8d' }}>.</span>
            </span>
          </h1>

          <canvas id="hero-canvas" ref={canvasRef} className="absolute inset-0 size-full z-10 touch-none"></canvas>

          <div className="pointer-events-none absolute left-[62%] top-[45%] hidden sm:flex items-start z-20">
            <svg width="18" height="20" viewBox="0 0 16 18" fill="none">
              <path d="M1 1L14.5 7.5L8.5 9.5L6 16L1 1Z" fill="#0D99FF" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round"></path>
            </svg>
            <span className="font-mono text-[10px] -mt-1 ml-0.5 rounded-[4px] bg-[#0d99ff] px-1.5 py-0.5 text-white font-semibold shadow">You</span>
          </div>
        </div>

        <p className="hand mt-6 text-center text-[clamp(1.15rem,2.2vw,1.5rem)] text-[#ff595e]">
          You imagine. I engineer. ✦
        </p>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 font-semibold text-[12.5px] sm:text-[13px]">
          <li className="rounded-full bg-white dark:bg-[#12161f] px-3.5 py-1.5 border border-[#e9e6df] dark:border-white/10 shadow-sm text-[#ff595e]">Full-Stack Systems</li>
          <li className="rounded-full bg-white dark:bg-[#12161f] px-3.5 py-1.5 border border-[#e9e6df] dark:border-white/10 shadow-sm text-[#1982c4]">Retail OS & POS</li>
          <li className="rounded-full bg-white dark:bg-[#12161f] px-3.5 py-1.5 border border-[#e9e6df] dark:border-white/10 shadow-sm text-[#8ac926]">IoT Telemetry</li>
          <li className="rounded-full bg-white dark:bg-[#12161f] px-3.5 py-1.5 border border-[#e9e6df] dark:border-white/10 shadow-sm text-[#6a4c93]">Real-Time Event Streams</li>
          <li className="rounded-full bg-white dark:bg-[#12161f] px-3.5 py-1.5 border border-[#e9e6df] dark:border-white/10 shadow-sm text-[#c79a00]">Distributed Backends</li>
        </ul>

        <div className="relative mt-8 w-full max-w-2xl px-2">
          <span aria-hidden="true" className="pointer-events-none absolute -inset-2 border border-dashed border-[#0d99ff]/50 rounded-[8px]"></span>
          <span className="pointer-events-none absolute -left-1.5 -top-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white"></span>
          <span className="pointer-events-none absolute -right-1.5 -top-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white"></span>
          <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white"></span>
          <span className="pointer-events-none absolute -left-1.5 -bottom-1.5 size-2.5 rounded-[2px] border border-[#0d99ff] bg-white"></span>
          <span className="font-mono text-[10px] pointer-events-none absolute -top-5 left-0 inline-flex items-center gap-1 rounded bg-[#0d99ff] px-1.5 py-0.5 text-white uppercase tracking-wider">copy</span>

          <p className="text-center text-[15.5px] sm:text-[18px] leading-relaxed text-[#5c554e] dark:text-zinc-300 bg-white/85 dark:bg-[#12161f]/90 p-5 sm:p-6 rounded-2xl border border-[#e9e6df] dark:border-white/10 shadow-sm backdrop-blur-sm max-w-3xl mx-auto">
            I'm <strong className="text-[#16110e] dark:text-white font-bold">Fahad Khan</strong>, a full-stack software engineer. I build complete web platforms and the high-concurrency systems that run inside them - database to dashboard to the background pipelines doing the work - then harden the lot so it's still running long after the launch call.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-[#ff595e] px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#e04449] hover:shadow-[0_10px_25px_-8px_#ff595e]">
            See the work
          </a>
          <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-white dark:bg-[#181d28] px-7 py-3.5 text-[15px] font-semibold text-[#16110e] dark:text-white border border-[#e9e6df] dark:border-white/10 shadow-sm hover:text-[#ff595e] transition-colors">
            Capabilities
          </a>
        </div>

      </div>

      <div className="pointer-events-none absolute inset-x-4 bottom-4 hidden justify-between sm:flex sm:inset-x-8 font-mono text-[10px] text-[#9c958d]">
        <div>
          <div>FULL-STACK SOFTWARE ENGINEER</div>
          <div>REAL-TIME & DISTRIBUTED SYSTEMS</div>
        </div>
        <div className="text-right">
          <div>TELEMETRY · HIGH CONCURRENCY · SAAS</div>
          <div>TYPESCRIPT · PYTHON · FASTIFY · REDIS</div>
        </div>
      </div>
    </section>
  );
}
