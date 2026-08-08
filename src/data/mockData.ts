import type { Profile, Skill, Project, Experience, SampleItem, Certification } from '../types';

export const MOCK_PROFILE: Profile = {
  name: "Kaveesha Vimukthi",
  title: "IT Undergraduate | Aspiring Cyber Security Analyst",
  avatarUrl: "/profile.jpg",
  animatedTaglines: [
    "IT Undergraduate | Aspiring Cyber Security Analyst",
    "Exploring the World of Cybersecurity",
    "AI Enthusiast",
    "Crafting High-Performance User Interfaces",
    "Graphic Designer"
  ],
  bio: "BSc (Hons) in IT student at the University of Kelaniya (Industrial Management). I am focused on Cybersecurity and Game Development and still learning more details of Java, C++ , and SQL. I enjoy solving complex problems, whether it's securing a network or coding game logic, and I'm looking to apply these skills in a practical environment.Also I'm doing part time Graphic Designing.",
  resumeSummary: "Aspiring Cyber Security Analyst and passionate IT student with hands-on experience in web development, database management, and emerging AI technologies. Eager to apply analytical problem-solving skills to real-world challenges while continuing to build robust, scalable applications.",
  location: "Kelaniya, Sri Lanka(Open to Remote)",
  email: "kaveeshavimukthi688@gmail.com",
  socials: {
    github: "https://github.com/Kaveesha-V",
    linkedin: "https://www.linkedin.com/in/kaveesha-vimukthi-544a08352",
    email: "mailto:kaveeshavimukthi688@gmail.com"
  },
  stats: {
    yearsExperience: 1,
    projectsCompleted: 5,
    techStackCount: 19,
    codeCommits: 100
  }
};

