import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, TrendingUp, ShieldCheck, CreditCard,
  Globe, DollarSign, Users, Zap
} from 'lucide-react';
import * as THREE from 'three';

const JOIN_URL = 'https://temu.to/k/p7k9b1p31hw';

/* ── STATS ── */
const stats = [
  { value: '$8,600+', label: 'Max Earnings',    icon: DollarSign },
  { value: '1K+',     label: 'Followers Needed', icon: Users },
  { value: '$0',      label: 'Investment',       icon: ShieldCheck },
  { value: 'PayPal',  label: 'Withdrawal',       icon: CreditCard },
];

/* ── 3D BG ── */
function useThreeBackground(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene    = new THREE.Scene();
    const camera   = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    /* Central icosahedron */
    const icoGeo = new THREE.IcosahedronGeometry(1.7, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0xFF5C00, wireframe: true, transparent: true, opacity: 0.12,
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    /* Outer ring wireframe */
    const ringGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xFF9E00, wireframe: true, transparent: true, opacity: 0.05,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ring);

    /* Torus */
    const torusGeo = new THREE.TorusGeometry(3.2, 0.012, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: 0xFF5C00, transparent: true, opacity: 0.18,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    /* Particles */
    const pCount = 220;
    const pPos   = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 3.5 + Math.random() * 3;
      pPos[i*3]   = r * Math.sin(phi) * Math.cos(theta);
      pPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i*3+2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: 0xFF7A2E, size: 0.018, transparent: true, opacity: 0.55, sizeAttenuation: true, depthWrite: false });
    const pts  = new THREE.Points(pGeo, pMat);
    scene.add(pts);

    /* Animate */
    let raf;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;
      ico.rotation.y  = t * 0.18;
      ico.rotation.x  = t * 0.08;
      ring.rotation.y = -t * 0.09;
      ring.rotation.z = t * 0.04;
      torus.rotation.z = t * 0.12;
      pts.rotation.y  = t * 0.025;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      icoGeo.dispose(); icoMat.dispose();
      ringGeo.dispose(); ringMat.dispose();
      torusGeo.dispose(); torusMat.dispose();
      pGeo.dispose(); pMat.dispose();
    };
  }, [canvasRef]);
}

