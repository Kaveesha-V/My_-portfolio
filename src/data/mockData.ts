import type { Profile, Skill, Project, Experience, SampleItem, Certification } from '../types';

export const MOCK_PROFILE: Profile = {
  name: "Kaveesha Vimukthi",
  title: "IT Undergraduade | Aspiring Cyber Security Analyst",
  avatarUrl: "/profile.jpg",
  animatedTaglines: [
    "IT Undergraduade | Aspiring Cyber Security Analyst",
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
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:kaveeshavimukthi688@gmail.com"
  },
  stats: {
    yearsExperience: 1,
    projectsCompleted: 5,
    techStackCount: 18,
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

  // Databases & Tools
  { id: '9', name: 'SQL (Still Learning)', category: 'Databases & Tools', level: 75, icon: 'Database', description: 'Relational database design, SQL queries, table joins, and database management' },
  { id: '10', name: 'PostgreSQL', category: 'Databases & Tools', level: 78, icon: 'Database', description: 'Relational schema design, queries, table indexing, and structured data storage' },
  { id: '11', name: 'MySQL', category: 'Databases & Tools', level: 78, icon: 'Database', description: 'Relational database administration, queries, indexes, and database design' },
  { id: '12', name: 'Antigravity', category: 'Databases & Tools', level: 90, icon: 'Bot', description: 'Advanced AI coding assistant environment, prompt engineering, and agentic workflows' },

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
    title: 'Movies & Games Review Website',
    description: 'An interactive web platform for reviewing, rating, and showcasing trending movies and video games.',
    longDescription: 'Created as a leisure-time passion project combining visual media design and web development. Features interactive review listings, rating displays, category filtering, and custom graphics crafted with Photoshop & Canva Pro.',
    tags: ['Web Development', 'React', 'HTML', 'CSS', 'UI/UX Design'],
    category: 'Web',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    architectureHighlights: [
      'Interactive visual layout for rating and browsing movie and game reviews',
      'Custom visual graphics produced using Adobe Photoshop, Illustrator & Canva Pro',
      'Responsive interface optimized across desktop and mobile screens'
    ],
    metrics: '🎬 Passion Project | Leisure Activity'
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
  }
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
    title: 'Cybersecurity Fundamentals & Network Security',
    issuer: 'Professional Certification / Online Platform',
    date: '2025',
    category: 'Cyber Security',
    description: 'Specialized training in network security principles, threat analysis, vulnerability assessment, and defensive security strategies.',
    skills: ['Network Security', 'Vulnerability Assessment', 'Threat Analysis', 'Cybersecurity']
  },
  {
    id: 'cert-2',
    title: 'Full Stack Web Development & Modern Frameworks',
    issuer: 'University of Kelaniya & Online Courses',
    date: '2025',
    category: 'Web Development',
    description: 'Comprehensive certification covering HTML5, CSS3, JavaScript ES6+, React, Node.js backend integration, and responsive web design.',
    skills: ['React', 'HTML/CSS', 'JavaScript', 'Responsive Web Design', 'REST APIs']
  },
  {
    id: 'cert-3',
    title: 'Object-Oriented Programming (Java & C++)',
    issuer: 'University of Kelaniya (IT Department)',
    date: '2024 — 2025',
    category: 'Programming',
    description: 'In-depth coursework and practical projects focused on Object-Oriented Programming logic, algorithms, memory management, and game logic.',
    skills: ['Java', 'C++', 'OOP', 'Data Structures', 'Raylib']
  },
  {
    id: 'cert-4',
    title: 'Graphic Design & Video Editing Masterclass',
    issuer: 'Canva Pro & Adobe Creative Suite Training',
    date: '2024 — Present',
    category: 'Design & Creative',
    description: 'Advanced practical certification in visual media composition, branding banner design, poster design, motion graphic edits using Photoshop & After Effects.',
    skills: ['Adobe Photoshop', 'After Effects', 'Illustrator', 'Canva Pro', 'Motion Video']
  }
];
