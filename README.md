# VisaPilot Blog (GitHub Pages)

Chat-first browser assistant for visa/arrival-card forms, with page understanding, guided filling, and progressive memory.

Marketing site for `visa-pilot-extension`, built with Hugo + Hugoplate.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build production output:

```bash
npm run build
```

## Deployment

- GitHub Actions workflow: `.github/workflows/hugo.yml`
- Output directory: `public/`
- Before going live, update `baseURL` in `hugo.toml`.

## Content Entry Points

- Homepage hero/features: `content/english/_index.md`
- FAQ section: `content/english/sections/testimonial.md`
- CTA section: `content/english/sections/call-to-action.md`
- Site params/nav: `config/_default/params.toml`, `config/_default/menus.en.toml`
