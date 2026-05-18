import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20 px-5">
      {badge && (
        <ScrollReveal delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[10px] font-heading font-semibold tracking-[0.18em] uppercase text-solar mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-solar animate-pulse-glow" />
            {badge}
          </div>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className="font-heading font-bold text-white leading-tight tracking-[-0.025em]"
          style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.2rem)' }}
        >
          {title}{' '}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-[15px] lg:text-[16px] font-body text-zinc-muted leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}