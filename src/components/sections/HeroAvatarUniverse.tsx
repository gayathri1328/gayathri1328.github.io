import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { Brain, Eye, Layers, Database, Sparkles, Terminal, Cpu } from 'lucide-react';
import avatarImg from '../../assets/avatar/gayathri_avatar.jpg';

export const HeroAvatarUniverse: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth 3D mouse parallax tracking
  const mouseX = useSpring(0, { stiffness: 120, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-14, 14]);
  const lightX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const lightY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);

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

  // 6 Specified Technology Labels orbiting the Avatar
  const techNodes = [
    {
      label: "Python",
      icon: Terminal,
      color: "#10b981", // emerald
      border: "border-emerald-500/40",
      bg: "bg-emerald-950/60",
      text: "text-emerald-300",
      x: -165,
      y: -140,
      z: 55,
      delay: 0,
      floatDuration: 5.2
    },
    {
      label: "AI / ML",
      icon: Brain,
      color: "#a855f7", // purple
      border: "border-purple-500/40",
      bg: "bg-purple-950/60",
      text: "text-purple-300",
      x: 165,
      y: -125,
      z: 50,
      delay: 0.6,
      floatDuration: 5.8
    },
    {
      label: "Data Science",
      icon: Database,
      color: "#ec4899", // pink
      border: "border-pink-500/40",
      bg: "bg-pink-950/60",
      text: "text-pink-300",
      x: 175,
      y: 40,
      z: 60,
      delay: 1.2,
      floatDuration: 4.8
    },
    {
      label: "Computer Vision",
      icon: Eye,
      color: "#06b6d4", // cyan
      border: "border-cyan-500/40",
      bg: "bg-cyan-950/60",
      text: "text-cyan-300",
      x: -170,
      y: 50,
      z: 45,
      delay: 1.8,
      floatDuration: 6.0
    },
    {
      label: "NLP",
      icon: Sparkles,
      color: "#38bdf8", // sky blue
      border: "border-sky-500/40",
      bg: "bg-sky-950/60",
      text: "text-sky-300",
      x: -130,
      y: 160,
      z: 55,
      delay: 2.2,
      floatDuration: 5.0
    },
    {
      label: "RAG",
      icon: Layers,
      color: "#8b5cf6", // violet
      border: "border-violet-500/40",
      bg: "bg-violet-950/60",
      text: "text-violet-300",
      x: 135,
      y: 160,
      z: 50,
      delay: 2.8,
      floatDuration: 5.5
    },
  ];

  // Subtle floating code snippets
  const codeFragments = [
    { text: "import torch.nn as nn", x: -140, y: -70, opacity: 0.55 },
    { text: "01101001", x: 145, y: -45, opacity: 0.45 },
    { text: "def forward(x):", x: -145, y: 110, opacity: 0.5 },
    { text: "loss.backward()", x: 130, y: 105, opacity: 0.55 },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[480px] h-[480px] sm:max-w-[540px] sm:h-[540px] lg:max-w-[560px] lg:h-[560px] flex items-center justify-center cursor-default select-none perspective-[1200px]"
    >
      {/* 3D Parallax Root */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Layer -2: Deep Radial Atmosphere Aura */}
        <motion.div
          animate={{
            scale: isHovered ? [1.1, 1.18, 1.1] : [1, 1.08, 1],
            opacity: isHovered ? 0.85 : 0.65,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 m-auto w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-purple-600/35 via-cyan-500/25 to-pink-500/30 blur-[70px] pointer-events-none"
          style={{ transform: "translateZ(-60px)" }}
        />

        {/* Dynamic cursor light highlight on universe */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none opacity-40 blur-2xl"
          style={{
            background: `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(34, 211, 238, 0.25), transparent 60%)`,
            transform: "translateZ(-40px)",
          }}
        />

        {/* Layer -1: SVG Orbital Rings & Neural Nodes */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ transform: "translateZ(-20px)" }}
        >
          {/* Orbital Ellipse 1 (Tilted -30deg) */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow opacity-75"
            viewBox="0 0 560 560"
          >
            <ellipse
              cx="280"
              cy="280"
              rx="245"
              ry="105"
              fill="none"
              stroke="url(#avatarRingGrad1)"
              strokeWidth="1.8"
              strokeDasharray="8 10"
              transform="rotate(-28 280 280)"
            />
            <defs>
              <linearGradient id="avatarRingGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c084fc" stopOpacity="0.9" />
                <stop offset="45%" stopColor="#22d3ee" stopOpacity="0.4" />
                <stop offset="85%" stopColor="#f472b6" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            {/* Orbiting Satellite Dots */}
            <circle cx="70" cy="245" r="5" fill="#38bdf8" className="shadow-[0_0_12px_#38bdf8]" />
            <circle cx="485" cy="305" r="4.5" fill="#ec4899" className="shadow-[0_0_10px_#ec4899]" />
          </svg>

          {/* Orbital Ellipse 2 (Tilted 38deg, Counter-rotating) */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-reverse opacity-70"
            viewBox="0 0 560 560"
          >
            <ellipse
              cx="280"
              cy="280"
              rx="215"
              ry="130"
              fill="none"
              stroke="url(#avatarRingGrad2)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              transform="rotate(38 280 280)"
            />
            <defs>
              <linearGradient id="avatarRingGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <circle cx="280" cy="150" r="5" fill="#a855f7" />
            <circle cx="310" cy="405" r="4" fill="#06b6d4" />
          </svg>

          {/* Inner Cyan High-Tech Concentric Circle with Ticks */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow opacity-40"
            viewBox="0 0 560 560"
            style={{ animationDuration: '45s' }}
          >
            <circle
              cx="280"
              cy="280"
              r="175"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1"
              strokeDasharray="2 12"
            />
          </svg>
        </div>

        {/* Layer 0: Subtle Floating Code Fragments */}
        {codeFragments.map((frag, i) => (
          <motion.div
            key={i}
            animate={{
              y: [frag.y - 4, frag.y + 4, frag.y - 4],
              opacity: [frag.opacity * 0.7, frag.opacity, frag.opacity * 0.7],
            }}
            transition={{
              duration: 4.5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              transform: `translate3d(${frag.x}px, ${frag.y}px, 20px)`,
            }}
            className="absolute z-10 hidden md:block font-mono text-[10px] tracking-wider text-cyan-300/70 bg-[#080b20]/60 px-2 py-0.5 rounded border border-cyan-500/20 backdrop-blur-sm pointer-events-none"
          >
            {frag.text}
          </motion.div>
        ))}

        {/* Layer 1: Avatar Core Capsule */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transform: "translateZ(35px)" }}
          className="relative z-20 flex flex-col items-center justify-center"
        >
          {/* Outer Multi-Gradient Glow Frame */}
          <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_50px_rgba(168,85,247,0.45),0_0_90px_rgba(6,182,212,0.3)] transition-shadow duration-500 hover:shadow-[0_0_70px_rgba(168,85,247,0.7),0_0_120px_rgba(6,182,212,0.5)]">
            {/* Inner Rotating Dashed Border Accent */}
            <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/40 animate-spin-slow pointer-events-none" />
            <div className="absolute -inset-4 rounded-full border border-dotted border-purple-400/30 animate-spin-reverse pointer-events-none" />

            {/* Circular Avatar Container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-[#0a0d24] border-2 border-[#12163b] group">
              {/* The Original Girl Avatar Image */}
              <img
                src={avatarImg}
                alt="Gayathri V. - AI & Data Science Student Avatar"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />

              {/* Holographic Ambient Rim Light Over Avatar */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060713]/80 via-transparent to-purple-500/10 pointer-events-none" />
              
              {/* Subtle tech scan line sheen */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none scan-animation" />

              {/* Interactive Left Dimple Sparkle Indicator */}
              <div
                title="Cute Left Dimple :)"
                className="absolute top-[41%] right-[38%] w-2 h-2 rounded-full pointer-events-none"
              >
                <span className="absolute inset-0 rounded-full bg-cyan-300/40 animate-ping" />
                <span className="relative block w-1.5 h-1.5 rounded-full bg-cyan-200/80 shadow-[0_0_8px_#22d3ee]" />
              </div>
            </div>
          </div>

          {/* Under-Avatar Personal Identity Hologram Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3.5 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0a0f2c]/85 border border-cyan-400/40 backdrop-blur-md shadow-lg shadow-black/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-300">
              GAYATHRI V.
            </span>
            <span className="text-[10px] font-mono text-purple-300 border-l border-purple-500/30 pl-2">
              AI MASCOT
            </span>
            <Cpu className="w-3 h-3 text-cyan-400 ml-0.5" />
          </motion.div>
        </motion.div>

        {/* Layer 2: 6 Orbiting Technology Badges */}
        {techNodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <motion.div
              key={idx}
              animate={{
                y: [node.y - 7, node.y + 7, node.y - 7],
                rotate: [-1, 1.5, -1],
              }}
              transition={{
                duration: node.floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: node.delay,
              }}
              style={{
                transform: `translate3d(${node.x}px, ${node.y}px, ${node.z}px)`,
              }}
              className={`absolute z-30 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl ${node.bg} ${node.border} border backdrop-blur-md shadow-xl shadow-black/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 cursor-pointer group`}
            >
              <div
                className="p-1 rounded-lg"
                style={{ backgroundColor: `${node.color}25` }}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: node.color }} />
              </div>
              <span className={`text-xs font-mono font-semibold ${node.text} tracking-tight whitespace-nowrap`}>
                {node.label}
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: node.color }}
              />
            </motion.div>
          );
        })}

        {/* Mobile Badges Strip (visible only on mobile below avatar) */}
        <div className="absolute -bottom-8 flex sm:hidden items-center justify-center flex-wrap gap-1.5 max-w-[320px]">
          {techNodes.slice(0, 4).map((node, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full ${node.bg} ${node.border} border ${node.text}`}
            >
              {node.label}
            </span>
          ))}
        </div>

        {/* Constellation Glow Nodes */}
        <div className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] top-10 left-16 animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_#c084fc] bottom-14 right-12 animate-ping" />
        <div className="absolute w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_#f472b6] bottom-16 left-10 animate-pulse" />
        <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] top-16 right-20 animate-pulse" />
      </motion.div>
    </div>
  );
};
