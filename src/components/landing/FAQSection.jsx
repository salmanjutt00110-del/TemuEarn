import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import SectionHeading from './SectionHeading';

const categories = [
  { id: 'account', label: '🔐 Account & Authorization' },
  { id: 'followers', label: '👥 Followers & Eligibility' },
  { id: 'videos', label: '🎬 Videos, Posts & Earnings' },
];

const faqData = {
  account: [
    { q: 'Temu account is not authorizing — what should I do?', a: 'First switch your browser to Desktop Site mode, select USA as region from the top, then create your Temu account. If the authorize option still doesn\'t appear, open the same join link again in the same browser.' },
    { q: '"This event is not available in your region" error?', a: 'This is a region issue. Select USA as your region and try using a different browser or internet connection.' },
    { q: 'Authorize option is not showing?', a: 'After creating your account, open the join link again. The authorize option will appear after that.' },
    { q: 'Campaigns are not showing?', a: 'Traffic verification may be incomplete, causing a delay. Keep your account active and wait a little while.' },
    { q: 'What does "Partially Benefits Unlocked" mean?', a: 'It means the account is partially verified. Full traffic/engagement verification is still pending.' },
  ],
  followers: [
    { q: 'What is the minimum follower count required?', a: 'You need a minimum of 1,000 original followers to be eligible.' },
    { q: 'Do accounts with 1K / 10K / 50K / 100K followers all work?', a: 'Yes, all of them work with good engagement. More followers = higher level = more earnings per post.' },
    { q: 'Is a monetized account required?', a: 'No, monetization is not required. Any active account with enough followers is eligible.' },
    { q: 'My TikTok account is being rejected — why?', a: 'Usually due to low engagement, guideline violations, or low views on recent videos.' },
    { q: 'Can a Pakistani TikTok account be authorized?', a: 'Yes, absolutely. Pakistani, UK, USA and almost all country accounts work if requirements are met.' },
    { q: 'Can Instagram and YouTube accounts also be linked?', a: 'Yes. If the requirements are met, these platforms can also be linked to your Temu Influencer account.' },
  ],
  videos: [
    { q: 'Do both Shorts and long videos count?', a: 'Yes, both can count as long as the engagement is good.' },
    { q: 'Videos are not getting approved — what should I do?', a: 'Follow each campaign\'s requirements carefully. Avoid copy-pasting videos and create unique content.' },
    { q: 'Getting "Duplicate / Non-original" rejection?', a: 'Happens when the same or copied videos are used. Use your own editing, voice, or facecam.' },
    { q: 'Is facecam better or AI-generated video?', a: 'Facecam with real voice gets approved more often than fully AI-generated videos.' },
    { q: 'What should be the video length?', a: 'Videos between 20–50 seconds perform best for approval and engagement.' },
    { q: 'What is commission and how do I earn it?', a: 'When someone orders through your referral link, you earn a commission. New users give 35%, existing users give 15%.' },
    { q: 'When does the hold amount get released?', a: 'Hold amounts are mostly released automatically after a certain time period.' },
  ],
};

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[13px] lg:text-[14px] font-heading font-medium text-white pr-4 group-hover:text-solar transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-zinc-muted" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-[13px] font-body text-zinc-muted leading-relaxed pr-10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('account');

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <SectionHeading
        badge="FAQ"
        title="Common"
        highlight="Questions"
        subtitle="Everything you need to know about the Temu Influencer Program."
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Category Tabs */}
        <ScrollReveal className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-[12px] font-heading font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-solar/20 text-solar neon-glow'
                    : 'glass text-zinc-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* FAQ List */}
        <ScrollReveal>
          <div className="glass rounded-2xl px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {faqData[activeCategory].map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}