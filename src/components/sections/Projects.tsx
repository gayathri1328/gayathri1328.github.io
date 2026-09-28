import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from '../common/SectionHeading';

interface ProjectsProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'ai-rag' | 'vision' | 'decision' | 'web'>('all');

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === 'all') return true;
    if (filter === 'ai-rag') return p.visualType === 'rag-ai';
    if (filter === 'vision') return p.visualType === 'computer-vision';
    if (filter === 'decision') return p.visualType === 'decision-system' || p.visualType === 'telematics';
    if (filter === 'web') return p.visualType === 'education';
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Engineered Work"
        title="Featured Projects & Interactive Systems"
        highlightWord="Interactive Systems"
        subtitle="A showcase of intelligent applications, computer vision models, and decision architectures built with genuine code and student curiosity."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {[
          { id: 'all', label: 'All Projects (5)' },
          { id: 'ai-rag', label: 'LLM & RAG Systems' },
          { id: 'vision', label: 'Computer Vision' },
          { id: 'decision', label: 'Decision & Telematics' },
          { id: 'web', label: 'Web Applications' },
        ].map((tab) => {
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as typeof filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-900/30'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenCaseStudy={onOpenCaseStudy}
            index={idx}
          />
        ))}
      </div>

      {/* Technical Integrity Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 via-[#0e1233] to-cyan-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-300">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-white text-sm sm:text-base">
              Verified Project Artifacts & Real URLs
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Live demos for Study Buddy and Fourbidden Logic are functional. Only authentic project repositories and deployed URLs are linked.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
