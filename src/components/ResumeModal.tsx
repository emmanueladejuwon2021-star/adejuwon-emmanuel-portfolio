import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/content';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-3xl bg-white dark:bg-[#0c0d18] rounded-3xl p-6 sm:p-10 shadow-2xl my-auto border border-slate-200 dark:border-white/15 max-h-[92vh] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-violet-500 text-lg">📄</span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Curriculum Vitae</h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-white/10 hover:bg-violet-600 hover:text-white text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5"
              >
                <span>Print / PDF</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-colors font-bold"
              >
                ✕
              </button>
            </div>
          </div>

          <div className="overflow-y-auto space-y-6 py-6 pr-2">
            <div className="border-b border-slate-200 dark:border-white/10 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">{personalInfo.name}</h1>
              <p className="text-sm font-semibold text-violet-600 dark:text-violet-400 mt-1">{personalInfo.title}</p>
              <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400 mt-3 font-mono">
                <span>📍 {personalInfo.location}</span>
                <span>📱 {personalInfo.phone}</span>
                <span>✉ {personalInfo.email}</span>
                <span>🌐 adejuwonemmanuel.vercel.app</span>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 mb-2">Professional Summary</h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Practical, results-oriented web developer with over 3 years of experience building fast, dependable websites that solve real business problems. Experienced in building online stores with Paystack card and bank payments, QR code restaurant menus, student examination portals, and civic voting collation tools using clean HTML5, Tailwind CSS, JavaScript, React, and TypeScript.
              </p>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-slate-400 mb-3">Selected Practical Websites Built</h4>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">ShopVerse — Fast Online Store & Payment System</strong>
                    <span className="text-[11px] font-mono text-emerald-500">shopverse-fast.vercel.app</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">High-speed retail store with secure card payments, instant order confirmation, and quick product search on mobile.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">Delta State Election Collation & Results Portal</strong>
                    <span className="text-[11px] font-mono text-sky-500">bincom-election-portal.onrender.com</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Civic verification website calculating official community vote totals and polling unit sums across 25 local council areas.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">MenuCraft — Instant QR Code Digital Food Menu</strong>
                    <span className="text-[11px] font-mono text-violet-500">menucraft-eta.vercel.app</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Contactless dining menu allowing restaurant guests to scan a table QR code and browse fresh food photos and prices on their phone.</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <strong className="text-xs sm:text-sm text-slate-900 dark:text-white">PreMed Student Examination Portal</strong>
                    <span className="text-[11px] font-mono text-teal-500">premed-test-portal.vercel.app</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Online test and exam portal with clear math formula display, automatic countdown timers, and immediate scoring.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between text-xs text-slate-400 shrink-0">
            <span>Adejuwon Emmanuel • WhatsApp: {personalInfo.whatsappDisplay}</span>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
