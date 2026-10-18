import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll, useActiveSection } from '../hooks/useAnimations';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/content';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Websites (8)' },
  { id: 'skills', label: 'What I Use' },
  { id: 'journey', label: 'Work History' },
  { id: 'contact', label: 'Contact' },
];

interface NavigationProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export default function Navigation({ onOpenCommandPalette, onOpenResumeModal }: NavigationProps) {
  const activeSection = useActiveSection(navItems.map(n => n.id));
  const scrollTo = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#080914]/80 backdrop-blur-md shadow-lg border border-slate-200/80 dark:border-white/10 px-4 py-2' : 'px-2 py-1'}`}>
          <div className="flex items-center justify-between h-12 sm:h-14">

            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="group flex items-center gap-2 text-lg sm:text-xl font-extrabold tracking-tight"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white flex items-center justify-center font-mono text-xs shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
                AE
              </span>
              <span className="text-slate-900 dark:text-white font-extrabold">Adejuwon<span className="text-violet-500">.</span></span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-white/[0.04] p-1.5 rounded-full border border-slate-200/80 dark:border-white/5 backdrop-blur-md">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all relative ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-violet-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Action Items */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Quick Actions Command Palette Shortcut */}
              <button
                type="button"
                onClick={onOpenCommandPalette}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:border-violet-500/50 hover:text-violet-600 transition-all shadow-xs"
                title="Open Command Palette (Ctrl+K)"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Quick Actions</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-100 dark:bg-white/10 rounded">⌘K</kbd>
              </button>

              {/* Light / Dark Mode Switcher */}
              <ThemeToggle />

              {/* WhatsApp Direct Click-to-Chat Button */}
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 active:scale-95 transition-all"
                title={`Chat directly with Adejuwon on WhatsApp (${personalInfo.whatsappDisplay})`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L2.5 21.5l3.78-1.42C7.88 21.23 9.87 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.84 0-3.55-.53-5.01-1.45l-.36-.22-2.24.84.84-2.19-.24-.38C4.04 15.17 3.5 13.63 3.5 12c0-4.69 3.81-8.5 8.5-8.5s8.5 3.81 8.5 8.5-3.81 8.5-8.5 8.5z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-300 shadow-xs"
                aria-label="Toggle navigation menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="p-6 rounded-2xl bg-white/95 dark:bg-[#080914]/95 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-2xl space-y-4">
              <div className="flex flex-col gap-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className="p-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between text-left"
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-400">→</span>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2.5">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20"
                >
                  <span>Chat on WhatsApp ({personalInfo.whatsappDisplay})</span>
                </a>
                
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 flex items-center justify-center gap-2 text-slate-700 dark:text-slate-300"
                >
                  <span>View Work Summary (Resume)</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