export const MOCK_SKILLS: Skill[] = [
  // Web & Mobile
  { id: '1', name: 'Web Development', category: 'Web & Mobile', level: 88, icon: 'Globe', description: 'Building responsive web applications, HTML5, CSS3, JavaScript, and modern frameworks' },
  { id: '2', name: 'React', category: 'Web & Mobile', level: 85, icon: 'Code', description: 'Component-driven UI development, hooks, state management, and interactive interfaces' },
  { id: '3', name: 'HTML (Still Learning)', category: 'Web & Mobile', level: 80, icon: 'FileCode', description: 'Semantic structure, web standards, form controls, and accessible page layouts' },
  { id: '4', name: 'CSS & Styling', category: 'Web & Mobile', level: 85, icon: 'Palette', description: 'Modern CSS3 layouts, Flexbox, Grid, custom styling, and responsive user interfaces' },
  { id: '5', name: 'Mobile App Development (Still Learning)', category: 'Web & Mobile', level: 65, icon: 'Smartphone', description: 'Cross-platform mobile UI concepts, layout design, and mobile application development' },

  // Programming Languages
  { id: '6', name: 'Java (Still Learning)', category: 'Programming Languages', level: 70, icon: 'Code', description: 'Object-Oriented Programming (OOP), core logic, control structures, and algorithms' },
  { id: '7', name: 'C++ (Still Learning)', category: 'Programming Languages', level: 65, icon: 'Terminal', description: 'System-level programming concepts, memory management, core algorithms, and game logic' },
  { id: '8', name: 'Python (Still Learning)', category: 'Programming Languages', level: 72, icon: 'Terminal', description: 'Scripting, automation logic, data processing, and basic AI/ML exploration' },

  // Cyber Security & Tools
  { id: '12', name: 'Linux (Still Learning)', category: 'Cyber Security & Tools', level: 75, icon: 'Terminal', description: 'Linux CLI commands, bash shell scripting, system permissions, security tools, and server environment navigation' },
  { id: '19', name: 'Antigravity', category: 'Cyber Security & Tools', level: 90, icon: 'Bot', description: 'Advanced AI coding assistant environment, prompt engineering, and agentic workflows' },

  // Databases & Systems
  { id: '9', name: 'SQL (Still Learning)', category: 'Databases & Systems', level: 75, icon: 'Database', description: 'Relational database design, SQL queries, table joins, and database management' },
  { id: '10', name: 'PostgreSQL', category: 'Databases & Systems', level: 78, icon: 'Database', description: 'Relational schema design, complex queries, table indexing, and structured data storage' },
  { id: '11', name: 'MySQL Database', category: 'Databases & Systems', level: 80, icon: 'Database', description: 'Relational database administration, SQL queries, table indexing, and structured database design' },

  // Design & Creative
  { id: '13', name: 'Adobe Photoshop', category: 'Design & Creative', level: 90, icon: 'Palette', description: 'Photo editing, digital artwork, raster graphic composition, and UI asset creation' },
  { id: '14', name: 'Adobe After Effects', category: 'Design & Creative', level: 85, icon: 'Video', description: 'Motion graphics, visual effects, motion UI prototyping, and animation editing' },
  { id: '15', name: 'Adobe Illustrator', category: 'Design & Creative', level: 88, icon: 'Layers', description: 'Vector logo design, iconography, branding assets, and scalable graphic creation' },
  { id: '16', name: 'Canva Pro', category: 'Design & Creative', level: 95, icon: 'Sparkles', description: 'Rapid UI/UX wireframing, social media graphics, presentation templates, and visual assets' },
  { id: '17', name: 'Graphic Designing', category: 'Design & Creative', level: 92, icon: 'Palette', description: 'Visual communication, poster & banner design, brand identity, and UI layout concepts' },
  { id: '18', name: 'Video Editing', category: 'Design & Creative', level: 85, icon: 'Video', description: 'Video post-production, timeline editing, visual transitions, and multimedia production' }
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Fertilizer Shop Management System',
    description: 'A full-stack management system designed for inventory, sales, and customer tracking in a fertilizer shop.',
    longDescription: 'A comprehensive 1-year ongoing full-stack project focused on managing fertilizer shop operations. Features include stock level tracking, sales records, customer invoicing, supplier details, and automated inventory reports.',
    tags: ['Java', 'SQL', 'React', 'Full Stack', 'Database'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    architectureHighlights: [
      'Full-stack system architecture managing inventory, stock levels, and sales records',
      'Relational database schema designed for efficient transaction and customer management',
      '1-year ongoing comprehensive software development lifecycle project'
    ],
    metrics: '🌱 1-Year Comprehensive Project | Ongoing Development'
  },
  {
    id: 'proj-2',
    title: 'Movies & Games Review Platform',
    description: 'Unified tracker with live TMDb & Steam APIs, custom Watched/Completed and Unwatched/Backlog lists, plus a Buy Now, Pay Later (BNPL) wishlist payment roadmap!',
    longDescription: 'A unified platform created to track and organize personal media libraries into custom "Watched/Completed" and "Unwatched/Backlog" lists for both movies and video games using live data from TMDb and Steam APIs. In future updates, BNPL (Buy Now, Pay Later) payment integration will allow gamers to purchase games from their wishlist in flexible installments.',
    tags: ['React', 'TMDb API', 'Steam API', 'BNPL Roadmap', 'UI/UX Design'],
    category: 'Web',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    architectureHighlights: [
      'Organizes media into custom "Watched/Completed" & "Unwatched/Backlog" libraries via TMDb & Steam live APIs',
      'Custom visual UI/UX layout crafted for seamless movie & game discovery',
      'Roadmap: Buy Now, Pay Later (BNPL) installment payments for purchasing wishlist games directly'
    ],
    metrics: '🎬 TMDb & Steam Live APIs | BNPL Roadmap'
  },
  {
    id: 'proj-3',
    title: '2D Game Development (Raylib)',
    description: 'Developed a 2D game in C++ using the Raylib graphics library.',
    longDescription: 'Built a 2D game using C++ and the Raylib graphics library, implementing core game mechanics, sprite rendering, collision detection, game state management, and player input logic.',
    tags: ['C++', 'Raylib', 'Game Dev', '2D Engine', 'OOP'],
    category: 'Game Dev',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    architectureHighlights: [
      'Low-level C++ game logic using the Raylib multimedia framework',
      'Custom game loop, sprite rendering, and collision detection engine',
      'Optimized frame rates and memory management'
    ],
    metrics: '🎮 C++ & Raylib 2D Game Engine'
  },
  {
    id: 'proj-4',
    title: 'Online Book Shop Management System',
    description: 'Developed an online bookshop management system using Java and SQL.',
    longDescription: 'An end-to-end management application for bookstore operations, managing book catalogs, customer orders, inventory updates, and SQL relational tables.',
    tags: ['Java', 'SQL', 'Database Management', 'OOP'],
    category: 'Full Stack',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    architectureHighlights: [
      'Object-Oriented Programming structure implemented in Java',
      'SQL database tables designed for book inventory, orders, and user queries',
      'Structured record updating and reporting system'
    ],
    metrics: '📚 Java & SQL Management System'
  },
  {
    id: 'proj-5',
    title: 'Responsive Web Development Project',
    description: 'Developed responsive, scalable web applications with clean visual design.',
    longDescription: 'Created visually appealing, responsive web interfaces combining HTML, CSS, JavaScript, and modern frameworks with smooth user navigation and mobile-first layouts.',
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design'],
    category: 'Web',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    featured: false,
    architectureHighlights: [
      'Clean semantic HTML structure with responsive CSS flexbox and grid layouts',
      'Interactive components and smooth client-side performance',
      'Cross-device compatibility and screen size responsiveness'
    ],
    metrics: '⚡ Scalable & Responsive Web Interface'
  },
  {
    id: 'proj-6',
    title: 'Portfolio Website',
    description: 'Developed responsive, scalable web applications featuring clean visual design, intuitive user interfaces, and optimized cross-device performance.',
    longDescription: 'Detail-oriented developer skilled in building responsive, scalable web applications with clean visual design and optimal user experience.',
    tags: ['CSS', 'React', 'git', 'Vercel', 'deno'],
    category: 'Web',
    imageUrl: '/portfolio-screenshot.png',
    featured: false,
    architectureHighlights: [
      'Modern dark-mode UI layout featuring custom gradient typography, glowing CTA elements, and dynamic floating stats cards',
      'Integrated interactive AI Assistant chatbot widget with dedicated header status and floating action access',
      'Modular component structure with single-page section navigation and real-time availability status badge'
    ],
    metrics: '⚡ Live Interactive AI Assistant & Modern Component Architecture'
  },

];

