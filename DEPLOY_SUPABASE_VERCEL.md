# Deploy to Supabase + Vercel

## 1) Create table in Supabase
1. Open your Supabase project SQL Editor.
2. Run the SQL from:
   - `supabase/contact_submissions.sql`

## 2) Add environment variables in Vercel
Add these variables to your Vercel project:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `CONTACT_WEBHOOK_URL` (optional)

## 3) Deploy with Vercel CLI
From project root:

```powershell
npx.cmd vercel link
npx.cmd vercel env add SUPABASE_URL production
npx.cmd vercel env add SUPABASE_SERVICE_ROLE_KEY production
npx.cmd vercel env add CONTACT_WEBHOOK_URL production
npx.cmd vercel --prod
```

## 4) Verify
1. Open deployed site.
2. Submit contact form.
3. Check rows in Supabase table `contact_submissions`.
