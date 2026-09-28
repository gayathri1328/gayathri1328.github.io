import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, MessageSquare, Building2, User, Loader2, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unconfigured'>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleCopy = (email: string, type: 'institutional' | 'personal') => {
    navigator.clipboard.writeText(email);
    setCopiedType(type);
    onNotify(`Copied to clipboard: ${email}`);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side validations
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter a message before sending.');
      return;
    }

    // Check if Formspree endpoint is configured
    if (!formspreeEndpoint || formspreeEndpoint.includes('YOUR_FORM_ID')) {
      setStatus('unconfigured');
      setErrorMessage(
        'Formspree endpoint is not yet configured in .env (VITE_FORMSPREE_ENDPOINT). You can send an email directly to gayathriv.ad25@bitsathy.ac.in below!'
      );
      return;
    }

    // Valid endpoint: perform real backend submission
    setStatus('sending');
    setErrorMessage(null);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          _replyto: formData.email.trim(),
          _gotcha: '', // Honeypot spam protection
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Collaboration / Project',
          message: '',
        });
        onNotify('Message sent successfully! ✨');
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus('error');
        setErrorMessage(
          errorData.error || 'Something went wrong. Please try again or email me directly.'
        );
        onNotify('Something went wrong. Please try again or email me directly.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
      onNotify('Something went wrong. Please try again or email me directly.');
    }
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
                Institutional Email (Primary Deliveries)
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
                href={`mailto:${PERSONAL_INFO.institutionalEmail}?subject=Portfolio%20Inquiry`}
                className="text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
              >
                Send Direct Mail →
              </a>
              <button
                type="button"
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
                Secondary
              </span>
            </div>

            <p className="font-mono text-xs sm:text-sm text-white font-medium break-all select-all">
              {PERSONAL_INFO.personalEmail}
            </p>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.personalEmail}?subject=Portfolio%20Inquiry`}
                className="text-xs font-mono text-slate-300 hover:text-purple-300 transition-colors"
              >
                Send Direct Mail →
              </a>
              <button
                type="button"
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

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <h3 className="font-display font-bold text-xl text-white">
                Send a Direct Message
              </h3>
            </div>
            <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              Deliver to: gayathriv.ad25@bitsathy.ac.in
            </span>
          </div>

          {/* Success Message Banner */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <p className="font-semibold text-white">Message sent successfully! ✨</p>
                  <p className="text-slate-300 mt-1">
                    Thank you for reaching out! Your message has been routed to Gayathri's inbox.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-3 text-xs font-mono text-cyan-300 hover:underline"
                  >
                    Send another message →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Error Message Banner */}
          <AnimatePresence>
            {status === 'error' && errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-start gap-3 text-xs sm:text-sm"
              >
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold text-white">
                    Something went wrong. Please try again or email me directly.
                  </p>
                  <p className="text-slate-300 mt-1">{errorMessage}</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.institutionalEmail}?subject=${encodeURIComponent(
                      `[Portfolio Inquiry - ${formData.subject}] from ${formData.name || 'Visitor'}`
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email gayathriv.ad25@bitsathy.ac.in directly</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unconfigured Endpoint Notice */}
          <AnimatePresence>
            {status === 'unconfigured' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 rounded-2xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs sm:text-sm"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">
                      Formspree Endpoint Configuration Notice
                    </p>
                    <p className="mt-1 text-slate-300 text-xs leading-relaxed">
                      To receive submissions directly in Formspree, paste your Form ID in <code className="text-cyan-300 bg-white/10 px-1 py-0.5 rounded">.env</code> as <code className="text-cyan-300 bg-white/10 px-1 py-0.5 rounded">VITE_FORMSPREE_ENDPOINT</code>.
                    </p>
                    <a
                      href={`mailto:${PERSONAL_INFO.institutionalEmail}?subject=${encodeURIComponent(
                        `[Portfolio Inquiry - ${formData.subject}] from ${formData.name || 'Visitor'}`
                      )}&body=${encodeURIComponent(formData.message)}`}
                      className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:underline"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Click here to send message via default email client</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Spam Protection Honeypot field (hidden from real users) */}
            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: 'none' }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Name <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Your Email <span className="text-cyan-400">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@example.com"
                  disabled={status === 'sending'}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                Topic of Discussion
              </label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-2xl bg-[#0d0f28] border border-white/10 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 transition-all cursor-pointer disabled:opacity-50"
              >
                <option value="Collaboration / Project">Collaboration / Project Idea</option>
                <option value="Hackathon Team / Challenge">Hackathon Team / Challenge</option>
                <option value="Internship / Mentorship">Internship / Student Opportunity</option>
                <option value="General AI Discussion">General AI / Tech Conversation</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 mb-1.5">
                Message Content <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your thoughts, project brief, or question..."
                disabled={status === 'sending'}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-400/60 focus:bg-white/[0.06] transition-all resize-none disabled:opacity-50"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-slate-400">
                Spam protection active • Reply-to configured
              </span>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all shadow-xl shadow-purple-900/30 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-cyan-200" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
