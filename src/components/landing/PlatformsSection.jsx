import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

/* ── Platform SVG icons ── */
function TikTokIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
    </svg>
  );
}
function InstagramIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}
function YouTubeIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const platforms = [
  {
    Icon: TikTokIcon,
    name: 'TikTok',
    requirement: '1,000+ Followers',
    details: 'Any country · Monetization not required',
    gradient: 'from-pink-500/15 to-purple-600/15',
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-br from-pink-600 to-purple-700',
    borderColor: 'hover:border-pink-500/25',
    perks: ['Any niche', 'Public account', 'No monetization needed'],
  },
  {
    Icon: YouTubeIcon,
    name: 'YouTube',
    requirement: '500+ Subscribers',
    details: 'Any country · Any niche',
    gradient: 'from-red-600/15 to-orange-500/15',
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-br from-red-600 to-red-700',
    borderColor: 'hover:border-red-500/25',
    perks: ['Shorts & long videos', 'Any language', 'Public channel'],
    featured: true,
  },
  {
    Icon: InstagramIcon,
    name: 'Instagram',
    requirement: '1,000+ Followers',
    details: 'Any country · Public account',
    gradient: 'from-amber-500/15 to-pink-600/15',
    iconColor: 'text-white',
    iconBg: 'bg-gradient-to-br from-amber-500 to-pink-600',
    borderColor: 'hover:border-amber-500/25',
    perks: ['Reels & posts', 'Public profile', 'Story content'],
  },
];

export default function PlatformsSection() {
  return (
    <section id="platforms" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" />
      <div className="relative z-10">
        <SectionHeading
          badge="Who Can Join"
          title="Works on"
          highlight="3 Platforms"
          subtitle="You don't need a huge following. Just an active account with real engagement."
        />
        <div className="max-w-5xl mx-auto px-5 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {platforms.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.12}>
              <GlassCard className={`p-7 h-full group relative ${p.featured ? 'border-solar/20' : ''}`}>
                {p.featured && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-solar/15 text-solar text-[9px] font-heading font-semibold tracking-widest uppercase">
                    Popular
                  </div>
                )}
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <p.Icon className={`w-7 h-7 ${p.iconColor}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{p.name}</h3>
                <p className="text-solar text-[13px] font-heading font-semibold mb-2">{p.requirement}</p>
                <p className="text-[12px] font-body text-zinc-muted mb-4">{p.details}</p>
                <ul className="space-y-1.5">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-[12px] font-body text-zinc-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-solar shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}