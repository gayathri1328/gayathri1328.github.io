import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Users2, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

export const DigitalPresence: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Connect & Verify"
        title="Digital Presence & Public Repositories"
        highlightWord="Public Repositories"
        subtitle="Explore code repositories on GitHub and connect professionally via LinkedIn. Verified authentic channels."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* GitHub Card */}
        <motion.a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -6 }}
          className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle purple gradient aura */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-purple-950/70 border border-purple-500/40 text-purple-300 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-xs font-mono text-purple-300 bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                <span>gayathri1328</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white group-hover:text-purple-200 transition-colors">
              GitHub Repositories
            </h3>

            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Explore my code & projects. Inspect repositories, algorithmic solutions, and web application implementations.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300 group-hover:text-cyan-200">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-4 h-4" />
              View Source Repositories
            </span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -6 }}
          className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 relative group flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle cyan gradient aura */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-600/20 transition-all" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                <span>gayathri-v</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyan-200 transition-colors">
              LinkedIn Network
            </h3>

            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Connect with me professionally. Follow my undergraduate development, hackathons, and student collaborations.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300 group-hover:text-cyan-200">
            <span className="flex items-center gap-1.5">
              <Users2 className="w-4 h-4" />
              Connect Professionally
            </span>
            <ExternalLink className="w-4 h-4" />
          </div>
        </motion.a>
      </div>
    </section>
  );
};
