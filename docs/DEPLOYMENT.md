# Deployment Guide

## Current Deployment

- **Platform**: Netlify
- **Live Site**: https://modible-site.netlify.app
- **Repository**: https://github.com/wisdom1456/modible-site
- **Branch**: main

## Automatic Deployments

Every push to the `main` branch triggers an automatic deployment on Netlify.

```bash
git add .
git commit -m "Your changes"
git push origin main
```

Netlify will:
1. Pull latest code
2. Run `npm install`
3. Run `npm run build`
4. Deploy `build/` directory
5. Notify you when complete (~2-3 minutes)

## Manual Deployment

### Via Netlify Dashboard

1. Go to https://app.netlify.com
2. Select your site
3. Click "Deploys"
4. Click "Trigger deploy" → "Deploy site"

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## Environment Variables

### Current Variables

Set in Netlify Dashboard → Site settings → Environment variables:

```
PUBLIC_SITE_URL=https://modible-site.netlify.app
PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional
```

### Adding/Updating Variables

1. Go to Netlify Dashboard
2. Site settings → Environment variables
3. Add or edit variables
4. Trigger new deploy for changes to take effect

## Build Settings

**Current configuration:**
- Build command: `npm run build`
- Publish directory: `build`
- Node version: 18.x (auto-detected)

**Located in:** `netlify.toml`

## Custom Domain

### Adding a Custom Domain

1. Purchase domain (e.g., modible.com)
2. In Netlify Dashboard → Domain settings
3. Click "Add custom domain"
4. Enter your domain
5. Follow DNS configuration instructions

### DNS Configuration

**For apex domain (modible.com):**
```
A Record → 75.2.60.5
```

**For www subdomain:**
```
CNAME → modible-site.netlify.app
```

### SSL Certificate

Netlify automatically provisions Let's Encrypt SSL certificates for custom domains.

### After Domain Setup

Update environment variable:
```
PUBLIC_SITE_URL=https://modible.com
```

Then trigger a new deploy to regenerate sitemap/RSS with new URL.

## Monitoring

### Build Status

- View in Netlify Dashboard → Deploys
- Email notifications on build failures
- Badge: [![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status)](https://app.netlify.com/sites/YOUR-SITE/deploys)

### Analytics

- **Netlify Analytics**: Built-in (paid feature)
- **Google Analytics 4**: Configured via `PUBLIC_GA_ID`

### Performance

Check site performance:
- https://pagespeed.web.dev
- https://web.dev/measure

Target metrics:
- Performance: 90+
- Accessibility: 100
- Best Practices: 90+
- SEO: 100

## Rollback

### To Previous Deploy

1. Netlify Dashboard → Deploys
2. Find the deploy you want to restore
3. Click "..." → "Publish deploy"

### Via Git

```bash
# Revert last commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard COMMIT_HASH
git push origin main --force  # Use with caution!
```

## Troubleshooting

### Build Fails

**Check build logs:**
1. Netlify Dashboard → Deploys
2. Click failed deploy
3. View build log

**Common issues:**
- Missing dependencies: Check `package.json`
- Type errors: Run `npm run check` locally
- Environment variables: Verify in Netlify settings

**Fix:**
```bash
# Test build locally
npm run build

# If successful, push again
git push origin main
```

### Site Not Updating

1. Check deploy succeeded in Netlify Dashboard
2. Clear browser cache (Cmd+Shift+R)
3. Check DNS propagation (if using custom domain)
4. Verify correct branch is deployed

### 404 Errors

- Check file paths are correct
- Verify routes exist in `src/routes/`
- Check `netlify.toml` redirects

## Performance Optimization

### Current Optimizations

- ✅ Static site generation
- ✅ Asset compression (Brotli/Gzip)
- ✅ Font preloading
- ✅ Image lazy loading
- ✅ CSS minification
- ✅ JS minification

### Additional Options

**Netlify Edge Functions** (optional):
- Geolocation-based redirects
- A/B testing
- Dynamic content injection

**Asset Optimization** (optional):
- Enable Netlify Image CDN
- Configure cache headers in `netlify.toml`

## Security

### Headers

Security headers configured in `netlify.toml`:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

### HTTPS

- Automatically enabled via Let's Encrypt
- Force HTTPS redirect enabled by default

## Backup

### Automatic Backups

- Code: Backed up in GitHub
- Deploys: Netlify keeps deploy history
- Content: In Git repository

### Manual Backup

```bash
# Clone repository
git clone https://github.com/wisdom1456/modible-site.git backup-$(date +%Y%m%d)

# Or download from GitHub
# Repository → Code → Download ZIP
```

## Support

### Resources

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://answers.netlify.com
- **Status Page**: https://www.netlifystatus.com

### Getting Help

1. Check Netlify documentation
2. Search Netlify forums
3. Contact Netlify support (if on paid plan)
4. Check GitHub issues

## Cost

### Current Plan

- **Free tier** includes:
  - 100GB bandwidth/month
  - 300 build minutes/month
  - Automatic HTTPS
  - Deploy previews
  - Form submissions (100/month)

### Upgrading

If you exceed free tier limits:
- **Pro**: $19/month (1TB bandwidth, 25K build minutes)
- **Business**: $99/month (unlimited everything)

## Migration

### To Different Platform

If moving to Vercel, Cloudflare Pages, etc.:

1. Update build settings on new platform
2. Update `PUBLIC_SITE_URL` environment variable
3. Update DNS records
4. Test thoroughly before switching

### From Netlify Subdomain to Custom Domain

1. Add custom domain in Netlify
2. Configure DNS
3. Update `PUBLIC_SITE_URL`
4. Trigger new deploy
5. Set up 301 redirects (optional)

---

**Last Updated**: October 10, 2025
**Deployment Status**: ✅ Live and running

