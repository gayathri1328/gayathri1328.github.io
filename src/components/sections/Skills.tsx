import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Globe, Cpu, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

const iconComponents = {
  Terminal: Terminal,
  Globe: Globe,
  Cpu: Cpu,
  Wrench: Wrench,
  Sparkles: Sparkles,
};

export const Skills: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<{ name: string; focus: string; tag: string } | null>(null);

  const displayedCategories = activeCategoryId === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === activeCategoryId);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Skills & Competencies"
        title="Technical Arsenal & Skill Clusters"
        highlightWord="Skill Clusters"
        subtitle="An honest, structured taxonomy of core programming, modern web development, and active AI exploration. No inflated percentages."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategoryId('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
            activeCategoryId === 'all'
              ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-900/30'
              : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
          }`}
        >
          All Domains (01–05)
        </button>

        {SKILL_CATEGORIES.map((cat) => {
          const Icon = iconComponents[cat.iconName as keyof typeof iconComponents] || Cpu;
          const isActive = activeCategoryId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryId(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-900/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.number} {cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Callout Banner if a skill is selected */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-purple-950/70 via-[#0d1334] to-cyan-950/60 border border-cyan-400/40 flex items-center justify-between flex-wrap gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Active Skill Inspection: {selectedSkill.name}
                </span>
                <p className="text-xs text-slate-300 mt-0.5">{selectedSkill.focus}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
                {selectedSkill.tag}
              </span>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-xs font-mono text-slate-400 hover:text-white underline"
              >
                Dismiss
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skill Clusters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCategories.map((category, catIdx) => {
          const Icon = iconComponents[category.iconName as keyof typeof iconComponents] || Cpu;
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-cyan-300">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 font-bold tracking-widest block">
                        CATEGORY {category.number}
                      </span>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Pills */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <div
                        key={sIdx}
                        onClick={() => setSelectedSkill({ name: skill.name, focus: skill.focus, tag: skill.levelTag })}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-purple-900/40 border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                            : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/5 hover:border-purple-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span
                            className={`text-[9px] font-mono px-2 py-0.5 rounded-md border ${
                              skill.levelTag === 'Core Foundation'
                                ? 'bg-cyan-950/60 border-cyan-500/30 text-cyan-300'
                                : skill.levelTag === 'Practical Experience'
                                ? 'bg-purple-950/60 border-purple-500/30 text-purple-300'
                                : 'bg-amber-950/60 border-amber-500/30 text-amber-300'
                            }`}
                          >
                            {skill.levelTag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                          {skill.focus}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Footer hint */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Click skill for breakdown</span>
                <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
