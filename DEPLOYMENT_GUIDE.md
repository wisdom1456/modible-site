# Modible Deployment Guide

## Pre-Deployment Checklist

### ✅ Completed
- [x] SvelteKit project configured with static adapter
- [x] All MVP features implemented (Arcade Cards, Cassette Loader, Defrag Animation)
- [x] Global music player with smart pause/resume
- [x] Mobile-first responsive design
- [x] Accessibility foundations (WCAG 2.1 AA)
- [x] SEO setup (meta tags, OG images, canonical URLs)
- [x] Sitemap.xml generation
- [x] RSS feed generation
- [x] Robots.txt generation
- [x] Google Analytics 4 integration (privacy-friendly)
- [x] Build passing with no errors

### 🔲 Before Launch
- [ ] Add actual music files to `/static/music/`
- [ ] Update `/static/music/playlist.json` with real tracks
- [ ] Create content for About page (`/src/content/meta/about.md`)
- [ ] Add Privacy Policy content (`/src/routes/privacy/+page.svelte`)
- [ ] Add Contact page content (`/src/routes/contact/+page.svelte`)
- [ ] Add Colophon content (`/src/routes/colophon/+page.svelte`)
- [ ] Create at least 3-5 demo projects
- [ ] Create OG images for demos (1200x630px)
- [ ] Test on real mobile devices
- [ ] Run Lighthouse audit
- [ ] Verify all links work

## Netlify Deployment

### Step 1: Connect Repository

1. Push code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git provider
5. Select the `mod_Site` repository

### Step 2: Configure Build Settings

**Build settings:**
- Build command: `npm run build`
- Publish directory: `build`
- Node version: 18 or higher

**Environment variables:**
```
PUBLIC_SITE_URL=https://modible.netlify.app
PUBLIC_GA_ID=G-XXXXXXXXXX (optional, add after getting GA4 ID)
```

### Step 3: Deploy

1. Click "Deploy site"
2. Wait for build to complete (~2-3 minutes)
3. Note your temporary Netlify URL (e.g., `random-name-123.netlify.app`)

### Step 4: Custom Domain (Optional)

1. In Netlify dashboard → Domain settings
2. Click "Add custom domain"
3. Enter `modible.com` (or your chosen domain)
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Let's Encrypt)

### Step 5: Update Environment Variables

After getting custom domain:
```
PUBLIC_SITE_URL=https://modible.com
```

Trigger a new deploy to regenerate sitemap/RSS with new URL.

## Google Analytics 4 Setup

### Get GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com)
2. Create new property "Modible"
3. Set up web data stream
4. Copy Measurement ID (format: `G-XXXXXXXXXX`)

### Add to Netlify

1. In Netlify → Site settings → Environment variables
2. Add `PUBLIC_GA_ID` with your measurement ID
3. Redeploy site

### Verify Tracking

1. Visit your site
2. Open GA4 → Reports → Realtime
3. Confirm you see your visit

## Post-Deployment Tasks

### SEO

1. **Google Search Console**
   - Add property for your domain
   - Submit sitemap: `https://modible.com/sitemap.xml`
   - Verify ownership via DNS or HTML file

2. **Bing Webmaster Tools**
   - Add site
   - Submit sitemap

3. **Social Media**
   - Test OG images with [Facebook Debugger](https://developers.facebook.com/tools/debug/)
   - Test Twitter cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### Performance

1. Run [Lighthouse](https://web.dev/measure/)
   - Target: 90+ on all metrics
   - Fix any issues flagged

2. Test on real devices
   - iPhone (Safari)
   - Android (Chrome)
   - Verify music player works
   - Test navigation and animations

3. Test on slow connection
   - Chrome DevTools → Network → Slow 3G
   - Verify site loads in <5 seconds

### Monitoring

1. **Uptime Monitoring**
   - Use Netlify Analytics (built-in)
   - Or set up [UptimeRobot](https://uptimerobot.com) (free)

2. **Error Tracking** (Optional)
   - [Sentry](https://sentry.io) for JavaScript errors
   - Configure in `src/hooks.client.ts`

## Content Management

### Adding New Demos

Use the CLI scaffolding tool:

```bash
node scripts/new-content.js demo "Neural Network Visualizer" neural-network-visualizer
```

This creates:
- `/src/content/demos/neural-network-visualizer.md`
- With pre-filled frontmatter
- Ready for content

Then:
1. Edit the markdown file
2. Add images to `/static/images/demos/`
3. Create OG image (1200x630px) as `/static/images/demos/neural-viz-og.png`
4. Commit and push
5. Netlify auto-deploys

### Adding Music

1. Add MP3 files to `/static/music/`
2. Update `/static/music/playlist.json`:

```json
{
  "id": "track-id",
  "title": "Track Title",
  "artist": "Your Name",
  "src": "/music/filename.mp3"
}
```

3. Commit and push

### Embedded Music in Posts

In any markdown file:

```markdown
<script>
  import EmbeddedMusicPlayer from '$lib/components/content/EmbeddedMusicPlayer.svelte';
</script>

<EmbeddedMusicPlayer 
  src="/music/track.mp3" 
  title="Track Name" 
/>
```

## Troubleshooting

### Build Fails

**Check Node version:**
```bash
node --version  # Should be 18+
```

**Clear cache and rebuild:**
```bash
rm -rf node_modules .svelte-kit
npm install
npm run build
```

### Music Player Not Working

1. Check browser console for errors
2. Verify MP3 files are in `/static/music/`
3. Verify `playlist.json` paths are correct
4. Check browser autoplay policies (user interaction required)

### Sitemap Not Updating

1. Check `PUBLIC_SITE_URL` environment variable
2. Trigger new deploy
3. Verify in browser: `https://yoursite.com/sitemap.xml`

### GA4 Not Tracking

1. Verify `PUBLIC_GA_ID` is set correctly
2. Check browser console for gtag errors
3. Disable ad blockers for testing
4. Wait 24-48 hours for data to appear in reports

## Maintenance

### Regular Tasks

**Weekly:**
- Check GA4 for traffic/errors
- Review Netlify build logs
- Test site on mobile

**Monthly:**
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Review and respond to any 404s in analytics
- Check Core Web Vitals in Search Console

**Quarterly:**
- Review content for updates
- Check all external links
- Update About/Colophon pages
- Refresh OG images if needed

## Resources

- [SvelteKit Docs](https://kit.svelte.dev/docs)
- [Netlify Docs](https://docs.netlify.com)
- [MDsveX Docs](https://mdsvex.pngwn.io)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web.dev](https://web.dev) - Performance guides

## Support

For issues or questions:
- Check `/PROGRESS.md` for implementation details
- Review `/IMPLEMENTATION_SUMMARY.md` for architecture
- See `/static/music/README.md` for music player help

---

**Last Updated**: October 10, 2025

