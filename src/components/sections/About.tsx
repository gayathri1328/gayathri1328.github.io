import React from 'react';
import { motion } from 'framer-motion';
import { Hammer, GraduationCap, Palette, Compass, Rocket, Code, BrainCircuit, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, CORE_PILLARS } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

const iconMap = {
  Hammer: Hammer,
  GraduationCap: GraduationCap,
  Palette: Palette,
  Compass: Compass,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="About The Builder"
        title={PERSONAL_INFO.aboutHeading}
        highlightWord="builder in progress."
        subtitle="Bridging theoretical mathematics with hands-on code to engineer intelligent digital products."
      />

      {/* Main Narrative Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
        {/* Left Narrative Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden"
        >
          {/* Subtle gradient wash */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am an undergraduate student pursuing my <strong className="text-white font-semibold">B.Tech in Artificial Intelligence & Data Science</strong> at <span className="text-cyan-300 font-medium">Bannari Amman Institute of Technology (2025–2029)</span>.
            </p>

            <p>
              I believe the best way to understand an algorithm is to build around it. Rather than remaining confined to theoretical lectures, I actively test ideas by writing software—from responsive productivity platforms like <span className="text-purple-300 font-medium">Study Buddy</span> to hackathon-tested RAG retrieval systems like <span className="text-pink-300 font-medium">Fourbidden Logic</span>.
            </p>

            <p>
              Right now, I am deliberately strengthening my fundamental computer science pillars in <span className="text-white font-medium">C, C++, Python, Data Structures, and DBMS</span>, while simultaneously experimenting with frontier AI paradigms including <span className="text-cyan-300 font-medium">Large Language Model applications, RAG pipelines, and YOLO computer vision</span>.
            </p>

            <p>
              My long-term aspiration is centered on <strong className="text-amber-300 font-semibold">entrepreneurship</strong>—harnessing modern artificial intelligence to build elegant, reliable products that make human workflows measurably more effective.
            </p>
          </div>

          {/* Quick Mindset Chips */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2.5">
            {[
              { label: "Curious & Experimental", icon: Sparkles },
              { label: "Project-Oriented", icon: Code },
              { label: "Student Growth Mindset", icon: Rocket },
              { label: "Future-Focused", icon: BrainCircuit }
            ].map((chip, idx) => {
              const ChipIcon = chip.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                >
                  <ChipIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Metric/Identity Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Card: Current Academic Standing */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-cyan-500/20 relative group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                Academic Progress
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                2025 – 2029
              </span>
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              Bannari Amman Institute of Technology
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              B.Tech Artificial Intelligence & Data Science
            </p>

            <div className="mt-4 pt-4 border-t border-white/10 flex items-baseline gap-3">
              <div className="font-display font-black text-4xl text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                {PERSONAL_INFO.currentCgpa}
              </div>
              <div>
                <span className="text-xs font-mono text-slate-300 font-bold block">Current CGPA</span>
                <span className="text-[10px] text-slate-500 font-mono">Consistently growing student foundation</span>
              </div>
            </div>
          </div>

          {/* Card: Hackathon Leadership */}
          <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-purple-500/20 relative group hover:border-purple-500/40 transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
                Hackathon Experience
              </span>
              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-purple-300">
                INTELLIX
              </span>
            </div>
            <h4 className="font-display font-bold text-lg text-white">
              Team Leader — Fourbidden Logic
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              LLM & AI Optimization Hackathon • Personalized Learning Resource Retrieval Application.
            </p>
          </div>
        </motion.div>
      </div>

      {/* 4 Core Pillars: BUILD, LEARN, CREATE, EXPLORE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CORE_PILLARS.map((pillar, idx) => {
          const Icon = iconMap[pillar.icon as keyof typeof iconMap] || Hammer;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel glass-panel-hover p-6 rounded-3xl relative overflow-hidden group border border-white/10"
              style={{
                boxShadow: `0 10px 30px -15px ${pillar.borderGlow}`,
              }}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} p-[1px] mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full rounded-[15px] bg-[#0c0f2a] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-display font-black text-xl text-white tracking-wide">
                  {pillar.title}
                </h3>
                <span className="text-[10px] font-mono text-slate-500">
                  0{idx + 1}
                </span>
              </div>
              <h4 className="text-xs font-semibold text-cyan-300 mb-2.5">
                {pillar.tagline}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
