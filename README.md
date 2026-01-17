# Torvyn AI Website

This repository contains the Torvyn AI marketing website built with Vite, React, TypeScript, and Tailwind CSS.

Core features:
- React + TypeScript
- Vite build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- lucide-react for icons

Local development

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

Notes
- Place your company logo at `/src/assets/logo.png` (this path is referenced in the header/footer).
- The contact form is a placeholder and will need a backend or integration with a CRM / email service in production.

Deployment
- Any static host supporting Vite build outputs can be used (Netlify, Vercel, GitHub Pages, S3 + CloudFront). Build with `npm run build` and deploy the `dist/` directory.
