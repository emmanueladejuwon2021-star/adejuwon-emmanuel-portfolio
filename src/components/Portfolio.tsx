import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useAnimations';
import { projects, type Project } from '../data/content';

interface PortfolioProps {
  onOpenProjectModal: (project: Project) => void;
}

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Portfolio({ onOpenProjectModal }: PortfolioProps) {
  const { ref, isInView } = useInView(0.05);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      project.title.toLowerCase().includes(query) ||
      project.shortDesc.toLowerCase().includes(query) ||
      project.theProblem.toLowerCase().includes(query) ||
      project.theSolution.toLowerCase().includes(query) ||
      project.tech.some(t => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" ref={ref} className="py-20 sm:py-28 border-t border-slate-200 dark:border-white/5 bg-slate-100/50 dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-[2px] bg-violet-500"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-violet-600 dark:text-violet-400 font-bold">Real Websites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Real Business Problems. <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">Simple Solutions.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3 max-w-xl">
              Every website below is live right now and was built to solve an everyday business problem. Click <strong className="text-violet-600 dark:text-violet-400">"Read the Story"</strong> to see how it works and test the live screen.
            </p>
          </div>

          {/* Total Count Badge */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs font-mono text-slate-400">Showing:</span>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/40">
              {filteredProjects.length} website{filteredProjects.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>

        {/* Filter Pills & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-white/5">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-500/20'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live Search Input */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search websites by what they do..."
              className="w-full pl-9 pr-4 py-2 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              🔍
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.gradient} p-4 flex flex-col justify-between`}>
                    <span className="text-white/80 font-mono text-xs truncate">{project.liveUrl.replace('https://', '')}</span>
                    <div className="text-white font-bold text-lg">{project.title}</div>
                  </div>
                )}

                <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {project.year}
                  </span>
                </div>

                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20 p-4">
                  <button
                    type="button"
                    onClick={() => onOpenProjectModal(project)}
                    className="px-3.5 py-2 rounded-full bg-white text-slate-950 text-xs font-bold shadow-lg hover:bg-slate-100 flex items-center gap-1.5"
                  >
                    <span>See Details</span>
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-full bg-violet-600 text-white text-xs font-bold shadow-lg hover:bg-violet-700 flex items-center gap-1"
                  >
                    <span>Open Site ↗</span>
                  </a>
                </div>
              </div>

              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => onOpenProjectModal(project)}
                      className="text-xs font-bold text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
                    >
                      <span>Read the Story →</span>
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1"
                    >
                      <span>Open Site ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
