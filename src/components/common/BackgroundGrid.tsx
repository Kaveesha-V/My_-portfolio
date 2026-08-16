import React, { useEffect, useRef } from 'react';

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rainCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // 1. Terminal Hacking Digital Rain Canvas Setup
    const rainCanvas = rainCanvasRef.current;
    if (!rainCanvas) return;

    const rainCtx = rainCanvas.getContext('2d');
    if (!rainCtx) return;

    let rainAnimationFrameId: number;
    let rainWidth = (rainCanvas.width = window.innerWidth);
    let rainHeight = (rainCanvas.height = window.innerHeight);

    // Terminal hacking glyphs: numbers, hex, binary, and code symbols
    const charSet = '0123456789ABCDEF01{}<>/=$#@%&!*+';
    const fontSize = 12;
    const colSpacing = 42;

    interface RainDrop {
      x: number;
      y: number;
      speed: number;
      length: number;
      chars: string[];
      active: boolean;
      flickerCounter: number;
      flickerInterval: number;
    }

    const getRandomChar = () => charSet[Math.floor(Math.random() * charSet.length)];

    const initRainDrops = (): RainDrop[] => {
      const drops: RainDrop[] = [];
      const numCols = Math.floor(rainWidth / colSpacing);
      for (let i = 0; i < numCols; i++) {
        // Sparse ambient density (~35% of columns active for subtle texture)
        const active = i % 3 === 0 || i % 7 === 0;
        const length = Math.floor(5 + Math.random() * 6); // 5 to 10 chars
        drops.push({
          x: i * colSpacing + Math.random() * 8,
          y: Math.random() * -rainHeight * 1.5,
          speed: 0.3 + Math.random() * 0.5, // Slow calm velocity: 0.3px to 0.8px per frame
          length,
          chars: Array.from({ length: 12 }, getRandomChar),
          active,
          flickerCounter: 0,
          flickerInterval: Math.floor(4 + Math.random() * 10),
        });
      }
      return drops;
    };

    let rainDrops = initRainDrops();

    const handleRainResize = () => {
      if (!rainCanvas) return;
      rainWidth = rainCanvas.width = window.innerWidth;
      rainHeight = rainCanvas.height = window.innerHeight;
      rainDrops = initRainDrops();
    };

    window.addEventListener('resize', handleRainResize);

    const renderRain = () => {
      rainCtx.clearRect(0, 0, rainWidth, rainHeight);
      const isLight = document.documentElement.classList.contains('light');

      rainCtx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const drop = rainDrops[i];
        if (!drop.active) continue;

        // Terminal Decrypting / Character Flicker Effect
        drop.flickerCounter++;
        if (drop.flickerCounter >= drop.flickerInterval) {
          drop.flickerCounter = 0;
          const mutateIndex = Math.floor(Math.random() * drop.length);
          drop.chars[mutateIndex] = getRandomChar();
        }

        for (let j = 0; j < drop.length; j++) {
          const charY = drop.y - j * fontSize;

          if (charY > -fontSize && charY < rainHeight) {
            // Smooth fade-out in the bottom 25% of the viewport
            const bottomFade = charY > rainHeight * 0.75 
              ? Math.max(0, 1 - (charY - rainHeight * 0.75) / (rainHeight * 0.25)) 
              : 1;

            // Low ambient opacity (10-15% base opacity)
            const trailAlpha = (1 - j / drop.length) * 0.13 * bottomFade;

            if (trailAlpha > 0.005) {
              const isTip = j === 0;

              if (isLight) {
                rainCtx.fillStyle = isTip 
                  ? `rgba(15, 23, 42, ${0.25 * bottomFade})` 
                  : `rgba(100, 116, 139, ${trailAlpha * 0.8})`;
              } else {
                // Brighter leading head character (~28-35% opacity) with dark-green trail fading out
                rainCtx.fillStyle = isTip 
                  ? `rgba(200, 255, 120, ${0.32 * bottomFade})` 
                  : `rgba(136, 236, 17, ${trailAlpha})`;
              }

              const char = drop.chars[j % drop.chars.length];
              rainCtx.fillText(char, drop.x, charY);
            }
          }
        }

        drop.y += drop.speed;

        // Reset drop to top staggered when it falls past screen
        if (drop.y - drop.length * fontSize > rainHeight) {
          drop.y = -Math.random() * 300 - 50;
          drop.speed = 0.3 + Math.random() * 0.5;
          drop.length = Math.floor(5 + Math.random() * 6);
          drop.chars = Array.from({ length: 12 }, getRandomChar);
          drop.flickerInterval = Math.floor(4 + Math.random() * 10);
        }
      }

      rainAnimationFrameId = requestAnimationFrame(renderRain);
    };

    renderRain();

    // 2. Constellation Mesh Canvas Setup
    const canvas = canvasRef.current;
    let animationFrameId: number;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
          if (!canvas) return;
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

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
      }
    }

    return () => {
      window.removeEventListener('resize', handleRainResize);
      cancelAnimationFrame(rainAnimationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Slow Hacking Terminal Digital Rain Canvas Layer */}
      <canvas ref={rainCanvasRef} className="absolute inset-0 w-full h-full opacity-80" />

      {/* Dynamic Animated Canvas Constellation Mesh */}
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
