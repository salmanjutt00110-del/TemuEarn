import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', glowOnHover = true, tilt = true }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!tilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rX = (y - 0.5) * -9;
    const rY = (x - 0.5) * 9;
    setTransform(`perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) scale(1.01)`);
    setGlowPos({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)');
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ transform, transition: 'transform 0.35s cubic-bezier(0.23,1,0.32,1)' }}
      className={`relative overflow-hidden rounded-2xl glass card-3d ${
        hovered && glowOnHover ? 'neon-glow' : ''
      } transition-shadow ${className}`}
    >
      {/* Inner highlight shine */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,92,0,0.1) 0%, transparent 65%)`
            : 'none',
          transition: 'background 0.3s',
        }}
      />
      {children}
    </motion.div>
  );
}