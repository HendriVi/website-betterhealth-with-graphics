# BetterHealth with Graphics

The existing BetterHealth design is preserved while the underlying delivery and quality stack has been upgraded.

## Integrated repositories

- **Next.js** — App Router structure and static export for GitHub Pages.
- **Sharp** — deterministic generation and compression of social-preview and application icons.
- **web-vitals** — privacy-preserving field measurement for CLS, FCP, INP, LCP and TTFB. Measurements remain in the browser unless an analytics endpoint is added later.
- **shadcn/ui foundations** — typed, accessible primitives that reproduce the existing BetterHealth button and clinical-plate visual language.
- **Lighthouse CI** — automated performance, accessibility, best-practice and SEO checks.
- **Storybook** — isolated development and accessibility review for reusable UI components.

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run lhci
npm run storybook
```

Storybook is isolated in its own package so it does not increase the production dependency surface or slow the GitHub Pages deployment.

## Deployment

GitHub Pages builds the static `out/` directory through `.github/workflows/pages.yml`.

## Rollback

The original static implementation is preserved on branch:

`backup/pre-performance-integration-2026-07-21`
