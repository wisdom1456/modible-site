# Content Management Guide

## Adding New Content

### Method 1: CLI Scaffolding (Recommended)

Use the built-in CLI tool to create new content with proper frontmatter:

```bash
# Create a new demo
node scripts/new-content.js demo "Neural Network Visualizer" neural-network-visualizer

# Create a new essay
node scripts/new-content.js essay "The Future of Web Design" future-web-design

# Create a new art piece
node scripts/new-content.js art "Neon Dreams" neon-dreams
```

This creates a markdown file with pre-filled frontmatter and placeholder content.

### Method 2: Manual Creation

1. Create a new `.md` file in the appropriate directory:
   - Demos: `src/content/demos/your-slug.md`
   - Essays: `src/content/essays/your-slug.md`
   - Art: `src/content/art/your-slug.md`

2. Add frontmatter (see schemas below)

3. Write your content in markdown

## Content Schemas

### Demo Frontmatter

```yaml
---
type: demo
title: "Your Demo Title"
slug: your-demo-slug
description: "Brief description for SEO and cards"
date: "2025-10-10"
updated: "2025-10-10"  # Optional
featured: true          # Show on homepage
draft: false            # Set true to hide
tags: ["tag1", "tag2"]
technologies: ["React", "TypeScript"]
demo_url: "https://demo.example.com"  # Optional
github_url: "https://github.com/..."  # Optional
og_image: "/images/demos/your-demo-og.png"
---

## Overview

Your demo description here...

## Features

- Feature 1
- Feature 2

## Technical Details

Implementation details...

## Demo

[Try it live](https://demo.example.com)
```

### Essay Frontmatter

```yaml
---
type: essay
title: "Your Essay Title"
slug: your-essay-slug
description: "Brief description"
date: "2025-10-10"
updated: "2025-10-10"  # Optional
featured: true
draft: false
tags: ["design", "web"]
reading_time: "5 min"  # Optional, auto-calculated if omitted
og_image: "/images/essays/your-essay-og.png"
---

Your essay content in markdown...
```

### Art Frontmatter

```yaml
---
type: art
title: "Your Art Title"
slug: your-art-slug
description: "Brief description"
date: "2025-10-10"
medium: "Digital"
dimensions: "1920x1080"
tags: ["digital", "abstract"]
og_image: "/images/art/your-art-og.png"
---

Description of your artwork...
```

## Adding Images

### Content Images

1. Add images to `static/images/{type}/`:
   - Demos: `static/images/demos/`
   - Essays: `static/images/essays/`
   - Art: `static/images/art/`

2. Reference in markdown:
   ```markdown
   ![Alt text](/images/demos/screenshot.png)
   ```

### OG Images (Social Sharing)

Create 1200x630px images for social media:

1. Save as: `static/images/{type}/your-slug-og.png`
2. Reference in frontmatter: `og_image: "/images/demos/your-slug-og.png"`

**OG Image Guidelines:**
- Size: 1200x630px
- Format: PNG or JPG
- Include: Title, brief description, branding
- Keep text large and readable
- Use brand colors (purple, green)

## Adding Music

### Global Music Player

1. Add MP3 files to `static/music/`:
   ```
   static/music/
   ├── track-1.mp3
   ├── track-2.mp3
   └── playlist.json
   ```

2. Update `static/music/playlist.json`:
   ```json
   [
     {
       "id": "track-1",
       "title": "Retro Wave",
       "artist": "Your Name",
       "src": "/music/track-1.mp3"
     },
     {
       "id": "track-2",
       "title": "Digital Dreams",
       "artist": "Your Name",
       "src": "/music/track-2.mp3"
     }
   ]
   ```

**Audio File Guidelines:**
- Format: MP3
- Bitrate: 128-192 kbps
- Sample rate: 44.1 kHz
- Keep files under 10MB

### Embedded Music in Posts

Add music players directly in your markdown:

```markdown
<script>
  import EmbeddedMusicPlayer from '$lib/components/content/EmbeddedMusicPlayer.svelte';
</script>

## Listen to the Track

<EmbeddedMusicPlayer 
  src="/music/blog-track.mp3" 
  title="Behind the Scenes" 
/>

Your content continues here...
```

