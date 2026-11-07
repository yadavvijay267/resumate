# ResuMate — Supabase Backend Setup (Step by Step)

Ye guide bilkul simple hai. Bas steps follow karo, backend live ho jayega.
Total time: lagbhag 10 minute.

---

## Step 1 — Supabase par free account banao

1. Browser me [supabase.com](https://supabase.com) kholo.
2. "Start your project" par click karke GitHub ya Google se sign in kar lo.
   (Bilkul free hai, card nahi chahiye.)

## Step 2 — New Project banao

1. Dashboard me "New Project" button dabao.
2. Naam rakho: **resumate**
3. Ek strong database password set karo aur use kahi note kar lo
   (abhi ke liye is password ki roz zarurat nahi padegi).
4. Region me **Singapore** chuno (India ke sabse paas hai, site fast chalegi).
5. "Create new project" dabao aur 1–2 minute wait karo.

## Step 3 — Database tables banao (SQL chalao)

1. Left side ke menu me **SQL Editor** kholo aur "New query" dabao.
2. Isi folder ki **supabase-schema.sql** file kholo, uska **pura content copy** karo
   aur SQL Editor me paste kar do.
3. Neeche "Run" button dabao. "Success" aaye to samjho tables ban gaye.
   (Ye profiles aur resumes tables + unki security settings banata hai.)

## Step 4 — Email confirmation abhi band kar do

1. Left menu me **Authentication → Providers** kholo.
2. **Email** wale option ko kholo.
3. **"Confirm email"** wali setting ko **OFF** kar do aur Save dabao.
   (Isse signup karte hi user seedha login ho jayega — pehle test karne me asani hogi.
   Baad me chaho to ise wapas ON kar sakte ho.)

## Step 5 — Project URL aur anon key Muse ko bhejo

1. Left menu ke neeche **Project Settings (gear icon) → API** kholo.
2. Waha do cheezein milegi:
   - **Project URL**
   - **anon public** key (lambi wali key)
3. Ye dono copy karke **Muse ko bhej do** — Muse inhe site ki config file me daal dega.

> ⚠️ **Dhyan do:** anon key public hoti hai, ye site ke code me hi lagti hai — bhejna safe hai.
> Lekin wahi page par ek **service_role** key bhi hoti hai — wo **secret** hai.
> Use **kabhi kisi ko mat bhejo** aur site me kabhi mat daalo.

## Step 6 — Site URL set karo

1. Left menu me **Authentication → URL Configuration** kholo.
2. **Site URL** me apni live site ka address daalo (ye address Muse tumhe dega,
   site deploy hone ke baad).
3. Save kar do. (Ye isliye hai taaki login ke baad user wapas site par hi aaye.)

---

Bas itna hi! Step 5 ki do values milte hi Muse backend connect kar dega —
phir signup, login aur resume save karna sach me kaam karne lagega.
