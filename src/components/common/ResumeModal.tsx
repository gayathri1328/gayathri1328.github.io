import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Mail, ExternalLink, GraduationCap, Code2, Award, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNotify: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onNotify }) => {
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'checking' | 'notice'>('idle');

  const handleDownload = async () => {
    setDownloadStatus('checking');
    try {
      const response = await fetch('/resume.pdf', { method: 'HEAD' });
      if (response.ok) {
        // File exists! Trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Gayathri_V_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadStatus('idle');
        onNotify("Resume download started!");
      } else {
        // Handled gracefully as requested
        setDownloadStatus('notice');
      }
    } catch {
      setDownloadStatus('notice');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#0c0e27] border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-900/40 z-10 my-8 max-h-[90vh] overflow-y-auto text-left"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-900/40">
                GV
              </div>
              <div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-mono">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </div>

            {/* Notice if PDF is pending */}
            {downloadStatus === 'notice' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-purple-950/60 border border-purple-400/40 text-xs sm:text-sm text-slate-200"
              >
                <div className="flex items-start gap-2.5">
                  <FileText className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Curated Academic Resume Overview Ready Below
                    </p>
                    <p className="mt-1 text-slate-300">
                      The static PDF artifact (`/resume.pdf`) is currently undergoing semester revision. You can review the verified student dossier below or email Gayathri directly for the latest copy.
                    </p>
                    <a
                      href={`mailto:${PERSONAL_INFO.personalEmail}?subject=Resume%20Inquiry%20for%20Gayathri%20V.`}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Email gayathri03042@gmail.com for instant copy
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Resume Content Sections */}
            <div className="space-y-6 text-sm text-slate-300">
              {/* Education */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase mb-2">
                  <GraduationCap className="w-4 h-4" />
                  Education
                </div>
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h4 className="font-semibold text-white">B.Tech – Artificial Intelligence & Data Science</h4>
                  <span className="text-xs text-purple-300 font-mono">2024 – 2028</span>
                </div>
                <p className="text-xs text-slate-400">Bannari Amman Institute of Technology</p>
                <p className="text-xs text-emerald-400 font-mono mt-1 font-semibold">
                  Current CGPA: 7.28
                </p>
              </div>

              {/* Hackathon Leadership */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase mb-2">
                  <Award className="w-4 h-4" />
                  Hackathon Leadership
                </div>
                <h4 className="font-semibold text-white">Team Leader — Fourbidden Logic</h4>
                <p className="text-xs text-slate-400">INTELLIX: LLM & AI Optimization Hackathon</p>
                <p className="text-xs text-slate-300 mt-1">
                  Led team in architecting a personalized learning resource retrieval platform using LLM, RAG, Supabase, and responsive web deployment.
                </p>
              </div>

              {/* Core Technical Highlights */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-pink-400 font-mono text-xs font-bold uppercase mb-2">
                  <Code2 className="w-4 h-4" />
                  Technical Foundations & Focus
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    Languages: C, C++, Python, SQL
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Web: HTML5, CSS3, JavaScript (ES6+)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    AI/ML: Machine Learning, YOLO Vision, RAG
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Tools: Git, GitHub, VS Code, Supabase
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub Profile
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleDownload}
                  disabled={downloadStatus === 'checking'}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-lg shadow-purple-900/40"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {downloadStatus === 'checking' ? 'Checking file...' : 'Download Resume PDF'}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
