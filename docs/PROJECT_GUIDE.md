# Modible Project Guide

## Overview

**Modible** is a retro-futuristic personal brand website built with SvelteKit, featuring interactive demos, essays, and art. The site combines 90s computing aesthetics with modern web performance.

- **Live Site**: https://modible-site.netlify.app
- **Repository**: https://github.com/wisdom1456/modible-site
- **Stack**: SvelteKit + TypeScript + Tailwind CSS + MDsveX

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run check
```

## Project Structure

```
modible-site/
├── src/
│   ├── content/           # Markdown content files
│   │   ├── demos/         # Interactive demos
│   │   ├── essays/        # Blog posts/essays
│   │   ├── art/           # Art pieces
│   │   └── meta/          # About, Now pages
│   ├── lib/
│   │   ├── components/    # Svelte components
│   │   │   ├── analytics/ # GA4 integration
│   │   │   ├── content/   # Content display components
│   │   │   ├── effects/   # Visual effects (scanlines)
│   │   │   ├── layout/    # Layout components
│   │   │   ├── seo/       # SEO components
│   │   │   └── ui/        # UI components
│   │   ├── stores/        # Svelte stores
│   │   ├── styles/        # Global styles & tokens
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   ├── routes/            # SvelteKit routes
│   └── app.html           # HTML template
├── static/                # Static assets
│   ├── images/            # Images
│   └── music/             # Music files
├── scripts/               # Build scripts
└── docs/                  # Documentation
```

## Key Features

### MVP Features (Implemented)
- ✅ **Arcade Cards Grid** - Retro-styled project cards
- ✅ **Cassette Loader** - Animated route transition loader
- ✅ **Defrag Animation** - Smooth grid reordering
- ✅ **Global Music Player** - Cassette-themed with smart pause/resume
- ✅ **Embedded Music Players** - For blog posts

### Technical Features
- ✅ Static site generation (no SSR)
- ✅ Mobile-first responsive design
- ✅ WCAG 2.1 AA accessibility
- ✅ SEO optimized (sitemap, RSS, OG images)
- ✅ Google Analytics 4 (privacy-friendly)
- ✅ Reduced-motion support
- ✅ File-based content management

## Configuration

### Environment Variables

Create a `.env` file (not committed):

```bash
PUBLIC_SITE_URL=https://modible-site.netlify.app
PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional
```

### Site Config

Edit `src/lib/config.ts` for site-wide settings:

```typescript
export const siteConfig = {
  title: 'Modible',
  description: 'Making modern technology accessible...',
  url: import.meta.env.PUBLIC_SITE_URL,
  social: {
    github: 'https://github.com/wisdom1456',
    // ...
  },
  // ...
}
```

## Content Types

### Frontmatter Schema

**Demo:**
```yaml
---
type: demo
title: "Neural Network Visualizer"
slug: neural-network-visualizer
description: "Interactive visualization of neural networks"
date: "2025-10-10"
updated: "2025-10-10"
featured: true
draft: false
tags: ["machine-learning", "visualization"]
technologies: ["TensorFlow.js", "D3.js"]
demo_url: "https://example.com/demo"
github_url: "https://github.com/..."
og_image: "/images/demos/neural-viz-og.png"
---
```

**Essay:**
```yaml
---
type: essay
title: "The Future of Web Design"
slug: future-web-design
description: "Exploring retro-futurism in modern web"
date: "2025-10-10"
featured: true
tags: ["design", "web"]
reading_time: "5 min"
og_image: "/images/essays/future-og.png"
---
```

**Art:**
```yaml
---
type: art
title: "Neon Dreams"
slug: neon-dreams
description: "Digital art piece"
date: "2025-10-10"
medium: "Digital"
dimensions: "1920x1080"
tags: ["digital", "neon"]
og_image: "/images/art/neon-dreams-og.png"
---
```

## Build & Deployment

### Build Process

```bash
npm run build
```

This generates:
- Static HTML/CSS/JS in `build/`
- Sitemap at `build/sitemap.xml`
- RSS feed at `build/rss.xml`
- Robots.txt at `build/robots.txt`

### Netlify Deployment

**Build settings:**
- Build command: `npm run build`
- Publish directory: `build`
- Node version: 18+

**Environment variables:**
- `PUBLIC_SITE_URL`: Your site URL
- `PUBLIC_GA_ID`: GA4 measurement ID (optional)

### Automatic Deployments

Push to `main` branch triggers automatic deployment on Netlify.

## Performance

### Bundle Sizes
- JS: ~34KB (gzipped)
- CSS: ~20KB (gzipped)

### Targets
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

### Optimizations
- Static site generation
- Font preloading
- Image lazy loading
- CSS custom properties
- Minimal JavaScript

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader support
- Focus indicators
- Reduced-motion support
- 44px minimum tap targets (mobile)
- Skip to content link

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## Troubleshooting

### Build fails
```bash
rm -rf node_modules .svelte-kit
npm install
npm run build
```

### Type errors
```bash
npm run check
```

### Music player not working
- Check MP3 files are in `static/music/`
- Verify `playlist.json` paths
- Check browser console for errors

## Contributing

1. Create a feature branch
2. Make your changes
3. Test locally (`npm run dev`)
4. Run type check (`npm run check`)
5. Commit and push
6. Create a pull request

## License

Private project - All rights reserved

## Support

For issues or questions, see:
- `docs/CONTENT_GUIDE.md` - Adding content
- `docs/DEPLOYMENT.md` - Deployment help
- GitHub Issues

