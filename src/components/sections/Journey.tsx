import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users } from 'lucide-react';
import { JOURNEY_MILESTONES } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Evolution & Growth"
        title="Built Through Challenges"
        highlightWord="Challenges"
        subtitle="Tracking the trajectory from first lines of C code to hackathon leadership and building real-world AI software."
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Central Connecting Neon Spine */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-400 to-pink-500 -translate-x-1/2 opacity-40 shadow-[0_0_12px_rgba(168,85,247,0.5)]" />

        <div className="space-y-12 sm:space-y-16">
          {JOURNEY_MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-10`}
              >
                {/* Center Node Dot */}
                <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0c0e27] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-300 animate-ping" />
                </div>

                {/* Milestone Content Card */}
                <div className="ml-12 sm:ml-0 sm:w-1/2">
                  <div
                    className={`glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 relative group ${
                      milestone.highlightBadge ? 'bg-gradient-to-br from-purple-950/40 via-[#0e1233] to-cyan-950/30' : ''
                    }`}
                  >
                    {/* Header Details */}
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
                        {milestone.year} • {milestone.phase}
                      </span>
                      {milestone.highlightBadge && (
                        <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono text-purple-300 bg-purple-950/80 border border-purple-400/30">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          {milestone.highlightBadge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-200 transition-colors">
                      {milestone.title}
                    </h3>

                    {/* Team & Role Banner for INTELLIX Hackathon */}
                    {milestone.role && (
                      <div className="mt-2 flex items-center gap-3 text-xs font-mono text-purple-300">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-cyan-400" />
                          {milestone.organization}
                        </span>
                        <span>•</span>
                        <span className="text-emerald-400 font-bold">{milestone.role}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                      {milestone.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-white/5">
                      {milestone.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/5"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Blank counter-balance for desktop alignment */}
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
