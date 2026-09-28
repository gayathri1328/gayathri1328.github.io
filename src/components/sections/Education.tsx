import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Academic Foundation"
        title="Education & Continuous Learning"
        highlightWord="Continuous Learning"
        subtitle="Pursuing rigorous undergraduate coursework in Artificial Intelligence & Data Science at Bannari Amman Institute of Technology."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Main Education Showcase Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-purple-500/30"
        >
          {/* Subtle backdrop glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Academic Badge */}
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-400/30 text-xs font-mono text-purple-300">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              Undergraduate Degree
            </span>
            <span className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              {EDUCATION_DATA.duration}
            </span>
          </div>

          {/* Degree & College */}
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug">
            {EDUCATION_DATA.degree}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm sm:text-base text-cyan-300 font-medium">
            <span>{EDUCATION_DATA.institution}</span>
          </div>

          <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{EDUCATION_DATA.location}</span>
          </div>

          {/* CGPA Display Module */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-950/50 via-[#0e1234] to-cyan-950/40 border border-cyan-500/30 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase block">
                Cumulative Grade Point Average
              </span>
              <span className="text-xs text-slate-400 font-mono mt-0.5 block">
                Official Current CGPA
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-display font-black text-4xl sm:text-5xl bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                {EDUCATION_DATA.cgpa}
              </span>
              <span className="text-xs font-mono text-slate-400">/ 10.0</span>
            </div>
          </div>

          {/* Academic Philosophy */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              Curriculum Orientation
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Balancing mathematics, data structures, computational logic, and database management with hands-on project creation and hackathon leadership.
            </p>
          </div>
        </motion.div>

        {/* Right Side: "What I'm Learning" Visual Ecosystem */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                Active Curriculum
              </div>
              <h4 className="font-display font-bold text-xl text-white mt-1">
                What I'm Learning
              </h4>
            </div>
            <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Active Focus Areas
            </span>
          </div>

          <p className="text-xs text-slate-400 mb-6">
            Key established coursework and practical fundamentals actively studied during the B.Tech program:
          </p>

          {/* Subject Pills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {EDUCATION_DATA.learningAreas.map((area, idx) => (
              <motion.div
                key={area.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                  <span className="font-mono text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-200 transition-colors">
                    {area.name}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  {area.category}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Practical Integration Note */}
          <div className="mt-8 p-4 rounded-2xl bg-purple-950/30 border border-purple-500/20 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-300 leading-relaxed">
              Every course concept is cross-applied into real repositories, hackathon entries (e.g. INTELLIX), and interactive web deployments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
