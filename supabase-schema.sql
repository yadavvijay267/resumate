-- ============================================================
-- ResuMate — Supabase database schema
-- ------------------------------------------------------------
-- HOW TO RUN:
--   1. Open your project at https://supabase.com
--   2. Left sidebar -> "SQL Editor" -> "New query"
--   3. Paste this ENTIRE file and click "Run".
--   Safe to run once on a fresh project. It creates the
--   profiles + resumes tables, security policies (RLS),
--   and the trigger that auto-creates a profile on signup.
-- ============================================================

-- Needed for gen_random_uuid()
create extension if not exists pgcrypto;

-- ------------------------------------------------------------
-- PROFILES — one row per user, mirrors auth.users
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id              uuid primary key references auth.users (id) on delete cascade,
  full_name       text,
  email           text,
  plan            text not null default 'free'
                    check (plan in ('free', 'pro_7d', 'pro_1m', 'pro_3m')),
  plan_expires_at timestamptz,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- ------------------------------------------------------------
-- RESUMES — every resume a user saves in the builder
-- The full resume data lives in `content` (jsonb):
--   { personal: {...}, skills: "...", experience: [...],
--     education: [...], projects: [...] }
-- ------------------------------------------------------------
create table if not exists public.resumes (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users (id) on delete cascade,
  title      text not null default 'Untitled Resume',
  template   text not null default 'corporate-modern',
  content    jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists resumes_user_updated_idx
  on public.resumes (user_id, updated_at desc);

-- ------------------------------------------------------------
-- updated_at — keep it fresh automatically on every update
-- ------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

drop trigger if exists resumes_set_updated_at on public.resumes;
create trigger resumes_set_updated_at
  before update on public.resumes
  for each row execute function public.set_updated_at();

-- ------------------------------------------------------------
-- AUTO-PROFILE — when a user signs up, create their profile row
-- ------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    new.raw_user_meta_data ->> 'full_name',
    new.email
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ------------------------------------------------------------
-- ROW LEVEL SECURITY — users can only touch their own rows
-- ------------------------------------------------------------
alter table public.profiles enable row level security;
alter table public.resumes  enable row level security;

-- profiles policies
drop policy if exists "Profiles: read own"   on public.profiles;
drop policy if exists "Profiles: insert own" on public.profiles;
drop policy if exists "Profiles: update own" on public.profiles;
drop policy if exists "Profiles: delete own" on public.profiles;

create policy "Profiles: read own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Profiles: insert own"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Profiles: update own"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create policy "Profiles: delete own"
  on public.profiles for delete
  using (auth.uid() = id);

-- resumes policies
drop policy if exists "Resumes: read own"   on public.resumes;
drop policy if exists "Resumes: insert own" on public.resumes;
drop policy if exists "Resumes: update own" on public.resumes;
drop policy if exists "Resumes: delete own" on public.resumes;

create policy "Resumes: read own"
  on public.resumes for select
  using (auth.uid() = user_id);

create policy "Resumes: insert own"
  on public.resumes for insert
  with check (auth.uid() = user_id);

create policy "Resumes: update own"
  on public.resumes for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Resumes: delete own"
  on public.resumes for delete
  using (auth.uid() = user_id);
