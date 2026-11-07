/* ============================================================
   ResuMate — site configuration
   ------------------------------------------------------------
   Paste your Supabase project's values below to connect the
   backend (login, signup and saved resumes).

   Where to get them:
   1. Go to https://supabase.com and open your project.
   2. Open "Project Settings" (gear icon) -> "API".
   3. Copy "Project URL"        -> SUPABASE_URL
      Copy "anon public" key    -> SUPABASE_ANON_KEY

   The anon key is safe to use in a public website — it only
   allows what your Row Level Security policies allow.
   NEVER paste the "service_role" key here; that one is secret.

   Leave both values empty ("") to run the site in demo mode:
   no login is required and resumes are stored only in the
   visitor's own browser (localStorage).
   ============================================================ */
window.RESUMATE_CONFIG = {
  SUPABASE_URL: "https://uowcyslfcwabmlpuzmtx.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvd2N5c2xmY3dhYm1scHV6bXR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3NTQ0NjAsImV4cCI6MjEwODMzMDQ2MH0.YPNo_7z5GQ_X-8LCjOF3YkIMidxthHtD5f4AbI3g1U4"
};
