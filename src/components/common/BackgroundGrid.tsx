import React, { useEffect, useRef } from 'react';

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for floating cyber mesh animation
    const particleCount = Math.min(Math.floor(width / 25), 60);
    const particles: { x: number; y: number; vx: number; vy: number; radius: number; alpha: number; pulse: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.classList.contains('light');

      // Draw particle constellation mesh
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;
        p1.pulse += 0.02;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        const currentAlpha = p1.alpha + Math.sin(p1.pulse) * 0.15;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(15, 23, 42, ${Math.min(currentAlpha * 1.5, 0.8)})`
          : `rgba(136, 236, 17, ${Math.min(currentAlpha, 0.9)})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight
              ? `rgba(15, 23, 42, ${0.18 * (1 - dist / 150)})`
              : `rgba(136, 236, 17, ${0.22 * (1 - dist / 150)})`;
            ctx.lineWidth = isLight ? 0.8 : 0.7;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Animated Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Pulsing & Floating Ambient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#88EC11]/15 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-[35rem] h-[35rem] bg-[#70E000]/10 rounded-full blur-[160px] animate-float" />
      <div className="absolute bottom-10 left-1/4 w-[25rem] h-[25rem] bg-emerald-500/10 rounded-full blur-[130px] animate-pulse-glow" />
    </div>
  );
};
