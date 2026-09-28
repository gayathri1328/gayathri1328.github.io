import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, FileText, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroVisualIdentity } from './HeroVisualIdentity';

interface HeroProps {
  onOpenResume: () => void;
  onNotify: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNotify }) => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.personalEmail);
    onNotify("Email copied: gayathri03042@gmail.com");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Column: Heading & Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/50 border border-purple-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-xs font-mono font-medium text-cyan-300 tracking-wide">
              {PERSONAL_INFO.badge}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08]"
          >
            Hi, I'm <br className="hidden sm:inline" />
            <span className="gradient-text-ai">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-4 font-display font-semibold text-lg sm:text-2xl text-purple-200/90"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          {/* College Sub-pill */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xs sm:text-sm font-mono text-cyan-400/90 mt-1"
          >
            {PERSONAL_INFO.institution} • {PERSONAL_INFO.academicPeriod}
          </motion.p>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-xl leading-relaxed"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-xl shadow-purple-900/30 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Explore My Work</span>
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-purple-500/30 hover:border-cyan-400/50 backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-purple-300" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-400/50 backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98]"
            >
              <Send className="w-4 h-4 text-cyan-300" />
              <span>Let's Connect</span>
            </button>
          </motion.div>

          {/* Social Icons Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-xs font-mono text-slate-400">DISCOVER:</span>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/40 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-600/30 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                aria-label="Copy personal email"
                title="Copy gayathri03042@gmail.com"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-pink-600/30 border border-white/10 hover:border-pink-400/40 text-slate-300 hover:text-white transition-all hover:scale-110 shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Animated Visual Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="lg:col-span-5 flex items-center justify-center"
        >
          <HeroVisualIdentity />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => handleScrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
        className="mt-14 inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none cursor-pointer"
      >
        <span>Scroll to explore</span>
        <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
      </motion.button>
    </section>
  );
};
