import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const JOIN_URL = 'https://temu.to/k/p7k9b1p31hw';

const benefits = [
  'No investment needed',
  'Any country works',
  'PayPal withdrawal',
  'Free to join',
  'Quick 2-min setup',
];

export default function CTABanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-solar/18 via-[#FF9E00]/10 to-solar/5" />
            <div className="absolute inset-0 mesh-gradient" />
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="absolute inset-0 glass" />
            {/* Glow orbs */}
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-solar/18 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#FF9E00]/12 blur-3xl pointer-events-none" />
            {/* Top/bottom border lines */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-solar/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-solar/20 to-transparent" />

            <div className="relative z-10 p-8 lg:p-16 text-center">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-solar/15 flex items-center justify-center mx-auto mb-6 border border-solar/20">
                <TrendingUp className="w-7 h-7 text-solar" />
              </div>

              <h2 className="font-heading font-bold text-white tracking-tight leading-tight mb-4"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Ready to Start Earning
                <br />
                <span className="gradient-text">Without Any Investment?</span>
              </h2>

              <p className="font-body text-zinc-muted max-w-xl mx-auto mb-8 text-[14px] lg:text-[15px] leading-relaxed">
                Join free, authorize your account, post content, withdraw to PayPal.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 mb-10">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-[13px] font-body text-zinc-muted">
                    <CheckCircle2 className="w-3.5 h-3.5 text-solar" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={JOIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-solar to-[#FF9E00] text-white font-heading font-bold text-[15px] tracking-wide shadow-xl shadow-solar/25 hover:shadow-solar/45 transition-shadow"
              >
                <TrendingUp className="w-5 h-5" />
                Join Temu Influencer Program
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}