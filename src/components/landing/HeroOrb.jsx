import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function HeroOrb() {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    const pointLight1 = new THREE.PointLight(0xFF5C00, 0.8);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0xFF9E00, 0.4);
    pointLight2.position.set(-5, -3, 3);
    scene.add(pointLight2);

    // Sphere
    const geometry = new THREE.IcosahedronGeometry(1.8, 32);
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xFF5C00,
      metalness: 0.1,
      roughness: 0.3,
      transmission: 0.6,
      thickness: 1.5,
      transparent: true,
      opacity: 0.4,
      emissive: 0xFF5C00,
      emissiveIntensity: 0.15,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Wireframe overlay
    const wireGeo = new THREE.IcosahedronGeometry(1.85, 8);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xFF5C00,
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wire);

    // Particles
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xFF5C00,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Animation
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;
      sphere.rotation.y = t * 0.15;
      sphere.rotation.x = Math.sin(t * 0.1) * 0.1;
      wire.rotation.y = t * 0.08;
      wire.rotation.x = Math.sin(t * 0.05) * 0.05;
      particles.rotation.y = t * 0.03;
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (container.contains(rendererRef.current.domElement)) {
          container.removeChild(rendererRef.current.domElement);
        }
      }
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 pointer-events-none" />
  );
}