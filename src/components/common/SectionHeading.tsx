import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  highlightWord?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  highlightWord,
  align = 'center',
}) => {
  const isCentered = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 sm:mb-18 flex flex-col ${isCentered ? 'items-center text-center' : 'items-start text-left'}`}
    >
      {/* Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-cyan-900/40 border border-purple-500/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[11px] font-mono font-semibold tracking-widest text-cyan-300 uppercase">
          {badge}
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] max-w-3xl">
        {highlightWord ? (
          <>
            {title.split(highlightWord)[0]}
            <span className="gradient-text-ai">{highlightWord}</span>
            {title.split(highlightWord)[1]}
          </>
        ) : (
          title
        )}
      </h2>

      {/* Supporting Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Decorative gradient underline */}
      <div className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 ${isCentered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
};
