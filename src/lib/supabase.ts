import { createClient } from '@supabase/supabase-js';
import { MOCK_PROFILE, MOCK_PROJECTS, MOCK_SKILLS, MOCK_EXPERIENCE, MOCK_CERTIFICATIONS, MOCK_ACTIVITIES } from '../data/mockData';
import type { Profile, Project, Skill, Experience, ContactMessage, ChatMessage, Certification, Activity } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-supabase-url.supabase.co');

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Data Fetching Helpers with Fallback
export async function getProfile(): Promise<Profile> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('profile').select('*').single();
      if (!error && data) {
        return {
          name: data.name || MOCK_PROFILE.name,
          title: data.title || MOCK_PROFILE.title,
          animatedTaglines: MOCK_PROFILE.animatedTaglines,
          bio: data.bio || MOCK_PROFILE.bio,
          resumeSummary: data.resume_summary || MOCK_PROFILE.resumeSummary,
          location: data.location || MOCK_PROFILE.location,
          email: data.email || MOCK_PROFILE.email,
          socials: data.socials || MOCK_PROFILE.socials,
          stats: MOCK_PROFILE.stats,
        };
      }
    } catch (e) {
      console.warn('Supabase fetch failed, falling back to mock data:', e);
    }
  }
  return MOCK_PROFILE;
}

export async function getProjects(): Promise<Project[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('sort_order', { ascending: true });
      if (!error && data && data.length > 0) {
        return data.map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          longDescription: item.long_description || item.description,
          tags: item.tags || [],
          category: item.category || 'All',
          imageUrl: item.image_url,
          demoUrl: item.demo_url,
          githubUrl: item.github_url,
          featured: item.featured ?? false,
          architectureHighlights: item.architecture_highlights || [],
          metrics: item.metrics,
        }));
      }
    } catch (e) {
      console.warn('Supabase projects fetch failed:', e);
    }
  }
  return MOCK_PROJECTS;
}

export async function getSkills(): Promise<Skill[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('skills').select('*');
      if (!error && data && data.length > 0) {
        return data as Skill[];
      }
    } catch (e) {
      console.warn('Supabase skills fetch failed:', e);
    }
  }
  return MOCK_SKILLS;
}

export async function getExperience(): Promise<Experience[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('experience').select('*');
      if (!error && data && data.length > 0) {
        return data.map((item) => {
          const mockMatch = MOCK_EXPERIENCE.find((m) => m.id === item.id || m.role === item.role || m.company === item.company);
          return {
            id: item.id,
            company: item.company,
            role: item.role,
            period: item.period,
            location: item.location,
            description: item.description,
            bulletPoints: item.bullet_points || item.bulletPoints || mockMatch?.bulletPoints || [],
            techUsed: item.tech_used || item.techUsed || mockMatch?.techUsed || [],
            current: item.current,
            driveUrl: item.drive_url || item.driveUrl || mockMatch?.driveUrl,
          };
        }) as Experience[];
      }
    } catch (e) {
      console.warn('Supabase experience fetch failed:', e);
    }
  }
  return MOCK_EXPERIENCE;
}

export async function getCertifications(): Promise<Certification[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('certifications').select('*');
      if (!error && data && data.length > 0) {
        return data as Certification[];
      }
    } catch (e) {
      console.warn('Supabase certifications fetch failed:', e);
    }
  }
  return MOCK_CERTIFICATIONS;
}

export async function getActivities(): Promise<Activity[]> {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('activities').select('*');
      if (!error && data && data.length > 0) {
        return data as Activity[];
      }
    } catch (e) {
      console.warn('Supabase activities fetch failed:', e);
    }
  }
  return MOCK_ACTIVITIES;
}

export async function sendContactMessage(msg: ContactMessage): Promise<{ success: boolean; error?: string }> {
  // 1. Web3Forms Free Instant Mobile Notification Service (Delivers to kaveeshavimukthi688@gmail.com)
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || 'eb2a6fba-a03d-45bc-8ad4-e82369e79ae9';

  if (web3FormsKey) {
    try {
      const formData = new FormData();
      formData.append('access_key', web3FormsKey);
      formData.append('name', msg.name);
      formData.append('email', msg.email);
      formData.append('subject', msg.subject || 'New Contact Inquiry');
      formData.append('message', msg.message);
      formData.append('from_name', 'Kaveesha Portfolio Notification');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const resData = await res.json();
      if (resData.success) {
        return { success: true };
      } else {
        console.warn('Web3Forms response error:', resData);
      }
    } catch (e) {
      console.warn('Web3Forms notification error:', e);
    }
  }

  // 2. Supabase Database Fallback
  if (supabase) {
    try {
      await supabase.from('contact_messages').insert([
        {
          name: msg.name,
          email: msg.email,
          subject: msg.subject,
          message: msg.message,
        },
      ]);
    } catch (e: any) {
      console.warn('Supabase contact insert error:', e);
    }
  }

  return { success: true };
}

