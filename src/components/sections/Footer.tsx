import React from 'react';
import { ArrowUp } from 'lucide-react';
import type { Profile } from '../../types';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-transparent border-t border-white/10 pt-12 pb-8 overflow-hidden">

      {/* Top Neon Green Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#88EC11] to-transparent opacity-80" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">

          {/* Brand Logo with Profile Picture */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#88EC11] p-[2px] shadow-md shadow-[#88EC11]/30 overflow-hidden shrink-0">
              <img
                src="/profile.jpg"
                alt="Kaveesha Vimukthi"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <span className="text-sm font-bold text-white block font-kumbh">{profile.name}</span>
              <span className="text-[10px] font-mono-code text-[#88EC11] font-semibold">{profile.title}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-mono-code text-slate-400">
            <a href="#about" className="hover:text-[#88EC11] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#88EC11] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#88EC11] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#88EC11] transition-colors">Experience</a>
            <a href="#qualifications" className="hover:text-[#88EC11] transition-colors">Qualifications</a>
            <a href="#activities" className="hover:text-[#88EC11] transition-colors">Activities</a>
            <a href="#contact" className="hover:text-[#88EC11] transition-colors">Contact</a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#0b0b0c] hover:bg-[#88EC11] transition-all flex items-center gap-2 text-xs font-mono-code font-bold"
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-code text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Cybersecurity, Full-Stack Software & Visual Design</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
