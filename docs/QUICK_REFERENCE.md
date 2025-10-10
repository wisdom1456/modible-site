# Quick Reference

## Common Commands

### Development
```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run check        # Type check
```

### Content Creation
```bash
# Create new demo
node scripts/new-content.js demo "Title" slug

# Create new essay
node scripts/new-content.js essay "Title" slug

# Create new art
node scripts/new-content.js art "Title" slug
```

### Git Workflow
```bash
git add .
git commit -m "Description"
git push origin main    # Auto-deploys to Netlify
```

## File Locations

### Content
- Demos: `src/content/demos/slug.md`
- Essays: `src/content/essays/slug.md`
- Art: `src/content/art/slug.md`
- About/Meta: `src/content/meta/`

### Images
- Content images: `static/images/{type}/`
- OG images: `static/images/{type}/slug-og.png` (1200x630px)

### Music
- Audio files: `static/music/*.mp3`
- Playlist: `static/music/playlist.json`

### Components
- Layout: `src/lib/components/layout/`
- Content: `src/lib/components/content/`
- UI: `src/lib/components/ui/`
- Effects: `src/lib/components/effects/`

### Configuration
- Site config: `src/lib/config.ts`
- Styles: `src/lib/styles/`
- Types: `src/lib/types/`

## Content Frontmatter

### Demo
```yaml
---
type: demo
title: "Title"
slug: slug-name
description: "Description"
date: "2025-10-10"
featured: true
draft: false
tags: ["tag1", "tag2"]
technologies: ["Tech1", "Tech2"]
demo_url: "https://..."
github_url: "https://..."
og_image: "/images/demos/slug-og.png"
---
```

### Essay
```yaml
---
type: essay
title: "Title"
slug: slug-name
description: "Description"
date: "2025-10-10"
featured: true
draft: false
tags: ["tag1", "tag2"]
reading_time: "5 min"
og_image: "/images/essays/slug-og.png"
---
```

### Art
```yaml
---
type: art
title: "Title"
slug: slug-name
description: "Description"
date: "2025-10-10"
medium: "Digital"
dimensions: "1920x1080"
tags: ["tag1", "tag2"]
og_image: "/images/art/slug-og.png"
---
```

## Design Tokens

### Colors
```css
--neon-purple-900    /* Dark purple */
--neon-purple-500    /* Main purple */
--neon-purple-400    /* Light purple */
--terminal-green     /* Accent green */
--crt-black          /* Background */
--crt-white          /* Text */
```

### Spacing
```css
--space-xs    /* 4px */
--space-sm    /* 8px */
--space-md    /* 16px */
--space-lg    /* 24px */
--space-xl    /* 32px */
--space-xxl   /* 48px */
```

### Typography
```css
--font-display     /* Press Start 2P */
--font-interface   /* Epilogue */
--font-code        /* JetBrains Mono */
```

### Animation
```css
--duration-fast    /* 150ms */
--duration-normal  /* 200ms */
--duration-slow    /* 400ms */
```

## Component Usage

### Button
```svelte
<Button href="/path">Link Button</Button>
<Button on:click={handler}>Click Button</Button>
```

### Arcade Card
```svelte
<ArcadeCard
  title="Title"
  description="Description"
  imageUrl="/images/demos/image.png"
  href="/demos/slug"
  tags={["tag1", "tag2"]}
  featured={true}
/>
```

### Retro Panel
```svelte
<RetroPanel title="Panel Title">
  Content here
</RetroPanel>
```

### Embedded Music Player
```svelte
<EmbeddedMusicPlayer 
  src="/music/track.mp3" 
  title="Track Name" 
/>
```

## Breakpoints

```css
/* Mobile (default) */
@media (min-width: 768px) {  /* Tablet */
@media (min-width: 1024px) { /* Desktop */
```

## URLs

- **Live Site**: https://modible-site.netlify.app
- **GitHub**: https://github.com/wisdom1456/modible-site
- **Netlify**: https://app.netlify.com

## Environment Variables

Set in Netlify Dashboard:
- `PUBLIC_SITE_URL` - Site URL
- `PUBLIC_GA_ID` - Google Analytics ID (optional)

## Troubleshooting

### Build fails
```bash
rm -rf node_modules .svelte-kit
npm install
npm run build
```

### Content not showing
- Check `draft: false`
- Verify frontmatter YAML is valid
- Ensure file is in correct directory
- Rebuild: `npm run build`

### Images not loading
- Verify path starts with `/images/`
- Check file exists in `static/images/`
- Ensure filename matches exactly (case-sensitive)

## Documentation

- **[PROJECT_GUIDE.md](PROJECT_GUIDE.md)** - Full project documentation
- **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** - Content management
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide
- **[.cursorrules](../.cursorrules)** - AI assistant rules

---

**Quick Links:**
- [Add Demo](#content-creation)
- [Design Tokens](#design-tokens)
- [Component Usage](#component-usage)
- [Troubleshooting](#troubleshooting)