**Smart Pause Logic:**
- When embedded player starts → global player pauses
- When embedded player stops → global player resumes

## Markdown Features

### Basic Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`inline code`

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)
```

### Code Blocks

````markdown
```javascript
function example() {
  console.log('Hello, world!');
}
```

```typescript
const greeting: string = 'Hello';
```
````

### Images

```markdown
![Alt text](/images/demos/screenshot.png)

![Alt text with caption](/images/demos/screenshot.png)
*Caption text here*
```

### Using Svelte Components

You can import and use Svelte components in markdown:

```markdown
<script>
  import Button from '$lib/components/ui/Button.svelte';
  import RetroPanel from '$lib/components/content/RetroPanel.svelte';
</script>

<RetroPanel title="Note">
  This is a special callout!
</RetroPanel>

<Button href="/demos">View All Demos</Button>
```

## Content Workflow

### 1. Create Content

```bash
# Use CLI tool
node scripts/new-content.js demo "My New Demo" my-new-demo

# Or create manually
touch src/content/demos/my-new-demo.md
```

### 2. Add Images

```bash
# Add content images
cp ~/Desktop/screenshot.png static/images/demos/

# Create OG image (1200x630px)
# Save to: static/images/demos/my-new-demo-og.png
```

### 3. Write Content

Edit `src/content/demos/my-new-demo.md` with your content.

### 4. Preview Locally

```bash
npm run dev
# Visit: http://localhost:5173/demos/my-new-demo
```

### 5. Publish

```bash
git add .
git commit -m "Add new demo: My New Demo"
git push origin main
```

Netlify will automatically deploy your changes.

## Content Best Practices

### SEO

- **Title**: 50-60 characters
- **Description**: 150-160 characters
- **Slug**: lowercase, hyphenated, descriptive
- **Tags**: 3-5 relevant tags
- **OG Image**: Always include for social sharing

### Writing

- **Headings**: Use proper hierarchy (H2 → H3 → H4)
- **Paragraphs**: Keep under 3-4 sentences
- **Lists**: Use for scannable content
- **Code**: Always specify language for syntax highlighting
- **Links**: Use descriptive anchor text

### Images

- **Alt text**: Describe the image for accessibility
- **File size**: Optimize images (use TinyPNG, ImageOptim)
- **Format**: Use WebP when possible, fallback to PNG/JPG
- **Dimensions**: Scale to actual display size

### Performance

- **Image size**: Keep under 500KB per image
- **Total images**: Limit to 5-10 per post
- **Videos**: Use external hosting (YouTube, Vimeo)
- **Embeds**: Lazy load when possible

## Updating Existing Content

1. Edit the markdown file
2. Update the `updated` field in frontmatter
3. Commit and push

```bash
git add src/content/demos/my-demo.md
git commit -m "Update demo: My Demo"
git push origin main
```

## Drafts

Set `draft: true` in frontmatter to hide content:

```yaml
---
draft: true
---
```

Drafts are:
- Hidden in production builds
- Visible in development (`npm run dev`)
- Not included in sitemap/RSS

## Featured Content

Set `featured: true` to show on homepage:

```yaml
---
featured: true
---
```

Homepage shows up to 6 featured items across all content types.

## Tags

Use consistent tags across content:

**Common tags:**
- `machine-learning`, `ai`, `neural-networks`
- `web-design`, `css`, `javascript`
- `visualization`, `data-viz`
- `tutorial`, `guide`, `case-study`
- `digital`, `generative`, `abstract`

View all tags: Check `src/lib/utils/content.ts` → `getAllTags()`

## Troubleshooting

### Content not showing

1. Check frontmatter is valid YAML
2. Ensure `draft: false`
3. Verify file is in correct directory
4. Check slug is unique
5. Rebuild: `npm run build`

### Images not loading

1. Verify path starts with `/images/`
2. Check file exists in `static/images/`
3. Ensure filename matches exactly (case-sensitive)

### Build errors

```bash
# Type check
npm run check

# Check for syntax errors in markdown
# Look for unclosed code blocks, invalid YAML
```

## Examples

See existing content for examples:
- Demo: `src/content/demos/neural-network-visualizer.md`
- About: `src/content/meta/about.md`

