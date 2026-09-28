import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING NEURAL ENVIRONMENT");

  useEffect(() => {
    const statuses = [
      "INITIALIZING NEURAL ENVIRONMENT",
      "LOADING AI & DATA MODELS",
      "SYNCHRONIZING COMPUTATIONAL GRAPH",
      "GAYATHRI V. // READY"
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 3;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }

        const stageIndex = Math.min(Math.floor((next / 100) * statuses.length), statuses.length - 1);
        setStatusText(statuses[stageIndex]);
        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#05060f] text-white overflow-hidden"
      >
        {/* Ambient background glow */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-cyan-500/20 blur-[100px] pointer-events-none" />

        {/* Central Monogram Badge */}
        <div className="relative mb-8 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1b123a] via-[#0d1633] to-[#080d22] border border-cyan-400/50 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)]"
          >
            {/* Spinning orbital border ring */}
            <div className="absolute -inset-1 rounded-2xl border border-dashed border-purple-500/50 animate-spin-slow pointer-events-none" />
            
            <span className="font-display font-black text-4xl bg-gradient-to-br from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              GV
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="font-mono text-xs tracking-[0.25em] text-cyan-300 font-semibold uppercase">
              Gayathri V.
            </span>
          </motion.div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-80">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span className="text-[11px] text-purple-300 tracking-wider font-medium truncate max-w-[200px]">
              {statusText}
            </span>
            <span className="text-cyan-300 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <div className="mt-4 text-center">
            <p className="text-[11px] font-mono text-slate-500">
              B.Tech Artificial Intelligence & Data Science
            </p>
          </div>
        </div>

        {/* Skip button for immediate access */}
        <button
          onClick={onComplete}
          className="absolute bottom-8 text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors uppercase tracking-wider py-1 px-3 rounded border border-white/5 hover:border-white/20"
        >
          Skip Intro →
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
