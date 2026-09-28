import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Eye, Network, Database, Sparkles, Terminal } from 'lucide-react';

export const HeroVisualIdentity: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt tracking
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const floatingBadges = [
    { label: "LLM & RAG", icon: Sparkles, color: "text-purple-400", border: "border-purple-500/40", bg: "bg-purple-950/40", x: -140, y: -90, delay: 0 },
    { label: "YOLO / Vision", icon: Eye, color: "text-cyan-400", border: "border-cyan-500/40", bg: "bg-cyan-950/40", x: 140, y: -80, delay: 1 },
    { label: "Decision Engine", icon: Network, color: "text-amber-400", border: "border-amber-500/40", bg: "bg-amber-950/40", x: 150, y: 85, delay: 2 },
    { label: "Data Science", icon: Database, color: "text-pink-400", border: "border-pink-500/40", bg: "bg-pink-950/40", x: -135, y: 95, delay: 3 },
    { label: "Python & C++", icon: Terminal, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-emerald-950/40", x: 0, y: -160, delay: 1.5 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] h-[460px] sm:max-w-[500px] sm:h-[500px] flex items-center justify-center cursor-pointer select-none perspective-[1000px]"
    >
      {/* 3D Moving Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Outer Pulsing Aura */}
        <div className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-purple-600/25 via-cyan-500/20 to-pink-500/25 blur-3xl animate-pulse-glow" />

        {/* Outer Orbital SVG Ring 1 (Tilted 45deg) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none animate-spin-slow opacity-60"
          viewBox="0 0 500 500"
        >
          <ellipse
            cx="250"
            cy="250"
            rx="210"
            ry="90"
            fill="none"
            stroke="url(#ringGrad1)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            transform="rotate(-28 250 250)"
          />
          <defs>
            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c084fc" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f472b6" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          {/* Orbiting Satellite Node 1 */}
          <circle cx="60" cy="220" r="5" fill="#38bdf8" className="shadow-[0_0_10px_#38bdf8]" />
          <circle cx="430" cy="275" r="4" fill="#c084fc" />
        </svg>

        {/* Counter-Rotating Orbital SVG Ring 2 (Tilted -35deg) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none animate-spin-reverse opacity-70"
          viewBox="0 0 500 500"
        >
          <ellipse
            cx="250"
            cy="250"
            rx="180"
            ry="110"
            fill="none"
            stroke="url(#ringGrad2)"
            strokeWidth="1.5"
            transform="rotate(40 250 250)"
          />
          <defs>
            <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {/* Orbiting Satellite Node 2 */}
          <circle cx="250" cy="140" r="6" fill="#f43f5e" />
          <circle cx="280" cy="360" r="4.5" fill="#a855f7" />
        </svg>

        {/* Neural Synapse Connection Lines & Core Grid */}
        <div className="absolute w-56 h-56 rounded-full border border-purple-500/20 flex items-center justify-center animate-spin-slow">
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-purple-400/40 to-transparent absolute" />
        </div>

        {/* Center Digital Orb / Neural Core */}
        <motion.div
          animate={{
            scale: isHovered ? 1.08 : [1, 1.03, 1],
            boxShadow: isHovered
              ? "0 0 70px rgba(168, 85, 247, 0.6), 0 0 100px rgba(6, 182, 212, 0.4)"
              : "0 0 45px rgba(168, 85, 247, 0.35), 0 0 80px rgba(6, 182, 212, 0.2)",
          }}
          transition={{
            scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            boxShadow: { duration: 0.3 },
          }}
          className="relative z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-br from-[#1a1238] via-[#0d1430] to-[#0a0f26] border border-cyan-400/40 p-[2px] flex items-center justify-center backdrop-blur-xl group"
        >
          {/* Internal rotating data ring */}
          <div className="absolute inset-1 rounded-full border border-dashed border-purple-400/30 animate-spin-slow" />
          <div className="absolute inset-3 rounded-full border border-dotted border-cyan-300/20 animate-spin-reverse" />

          {/* Central Holographic Monogram */}
          <div className="relative z-30 flex flex-col items-center justify-center">
            <span className="font-display text-4xl sm:text-5xl font-black tracking-tighter bg-gradient-to-br from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
              GV
            </span>
            <div className="flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/40 text-[9px] font-mono tracking-widest text-cyan-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              AI CORE
            </div>
          </div>

          {/* Interactive Core Ripple */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
        </motion.div>

        {/* Orbiting Tech Chips */}
        {floatingBadges.map((badge, idx) => {
          const Icon = badge.icon;
          return (
            <motion.div
              key={idx}
              animate={{
                y: [badge.y - 6, badge.y + 6, badge.y - 6],
              }}
              transition={{
                duration: 3.5 + badge.delay,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay * 0.4,
              }}
              style={{
                transform: `translate3d(${badge.x}px, ${badge.y}px, 40px)`,
              }}
              className={`absolute z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl ${badge.bg} ${badge.border} border backdrop-blur-md shadow-lg shadow-black/40 hover:scale-105 transition-transform duration-200`}
            >
              <Icon className={`w-3.5 h-3.5 ${badge.color}`} />
              <span className="text-xs font-mono font-medium text-slate-200 whitespace-nowrap">
                {badge.label}
              </span>
            </motion.div>
          );
        })}

        {/* Floating Mini Constellation Nodes */}
        <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] top-12 left-20 animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] bottom-16 right-16 animate-ping" />
        <div className="absolute w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_10px_#f472b6] bottom-20 left-12 animate-pulse" />
      </motion.div>
    </div>
  );
};