// AI Chatbot Helper Function
export async function sendChatMessage(
  userQuery: string,
  history: ChatMessage[]
): Promise<string> {
  if (supabase) {
    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: userQuery, history },
      });
      if (!error && data?.response) {
        return data.response;
      }
    } catch (e) {
      console.warn('Supabase Chat Edge function unavailable, using client-side AI engine:', e);
    }
  }

  // Client-Side Context-Aware AI Engine fallback
  await new Promise((res) => setTimeout(res, 600));
  const query = userQuery.toLowerCase();

  if (query.includes('project') || query.includes('work') || query.includes('built') || query.includes('showcase') || query.includes('sniffer') || query.includes('packet')) {
    return `Kaveesha has built several software & cybersecurity projects:
• **CLI Network Packet Sniffer**: Custom CLI network packet sniffer built in Python using Scapy for real-time packet inspection (IP, TCP, UDP, ICMP), deep header decoding, filtering, and session data logging (.json/.txt).
• **Fertilizer Shop Management System**: Full-stack system managing inventory, stock levels, sales, and customer invoicing (1-year ongoing project).
• **Movies & Games Review Platform**: Unified tracker with live TMDb & Steam APIs, custom Watched/Completed and Unwatched/Backlog lists, plus a Buy Now, Pay Later (BNPL) wishlist payment roadmap!
• **2D Game Development (Raylib)**: 2D game built in C++ leveraging the Raylib graphics engine.
• **Online Book Shop Management System**: Java & SQL management system for bookstore operations.
• **Responsive Web Applications**: Scalable web apps built with HTML, CSS, JavaScript, and React.
You can explore interactive details and technical highlights in the Projects Showcase section above!`;
  }

  if (query.includes('skill') || query.includes('stack') || query.includes('tech') || query.includes('tool') || query.includes('design')) {
    return `Kaveesha's technical & creative skills include:
• **Programming Languages**: Java (still learning), C++ (still learning), Python (still learning), SQL
• **Web & Mobile**: Web Development, React, HTML, CSS, Mobile App Development (still learning)
• **Databases & Tools**: PostgreSQL, MySQL, Antigravity AI
• **Design & Media**: Graphic Designing, Video Editing, Adobe Photoshop, Adobe After Effects, Adobe Illustrator, Canva Pro.`;
  }

  if (query.includes('experience') || query.includes('job') || query.includes('history') || query.includes('role') || query.includes('boc')) {
    return `Kaveesha's work experience includes:
• **Intern (School Leaver)** at Bank of Ceylon (BOC), Pallebedda (2024 — 2025): Office operations, customer service, data management, and professional banking procedures.
• **Part-time Graphic Designer & Video Editor** (Freelance, 2025 — Present): Designing branding banners, poster graphics, Canva assets, and video edits for clients.`;
  }

  if (query.includes('sample') || query.includes('gallery') || query.includes('video') || query.includes('artwork')) {
    return `Kaveesha has a dedicated Creative Samples section featuring:
• **13 Graphic Design Projects**: Posters (Harithasvara 2.0, Registration), banners, podcast covers, and branding concepts.
• **3 Motion Video Edits**: VisionX video edit, Wedding Invitation motion clip, and Birthday Reel edit.
Feel free to check out the Samples section to view his full design gallery!`;
  }

  if (query.includes('volunteer') || query.includes('extracurricular') || query.includes('rotaract') || query.includes('violin') || query.includes('badminton') || query.includes('talent') || query.includes('media unit')) {
    return `Kaveesha's Volunteering & Extracurricular Activities include:
• **Co-Director**: Digital Media Avenue | Rotaract UOK
• **Member**: Media Unit | IMSSA UOK
• **Public Relation Coordinator**: Rota Tomorrow Project- Team 06 | Rotaract UOK
• **Visharadha in Violin Performance**: Sangeeth Visharad qualification for playing violin.
• **Talent Show 2025 Event Coordinator**: Planned and coordinated the department Talent Show 2025 event.
• **School Badminton Team Player**: Represented school in competitive badminton tournaments.`;
  }

  if (query.includes('contact') || query.includes('hire') || query.includes('email') || query.includes('phone') || query.includes('reach') || query.includes('location')) {
    return `You can reach out directly via the Contact form below, email Kaveesha at **kaveeshavimukthi688@gmail.com**, or call/WhatsApp at **+94 702293667**. Kaveesha is located at **No 60LA 1 ,Dambagahawela , Pallebedda** and is pursuing BSc (Hons) in IT at the University of Kelaniya!`;
  }

  return `Hello! I'm Kaveesha Vimukthi's AI assistant. Kaveesha is a BSc (Hons) in IT student at the University of Kelaniya focusing on Cyber Security, Web Development, Game Development (C++/Raylib), and Graphic Design & Video Editing. How can I help you learn more about his background, projects, or skills?`;
}
