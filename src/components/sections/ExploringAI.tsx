import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Layers, MessageSquareText, Scan, LineChart, Network, Cloud, ArrowRight, Cpu, Compass } from 'lucide-react';
import { EXPLORING_TOPICS } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import type { ExploringTopic } from '../../types/portfolio';
import avatarImg from '../../assets/avatar/gayathri_avatar.jpg';

const iconMap = {
  Sparkles: Sparkles,
  Brain: Brain,
  Layers: Layers,
  MessageSquareText: MessageSquareText,
  Scan: Scan,
  LineChart: LineChart,
  Network: Network,
  Cloud: Cloud,
};

export const ExploringAI: React.FC = () => {
  const [activeTopic, setActiveTopic] = useState<ExploringTopic>(EXPLORING_TOPICS[0]);
  const [hoveredTopicId, setHoveredTopicId] = useState<string | null>(null);

  const currentTopic = hoveredTopicId
    ? EXPLORING_TOPICS.find((t) => t.id === hoveredTopicId) || activeTopic
    : activeTopic;

  return (
    <section id="exploring-ai" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Active Frontier"
        title="Interactive AI Skill Universe"
        highlightWord="Skill Universe"
        subtitle="A living neural constellation centered on GAYATHRI's research & engineering interests. Click or hover any node to inspect interconnected models and active learning domains."
      />

      {/* Central Visual Architecture Diagram + Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-10">
        {/* Left Column: Interactive Neural Constellation Graph */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Central GAYATHRI Hub Card */}
          <div className="relative p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-[#120f2e] via-[#0d1538] to-[#120f2e] border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.25)] flex items-center justify-between flex-wrap gap-4 overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10 pointer-events-none" />

            <div className="relative z-10 flex items-center gap-4">
              {/* Mini Avatar Hologram Core */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <div className="w-full h-full rounded-[14px] overflow-hidden bg-[#07091a]">
                  <img
                    src={avatarImg}
                    alt="Gayathri V. Core"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0c0f2b] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-cyan-300 uppercase px-2 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30">
                    NETWORK CORE
                  </span>
                  <span className="text-[10px] font-mono text-purple-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    8 Connected Nodes
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight mt-0.5">
                  CENTER: <span className="gradient-text-ai">GAYATHRI</span>
                </h3>
                <p className="text-xs text-slate-300 font-mono">
                  B.Tech Artificial Intelligence & Data Science
                </p>
              </div>
            </div>

            <div className="relative z-10 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>Interactive Graph Active</span>
            </div>
          </div>

          {/* Connected 8 AI Nodes Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
            {EXPLORING_TOPICS.map((topic, idx) => {
              const Icon = iconMap[topic.icon as keyof typeof iconMap] || Sparkles;
              const isCurrent = currentTopic.id === topic.id;
              const isConnected = currentTopic.connectedTopics.includes(topic.id);

              return (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  onMouseEnter={() => setHoveredTopicId(topic.id)}
                  onMouseLeave={() => setHoveredTopicId(null)}
                  onClick={() => setActiveTopic(topic)}
                  className={`p-4 sm:p-5 rounded-3xl cursor-pointer transition-all duration-300 relative overflow-hidden border ${
                    isCurrent
                      ? 'bg-[#12163b] border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.35)] scale-[1.03]'
                      : isConnected
                      ? 'bg-[#0f122e] border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                      : 'glass-panel border-white/10 hover:border-white/30 hover:scale-[1.01]'
                  }`}
                >
                  {/* Glowing Connection Link Indicator */}
                  {isConnected && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                      LINKED
                    </div>
                  )}

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-2.5">
                    <div
                      className="p-2.5 rounded-2xl border transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${topic.color}20`,
                        borderColor: `${topic.color}50`,
                        color: topic.color,
                        boxShadow: isCurrent ? `0 0 15px ${topic.color}60` : 'none',
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                        {topic.category}
                      </span>
                      <h4 className="font-display font-bold text-sm sm:text-base text-white">
                        {topic.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {topic.description}
                  </p>

                  {/* Dynamic Energy Bar */}
                  <div className="mt-3.5 h-1 w-full rounded-full overflow-hidden bg-white/5">
                    <div
                      className="h-full transition-all duration-300 rounded-full"
                      style={{
                        backgroundColor: topic.color,
                        width: isCurrent ? '100%' : isConnected ? '65%' : '25%',
                        boxShadow: isCurrent ? `0 0 10px ${topic.color}` : 'none',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Deep Knowledge Inspector Card */}
        <div className="lg:col-span-5 sticky top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTopic.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 relative overflow-hidden shadow-2xl shadow-cyan-950/40"
            >
              {/* Ambient Corner Glow */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-45 transition-colors duration-500"
                style={{ backgroundColor: currentTopic.color }}
              />

              {/* Inspector Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  Knowledge Inspector
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  {currentTopic.category}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: currentTopic.color }}
                />
                <span className="text-xs font-mono text-purple-300">
                  Connected to Core: GAYATHRI
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {currentTopic.title}
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {currentTopic.description}
              </p>

              {/* Active Learning Focus Box */}
              <div className="mt-6 p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <span className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  Active Student Focus Areas:
                </span>
                <p className="text-xs text-slate-200 font-mono leading-relaxed">
                  {currentTopic.learningFocus}
                </p>
              </div>

              {/* Interconnected Knowledge Links */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                  Interconnected Knowledge Links:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentTopic.connectedTopics.map((connId) => {
                    const target = EXPLORING_TOPICS.find((t) => t.id === connId);
                    if (!target) return null;
                    return (
                      <button
                        key={connId}
                        onClick={() => setActiveTopic(target)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-200 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 transition-all hover:scale-105 cursor-pointer shadow-sm"
                      >
                        <span>{target.title}</span>
                        <ArrowRight className="w-3 h-3 text-cyan-400" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
