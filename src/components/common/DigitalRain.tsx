import React, { useEffect, useRef } from 'react';

// Strictly restricted to: English uppercase letters (A-Z), numbers (0-9), and basic math operators (+ - * / = < > % ^ parentheses)
const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-*/=<>%^()';

interface DigitalRainProps {
  fontSize?: number;
  colSpacing?: number;
  opacity?: number;
}

interface RainStream {
  x: number;
  y: number; // Float character row
  speed: number; // Slow float advance per frame (~0.2 to 0.45)
  prevHeadRow: number;
  headChar: string;
  active: boolean;
}

export const DigitalRain: React.FC<DigitalRainProps> = ({
  fontSize = 14,
  colSpacing = 30, // Spaced out columns to reduce density
  opacity = 0.6,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastFrameTime = 0;
    const TARGET_FPS = 25;
    const FRAME_INTERVAL = 1000 / TARGET_FPS; // ~40ms per frame

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const getRandomChar = () =>
      CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length));

    // Get current theme colors dynamically from CSS custom properties
    const getThemeColors = () => {
      const computed = getComputedStyle(document.documentElement);
      const isLight = document.documentElement.classList.contains('light');

      const rainColor =
        computed.getPropertyValue('--rain-color').trim() ||
        (isLight ? '#16a34a' : '#88ec11');
      const rainLead =
        computed.getPropertyValue('--rain-lead').trim() ||
        (isLight ? '#0f172a' : '#e2fbc4');
      const bgFade =
        computed.getPropertyValue('--rain-bg-fade').trim() ||
        (isLight ? 'rgba(248, 250, 252, 0.06)' : 'rgba(11, 11, 12, 0.05)');

      return { rainColor, rainLead, bgFade, isLight };
    };

    // Initialize sparse, slow rain streams
    const initStreams = (): RainStream[] => {
      const numCols = Math.floor(width / colSpacing);
      const streams: RainStream[] = [];

      for (let i = 0; i < numCols; i++) {
        // Sparse distribution: ~50% of columns are active streams
        const active = i % 2 === 0 || i % 5 === 0;
        const totalRows = Math.ceil(height / fontSize);
        // Stagger drops well above the screen
        const startY = -Math.floor(Math.random() * totalRows * 1.6);
        // Relaxed calm speed: 0.18 to 0.42 rows per frame (~4.5 to 10.5 chars/sec)
        const speed = 0.18 + Math.random() * 0.24;

        streams.push({
          x: i * colSpacing + Math.floor((colSpacing - fontSize) / 2),
          y: startY,
          speed,
          prevHeadRow: startY,
          headChar: getRandomChar(),
          active,
        });
      }
      return streams;
    };

    let streams = initStreams();

    // Draw full background once initially
    const initBackground = () => {
      const { isLight } = getThemeColors();
      ctx.fillStyle = isLight ? '#f8fafc' : '#0b0b0c';
      ctx.fillRect(0, 0, width, height);
    };

    initBackground();

    // Render a single static representation if prefers-reduced-motion is active
    const renderStaticFrame = () => {
      initBackground();
      const { rainColor, rainLead } = getThemeColors();
      ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        if (!stream.active) continue;

        const columnLength = Math.floor(5 + Math.random() * 8);
        const startRow = Math.floor(Math.random() * (height / fontSize - columnLength));

        for (let j = 0; j < columnLength; j++) {
          const y = (startRow + j) * fontSize;
          if (y >= 0 && y < height) {
            ctx.fillStyle = j === columnLength - 1 ? rainLead : rainColor;
            ctx.globalAlpha =
              j === columnLength - 1 ? 0.8 : (j / columnLength) * 0.35 + 0.1;
            ctx.fillText(getRandomChar(), stream.x, y);
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    // Main calm 25fps animated matrix rain step
    const drawFrame = () => {
      const { rainColor, rainLead, bgFade } = getThemeColors();

      // Semi-transparent overlay redraw each frame for the smooth fading trail effect
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, width, height);

      ctx.font = `600 ${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < streams.length; i++) {
        const stream = streams[i];
        if (!stream.active) continue;

        const currentHeadRow = Math.floor(stream.y);

        // When the drop moves to a new row, redraw previous head in trail color and paint new head
        if (currentHeadRow !== stream.prevHeadRow) {
          const prevY = stream.prevHeadRow * fontSize;
          if (prevY >= 0 && prevY < height) {
            ctx.fillStyle = rainColor;
            ctx.fillText(stream.headChar, stream.x, prevY);
          }

          const currentY = currentHeadRow * fontSize;
          if (currentY >= 0 && currentY < height + fontSize) {
            const nextChar = getRandomChar();
            stream.headChar = nextChar;
            ctx.fillStyle = rainLead;
            ctx.fillText(nextChar, stream.x, currentY);
          }

          stream.prevHeadRow = currentHeadRow;
        }

        // Slow advance
        stream.y += stream.speed;

        // Reset column back above screen when it passes bottom
        if (stream.y * fontSize > height) {
          if (Math.random() > 0.96) {
            const totalRows = Math.ceil(height / fontSize);
            stream.y = -Math.floor(Math.random() * totalRows * 0.8) - 2;
            stream.prevHeadRow = Math.floor(stream.y);
            stream.speed = 0.18 + Math.random() * 0.24;
            stream.headChar = getRandomChar();
          }
        }
      }
    };

    // Animation loop with frame rate throttling (~25fps)
    const render = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(render);

      const elapsed = currentTime - lastFrameTime;
      if (elapsed < FRAME_INTERVAL) return;

      lastFrameTime = currentTime - (elapsed % FRAME_INTERVAL);
      drawFrame();
    };

    // Motion preference handling
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const startOrStop = () => {
      if (motionQuery.matches) {
        cancelAnimationFrame(animationFrameId);
        renderStaticFrame();
      } else {
        lastFrameTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };

    startOrStop();

    const handleMotionChange = () => {
      startOrStop();
    };

    motionQuery.addEventListener('change', handleMotionChange);

    // Responsive window resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      streams = initStreams();

      if (motionQuery.matches) {
        renderStaticFrame();
      } else {
        initBackground();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, [fontSize, colSpacing]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity,
      }}
      aria-hidden="true"
    />
  );
};
