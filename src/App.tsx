import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Common components
import { CustomCursor } from './components/common/CustomCursor';
import { InteractiveBackground } from './components/common/InteractiveBackground';
import { Toast } from './components/common/Toast';
import { ResumeModal } from './components/common/ResumeModal';
import { CaseStudyModal } from './components/common/CaseStudyModal';

// Layout & Sections
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/sections/LoadingScreen';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { ExploringAI } from './components/sections/ExploringAI';
import { DigitalPresence } from './components/sections/DigitalPresence';
import { ResumeSection } from './components/sections/ResumeSection';
import { Contact } from './components/sections/Contact';

// Types
import type { Project } from './types/portfolio';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const notify = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="relative min-h-screen bg-[#060713] text-[#e2e8f0] font-sans selection:bg-purple-600/30 selection:text-cyan-200">
      {/* 5-Second Memorable Initial Boot Sequence */}
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Global Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 z-[9999] origin-left shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Interactive Constellation / Neural Canvas Background */}
      <InteractiveBackground />

      {/* Sticky Glass Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onNotify={notify}
        />

        <div className="relative">
          {/* Subtle glowing section transition line */}
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <About />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <Education />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />
          <Skills />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <Projects onOpenCaseStudy={(project) => setSelectedCaseStudy(project)} />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <Journey />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
          <ExploringAI />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <DigitalPresence />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          <Contact onNotify={notify} />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onNotify={notify}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
