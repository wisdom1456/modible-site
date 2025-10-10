import type { RequestHandler } from './$types';
import { getAllDemos, getAllEssays, getAllArt } from '$lib/utils/content';
import { siteConfig } from '$lib/config';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const demos = await getAllDemos();
	const essays = await getAllEssays();
	const art = await getAllArt();
	
	const staticPages = [
		{ url: '', changefreq: 'weekly', priority: '1.0' },
		{ url: '/demos', changefreq: 'weekly', priority: '0.9' },
		{ url: '/essays', changefreq: 'weekly', priority: '0.9' },
		{ url: '/art', changefreq: 'weekly', priority: '0.9' },
		{ url: '/log', changefreq: 'daily', priority: '0.8' },
		{ url: '/about', changefreq: 'monthly', priority: '0.7' },
		{ url: '/contact', changefreq: 'monthly', priority: '0.5' },
		{ url: '/privacy', changefreq: 'yearly', priority: '0.3' },
		{ url: '/colophon', changefreq: 'monthly', priority: '0.4' }
	];
	
	const demoPages = demos.map(demo => ({
		url: `/demos/${demo.metadata.slug}`,
		lastmod: demo.metadata.updated || demo.metadata.date,
		changefreq: 'monthly',
		priority: demo.metadata.featured ? '0.8' : '0.7'
	}));
	
	const essayPages = essays.map(essay => ({
		url: `/essays/${essay.metadata.slug}`,
		lastmod: essay.metadata.updated || essay.metadata.date,
		changefreq: 'monthly',
		priority: essay.metadata.featured ? '0.8' : '0.7'
	}));
	
	const artPages = art.map(piece => ({
		url: `/art/${piece.metadata.slug}`,
		lastmod: piece.metadata.updated || piece.metadata.date,
		changefreq: 'monthly',
		priority: '0.7'
	}));
	
	const allPages = [...staticPages, ...demoPages, ...essayPages, ...artPages];
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		page => `  <url>
    <loc>${siteConfig.url}${page.url}</loc>${
			'lastmod' in page && page.lastmod ? `\n    <lastmod>${new Date(page.lastmod as string).toISOString().split('T')[0]}</lastmod>` : ''
		}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;
	
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

