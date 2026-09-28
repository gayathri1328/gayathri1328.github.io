import React from 'react';
import { FileText, Download, GraduationCap, Code2, Award, ArrowRight } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-[#120d2d] via-[#091129] to-[#070b1e] border border-purple-500/30 overflow-hidden shadow-2xl shadow-purple-950/40 text-center flex flex-col items-center">
        {/* Ambient Gradient Glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

        {/* Small Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-400/40 text-xs font-mono text-cyan-300 mb-6 shadow-sm">
          <FileText className="w-3.5 h-3.5 text-purple-400" />
          <span>OFFICIAL STUDENT DOSSIER</span>
        </div>

        {/* Heading */}
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight max-w-2xl leading-tight">
          Want the complete story?
        </h2>

        {/* Text */}
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
          Take a closer look at my education, projects, skills and experience.
        </p>

        {/* Summary Metric Chips */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-6 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>BIT Sathy (2025–2029)</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
            <Award className="w-4 h-4 text-purple-400" />
            <span>CGPA: 7.28</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
            <Code2 className="w-4 h-4 text-pink-400" />
            <span>5 Verified Projects</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume/Gayathri_V_Resume.pdf"
            download="Gayathri_V_Resume.pdf"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-xl shadow-purple-900/40 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>View Dossier Details</span>
          </button>
        </div>
      </div>
    </section>
  );
};
