import { error } from '@sveltejs/kit';
import { loadContentBySlug, loadContent } from '$lib/utils/content';
import type { DemoFrontmatter } from '$lib/types/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const content = await loadContentBySlug<DemoFrontmatter>('demo', params.slug);
	
	if (!content) {
		throw error(404, 'Demo not found');
	}
	
	// Get related content (same tags)
	const allDemos = await loadContent<DemoFrontmatter>('demo');
	const related = allDemos
		.filter(item => 
			item.metadata.slug !== params.slug &&
			item.metadata.tags.some(tag => content.metadata.tags.includes(tag))
		)
		.slice(0, 3);

	return {
		content,
		related
	};
};

