import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Cpu, Layers, HelpCircle, Lightbulb, Users } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative w-full max-w-3xl bg-[#090b20] border border-white/10 rounded-3xl p-6 sm:p-9 shadow-2xl shadow-purple-950/50 z-10 my-8 max-h-[90vh] overflow-y-auto text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/40">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider text-purple-300 bg-purple-950/60 border border-purple-500/40">
                  {project.badge}
                </span>
              )}
              {project.role && (
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider text-emerald-300 bg-emerald-950/60 border border-emerald-500/40">
                  <Users className="w-3 h-3" />
                  {project.role}
                </span>
              )}
            </div>

            <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm sm:text-base text-slate-300">
              {project.subtitle}
            </p>
          </div>

          {/* Live Link Button if verified */}
          {project.liveUrl && (
            <div className="mb-6">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-900/30"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Application</span>
              </a>
            </div>
          )}

          {/* Details Grid */}
          <div className="space-y-6">
            {/* The Problem */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase mb-2">
                <HelpCircle className="w-4 h-4" />
                Problem & Motivation
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase mb-2">
                <Lightbulb className="w-4 h-4" />
                Solution & System Concept
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Architecture Diagram if provided */}
            {project.hasArchitectureDiagram && project.architectureSteps && (
              <div className="p-5 rounded-2xl bg-[#0e112e] border border-amber-500/30">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase mb-3">
                  <Cpu className="w-4 h-4" />
                  NEXUS 8-Stage Algorithmic Architecture Pipeline
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {project.architectureSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/[0.03] border border-amber-500/20 flex flex-col justify-between"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-amber-400/80 font-bold">{step.step}</span>
                        <span className="text-[9px] font-mono text-slate-500">STAGE</span>
                      </div>
                      <h5 className="font-mono text-xs font-bold text-white mt-1">{step.label}</h5>
                      <p className="text-[10px] text-slate-400 mt-1 leading-snug line-clamp-3">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gayathri's Key Contributions */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase mb-3">
                <Layers className="w-4 h-4" />
                Key Contributions & Leadership
              </div>
              <ul className="space-y-2.5">
                {project.keyContributions.map((contrib, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{contrib}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-2.5">
                Technologies & Technical Concepts
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono text-slate-300 bg-white/5 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
