# TCL Remote — promo site

React 18 + TypeScript + Vite 6 + React Router 7. Design: Paper file «Quirky kale», page Promo.

## Run

```bash
pnpm install
pnpm dev      # http://localhost:5173/tclapp/
pnpm build
```

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) builds and publishes to GitHub Pages.
In the repo: Settings → Pages → Source: **GitHub Actions**.

No custom domain yet, so `vite.config.ts` has `base: "/tclapp/"` and the site lives at
https://norin-web.github.io/tclapp/. When a domain is attached, in one commit:
`base: "/"` and `public/CNAME` with the bare domain — otherwise the site goes blank.

## Content

- `src/app/content/site.ts` — every fact about the brand and the app (App Store ID, email, FAQ, specs).
  Values marked `PLACEHOLDER` are waiting for the owner.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, **verbatim** from the owner.
- Images live in `public/images/` and are always referenced through `img()` (`src/app/utils/img.ts`),
  so paths work under the `/tclapp/` base.

## Rules

- Reveal animations must never hide content: keep `utils/useReveal.ts` as is (fallbacks are gated on geometry).
- No smooth-scroll library; the header is sticky and never hides.
