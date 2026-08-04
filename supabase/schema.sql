-- Profile info (single row, used as chatbot context)
create table if not exists profile (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text not null,
  bio text,
  resume_summary text,
  location text,
  email text,
  socials jsonb
);

-- Skills table
create table if not exists skills (
  id uuid primary key default gen_random_uuid(),
  category text not null, -- Frontend / Backend / AI & Data / DevOps & Tools
  name text not null,
  level int default 80,
  icon text,
  description text
);

-- Projects table
create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  long_description text,
  tags text[],
  category text default 'All',
  image_url text,
  demo_url text,
  github_url text,
  featured boolean default false,
  architecture_highlights text[],
  metrics text,
  sort_order int default 0
);

-- Experience timeline table
create table if not exists experience (
  id uuid primary key default gen_random_uuid(),
  company text not null,
  role text not null,
  period text,
  location text,
  description text,
  bullet_points text[],
  tech_used text[],
  current boolean default false,
  start_date date,
  end_date date
);

-- Contact form submissions
create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz default now()
);

-- AI Chat Logs
create table if not exists chat_logs (
  id uuid primary key default gen_random_uuid(),
  session_id text,
  role text not null, -- 'user' | 'assistant'
  content text not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS) on all tables
alter table profile enable row level security;
alter table skills enable row level security;
alter table projects enable row level security;
alter table experience enable row level security;
alter table contact_messages enable row level security;
alter table chat_logs enable row level security;

-- RLS Policies: Public READ access for profile, skills, projects, experience
create policy "Allow public read access to profile" on profile for select using (true);
create policy "Allow public read access to skills" on skills for select using (true);
create policy "Allow public read access to projects" on projects for select using (true);
create policy "Allow public read access to experience" on experience for select using (true);

-- RLS Policies: Public INSERT access for contact_messages and chat_logs
create policy "Allow public insert to contact_messages" on contact_messages for insert with check (true);
create policy "Allow public insert to chat_logs" on chat_logs for insert with check (true);
