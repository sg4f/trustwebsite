# SG4F — Next.js on Cloudflare Pages

- Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lottie
- i18n (EN/FR) with middleware redirect
- Public pages integrating your reference docs (Trust Layer, KPI Master, IT Stack)
- `/api/time` runs at the edge (not static)

## Cloudflare Pages — Build settings
Framework preset: **None**
Root directory: **sg4f_next_pages_ready** (if you keep this folder) or **empty** if you upload at repo root
Build command:
```
npm run pages:build
```
Output directory:
```
./.vercel/output/static
```

> Functions are also deployed from `.vercel/output/functions` (middleware + edge routes).

## Dev
```
npm i
npm run dev
# open http://localhost:3000/en
```

## Node.js compatibility (Cloudflare Workers)
We include a `wrangler.toml` with `nodejs_compat` in this folder so Pages uses Node compat during runtime.
