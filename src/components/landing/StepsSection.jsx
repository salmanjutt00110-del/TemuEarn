import React from 'react';
import { ExternalLink, UserPlus, ShieldCheck, Video, Smartphone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const JOIN_URL = 'https://temu.to/k/p7k9b1p31hw';

const steps = [
  {
    step: '01',
    icon: UserPlus,
    title: 'Join Temu Influencer Program',
    description: 'Click to join free. No credit card, no investment. Takes under 2 minutes to register.',
    link: JOIN_URL,
    linkLabel: 'Join Now',
    accent: 'text-solar',
    iconBg: 'bg-solar/10 group-hover:bg-solar/20',
    iconColor: 'text-solar',
    bar: 'bg-solar',
  },
  {
    step: '02',
    icon: ShieldCheck,
    title: 'Authorize Your Account',
    description: 'Step-by-step video guide — set up your account and link your TikTok / Instagram / YouTube.',
    link: 'https://www.facebook.com/reel/1873475296686027',
    linkLabel: 'Watch Guide',
    accent: 'text-[#FF9E00]',
    iconBg: 'bg-[#FF9E00]/10 group-hover:bg-[#FF9E00]/20',
    iconColor: 'text-[#FF9E00]',
    bar: 'bg-[#FF9E00]',
  },
  {
    step: '03',
    icon: Video,
    title: 'Create Posts & Get Approved',
    description: 'Full guide on creating your first post, submitting for approval, and unlocking cash rewards.',
    link: 'https://www.facebook.com/reel/2054704891776394',
    linkLabel: 'Watch Guide',
    accent: 'text-emerald-400',
    iconBg: 'bg-emerald-400/10 group-hover:bg-emerald-400/20',
    iconColor: 'text-emerald-400',
    bar: 'bg-emerald-400',
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 mesh-gradient opacity-25 pointer-events-none" />
      <div className="relative z-10">
        <SectionHeading
          badge="Complete Guide"
          title="Start in"
          highlight="3 Simple Steps"
          subtitle="Follow these video guides in order. Each step includes a detailed walkthrough."
        />
        <div className="max-w-5xl mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {/* Connecting dots line */}
            <div className="hidden md:block absolute top-[52px] left-[18%] right-[18%] h-[1px]"
              style={{background:'linear-gradient(to right, #FF5C00 0%, #FF9E00 50%, #34d399 100%)', opacity:.3}} />

            {steps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.14}>
                <GlassCard className="p-7 h-full group relative overflow-hidden">
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${step.bar} opacity-0 group-hover:opacity-100 transition-opacity`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl ${step.iconBg} flex items-center justify-center mb-5 transition-all group-hover:scale-110`}>
                    <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>

                  {/* Big step number */}
                  <div className="absolute top-5 right-6 font-display font-bold text-6xl text-white/[0.04] select-none">
                    {step.step}
                  </div>

                  <h3 className="font-heading font-bold text-[16px] text-white mb-2.5 pr-10">
                    {step.title}
                  </h3>
                  <p className="text-[13px] font-body text-zinc-muted leading-relaxed mb-5">
                    {step.description}
                  </p>

                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-[13px] font-heading font-semibold ${step.accent} hover:opacity-75 transition-opacity`}
                  >
                    {step.linkLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Bonus tip */}
          <ScrollReveal delay={0.5} className="mt-5">
            <GlassCard className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 max-w-2xl mx-auto">
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-heading font-bold text-[13px] text-white">Need a USA Number for Withdrawal?</h4>
                <p className="text-[12px] font-body text-zinc-muted mt-0.5">
                  If Temu asks for a US number during withdrawal, watch this video for the complete solution.
                </p>
              </div>
              <a
                href="https://www.facebook.com/reel/1725326482221389"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[13px] font-heading font-semibold text-blue-400 hover:text-blue-300 transition-colors shrink-0"
              >
                Watch <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}