export const MOCK_EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    company: 'Bank of Ceylon (BOC), Pallebedda',
    role: 'Intern (School Leaver)',
    period: '2024 — 2025',
    location: 'Pallebedda, Sri Lanka',
    description: 'Gained hands-on experience in office operations, customer service, and professional banking environments.',
    bulletPoints: [
      'Managed daily office administration tasks, customer support inquiries, and document processing.',
      'Gained deep experience in office operations and professional banking standards.',
      'Developed strong teamwork, problem-solving, and communication skills in a corporate setting.'
    ],
    techUsed: ['Banking Operations', 'Office Administration', 'Customer Service', 'Data Management'],
    current: false
  },
  {
    id: 'exp-2',
    company: 'Freelance / Self-Employed',
    role: 'Part-time Graphic Designer & Video Editor',
    period: '2025 — Present',
    location: 'Remote',
    description: 'Designing visual graphic assets, social media branding, promotional banners, and video editing for clients.',
    bulletPoints: [
      'Created visual graphics, branding templates, poster designs, and social media banners using Photoshop, Illustrator, and Canva Pro.',
      'Produced promo video edits, motion cuts, and multimedia content using After Effects & video editing tools.',
      'Collaborated with clients to translate visual concepts into engaging multimedia assets.'
    ],
    techUsed: ['Photoshop', 'After Effects', 'Illustrator', 'Canva Pro', 'Video Editing', 'Graphic Design'],
    current: true,
    driveUrl: 'https://bit.ly/4yRuaKp'
  }
];

