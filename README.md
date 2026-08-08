# 🚀 Kaveesha Vimukthi — Personal Portfolio & Interactive AI Resume

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A modern, high-performance personal portfolio application built for **Kaveesha Vimukthi** — IT Undergraduate at the **University of Kelaniya** specializing in **Cybersecurity**, **Web Development**, **Game Development (C++/Raylib)**, and **Graphic Design / Video Editing**.

---

## ✨ Features

- 🤖 **Interactive AI Assistant Widget**: Floating AI chatbot powered by AI integration for instant dynamic responses about background, projects, skills, and experience.
- ⚡ **Lightning Fast Performance**: Built with Vite and React 19 for instantaneous hot module replacement (HMR) and optimized build outputs.
- 🎨 **Modern Futuristic Aesthetic**: Crafted with glassmorphic cards, custom dark/light theme switching, animated background grids, and smooth scroll animations via Framer Motion.
- 📁 **Dynamic Data Layer**: Integrated with Supabase database queries with seamless client-side mock data fallback out-of-the-box.
- 🛠️ **Filterable Projects & Code Samples**: Interactive tabbed project gallery showcasing tech stacks, live demos, repository links, and code previews.
- 📩 **Direct Contact Engine**:
  - Direct email submission via **Web3Forms API**.
- 📜 **Interactive Timeline & Certifications**: Visual experience journey and verified qualifications list.
- 📱 **Fully Responsive**: Mobile-first design tested across mobile, tablet, and widescreen viewports.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, Vite |
| **Styling & Motion** | Tailwind CSS v3, Framer Motion, Lucide React Icons |
| **Backend & DB** | Supabase (PostgreSQL), Supabase Edge Functions |
| **Messaging & APIs** | Web3Forms API, Anthropic Claude, TMDb API, Steam API |
| **Deployment** | Vercel / Netlify |
| **Tooling & Code Quality**| Oxlint, ESLint, PostCSS, Autoprefixer |

---

## 📁 Project Structure

```text
My-Portfolio/
├── public/                 # Static public assets & favicons
├── src/
│   ├── assets/             # Images, logos, and media files
│   ├── components/
│   │   ├── chat/           # Interactive AI ChatWidget components
│   │   ├── common/         # Navbar, BackgroundGrid, UI badges, buttons
│   │   └── sections/       # Hero, About, Skills, Projects, Timeline, Contact, Footer
│   ├── data/               # Local mock data for offline fallback
│   ├── lib/                # Supabase client & API services initialization
│   ├── types/              # TypeScript interfaces and data models
│   ├── utils/              # Helper utilities & class mergings
│   ├── App.tsx             # Main application orchestrator
│   ├── main.tsx            # React entry point
│   └── index.css           # Global Tailwind & theme styling
├── supabase/               # Database migrations & Edge function definitions
├── .env.example            # Environment variables template
├── package.json            # Project dependencies & scripts
├── tailwind.config.js      # Custom theme colors & animations
├── vite.config.ts          # Vite build config
└── vercel.json             # Vercel deployment configuration
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0 or higher) or `yarn` / `pnpm`
- [Git](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Kaveesha-V/My_-portfolio.git
cd My_-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Copy `.env.example` to `.env` in the root directory:

```bash
cp .env.example .env
```

Open `.env` and fill in your keys (optional for local dev as full fallback mock data is included):

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://your-supabase-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Web3Forms API Key
VITE_WEB3FORMS_KEY=your-web3forms-key-here
```

### 4. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production

To create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📤 Adding & Pushing to GitHub

If you are initializing or updating this repository on GitHub, follow these step-by-step commands:

### Initialize & Commit Locally

```bash
# Initialize git (if not already initialized)
git init

# Stage all files
git add .

# Commit changes
git commit -m "feat: setup developer portfolio with React 19, Supabase & AI Assistant"
```

### Link Remote & Push

```bash
# Rename branch to main
git branch -M main

# Add remote repository (replace with your repository URL)
git remote add origin https://github.com/Kaveesha-V/My_-portfolio.git

# Push code to GitHub
git push -u origin main
```

---

## ⚙️ Environment Variables Reference

| Variable | Description | Required |
| :--- | :--- | :--- |
| `VITE_SUPABASE_URL` | Supabase project URL | Optional (Uses mock data if omitted) |
| `VITE_SUPABASE_ANON_KEY` | Supabase anonymous API key | Optional (Uses mock data if omitted) |
| `VITE_WEB3FORMS_KEY` | Web3Forms Access Key for contact email | Optional |
| `ANTHROPIC_API_KEY` | Anthropic Claude API Key (Supabase secrets) | Optional |

---

## 🌐 Deployment

### Deploying to Vercel

1. Push your code to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Click **"New Project"** and import your GitHub repository (`Kaveesha-V/My_-portfolio`).
4. Configure Framework Preset as **Vite**.
5. Add your Environment Variables under the **Environment Variables** section.
6. Click **Deploy**.

---

## 👨‍💻 Author

**Kaveesha Vimukthi**
- **Role**: Aspiring Cyber Security Analyst
- **GitHub**: [@Kaveesha-V](https://github.com/Kaveesha-V)
- **LinkedIn**: [Kaveesha Vimukthi](https://www.linkedin.com/in/kaveesha-vimukthi-544a08352)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