/* ── LOGO MARK SVG ── */
function LogoHero() {
  return (
    <svg width="56" height="56" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A2E"/>
          <stop offset="100%" stopColor="#FF5C00"/>
        </linearGradient>
        <filter id="heroShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#FF5C00" floodOpacity="0.5"/>
        </filter>
      </defs>
      <rect x="5" y="13" width="30" height="24" rx="4" fill="url(#heroGrad)" filter="url(#heroShadow)"/>
      <path d="M14 13 C14 8 26 8 26 13" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M10 29 L16 21 L21 25 L30 17" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="27,17 30,17 30,20" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── COMPONENT ── */
export default function HeroSection() {
  const canvasRef = useRef(null);
  useThreeBackground(canvasRef);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202] w-full max-w-full">

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 bg-dots opacity-40" />

      {/* ── 3D canvas ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* ── Ambient orbs ── */}
      <div className="absolute top-[15%] left-[10%] w-[200px] sm:w-[350px] lg:w-[480px] h-[200px] sm:h-[350px] lg:h-[480px] rounded-full blur-[80px] lg:blur-[120px] bg-solar/8 animate-orb-drift pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[160px] sm:w-[280px] lg:w-[380px] h-[160px] sm:h-[280px] lg:h-[380px] rounded-full blur-[60px] lg:blur-[100px] bg-ember/6 animate-orb-drift pointer-events-none" style={{animationDelay:'-4s'}} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[200px] lg:w-[280px] h-[140px] sm:h-[200px] lg:h-[280px] rounded-full blur-[60px] lg:blur-[90px] bg-[#FF9E00]/5 animate-orb-drift pointer-events-none" style={{animationDelay:'-2s'}} />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-5 lg:px-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="text-center">

          {/* FOMO Badge */}
          <motion.div
            initial={{ opacity:0, y:25 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.8, delay:.15 }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass glass-solar mb-8 cursor-default"
          >
            <span className="w-2 h-2 rounded-full bg-solar animate-pulse-glow" />
            <span className="text-[11px] font-heading font-semibold tracking-[0.16em] uppercase text-solar">
              100% Free · No Investment Required
            </span>
          </motion.div>

          {/* Logo above headline */}
          <motion.div
            initial={{ opacity:0, scale:.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:.7, delay:.2 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center gap-4">
              <LogoHero />
              <div className="text-left">
                <div className="font-heading font-bold text-3xl lg:text-4xl text-white tracking-tight leading-none">
                  Temu<span className="gradient-text">Earn</span>
                </div>
                <div className="text-[10px] font-body font-medium tracking-[0.22em] uppercase text-zinc-muted mt-1">
                  Earn More. Live More.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1, delay:.35 }}
            className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[76px] xl:text-[88px] tracking-[-0.03em] leading-[1.02] text-white max-w-5xl mx-auto"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 5.5rem)' }}
          >
            Turn Your Social
            <br />
            <span className="gradient-text">Into $8,600+</span>
            <br />
            <span className="chrome-text">Monthly Earnings</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity:0, y:28 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.85, delay:.55 }}
            className="mt-6 lg:mt-8 text-[15px] lg:text-[18px] font-body text-zinc-muted max-w-2xl mx-auto leading-relaxed"
          >
            Have <span className="text-white font-semibold">1K+ followers</span> on TikTok or Instagram,
            or <span className="text-white font-semibold">500+ subscribers</span> on YouTube?
            That's everything you need.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity:0, y:28 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.85, delay:.72 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={JOIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-solar to-[#FF9E00] text-white font-heading font-semibold text-[13px] sm:text-[15px] tracking-wide shadow-xl shadow-solar/25 hover:shadow-solar/45 transition-shadow w-full sm:w-auto justify-center"
            >
              <TrendingUp className="w-5 h-5" />
              Join Free Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
            <a
              href="#steps"
              className="inline-flex items-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-2xl glass text-white font-heading font-medium text-[13px] sm:text-[14px] tracking-wide hover:bg-white/8 transition-all hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Zap className="w-4 h-4 text-solar" />
              See How It Works
            </a>
          </motion.div>

          {/* Ticker strip */}
          <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{ delay: 1 }}
            className="mt-8 sm:mt-12 relative overflow-hidden border-t border-b border-white/5 py-3 max-w-full"
          >
            <div className="flex gap-6 sm:gap-10 w-max animate-ticker whitespace-nowrap">
              {['TikTok', '★', 'Instagram', '★', 'YouTube', '★', '1K Followers', '★', 'Free to Join', '★', 'PayPal Withdrawal', '★', '$8,600+ Earnings', '★', 'Zero Investment', '★',
                'TikTok', '★', 'Instagram', '★', 'YouTube', '★', '1K Followers', '★', 'Free to Join', '★', 'PayPal Withdrawal', '★', '$8,600+ Earnings', '★', 'Zero Investment', '★'
              ].map((item, i) => (
                <span
                  key={i}
                  className={`text-[10px] sm:text-[11px] font-heading tracking-[0.14em] sm:tracking-[0.16em] uppercase ${item === '★' ? 'text-solar' : 'text-zinc-muted'}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity:0, y:35 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:.85, delay: .9 }}
            className="mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 max-w-3xl mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y:-5, scale:1.03 }}
                transition={{ type:'spring', stiffness:300, damping:20 }}
                className="glass rounded-2xl p-3 sm:p-5 text-center group hover:glass-solar transition-all cursor-default card-3d"
              >
                <stat.icon className="w-5 h-5 text-solar mx-auto mb-2.5 group-hover:scale-110 transition-transform" />
                <div className="font-heading font-bold text-lg sm:text-2xl lg:text-3xl text-white leading-none">
                  {stat.value}
                </div>
                <div className="text-[10px] font-body font-medium text-zinc-muted mt-1.5 uppercase tracking-[0.14em]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none" />
    </section>
  );
}