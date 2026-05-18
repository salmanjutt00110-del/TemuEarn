import React from 'react';
import { ArrowUpRight, TrendingUp, ShoppingBag } from 'lucide-react';

const JOIN_URL = 'https://temu.to/k/p7k9b1p31hw';
const WHATSAPP_URL = 'https://whatsapp.com/channel/0029VbCUGYP6RGJBpJxZLJ3r';

function FooterLogo() {
  return (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A2E"/>
          <stop offset="100%" stopColor="#FF5C00"/>
        </linearGradient>
      </defs>
      <rect x="5" y="13" width="30" height="24" rx="4" fill="url(#ftGrad)"/>
      <path d="M14 13 C14 8 26 8 26 13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M10 29 L16 21 L21 25 L30 17" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="27,17 30,17 30,20" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FooterLogo />
              <div>
                <div className="font-heading font-bold text-[16px] text-white tracking-tight leading-none">
                  Temu<span className="gradient-text">Earn</span>
                </div>
                <div className="text-[9px] font-body font-medium tracking-[0.2em] uppercase text-zinc-muted mt-0.5">
                  Earn More. Live More.
                </div>
              </div>
            </div>
            <p className="text-[13px] font-body text-zinc-muted leading-relaxed max-w-[260px]">
              The official Temu Influencer Program. Turn your social media following into real earnings — completely free.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold text-[11px] text-white mb-4 uppercase tracking-[0.16em]">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {[['How It Works','#steps'],['Platforms','#platforms'],['Tutorials','#tutorials'],['FAQ','#faq']].map(([label, href]) => (
                <a key={label} href={href}
                  className="flex items-center gap-1 text-[13px] font-body text-zinc-muted hover:text-solar transition-colors">
                  {label} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>

          {/* CTA column */}
          <div>
            <h4 className="font-heading font-bold text-[11px] text-white mb-4 uppercase tracking-[0.16em]">
              Get Started
            </h4>
            <div className="space-y-3">
              <a href={JOIN_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-heading font-semibold text-solar hover:text-[#FF9E00] transition-colors">
                <TrendingUp className="w-3.5 h-3.5" />
                Join Program Free
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] font-body text-zinc-muted hover:text-green-400 transition-colors">
                <WAIcon />
                WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] font-body text-zinc-muted">
            © {new Date().getFullYear()} TemuEarn. All rights reserved.
          </p>
          <p className="text-[11px] font-body text-zinc-muted">
            Independent promotion. Not directly affiliated with Temu.
          </p>
        </div>
      </div>
    </footer>
  );
}