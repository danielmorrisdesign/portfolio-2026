# danielmorris.nl

Personal portfolio site. Built with [Astro](https://astro.build), deployed on Vercel.

---

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321)

## Build

```bash
npm run build
npm run preview   # preview the built site locally
```

---

## Adding / editing work

Work projects live in `src/data/work.js`.

Each project has:
- `slug` — URL segment, e.g. `appsmith` → `/work/appsmith`
- `index` — display number
- `title`, `role`, `period`, `tags`
- `shortDesc` — used for meta description
- `problem` — context section on the case study page
- `what` — what you did section
- `outcome` — results / outcomes section
- `artifacts` — array of image paths, e.g. `['/images/appsmith-1.png', ...]`

For images, put them in `public/images/` and reference as `/images/filename.png`.

---

## Deployment (Vercel + custom domain)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
gh repo create danielmorris-portfolio --public --push
# or: create repo on github.com, then:
# git remote add origin https://github.com/YOUR_USERNAME/danielmorris-portfolio.git
# git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your `danielmorris-portfolio` repo
4. Framework preset: **Astro** (auto-detected)
5. Click **Deploy** — done. You'll get a `*.vercel.app` URL.

### 3. Connect your domain

1. In Vercel, go to your project → **Settings → Domains**
2. Add `danielmorris.nl` and `www.danielmorris.nl`
3. Vercel will show you DNS records to add
4. Log into your domain registrar (wherever danielmorris.nl is registered)
5. Add the DNS records Vercel specifies (usually an A record + CNAME)
6. Wait up to 24h for DNS propagation (usually much faster)

---

## Project structure

```
src/
  data/
    work.js          ← edit this to update projects
  layouts/
    Layout.astro     ← base HTML shell
  pages/
    index.astro      ← homepage
    about.astro      ← about page
    work/
      [slug].astro   ← dynamic case study pages
  styles/
    global.css       ← design tokens + global styles
public/
  favicon.svg
  images/            ← put case study screenshots here
```