export const MOCK_SAMPLES: SampleItem[] = [
  {
    id: 'sample-1',
    title: 'Harithasvara 2.0 Poster Design',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/harithasvara-2.png'
  },
  {
    id: 'sample-2',
    title: 'Members Registration 1',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/corporate-business.png'
  },
  {
    id: 'sample-3',
    title: 'Podcast Cover',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/podcast-cover.png'
  },
  {
    id: 'sample-4',
    title: 'Members Registration 2',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/inkspire-1.png'
  },
  {
    id: 'sample-5',
    title: 'Members Registration 3',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: 'public/samples/inkspire-2.png'
  },
  {
    id: 'sample-6',
    title: 'Orientation Event Banner',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/orientation.png'
  },
  {
    id: 'sample-7',
    title: 'Registration Poster Design',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/registration.png'
  },
  {
    id: 'sample-8',
    title: 'Closing Soon Promotional Graphic',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/closing-soon.png'
  },
  {
    id: 'sample-9',
    title: 'Guess The Theme Graphic Design',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/guess-the-theme.png'
  },
  {
    id: 'sample-10',
    title: 'Header Graphic',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/cleaning-service-header.png'
  },
  {
    id: 'sample-11',
    title: 'Graphic Layout',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/subheading-layout.png'
  },
  {
    id: 'sample-12',
    title: 'Creative Design Artwork 1',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/creative-artwork-1.jpeg'
  },
  {
    id: 'sample-13',
    title: 'Creative Design Artwork 2',
    category: 'Graphic Design',
    type: 'image',
    mediaUrl: '/samples/creative-artwork-2.jpeg'
  },
  {
    id: 'sample-14',
    title: 'VisionX Motion Video Edit',
    category: 'Video Editing',
    type: 'video',
    mediaUrl: '/samples/visionx.mp4'
  },
  {
    id: 'sample-15',
    title: 'Wedding Invitation Motion Edit',
    category: 'Video Editing',
    type: 'video',
    mediaUrl: '/samples/wedding-invitation.mp4'
  },
  {
    id: 'sample-16',
    title: 'Birthday Reel Video Edit',
    category: 'Video Editing',
    type: 'video',
    mediaUrl: '/samples/bday-2.mp4'
  }
];

export const STARTER_QUESTIONS = [
  "What projects has Kaveesha built recently?",
  "What is Kaveesha's tech stack and design skills?",
  "What certifications and qualifications does Kaveesha hold?",
  "Can you summarize his work experience?",
  "How can I contact Kaveesha for graphic design or tech roles?"
];

export const MOCK_CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Foundation of Cyber Security',
    issuer: 'Google Certification | Online Platform',
    category: 'Cyber Security',
    description: 'Foundations of Cybersecurity is the first course in the broader Google Cybersecurity Professional Certificate program (offered on platforms like Coursera and Google Skills).',
    skills: ['Google', 'Vulnerability Assessment', 'Threat Analysis', 'Cybersecurity'],
    linkedinUrl: 'https://www.linkedin.com/posts/kaveesha-vimukthi-544a08352_cybersecurity-googlecareercertificate-continuouslearning-share-7422137251905744896-5GCK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFgSEQQBvRaW62XqDS_eO6qA68JHJKsucIg'
  },
  {
    id: 'cert-2',
    title: 'Play it safe : Manage Security Risks',
    issuer: 'Google Certification | Online Platform',
    category: 'Cyber Security',
    description: 'Play It Safe: Manage Security Risks is the second course in the Google Cybersecurity Certificate. It builds directly on the introductory concepts from Course 1, diving deeper into how organizations identify, evaluate, and mitigate threats to protect their operations',
    skills: ['Google', 'Vulnerability Assessment', 'Threat Analysis', 'Cybersecurity'],
    linkedinUrl: 'https://www.linkedin.com/posts/kaveesha-vimukthi-544a08352_completion-certificate-for-play-it-safe-share-7425955417534431232-KQc2/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFgSEQQBvRaW62XqDS_eO6qA68JHJKsucIg'
  },
  {
    id: 'cert-3',
    title: 'Programming for Everybody phase 1',
    issuer: 'University of Michigan | Online Platform',
    category: 'Programming',
    description: 'This introductory Python course is the first step in the Python for Everybody Specialization (now known as the Python 3 Programming Specialization). It is designed for absolute beginners with no prior programming experience. The course focuses on the fundamentals of procedural programming using Python and takes learners from zero knowledge to being able to write simple scripts to process data.',
    skills: ['Python', 'Programming'],
    linkedinUrl: 'https://www.linkedin.com/posts/kaveesha-vimukthi-544a08352_python-programming-continuouslearning-share-7428849625417281536-_VBi/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFgSEQQBvRaW62XqDS_eO6qA68JHJKsucIg'
  },
  {
    id: 'cert-4',
    title: 'Connect and Protect: Networks and Network Security',
    issuer: 'Google Certification | Online Platform',
    category: 'Cyber Security',
    description: 'Connect and Protect: Networks and Network Security is the third course in the Google Cybersecurity Professional Certificate program. This course builds on the foundation established in the first two courses to equip learners with the knowledge and skills needed to design, implement, and manage secure network environments',
    skills: ['Google', 'Vulnerability Assessment', 'Threat Analysis', 'Cybersecurity'],
    linkedinUrl: 'https://www.linkedin.com/in/your-profile/'
  }
];
