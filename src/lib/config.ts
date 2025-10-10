/**
 * Site-wide configuration
 * Uses environment variables with fallbacks
 */

export const siteConfig = {
	// Site metadata
	title: 'Modible',
	description: 'Making modern technology accessible through nostalgic aesthetics',
	author: 'Franklin Riley',
	
	// URLs
	url: import.meta.env.PUBLIC_SITE_URL || 'https://modible.netlify.app',
	
	// Social links
	social: {
		github: 'https://github.com/modible',
		twitter: 'https://twitter.com/modible',
		email: 'hello@modible.com'
	},
	
	// Analytics
	analytics: {
		gaId: import.meta.env.PUBLIC_GA_ID || '',
		enabled: !!import.meta.env.PUBLIC_GA_ID
	},
	
	// Content
	postsPerPage: 12,
	featuredCount: 6,
	
	// SEO
	defaultOgImage: '/og-default.png',
	twitterHandle: '@modible',
	
	// Features
	features: {
		musicPlayer: true,
		comments: false,
		newsletter: false
	}
} as const;

export type SiteConfig = typeof siteConfig;

