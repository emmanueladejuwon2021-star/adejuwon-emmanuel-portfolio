import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, personalInfo, type Project } from '../data/content';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
  onToggleTheme: () => void;
  onShowToast: (msg: string, type?: 'success' | 'info' | 'error') => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject,
  onOpenResume,
  onToggleTheme,
  onShowToast,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent if implemented globally
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    ...projects.map(p => ({
      id: `project-${p.id}`,
      title: p.title,
      subtitle: p.shortDesc,
      icon: '🌐',
      action: () => {
        onSelectProject(p);
        onClose();
      }
    })),
    {
      id: 'action-resume',
      title: 'View Work Summary (Resume)',
      subtitle: 'Open summary of work history and credentials',
      icon: '📄',
      action: () => {
        onOpenResume();
        onClose();
      }
    },
    {
      id: 'action-theme',
      title: 'Switch Light / Dark Mode',
      subtitle: 'Toggle theme color appearance',
      icon: '🌙',
      action: () => {
        onToggleTheme();
        onClose();
      }
    },
    {
      id: 'action-whatsapp',
      title: 'Chat Directly on WhatsApp',
      subtitle: `Send direct message to ${personalInfo.whatsappDisplay}`,
      icon: '💬',
      action: () => {
        window.open(personalInfo.whatsappUrl, '_blank');
        onClose();
      }
    },
    {
      id: 'action-email',
      title: 'Copy Direct Email Address',
      subtitle: personalInfo.email,
      icon: '✉',
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        onShowToast(`Copied ${personalInfo.email} to clipboard!`, 'success');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter(
    a =>
      a.title.toLowerCase().includes(query.toLowerCase().trim()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase().trim())
  );

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[250] flex items-start justify-center pt-20 p-4 bg-slate-950/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-lg bg-white dark:bg-[#0c0d18] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/15 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 dark:border-white/10">
            <span className="text-slate-400">🔍</span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search websites, WhatsApp, toggle theme..."
              className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
            />
            <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-500 font-mono">ESC</kbd>
          </div>

          <div className="max-h-80 overflow-y-auto p-2 space-y-1">
            {filteredActions.length === 0 ? (
              <div className="p-4 text-center text-xs text-slate-400">
                No matching website or action found
              </div>
            ) : (
              filteredActions.map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.action}
                  className="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between group transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center text-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{item.title}</h5>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{item.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-slate-300 group-hover:text-violet-500 text-xs">↵</span>
                </button>
              ))
            )}
          </div>

          <div className="px-4 py-2 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Press Esc to close • Click to navigate</span>
            <span>Adejuwon Emmanuel OS</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
