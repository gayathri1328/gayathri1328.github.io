import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Layers, MessageSquareText, Scan, LineChart, Network, Cloud, ArrowRight } from 'lucide-react';
import { EXPLORING_TOPICS } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';
import type { ExploringTopic } from '../../types/portfolio';

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
        title="Interactive AI Knowledge Constellation"
        highlightWord="Knowledge Constellation"
        subtitle="Exploring emerging paradigms across Generative AI, Retrieval-Augmented Generation, and Computer Vision. Click or hover any node to inspect interconnected topics."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Constellation Topic Nodes */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 gap-4">
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
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredTopicId(topic.id)}
                onMouseLeave={() => setHoveredTopicId(null)}
                onClick={() => setActiveTopic(topic)}
                className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 relative overflow-hidden border ${
                  isCurrent
                    ? 'bg-[#12163b] border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)] scale-[1.03]'
                    : isConnected
                    ? 'bg-[#0f122e] border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                    : 'glass-panel border-white/10 hover:border-white/20'
                }`}
              >
                {/* Node Connection Indicator */}
                {isConnected && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-[9px] font-mono text-purple-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    LINKED
                  </div>
                )}

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div
                    className="p-2.5 rounded-2xl border"
                    style={{
                      backgroundColor: `${topic.color}20`,
                      borderColor: `${topic.color}50`,
                      color: topic.color,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      {topic.category}
                    </span>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white">
                      {topic.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {topic.description}
                </p>

                {/* Subtle indicator bar */}
                <div
                  className="mt-3 h-1 w-full rounded-full overflow-hidden bg-white/5"
                >
                  <div
                    className="h-full transition-all duration-300 rounded-full"
                    style={{
                      backgroundColor: topic.color,
                      width: isCurrent ? '100%' : isConnected ? '60%' : '20%',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Focused Knowledge Inspector Card */}
        <div className="lg:col-span-5 sticky top-28">
          <motion.div
            key={currentTopic.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel p-7 sm:p-8 rounded-3xl border border-cyan-500/40 relative overflow-hidden shadow-2xl shadow-cyan-950/40"
          >
            {/* Ambient Corner Glow */}
            <div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40"
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

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {currentTopic.title}
            </h3>

            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              {currentTopic.description}
            </p>

            {/* Core Learning Focus */}
            <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              <span className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider block mb-1">
                Active Student Focus Areas:
              </span>
              <p className="text-xs text-slate-200 font-mono">
                {currentTopic.learningFocus}
              </p>
            </div>

            {/* Interconnected Topic Nodes */}
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-200 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 transition-all hover:scale-105"
                    >
                      <span>{target.title}</span>
                      <ArrowRight className="w-3 h-3 text-cyan-400" />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
