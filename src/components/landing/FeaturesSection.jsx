import React from 'react';
import { DollarSign, Shield, Globe, Smartphone, Zap, Gift, BarChart3, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const features = [
  { icon: DollarSign,  title: 'Zero Investment',    description: 'Completely free to join. No upfront costs, no hidden fees, no product purchases required ever.',    color: 'text-solar',     bg: 'bg-solar/10' },
  { icon: Shield,      title: 'Official Program',   description: 'Verified Temu Influencer program with direct PayPal withdrawals — secure and legitimate.',            color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { icon: Globe,       title: 'Works Worldwide',    description: 'Any country, any niche. Pakistani, UK, USA — all accounts are eligible if requirements are met.',    color: 'text-blue-400',  bg: 'bg-blue-400/10' },
  { icon: Smartphone,  title: 'Mobile Friendly',    description: 'Create content from your phone. No special equipment, studio, or editing software needed.',          color: 'text-purple-400', bg: 'bg-purple-400/10' },
  { icon: Zap,         title: 'Quick Setup',        description: 'Register in under 2 minutes. Start posting content the same day and unlock your first rewards.',    color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
  { icon: BarChart3,   title: 'High Commissions',   description: '35% on new users, 15% on existing customers. Every referral compounds your earnings over time.',    color: 'text-pink-400',  bg: 'bg-pink-400/10' },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative z-10">
        <SectionHeading
          badge="Why Join"
          title="Everything Built for"
          highlight="Creators"
          subtitle="No experience required. If you can make a short video, you can earn with TemuEarn."
        />
        <div className="max-w-6xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <GlassCard className="p-6 h-full group">
                  <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <f.icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <h3 className="font-heading font-bold text-[15px] text-white mb-1.5">{f.title}</h3>
                  <p className="text-[13px] font-body text-zinc-muted leading-relaxed">{f.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}