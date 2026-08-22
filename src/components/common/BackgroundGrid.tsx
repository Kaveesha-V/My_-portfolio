import React from 'react';
import { DigitalRain } from './DigitalRain';
import { ConstellationMesh } from './ConstellationMesh';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1: HTML5 Matrix Digital Rain Animated Canvas Background */}
      <DigitalRain fontSize={14} colSpacing={32} opacity={0.45} />

      {/* Layer 2: Interactive Dynamic Connected Dot Constellation Mesh */}
      <ConstellationMesh maxParticles={60} connectionDistance={135} mouseDistance={170} />

      {/* Layer 3: Cyber Security Radar Scanline Sweep */}
      <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-[#88EC11]/10 to-transparent pointer-events-none animate-cyber-scanline blur-[1px]" />

      {/* Layer 4: Grid Overlay Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      {/* Layer 5: Ambient Pulsing & Floating Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#88EC11]/12 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/2 -right-40 w-[35rem] h-[35rem] bg-[#70E000]/10 rounded-full blur-[160px] animate-float" />
      <div className="absolute bottom-10 left-1/4 w-[25rem] h-[25rem] bg-emerald-500/10 rounded-full blur-[130px] animate-pulse-glow" />
    </div>
  );
};


