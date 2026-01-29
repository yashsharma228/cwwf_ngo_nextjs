# Host Chahat Welfare Foundation Website for Free

Your Next.js site can be hosted **free** on **Vercel** (recommended) or **Netlify**. Both offer free SSL (HTTPS), a public URL, and automatic deploys from Git.

---

## Option 1: Vercel (Recommended for Next.js)

Vercel is made by the Next.js team. Free tier includes:
- Unlimited personal projects
- Automatic HTTPS
- Deploy on every Git push
- Global CDN

### Step 1: Push your code to GitHub

1. Create a GitHub account if you don’t have one: [github.com](https://github.com)
2. Create a new repository (e.g. `chahat-welfare-foundation`).
3. In your project folder, open a terminal and run:

```bash
cd c:\Users\HP\Downloads\NGO

# If this is not a Git repo yet:
git init
git add .
git commit -m "Initial commit - Chahat Welfare Foundation website"

# Add your GitHub repo (replace YOUR_USERNAME and YOUR_REPO with your details):
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

**If your Next.js app is inside the `web` folder:**  
Either push the whole `NGO` repo (and set “Root Directory” to `web` in Vercel), or push only the `web` folder in its own repo.

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign up (use “Continue with GitHub”).
2. Click **“Add New…”** → **“Project”**.
3. **Import** your GitHub repository.
4. **Configure:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** If the app is in `web`, click “Edit” and set **Root Directory** to `web`.
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** leave default
   - **Install Command:** `npm install` (default)
5. Click **Deploy**.

After a few minutes you’ll get a URL like:  
`https://your-project-name.vercel.app`

### Step 3: Custom domain (optional)

1. In the Vercel project, go to **Settings** → **Domains**.
2. Add your domain (e.g. `chahatwelfare.org`) and follow the DNS instructions.
3. Vercel will issue a free SSL certificate.

---

## Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign up (e.g. with GitHub).
2. **Add new site** → **Import an existing project** → connect GitHub and choose your repo.
3. **Build settings:**
   - **Base directory:** `web` (if the app is inside `web`)
   - **Build command:** `npm run build`
   - **Publish directory:** `web/.next` → **No.** For Next.js use the Netlify Next.js runtime.
   - Better: use **“Deploy with Netlify Next.js plugin”** so **Build command** is `npm run build` and **Publish directory** is the default (Netlify will use `.next`).
4. Click **Deploy site**.

You’ll get a URL like:  
`https://random-name-12345.netlify.app`

---

## Option 3: Deploy without Git (Vercel CLI)

If you don’t want to use GitHub:

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Go to your project root (where `package.json` is):
   ```bash
   cd c:\Users\HP\Downloads\NGO\web
   ```
3. Run:
   ```bash
   vercel
   ```
4. Log in when asked and follow the prompts. Your site will be deployed and you’ll get a URL.

To deploy updates, run `vercel` again (or link the project and use `vercel --prod` for production).

---

## Checklist before deploying

- [ ] Build runs locally: `cd web && npm run build`
- [ ] No secrets (API keys) committed in code
- [ ] If you use a custom domain later, update it in Vercel/Netlify DNS settings

---

## Summary

| Platform | Free tier        | Best for        |
|----------|------------------|-----------------|
| **Vercel** | Yes, generous  | Next.js (recommended) |
| **Netlify** | Yes           | Next.js, static sites |

**Recommended:** Use **Vercel** with GitHub. Set **Root Directory** to `web` if your app lives in the `web` folder.
