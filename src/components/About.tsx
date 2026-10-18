import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { aboutContent, personalInfo } from '../data/content';

export default function About() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-[2px] bg-violet-500"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-bold">About Emmanuel</span>
            <span className="w-6 h-[2px] bg-violet-500"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Developer Who <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">Listens First.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            I believe good websites are simple: they solve your business headache, load in a flash on mobile phones, and are effortless for everyday people to use.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Col - Story */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {aboutContent.story.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {paragraph}
              </motion.p>
            ))}

            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold hover:opacity-90 transition-opacity"
              >
                <span>Explore 8 Working Websites</span>
                <span>→</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-all shadow-sm"
              >
                <span>Direct WhatsApp: {personalInfo.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Col - Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-slate-400 dark:text-slate-500 mb-2">How I Help You Succeed</h3>

            {aboutContent.principles.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] hover:border-violet-500/30 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0 font-bold">
                  ✦
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
