import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, ArrowRight } from 'lucide-react';

const JOIN_URL = 'https://temu.to/k/p7k9b1p31hw';

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}
        >
          {/* Blur backdrop strip */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent backdrop-blur-xl" />
          <div className="relative px-4 py-3">
            <a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2.5 w-full py-4 rounded-2xl text-white font-heading font-bold text-[15px] tracking-wide overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #FF5C00 0%, #FF9E00 100%)',
                boxShadow: '0 0 30px rgba(255,92,0,0.45), 0 8px 24px rgba(0,0,0,0.5)',
              }}
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 shimmer opacity-40" />
              <TrendingUp className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Join Temu Influencer Program</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </a>
            <p className="text-center text-[10px] font-body text-zinc-muted mt-2">
              Free · No Investment · PayPal Withdrawal
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}