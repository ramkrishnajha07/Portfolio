# Ram Krishna Jha — Portfolio (React + Vite)

## Run locally
```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Deploy to Vercel

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repo
2. Go to https://vercel.com/new and import the repo
3. Vercel auto-detects Vite — build command `vite build`, output dir `dist` (default, no changes needed)
4. Click **Deploy**

**Option B — via CLI:**
```bash
npm i -g vercel
vercel
```

## Project structure
```
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

## Editing content
Each section's text/data lives at the top of its component file as a plain
array or object — edit those directly, no need to touch the JSX markup.

## Contact form
Submitting the form currently opens the visitor's email app with your
address, a subject, and their message pre-filled (see `handleSubmit` in
`src/components/Contact.jsx`) — works with zero backend on Vercel.

To make it submit silently instead:
1. Sign up at https://formspree.io and create a form
2. Add `action="https://formspree.io/f/xxxxxxx" method="POST"` to the
   `<form>` tag in `Contact.jsx`
3. Remove the `e.preventDefault()` / `mailto:` redirect in `handleSubmit`

## Customizing
- Colors: `:root` variables at the top of `src/index.css` (`--accent`, `--accent-2`, `--bg`)
- Avatar: swap the `RJ` initials `<div className="avatar-circle">` in `Hero.jsx` for an `<img>` with a real photo
