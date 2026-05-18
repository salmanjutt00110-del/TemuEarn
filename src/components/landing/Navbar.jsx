import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, TrendingUp, ShoppingBag } from 'lucide-react';

const NAV_LINKS = [
  { label: 'How It Works', href: '#steps' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'FAQ', href: '#faq' },
];

const JOIN_URL = 'https://temu.to/k/p7k9b1p31hw';

function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A2E"/>
          <stop offset="100%" stopColor="#FF5C00"/>
        </linearGradient>
        <filter id="bagShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#FF5C00" floodOpacity="0.35"/>
        </filter>
      </defs>
      {/* bag body */}
      <rect x="6" y="14" width="28" height="22" rx="4" fill="url(#bagGrad)" filter="url(#bagShadow)"/>
      {/* bag handle */}
      <path d="M15 14 C15 9 25 9 25 14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* arrow/chart icon inside bag */}
      <path d="M11 29 L17 22 L21 26 L29 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="26,18 29,18 29,21" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-xl shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* ── Logo ── */}
            <a href="#" className="flex items-center gap-3 group select-none">
              <motion.div whileHover={{ scale: 1.08, rotate: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                <LogoMark size={38} />
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-[17px] tracking-tight text-white">
                  Temu<span className="gradient-text">Earn</span>
                </span>
                <span className="text-[9px] font-body font-medium tracking-[0.18em] uppercase text-zinc-muted mt-0.5">
                  Earn More. Live More.
                </span>
              </div>
            </a>

            {/* ── Desktop Links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-[13px] font-body font-medium text-zinc-muted hover:text-white transition-colors rounded-xl hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-solar to-[#FF9E00] text-white text-[13px] font-heading font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-solar/35 hover:scale-105 active:scale-95"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Join Free Now
              </a>
            </div>

            {/* ── Mobile Toggle ── */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 text-zinc-muted hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 pt-20 bg-black/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col items-center gap-1 p-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="w-full text-center py-4 text-base font-heading font-medium text-zinc-muted hover:text-white transition-colors border-b border-white/5"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32 }}
                className="mt-6 w-full py-4 rounded-2xl bg-gradient-to-r from-solar to-[#FF9E00] text-white text-center text-base font-heading font-bold tracking-wide"
              >
                Join Free Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}