import { loadContent } from '$lib/utils/content';
import { siteConfig } from '$lib/config';
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const [demos, essays, art] = await Promise.all([
		loadContent('demo'),
		loadContent('essay'),
		loadContent('art')
	]);

	const allContent = [...demos, ...essays, ...art]
		.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime())
		.slice(0, 20);

	const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${siteConfig.title}</title>
		<description>${siteConfig.description}</description>
		<link>${siteConfig.url}</link>
		<atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>
		${allContent
			.map(
				(item) => `
		<item>
			<title>${item.metadata.title}</title>
			<description>${item.metadata.description}</description>
			<link>${siteConfig.url}/${item.metadata.type}s/${item.metadata.slug}</link>
			<guid isPermaLink="true">${siteConfig.url}/${item.metadata.type}s/${item.metadata.slug}</guid>
			<pubDate>${new Date(item.metadata.date).toUTCString()}</pubDate>
		</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

