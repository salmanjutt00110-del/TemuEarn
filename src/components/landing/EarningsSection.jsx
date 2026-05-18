import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Percent, Users, Wallet } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const earningsData = [
  { metric: '$8,600+', label: 'Max Monthly Earnings', desc: 'Top creators earn this per month',      icon: TrendingUp, color: 'text-solar',    bg: 'bg-solar/10' },
  { metric: '35%',     label: 'New User Commission',  desc: 'For every new customer referral',       icon: Percent,   color: 'text-[#FF9E00]', bg: 'bg-[#FF9E00]/10' },
  { metric: '15%',     label: 'Returning Commission', desc: 'For returning customer orders',         icon: Users,     color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  { metric: '$0',      label: 'Zero Investment',      desc: 'Completely free to join and start',     icon: Wallet,    color: 'text-blue-400',  bg: 'bg-blue-400/10' },
];

export default function EarningsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden w-full max-w-full">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/25 to-transparent" />

      <SectionHeading
        badge="Earnings Pulse"
        title="Real Earning"
        highlight="Potential"
        subtitle="Transparent rewards for every piece of content you create and share on any platform."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5">
          {earningsData.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 320, damping: 20 }}
                className="glass rounded-2xl p-3.5 sm:p-5 lg:p-7 text-center hover:neon-glow transition-shadow group card-3d cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className={`font-heading font-bold text-xl sm:text-3xl lg:text-4xl ${item.color} leading-none mb-1`}>
                  {item.metric}
                </div>
                <div className="text-[13px] font-heading font-medium text-white mb-1">{item.label}</div>
                <div className="text-[11px] font-body text-zinc-muted">{item.desc}</div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-solar/25 to-transparent" />
    </section>
  );
}