import React from 'react';
import { motion } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useAnimations';
import { personalInfo } from '../data/content';

export default function Hero() {
  const scrollTo = useSmoothScroll();

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center py-16 sm:py-24 overflow-hidden">
      {/* Background Ambient Blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 dark:bg-fuchsia-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Col: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Big Headline */}
            <div className="space-y-2">
              <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-violet-600 dark:text-violet-400 font-bold">
                Website Builder & Practical Problem Solver
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">{personalInfo.firstName}</span> <br />
                <span className="text-slate-800 dark:text-slate-100">{personalInfo.lastName}.</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalInfo.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                type="button"
                onClick={() => scrollTo('work')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 text-white font-bold text-sm shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Explore 8 Working Websites</span>
                <span>↓</span>
              </button>

              {/* Direct WhatsApp Button */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-100 dark:hover:bg-white/5 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Email Emmanuel</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2 font-medium">
                <span className="text-emerald-500 font-bold">✓</span>
                <span>8 Live Working Websites Below</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-amber-500 font-bold">⚡</span>
                <span>Fast on Mobile Phones</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <span className="text-violet-500 font-bold">🛡️</span>
                <span>Card & Bank Transfer Payments</span>
              </div>
            </div>

          </div>

          {/* Right Col: Rotating Rings */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-72 sm:w-96 aspect-square">
              {/* Orbiting Rings */}
              <div className="absolute inset-0 rounded-full border border-slate-200 dark:border-white/10 animate-[spin_30s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-violet-600 shadow-lg shadow-violet-500"></div>
              </div>
              <div className="absolute inset-6 rounded-full border border-slate-200/80 dark:border-white/10 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500"></div>
              </div>

              {/* Center Hub */}
              <div className="absolute inset-20 rounded-full bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-950/40 dark:to-fuchsia-950/40 border border-violet-200 dark:border-violet-500/20 backdrop-blur-xl flex flex-col items-center justify-center p-4 text-center shadow-xl">
                <span className="text-3xl sm:text-4xl mb-1">⚡</span>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">Fast & Dependable</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Built to Last</span>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 -right-4 p-3 rounded-2xl bg-white dark:bg-[#0b0c16] border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                  ✦
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Live Sites</span>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">8 Ready to Test</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 p-3 rounded-2xl bg-white dark:bg-[#0b0c16] border border-slate-200 dark:border-white/10 shadow-xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Speed Test</span>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white">99+ Out of 100</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
