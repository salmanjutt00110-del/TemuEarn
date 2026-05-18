import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, BookOpen, Sparkles, Bell } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WHATSAPP_URL = 'https://whatsapp.com/channel/0029VbCUGYP6RGJBpJxZLJ3r';

const perks = [
  { icon: BookOpen,  text: 'Video creation templates' },
  { icon: Sparkles, text: 'AI prompts & strategies'  },
  { icon: Bell,     text: 'Daily earning updates'    },
  { icon: Users,    text: 'Community support'        },
];

function WAIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function WhatsAppSection() {
  return (
    <section className="relative py-24 lg:py-32 w-full max-w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-5 lg:px-10">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* BG layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/18 via-green-500/8 to-emerald-700/5" />
            <div className="absolute inset-0 glass" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

            {/* Orb */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-green-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 p-5 sm:p-8 lg:p-14 text-center">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type:'spring', stiffness:300, damping:20 }}
                className="w-16 h-16 rounded-2xl bg-green-500/15 flex items-center justify-center mx-auto mb-6 border border-green-500/20"
              >
                <WAIcon size={32} />
              </motion.div>

              <h2 className="font-heading font-bold text-2xl lg:text-4xl text-white mb-3 tracking-tight">
                Join Our WhatsApp <span className="text-green-400">Community</span>
              </h2>

              <p className="font-body text-zinc-muted max-w-xl mx-auto mb-8 leading-relaxed text-[14px] lg:text-[15px]">
                Get daily updates, video creation guides, AI prompts, and exclusive strategies shared directly.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-9">
                {perks.map((perk) => (
                  <div key={perk.text} className="flex items-center gap-2 text-[13px] font-body text-zinc-muted">
                    <perk.icon className="w-3.5 h-3.5 text-green-400" />
                    <span>{perk.text}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-heading font-bold text-[14px] sm:text-[15px] tracking-wide transition-colors shadow-xl shadow-green-500/20 hover:shadow-green-500/30"
              >
                <WAIcon size={20} />
                Join WhatsApp Channel
              </motion.a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}