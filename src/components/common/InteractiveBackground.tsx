import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  color: string;
  depth: number; // 0 = far, 1 = mid, 2 = near
}

interface DataStream {
  startY: number;
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
  color: string;
  packetProgress: number;
  label?: string;
}

interface FloatingSymbol {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  color: string;
}

export const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      'rgba(168, 85, 247, ', // electric purple
      'rgba(6, 182, 212, ',  // cyan
      'rgba(236, 72, 153, ', // pink
      'rgba(99, 102, 241, ', // indigo
      'rgba(56, 189, 248, ', // sky blue
    ];

    // Responsive particle count (optimized for buttery 60 FPS)
    const isMobile = width < 768;
    const particleCount = isMobile ? 32 : 58;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const depth = Math.random() > 0.65 ? 2 : Math.random() > 0.35 ? 1 : 0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (depth === 2 ? 0.6 : depth === 1 ? 0.35 : 0.18),
        vy: (Math.random() - 0.5) * (depth === 2 ? 0.6 : depth === 1 ? 0.35 : 0.18),
        size: depth === 2 ? Math.random() * 2.2 + 1.2 : depth === 1 ? Math.random() * 1.5 + 0.8 : Math.random() * 1 + 0.5,
        baseAlpha: depth === 2 ? Math.random() * 0.45 + 0.3 : depth === 1 ? Math.random() * 0.35 + 0.2 : 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth,
      });
    }

    // Animated curved data streams traveling across background
    const streamConfigs = [
      { startY: height * 0.22, amplitude: 35, frequency: 0.0018, speed: 0.015, color: 'rgba(6, 182, 212, 0.14)', label: 'CV' },
      { startY: height * 0.48, amplitude: 50, frequency: 0.0014, speed: 0.012, color: 'rgba(168, 85, 247, 0.12)', label: 'RAG' },
      { startY: height * 0.78, amplitude: 40, frequency: 0.002, speed: 0.018, color: 'rgba(236, 72, 153, 0.13)', label: 'AI/ML' },
    ];

    const dataStreams: DataStream[] = streamConfigs.map((cfg) => ({
      ...cfg,
      phase: Math.random() * Math.PI * 2,
      packetProgress: Math.random(),
    }));

    // Floating technical symbols: AI, ML, PY, DATA, RAG, CV, NLP
    const symbolPool = ['AI', 'ML', 'PY', 'DATA', 'RAG', 'CV', 'NLP'];
    const floatingSymbols: FloatingSymbol[] = [];
    const symbolCount = isMobile ? 3 : 7;

    for (let i = 0; i < symbolCount; i++) {
      floatingSymbols.push({
        text: symbolPool[i % symbolPool.length],
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -0.15 - Math.random() * 0.15, // gently floating upward
        alpha: Math.random() * 0.2 + 0.1,
        size: Math.floor(Math.random() * 3 + 10), // 10px to 13px
        color: colors[i % colors.length],
      });
    }

    const mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Curved Data Streams
      dataStreams.forEach((stream) => {
        stream.phase += stream.speed;
        stream.packetProgress = (stream.packetProgress + 0.0015) % 1;

        ctx.beginPath();
        for (let x = 0; x <= width; x += 15) {
          const y = stream.startY + Math.sin(x * stream.frequency + stream.phase) * stream.amplitude;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = stream.color;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 12]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Traveling glowing data packet along the stream
        const packetX = stream.packetProgress * width;
        const packetY = stream.startY + Math.sin(packetX * stream.frequency + stream.phase) * stream.amplitude;
        ctx.beginPath();
        ctx.arc(packetX, packetY, 3, 0, Math.PI * 2);
        ctx.fillStyle = stream.color.replace(/0\.\d+\)/, '0.8)');
        ctx.shadowBlur = 10;
        ctx.shadowColor = ctx.fillStyle;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 2. Draw Neural Constellation Connections between near particles
      const maxDistance = isMobile ? 90 : 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // 3. Draw & update particles with 3-layer depth
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Mouse interactive soft repulsion on mid/near particles
        if (p.depth > 0) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distToMouse < mouse.radius) {
            const force = (1 - distToMouse / mouse.radius) * 0.7;
            p.x += (dx / distToMouse) * force;
            p.y += (dy / distToMouse) * force;
          }
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders smoothly
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.baseAlpha})`;

        if (p.depth === 2) {
          ctx.shadowBlur = 9;
          ctx.shadowColor = `${p.color}0.9)`;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // 4. Draw Floating Technical Symbols (AI, ML, PY, DATA, RAG, CV, NLP)
      floatingSymbols.forEach((sym) => {
        sym.x += sym.vx;
        sym.y += sym.vy;

        // Re-spawn at bottom if drifted off top
        if (sym.y < -20) {
          sym.y = height + 20;
          sym.x = Math.random() * width;
        }
        if (sym.x < 0) sym.x = width;
        if (sym.x > width) sym.x = 0;

        ctx.font = `${sym.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `${sym.color}${sym.alpha})`;
        ctx.fillText(sym.text, sym.x, sym.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient living gradient backdrops */}
      <div className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full bg-purple-600/12 blur-[150px] pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-[580px] h-[580px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[680px] h-[680px] rounded-full bg-pink-600/10 blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 left-10 w-[400px] h-[400px] rounded-full bg-indigo-600/10 blur-[130px] pointer-events-none" />

      {/* Cyber Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />

      {/* Interactive canvas with streams, neural connections, and floating tech symbols */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
};
