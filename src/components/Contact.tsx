import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { personalInfo } from '../data/content';

interface ContactProps {
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export default function Contact({ onShowToast }: ContactProps) {
  const { ref, isInView } = useInView(0.05);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Online Store with Card & Bank Payments');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      onShowToast('Please fill out all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      onShowToast('Please enter a valid email address.', 'error');
      return;
    }

    const inquiries = JSON.parse(localStorage.getItem('ae-inquiries') || '[]');
    inquiries.push({ name, email, subject, message, timestamp: new Date().toISOString() });
    localStorage.setItem('ae-inquiries', JSON.stringify(inquiries));

    onShowToast('Message sent! Emmanuel will reply to your email within 24 hours.', 'success');
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(`Hi Emmanuel,\nMy Name: ${name || 'Client'}\nProject: ${subject}\nDetails: ${message || 'I want to build a website.'}`);
    window.open(`https://wa.me/${personalInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    onShowToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    onShowToast(`Copied ${personalInfo.phone} to clipboard!`, 'success');
  };

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 border-t border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-violet-500"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-bold">Start a Project</span>
            <span className="w-6 h-[2px] bg-violet-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Let's Talk About <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">Your Project.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Need an online store, a digital menu, or a website for your company? Send a direct WhatsApp message or drop an email below.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* WhatsApp Highlight Box */}
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all flex items-center justify-between group shadow-sm hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform font-bold text-xl">
                  💬
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">Direct WhatsApp</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  </div>
                  <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                    {personalInfo.whatsappDisplay}
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Click to chat instantly • Fast Response</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-600/10 text-emerald-600 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                →
              </div>
            </a>

            {/* Direct Email Box */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] shadow-xs flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                  ✉
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Direct Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="block text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-violet-600 transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="p-2 rounded-lg text-slate-400 hover:text-violet-600 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-xs font-mono"
                title="Copy email to clipboard"
              >
                Copy
              </button>
            </div>

            {/* Phone Call Box */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] shadow-xs flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center font-bold">
                  📞
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Call / Mobile</span>
                  <a href={`tel:${personalInfo.phone}`} className="block text-sm font-bold text-slate-900 dark:text-white hover:text-fuchsia-600 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={copyPhone}
                className="p-2 rounded-lg text-slate-400 hover:text-fuchsia-600 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-xs font-mono"
                title="Copy phone to clipboard"
              >
                Copy
              </button>
            </div>

            {/* Social Profiles */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-3">Online Profiles</span>
              <div className="grid grid-cols-2 gap-2">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-violet-500/40 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl border border-slate-200 dark:border-white/5 hover:border-violet-500/40 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] shadow-xl space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Samuel Okafor"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. samuel@business.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  What Do You Want to Build?
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                >
                  <option value="Online Store with Card & Bank Payments">Online Store (with Card & Bank Transfer Payments)</option>
                  <option value="Digital Restaurant Menu / Booking Website">Digital Restaurant Menu or Booking Website</option>
                  <option value="Customer Portal / Exam or Voting System">Customer Portal, Exam or Voting Website</option>
                  <option value="General Website Advice & Redesign">General Website Advice or Refresh Existing Site</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                  Tell Me About Your Project <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a short note on what your business needs and your target timeline..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="submit"
                  className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md shadow-violet-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <span>→</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-400">
                🔒 Direct replies sent back to your WhatsApp or email within 24 hours.
              </p>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
