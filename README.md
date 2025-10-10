# Modible

Interactive museum of modern technology wrapped in nostalgic 90s aesthetics.

## Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Content**: MDsveX (Markdown)
- **Deployment**: Netlify (Static)

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Creating Content

### New Demo

```bash
npm run new:demo "Demo Title" demo-slug
```

### New Essay

```bash
npm run new:essay "Essay Title" essay-slug
```

### New Art

```bash
npm run new:art "Art Title" art-slug
```

## Project Structure

```
modible/
├── src/
│   ├── lib/
│   │   ├── components/     # Reusable components
│   │   ├── styles/         # Global styles and tokens
│   │   ├── types/          # TypeScript types
│   │   ├── utils/          # Utility functions
│   │   └── stores/         # Svelte stores
│   ├── routes/             # SvelteKit routes
│   └── content/            # Markdown content
│       ├── demos/
│       ├── essays/
│       ├── art/
│       └── meta/
├── static/                 # Static assets
│   ├── fonts/
│   ├── images/
│   └── music/
└── scripts/                # Build scripts
```

## Environment Variables

Create a `.env` file based on `.env.example`:

```env
PUBLIC_SITE_URL=https://modible.netlify.app
PUBLIC_GA4_ID=
PUBLIC_ENABLE_ANALYTICS=false
```

## Deployment

The site is configured for Netlify deployment. Push to your repository and Netlify will automatically build and deploy.

### Manual Deployment

```bash
npm run build
# Upload the `build/` directory to your hosting provider
```

## Design System

- **Colors**: Purple phosphor (primary), Terminal green (accent), CRT grayscale (base)
- **Typography**: Press Start 2P (display), Epilogue (interface), JetBrains Mono (code)
- **Effects**: Scanlines, CRT glow, beveled borders
- **Motion**: Reduced motion support, mobile-optimized animations

## Features

- ✅ Mobile-first responsive design
- ✅ Arcade card grid with CRT effects
- ✅ Retro panel components
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Fast performance (<2.5s LCP)
- ✅ Static site generation

## License

© 2025 Modible. All rights reserved.

