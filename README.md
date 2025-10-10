# Modible

> Making modern technology accessible through nostalgic aesthetics

A retro-futuristic personal brand website featuring interactive demos, essays, and art. Built with SvelteKit, combining 90s computing aesthetics with modern web performance.

**Live Site**: [modible-site.netlify.app](https://modible-site.netlify.app)

## Features

- 🎮 **Arcade Cards Grid** - Retro-styled project showcase
- 📼 **Cassette Loader** - Animated route transitions
- 🎵 **Music Player** - Global cassette-themed player with smart pause/resume
- 📱 **Mobile-First** - Responsive design optimized for all devices
- ♿ **Accessible** - WCAG 2.1 AA compliant
- ⚡ **Fast** - Static site generation, <100KB bundle
- 🎨 **Retro Effects** - CRT scanlines, neon glows, defrag animations

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
```

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com) + Custom CSS
- **Content**: [MDsveX](https://mdsvex.pngwn.io) (Markdown)
- **Deployment**: [Netlify](https://netlify.com)
- **Analytics**: Google Analytics 4 (privacy-friendly)

## Documentation

- **[Project Guide](docs/PROJECT_GUIDE.md)** - Architecture, configuration, troubleshooting
- **[Content Guide](docs/CONTENT_GUIDE.md)** - Adding demos, essays, art, and music
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Netlify deployment and monitoring
- **[Cursor Rules](.cursorrules)** - AI assistant guidelines

## Adding Content

Use the CLI scaffolding tool:

```bash
# Create a new demo
node scripts/new-content.js demo "Neural Network Visualizer" neural-network-visualizer

# Create a new essay
node scripts/new-content.js essay "The Future of Web Design" future-web-design

# Create a new art piece
node scripts/new-content.js art "Neon Dreams" neon-dreams
```

See [Content Guide](docs/CONTENT_GUIDE.md) for detailed instructions.

## Project Structure

```
modible-site/
├── src/
│   ├── content/           # Markdown content (demos, essays, art)
│   ├── lib/
│   │   ├── components/    # Svelte components
│   │   ├── stores/        # Global state
│   │   ├── styles/        # Global styles & tokens
│   │   └── utils/         # Utilities
│   └── routes/            # SvelteKit routes
├── static/                # Static assets (images, music)
├── docs/                  # Documentation
└── scripts/               # Build scripts
```

## Development

```bash
# Type check
npm run check

# Build
npm run build

# Preview build
npm run preview
```

## Deployment

Automatic deployment on push to `main` branch via Netlify.

Manual deploy:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

See [Deployment Guide](docs/DEPLOYMENT.md) for details.

## Performance

- **Bundle Size**: ~34KB JS, ~20KB CSS (gzipped)
- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Android Chrome (last 2 versions)

## License

Private project - All rights reserved

## Contact

- **GitHub**: [@wisdom1456](https://github.com/wisdom1456)
- **Email**: Modible@gmail.com

---

Built with ❤️ and nostalgia for the golden age of computing
