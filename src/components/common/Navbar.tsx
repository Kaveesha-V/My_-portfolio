import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenChat: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, theme = 'dark', onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Qualifications', href: '#qualifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'qualifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#0b0b0c]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/80'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with User Profile Image */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full bg-[#88EC11] p-[2px] shadow-lg shadow-[#88EC11]/30 group-hover:scale-105 group-hover:shadow-[#88EC11]/60 transition-all overflow-hidden shrink-0">
            <img
              src="/profile.jpg"
              alt="Kaveesha Vimukthi"
              className="w-full h-full object-cover object-top rounded-full"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm sm:text-lg font-bold tracking-tight text-white group-hover:text-[#88EC11] transition-colors flex items-center gap-1.5 truncate">
              <span>Kaveesha Vimukthi</span>
              <span className="w-2 h-2 rounded-full bg-[#88EC11] animate-pulse shrink-0" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono-code text-[#88EC11] tracking-wider uppercase font-semibold truncate">
              Graphic Designer & Aspiring Cyber Security Analyst
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#18181c]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive ? 'text-[#88EC11]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#88EC11]/15 border border-[#88EC11]/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#88EC11] border border-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={onOpenChat}
            className="px-4 py-2 rounded-full bg-[#88EC11]/10 hover:bg-[#88EC11]/20 text-[#88EC11] border border-[#88EC11]/40 text-xs font-mono-code font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-md shadow-[#88EC11]/10"
          >
            <Bot className="w-4 h-4 text-[#88EC11]" />
            <span>AI Assistant</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-white/5 text-slate-300"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}
          <button
            onClick={onOpenChat}
            className="p-2 rounded-full bg-[#88EC11]/10 text-[#88EC11] border border-[#88EC11]/30"
            aria-label="AI Assistant"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0b0c]/95 border-b border-white/10 backdrop-blur-xl px-4 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-[#88EC11] hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenChat();
                  }}
                  className="w-full py-3 rounded-xl bg-[#88EC11] text-[#0b0b0c] font-bold text-xs font-mono-code uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#88EC11]/25"
                >
                  <Bot className="w-4 h-4" />
                  <span>Chat with AI Assistant</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
