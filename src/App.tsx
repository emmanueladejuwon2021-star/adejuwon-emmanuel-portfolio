import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CommandPalette from './components/CommandPalette';
import { aboutContent, personalInfo, type Project } from './data/content';

interface Toast {
  id: number;
  message: string;
  type: 'success' | 'info' | 'error';
}

function AppContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  const handleToggleTheme = () => {
    const themeBtn = document.querySelector<HTMLButtonElement>('.theme-toggle-btn');
    if (themeBtn) {
      themeBtn.click();
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#050509] text-slate-900 dark:text-white min-h-screen antialiased selection:bg-violet-500 selection:text-white transition-colors duration-300">

      {/* Navigation Header */}
      <Navigation
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="pt-16 sm:pt-20">
        <Hero />

        {/* Stats Counter Bar */}
        <section className="py-10 border-y border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {aboutContent.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b0c16] border border-slate-200 dark:border-white/5 shadow-xs">
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <About />
        <Portfolio onOpenProjectModal={(p) => setSelectedProject(p)} />
        <TechStack />
        <Services />
        <Experience />
        <Testimonials />
        <Contact onShowToast={showToast} />
      </main>

      <Footer />

      {/* Floating WhatsApp Pill Button */}
      <a
        href={personalInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 font-bold text-xs flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
        title={`Chat with Adejuwon Emmanuel on WhatsApp (${personalInfo.whatsappDisplay})`}
      >
        <span>💬 WhatsApp {personalInfo.whatsappDisplay}</span>
      </a>

      {/* Back to top floating button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 font-bold text-sm"
          aria-label="Scroll back to top"
        >
          ↑
        </button>
      )}

      {/* Modals & Command Palette */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShowToast={showToast}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onSelectProject={(p) => setSelectedProject(p)}
        onOpenResume={() => setResumeModalOpen(true)}
        onToggleTheme={handleToggleTheme}
        onShowToast={showToast}
      />

      {/* Toast Notification Stack */}
      <div className="fixed bottom-5 left-5 z-[300] flex flex-col gap-2.5 pointer-events-none">
        <AnimatePresence>
          {toasts.map(toast => (
            <div
              key={toast.id}
              className={`pointer-events-auto px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold text-white ${
                toast.type === 'error' ? 'bg-rose-600' : toast.type === 'info' ? 'bg-violet-600' : 'bg-emerald-600'
              }`}
            >
              <span>{toast.message}</span>
            </div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
