import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { type Project } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export default function ProjectModal({ project, onClose, onShowToast }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'story' | 'preview'>('story');
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.liveUrl);
    onShowToast('Website URL copied to clipboard!', 'success');
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl rounded-3xl shadow-2xl my-auto border border-slate-200 dark:border-white/15 max-h-[94vh] flex flex-col overflow-hidden bg-white dark:bg-[#0c0d18]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header Bar */}
          <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0 bg-slate-50/80 dark:bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-mono truncate max-w-[160px] sm:max-w-xs">
                {project.liveUrl.replace('https://', '')}
              </span>
            </div>

            {/* Tab Selector */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-white/10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('story')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'story'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>💡 Problem & Solution</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                  activeTab === 'preview'
                    ? 'bg-violet-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>🖥 Interactive Live View</span>
              </button>
            </div>

            {/* Action / Close */}
            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:opacity-90 shadow-xs items-center gap-1.5 transition-all"
              >
                <span>Launch Site</span>
                <span>↗</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-200/60 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-colors font-bold"
                aria-label="Close project modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6">

            {/* TAB 1: STORY */}
            {activeTab === 'story' && (
              <div className="space-y-6">

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Image Banner */}
                {project.image ? (
                  <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-lg bg-slate-950 aspect-[16/8] sm:aspect-[21/8] relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                    <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-mono text-slate-300 flex items-center gap-1.5 border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Verified Live Production Interface</span>
                    </div>
                  </div>
                ) : null}

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 font-bold">
                      ⚡
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Speed & Access</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{project.stats.metric1}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                      ✓
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Reliability</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{project.stats.metric2}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200/80 dark:border-white/10 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold">
                      📱
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">User Experience</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{project.stats.metric3}</span>
                    </div>
                  </div>
                </div>

                {/* Problem vs Solution */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="p-5 sm:p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-3">
                    <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider">
                      ⚠️ The Problem Before This Was Built
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.theProblem}</p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      ✅ How Emmanuel Solved It
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{project.theSolution}</p>
                  </div>
                </div>

                {/* Features & Benefits */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    ✨ Key Features & Everyday Benefits
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-3 pt-1">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plain-English Tech Breakdown */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 space-y-3">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
                    ⚙️ Tools Picked & Why (Explained in Plain English)
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3 pt-1">
                    {project.plainTech.map((item, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
                        <span className="text-xs font-bold text-violet-600 dark:text-violet-400 block">{item.name}</span>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Banner */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-emerald-600/10 border border-violet-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">Facing a similar challenge in your project?</h5>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Let's talk about the simplest, most cost-effective way to solve it.</p>
                  </div>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <a
                      href="https://wa.me/2349160155524?text=Hello%20Adejuwon,%20I%20saw%20your%20case%20study%20and%20want%20to%20solve%20a%20similar%20problem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Chat on WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setActiveTab('preview')}
                      className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-300 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 flex items-center gap-1.5 transition-all"
                    >
                      <span>Test Live Screen</span>
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: PREVIEW */}
            {activeTab === 'preview' && (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Screen Mode:</span>
                    </span>
                    <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10">
                      <button
                        type="button"
                        onClick={() => setDeviceMode('desktop')}
                        className={`px-3 py-1 rounded-md text-xs font-semibold ${deviceMode === 'desktop' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                      >
                        Desktop
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeviceMode('mobile')}
                        className={`px-3 py-1 rounded-md text-xs font-semibold ${deviceMode === 'mobile' ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                      >
                        Phone
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-300 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300 transition-all"
                    >
                      <span>Copy URL</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-xl text-xs font-bold bg-violet-600 text-white hover:bg-violet-700 flex items-center gap-1.5 transition-all"
                    >
                      <span>Open in Full Tab ↗</span>
                    </a>
                  </div>
                </div>

                <div className="flex justify-center items-center py-2">
                  <div
                    className="w-full rounded-2xl overflow-hidden border border-slate-300 dark:border-white/10 bg-slate-950 shadow-2xl transition-all"
                    style={{
                      maxWidth: deviceMode === 'desktop' ? '100%' : '340px',
                      height: deviceMode === 'desktop' ? '480px' : '520px'
                    }}
                  >
                    <iframe
                      src={project.liveUrl}
                      title="Project Live Preview"
                      className="w-full h-full border-0 bg-white"
                      loading="lazy"
                      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    ></iframe>
                  </div>
                </div>

                <p className="text-center text-xs text-slate-400">
                  Note: Some sites set strict security headers. If the preview frame is blank, click
                  <strong className="text-violet-500"> "Open in Full Tab"</strong> to test the live deployed website directly.
                </p>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-3.5 sm:p-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-500 shrink-0 bg-slate-50/80 dark:bg-white/[0.02]">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-500 font-bold">✓</span>
              <span>Adejuwon Emmanuel Verified Production Website</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition-colors"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
