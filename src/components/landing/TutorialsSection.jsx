const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const tutorials = [
  {
    title: 'Join Temu Influencer Program',
    description: 'Complete step-by-step guide to register free and start earning with your social media.',
    category: 'Getting Started',
    link: 'https://temu.to/k/p7k9b1p31hw',
    thumbnail: '/thumbnails/join temu.jpeg',
    accent: '#FF5C00',
    accentBg: 'bg-solar/20',
    accentText: 'text-solar',
    featured: true,
  },
  {
    title: 'Create Posts & Get Approved',
    description: 'Full content creation guide — how to make posts that get approved and maximize earnings.',
    category: 'Content Creation',
    link: 'https://www.facebook.com/reel/2054704891776394',
    thumbnail: '/thumbnails/create post.jpeg',
    accent: '#10B981',
    accentBg: 'bg-emerald-500/20',
    accentText: 'text-emerald-400',
  },
  {
    title: 'Get Paid & Withdraw Earnings',
    description: 'Fast & secure withdrawal guide — PayPal, Bank Transfer, USDT. Your earnings, your way.',
    category: 'Withdrawals',
    link: 'https://www.facebook.com/reel/1725326482221389',
    thumbnail: '/thumbnails/get paid.jpeg',
    accent: '#A855F7',
    accentBg: 'bg-purple-500/20',
    accentText: 'text-purple-400',
  },
  {
    title: 'How to Authorize Your Account',
    description: 'Secure your account, verify your identity, and connect your social platforms in under 2 minutes.',
    category: 'Account Setup',
    link: 'https://www.facebook.com/reel/1873475296686027',
    thumbnail: '/thumbnails/how to authorize.jpeg',
    accent: '#3B82F6',
    accentBg: 'bg-blue-500/20',
    accentText: 'text-blue-400',
  },
];

function ThumbnailCard({ tutorial, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.a
        href={tutorial.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="group relative block rounded-2xl overflow-hidden"
        style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.07), 0 8px 32px rgba(0,0,0,0.55)` }}
      >
        {/* Thumbnail Image */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={tutorial.thumbnail}
            alt={tutorial.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: `rgba(${tutorial.accent === '#FF5C00' ? '255,92,0' : tutorial.accent === '#3B82F6' ? '59,130,246' : tutorial.accent === '#10B981' ? '16,185,129' : '168,85,247'}, 0.25)`, border: `2px solid ${tutorial.accent}50`, backdropFilter: 'blur(8px)' }}>
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
          </div>
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-lg text-[10px] font-heading font-bold uppercase tracking-widest ${tutorial.accentBg} ${tutorial.accentText} backdrop-blur-sm border`}
              style={{ borderColor: `${tutorial.accent}30` }}>
              {tutorial.category}
            </span>
          </div>
          {/* Play button badge */}
          <div className="absolute top-3 right-3">
            <div className="w-8 h-8 rounded-full glass flex items-center justify-center">
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
          </div>
        </div>

        {/* Bottom info */}
        <div className="p-4 bg-[#0D0D0D] border-t border-white/[0.06]">
          <h3 className="font-heading font-bold text-[14px] text-white leading-snug mb-1 group-hover:text-solar transition-colors line-clamp-2">
            {tutorial.title}
          </h3>
          <p className="text-[12px] font-body text-zinc-muted leading-relaxed line-clamp-2 mb-3">
            {tutorial.description}
          </p>
          <div className={`inline-flex items-center gap-1.5 text-[12px] font-heading font-semibold ${tutorial.accentText} group-hover:gap-2.5 transition-all`}>
            Watch Guide <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </motion.a>
    </ScrollReveal>
  );
}

export default function TutorialsSection() {
  const [featured, ...rest] = tutorials;

  return (
    <section id="tutorials" className="relative py-24 lg:py-32 w-full max-w-full overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-20 pointer-events-none" />
      <div className="relative z-10">
        <SectionHeading
          badge="Video Tutorials"
          title="Step-by-Step"
          highlight="Video Guides"
          subtitle="Watch our premium tutorial series. Each video walks you through the exact process."
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-10">

          {/* Featured large card */}
          <ScrollReveal className="mb-5">
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="group relative block rounded-3xl overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(255,92,0,0.15), 0 20px 60px rgba(0,0,0,0.7), 0 0 80px rgba(255,92,0,0.06)' }}
            >
              {/* Thumbnail full-width */}
              <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden">
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent lg:via-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Animated glow ring on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-solar/20 blur-xl scale-150 animate-pulse-glow" />
                    <div className="w-20 h-20 rounded-full bg-solar/25 border-2 border-solar/60 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-9 h-9 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-10 max-w-xl">
                  <span className="inline-block px-3 py-1 rounded-lg bg-solar/20 text-solar text-[10px] font-heading font-bold uppercase tracking-widest mb-3 border border-solar/20">
                    ⭐ Featured · {featured.category}
                  </span>
                  <h3 className="font-heading font-bold text-white leading-tight mb-2"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}>
                    {featured.title}
                  </h3>
                  <p className="text-[13px] font-body text-white/70 leading-relaxed mb-4 hidden sm:block">
                    {featured.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-solar text-white text-[13px] font-heading font-bold tracking-wide shadow-lg shadow-solar/30 group-hover:shadow-solar/50 transition-shadow">
                    <Play className="w-4 h-4 fill-white" />
                    Watch Tutorial
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          </ScrollReveal>

          {/* 3 smaller cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {rest.map((t, i) => (
              <ThumbnailCard key={t.title} tutorial={t} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}