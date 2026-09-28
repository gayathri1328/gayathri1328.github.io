import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check, MessageSquare, Building2, User } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/Icons';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { SectionHeading } from '../common/SectionHeading';

interface ContactProps {
  onNotify: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Collaboration / Project',
    message: '',
  });

  const [copiedType, setCopiedType] = useState<'institutional' | 'personal' | null>(null);

  const handleCopy = (email: string, type: 'institutional' | 'personal') => {
    navigator.clipboard.writeText(email);
    setCopiedType(type);
    onNotify(`Copied to clipboard: ${email}`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message.trim()) return;

    // Use safe mailto trigger so message is sent directly through user's client without fake backend
    const mailtoUrl = `mailto:${PERSONAL_INFO.personalEmail}?subject=${encodeURIComponent(
      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name || 'Visitor'}`
    )}&body=${encodeURIComponent(
      `Hi Gayathri,\n\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}\n`
    )}`;

    window.location.href = mailtoUrl;
    onNotify("Opening your email client to send message...");
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        badge="Get in Touch"
        title="Let's build something intelligent."
        highlightWord="intelligent."
        subtitle="Have an idea, project, collaboration or opportunity? I'd love to connect."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Verified Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-5"
        >
          {/* Institutional Email Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-400/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                Institutional Email (College)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/30 text-cyan-300">
                BIT Sathy
              </span>
            </div>

            <p className="font-mono text-xs sm:text-sm text-white font-medium break-all select-all">
              {PERSONAL_INFO.institutionalEmail}
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.institutionalEmail}`}
                className="text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
              >
                Send Direct Mail →
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.institutionalEmail, 'institutional')}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Copy institutional email"
              >
                {copiedType === 'institutional' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Personal Email Card */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-purple-400/40 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                <User className="w-3.5 h-3.5" />
                Personal Email
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/70 border border-purple-500/30 text-purple-300">
                Primary
              </span>
            </div>

            <p className="font-mono text-xs sm:text-sm text-white font-medium break-all select-all">
              {PERSONAL_INFO.personalEmail}
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.personalEmail}`}
                className="text-xs font-mono text-slate-300 hover:text-purple-300 transition-colors"
              >
                Send Direct Mail →
              </a>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.personalEmail, 'personal')}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                title="Copy personal email"
              >
                {copiedType === 'personal' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Social Profiles Quick Bar */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-4">
              Social Links
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <GithubIcon className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-slate-300 group-hover:text-white">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <LinkedinIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-mono text-slate-300 group-hover:text-white">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Direct Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-purple-500/30 relative overflow-hidden"
        >
          {/* Subtle Ambient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-4 h-4 text-cyan-400" />
            <h3 className="font-display font-bold text-xl text-white">
              Send a Direct Message
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Topic of Discussion
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#0d0f28] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 transition-all cursor-pointer"
              >
                <option value="Collaboration / Project">Collaboration / Project Idea</option>
                <option value="Hackathon Team / Challenge">Hackathon Team / Challenge</option>
                <option value="Internship / Mentorship">Internship / Student Opportunity</option>
                <option value="General AI Discussion">General AI / Tech Conversation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">
                Message Content
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts, project brief, or question..."
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-slate-400">
                Safe mailto routing • No fake backend tracking
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-xl shadow-purple-900/30 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
