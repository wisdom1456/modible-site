import type { ContentType, Frontmatter, ContentItem, DemoFrontmatter } from '$lib/types/content';

/**
 * Load all content of a specific type
 */
export async function loadContent<T extends Frontmatter>(
	type: ContentType
): Promise<ContentItem<T>[]> {
	const modules = import.meta.glob<ContentItem<T>>('/src/content/**/*.md', { eager: true });
	const contentItems: ContentItem<T>[] = [];

	for (const path in modules) {
		if (!path.includes(`/content/${type}/`)) continue;

		const module = modules[path];
		const metadata = module.metadata as T;

		// Skip drafts in production
		if (import.meta.env.PROD && metadata.draft) continue;

		contentItems.push(module);
	}

	// Sort by date (newest first)
	return contentItems.sort((a, b) =>
		new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
	);
}

/**
 * Load a single content item by slug
 */
export async function loadContentBySlug<T extends Frontmatter>(
	type: ContentType,
	slug: string
): Promise<ContentItem<T> | null> {
	try {
		const module = await import(`../../content/${type}/${slug}.md`);
		const metadata = module.metadata as T;

		// Block drafts in production
		if (import.meta.env.PROD && metadata.draft) {
			return null;
		}

		return module as ContentItem<T>;
	} catch (e) {
		return null;
	}
}

/**
 * Get featured content across all types
 */
export async function loadFeaturedContent(): Promise<ContentItem[]> {
	const [demos, essays, art] = await Promise.all([
		loadContent('demo'),
		loadContent('essay'),
		loadContent('art')
	]);

	const allContent = [...demos, ...essays, ...art]
		.filter(item => item.metadata.featured)
		.sort((a, b) =>
			new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
		);

	return allContent.slice(0, 6); // Top 6 featured
}

/**
 * Get content by tag
 */
export async function loadContentByTag(tag: string): Promise<ContentItem[]> {
	const [demos, essays, art] = await Promise.all([
		loadContent('demo'),
		loadContent('essay'),
		loadContent('art')
	]);

	return [...demos, ...essays, ...art]
		.filter(item =>
			item.metadata.tags
				.map(t => t.toLowerCase())
				.includes(tag.toLowerCase())
		)
		.sort((a, b) =>
			new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
		);
}

/**
 * Calculate reading time from markdown content
 */
export function calculateReadingTime(markdown: string): string {
	const wordsPerMinute = 200;
	const words = markdown.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return `${minutes} min read`;
}

/**
 * Extract all unique tags across content
 */
export async function getAllTags(): Promise<string[]> {
	const [demos, essays, art] = await Promise.all([
		loadContent('demo'),
		loadContent('essay'),
		loadContent('art')
	]);

	const allTags = [...demos, ...essays, ...art]
		.flatMap(item => item.metadata.tags);

	return [...new Set(allTags)].sort();
}

/**
 * Extract all unique technologies from demos
 */
export async function getAllTechnologies(): Promise<string[]> {
	const demos = await loadContent<DemoFrontmatter>('demo');
	const allTech = demos.flatMap(item => item.metadata.technologies);
	return [...new Set(allTech)].sort();
}

/**
 * Convenience functions for specific content types
 */
export async function getAllDemos() {
	return loadContent('demo');
}

export async function getAllEssays() {
	return loadContent('essay');
}

export async function getAllArt() {
	return loadContent('art');
}

