import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Layers, ArrowUpRight, Eye, ShieldAlert, Sparkles, Check, Database, Ship } from 'lucide-react';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy, index }) => {

  // Render project-specific visual preview
  const renderVisualPreview = () => {
    switch (project.visualType) {
      case 'rag-ai':
        return (
          <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-[#090b22] border border-purple-500/30 overflow-hidden flex flex-col justify-between p-4 group">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-slate-400 ml-2">fourbidden-logic.rag/retrieve</span>
              </div>
              <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
                Supabase Connected
              </span>
            </div>

            {/* Center RAG Flow Simulation */}
            <div className="relative z-10 flex items-center justify-between px-2 sm:px-6">
              <div className="p-3 rounded-xl bg-purple-900/40 border border-purple-400/40 text-center">
                <Sparkles className="w-4 h-4 text-purple-300 mx-auto mb-1 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-white block">Student Query</span>
                <span className="text-[9px] font-mono text-purple-300">Topic Prompt</span>
              </div>

              {/* Connecting Pulsing Arrow */}
              <div className="flex-1 flex flex-col items-center px-2">
                <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-ping" />
                </div>
                <span className="text-[9px] font-mono text-cyan-300 mt-1">Vector Similarity</span>
              </div>

              <div className="p-3 rounded-xl bg-cyan-900/40 border border-cyan-400/40 text-center">
                <Database className="w-4 h-4 text-cyan-300 mx-auto mb-1" />
                <span className="text-[10px] font-mono font-bold text-white block">RAG Retriever</span>
                <span className="text-[9px] font-mono text-cyan-300">Curated Output</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 pt-2 border-t border-white/5">
              <span>INTELLIX Hackathon Engine</span>
              <span className="text-emerald-400">● Deployed on Render</span>
            </div>

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-pink-600/10 pointer-events-none" />
          </div>
        );

      case 'computer-vision':
        return (
          <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-[#06101e] border border-cyan-500/30 overflow-hidden p-4 flex flex-col justify-between group">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <Eye className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-300">YOLO 360° SURVEILLANCE FEED</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                TRACKING ACTIVE
              </span>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scan-animation pointer-events-none z-0 opacity-70" />

            {/* Simulated Bounding Boxes & Occupancy Heatmap */}
            <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
              <div className="p-2 rounded-lg border border-cyan-400/60 bg-cyan-950/40 relative">
                <div className="absolute -top-2 left-1 bg-cyan-400 text-black font-mono text-[8px] px-1 font-bold">
                  PERSON 94%
                </div>
                <div className="text-[9px] font-mono text-slate-300 mt-1">Dwell: 14m 20s</div>
                <div className="w-full bg-cyan-950 h-1 rounded mt-1 overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[70%]" />
                </div>
              </div>

              <div className="p-2 rounded-lg border border-purple-400/60 bg-purple-950/40 relative">
                <div className="absolute -top-2 left-1 bg-purple-400 text-black font-mono text-[8px] px-1 font-bold">
                  PERSON 89%
                </div>
                <div className="text-[9px] font-mono text-slate-300 mt-1">Dwell: 03m 12s</div>
                <div className="w-full bg-purple-950 h-1 rounded mt-1 overflow-hidden">
                  <div className="bg-purple-400 h-full w-[40%]" />
                </div>
              </div>

              <div className="p-2 rounded-lg border border-amber-400/60 bg-amber-950/40 relative">
                <div className="absolute -top-2 left-1 bg-amber-400 text-black font-mono text-[8px] px-1 font-bold">
                  HIGH DENSITY
                </div>
                <div className="text-[9px] font-mono text-amber-300 mt-1">Heatmap Zone A</div>
                <div className="w-full bg-amber-950 h-1 rounded mt-1 overflow-hidden">
                  <div className="bg-amber-400 h-full w-[88%]" />
                </div>
              </div>
            </div>

            {/* Bottom Metrics */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 pt-2 border-t border-white/5">
              <span>Algorithm: YOLOv8 / Trajectory Matrix</span>
              <span className="text-cyan-300 font-bold">Occupancy: 28 / Cap: 40</span>
            </div>
          </div>
        );

      case 'decision-system':
        return (
          <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-[#140e06] border border-amber-500/30 overflow-hidden p-4 flex flex-col justify-between group">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <Ship className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] font-mono text-amber-300">FREIGHT PROCUREMENT SOLVER</span>
              </div>
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                Core Optimization Cycle
              </span>
            </div>

            {/* Visual Workflow Steps */}
            <div className="relative z-10 my-auto">
              <div className="text-[10px] font-mono text-slate-400 text-center mb-2">
                FORECAST → VALIDATE → SIMULATE → OPTIMIZE → EXPLAIN
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-400/30 text-center">
                  <span className="text-[9px] font-mono text-amber-400 block">WHICH VESSEL?</span>
                  <span className="text-[10px] font-mono text-white font-bold">Charter vs Spot</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-400/30 text-center">
                  <span className="text-[9px] font-mono text-amber-400 block">WHEN?</span>
                  <span className="text-[10px] font-mono text-white font-bold">Optimal Window</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-400/30 text-center">
                  <span className="text-[9px] font-mono text-amber-400 block">STRATEGY?</span>
                  <span className="text-[10px] font-mono text-white font-bold">Risk-Weighted</span>
                </div>
                <div className="p-2 rounded-xl bg-amber-950/50 border border-amber-400/30 text-center">
                  <span className="text-[9px] font-mono text-amber-400 block">WHY?</span>
                  <span className="text-[10px] font-mono text-white font-bold">AI Reasoned</span>
                </div>
              </div>
            </div>

            {/* Bottom Pipeline */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 pt-2 border-t border-white/5">
              <span>8-Layer Algorithmic Pipeline</span>
              <span className="text-amber-400">Explore Architecture →</span>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-[#061410] border border-emerald-500/30 overflow-hidden p-4 flex flex-col justify-between group">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono text-emerald-300">STUDY BUDDY WORKSPACE</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Deployed Netlify Client
              </span>
            </div>

            {/* Interactive Workspace Preview */}
            <div className="relative z-10 my-auto space-y-2">
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-xs font-mono text-slate-200">Data Structures & C++ Revision</span>
                </div>
                <span className="text-[9px] font-mono text-emerald-400 font-bold">COMPLETED</span>
              </div>

              <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full border border-emerald-400 flex items-center justify-center text-[9px] text-emerald-400">●</span>
                  <span className="text-xs font-mono text-slate-200">AI / Machine Learning Notes</span>
                </div>
                <span className="text-[9px] font-mono text-cyan-300 font-bold">IN PROGRESS</span>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 pt-2 border-t border-white/5">
              <span>Frontend: HTML5 • CSS3 • JS</span>
              <span className="text-emerald-400">● Live on Netlify</span>
            </div>
          </div>
        );

      case 'telematics':
        return (
          <div className="relative w-full h-52 sm:h-60 rounded-2xl bg-[#140614] border border-pink-500/30 overflow-hidden p-4 flex flex-col justify-between group">
            {/* Top Bar */}
            <div className="flex items-center justify-between z-10">
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-[10px] font-mono text-pink-300">FLEETGUARD DRIVER SAFETY HUD</span>
              </div>
              <span className="text-[10px] font-mono text-pink-300 bg-pink-950/80 px-2 py-0.5 rounded border border-pink-500/30">
                Edge Telematics
              </span>
            </div>

            {/* HUD Gauges */}
            <div className="relative z-10 grid grid-cols-3 gap-2.5 my-auto text-center">
              <div className="p-2 rounded-xl bg-pink-950/40 border border-pink-500/20">
                <span className="text-[9px] font-mono text-pink-300 block">DRIVER ATTENTION</span>
                <span className="text-xs font-mono font-bold text-white mt-0.5 block">Alert (98%)</span>
                <span className="text-[8px] text-emerald-400 font-mono">Normal Gaze</span>
              </div>

              <div className="p-2 rounded-xl bg-pink-950/40 border border-pink-500/20">
                <span className="text-[9px] font-mono text-pink-300 block">FATIGUE INDEX</span>
                <span className="text-xs font-mono font-bold text-white mt-0.5 block">0.08 / Low</span>
                <span className="text-[8px] text-cyan-400 font-mono">Blink Frequency OK</span>
              </div>

              <div className="p-2 rounded-xl bg-pink-950/40 border border-pink-500/20">
                <span className="text-[9px] font-mono text-pink-300 block">VEHICLE TELEMETRY</span>
                <span className="text-xs font-mono font-bold text-white mt-0.5 block">Stable</span>
                <span className="text-[8px] text-slate-400 font-mono">OBD-II Stream</span>
              </div>
            </div>

            {/* Bottom Status */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 z-10 pt-2 border-t border-white/5">
              <span>Concept: Edge AI & Vision Safety</span>
              <span className="text-pink-400">Commercial Transport</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
    >
      <div>
        {/* Visual Mockup Container */}
        <div className="mb-6 relative">
          {renderVisualPreview()}
        </div>

        {/* Category & Badge Header */}
        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
          <span className="text-[11px] font-mono font-semibold tracking-wider text-cyan-400 uppercase">
            {project.category}
          </span>
          {project.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-purple-300 bg-purple-950/70 border border-purple-500/30">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display font-black text-2xl text-white group-hover:text-cyan-200 transition-colors tracking-tight">
          {project.title}
        </h3>
        <p className="text-xs text-purple-300/90 font-mono mt-1">
          {project.subtitle}
        </p>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5 mt-5">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg text-[10px] font-mono text-slate-300 bg-white/[0.04] border border-white/5"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 bg-white/[0.02]">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="mt-7 pt-5 border-t border-white/10 flex items-center justify-between flex-wrap gap-3">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors group/btn"
        >
          <Layers className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:rotate-12 transition-transform" />
          <span>View Deep Architecture</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>

        {/* Only show Live Demo if liveUrl exists */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-md shadow-purple-950/40"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};
