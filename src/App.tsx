import { useState, useEffect } from 'react';
import { BackgroundGrid } from './components/common/BackgroundGrid';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/common/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Timeline } from './components/sections/Timeline';
import { Qualifications } from './components/sections/Qualifications';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { ChatWidget } from './components/chat/ChatWidget';
import { getProfile, getProjects, getSkills, getExperience, getCertifications } from './lib/supabase';
import type { Profile, Project, Skill, Experience, Certification } from './types';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export function App() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [chatOpen, setChatOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    async function loadData() {
      try {
        const [profData, projData, skillData, expData, certData] = await Promise.all([
          getProfile(),
          getProjects(),
          getSkills(),
          getExperience(),
          getCertifications(),
        ]);
        setProfile(profData);
        setProjects(projData);
        setSkills(skillData);
        setExperiences(expData);
        setCertifications(certData);
      } catch (err) {
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-[#0b0b0c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#88EC11] border-t-transparent animate-spin flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-[#88EC11]" />
          </div>
          <span className="text-xs font-mono-code text-[#88EC11] tracking-widest uppercase font-bold">
            Initialising Portfolio Engine...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#0b0b0c] text-slate-100 selection:bg-[#88EC11] selection:text-[#0b0b0c]">
      
      {/* Interactive Mouse Cursor & Spotlight */}
      <CustomCursor />

      {/* Dynamic Background Mesh */}
      <BackgroundGrid />

      {/* Navigation Header */}
      <Navbar
        onOpenChat={() => setChatOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="relative z-10 space-y-12">
        <Hero profile={profile} onOpenChat={() => setChatOpen(true)} />
        <About profile={profile} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Timeline experiences={experiences} />
        <Qualifications certifications={certifications} />
        <Contact profile={profile} />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating AI Chat Launcher Button (When widget is closed) */}
      {!chatOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#88EC11] text-[#0b0b0c] font-bold shadow-2xl shadow-[#88EC11]/40 border border-[#88EC11]/50 flex items-center justify-center group"
          aria-label="Open AI Assistant"
        >
          <Bot className="w-6 h-6 text-[#0b0b0c] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#0b0b0c] animate-ping" />
        </motion.button>
      )}

      {/* Floating Interactive Chat Widget */}
      <ChatWidget isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

export default App;
