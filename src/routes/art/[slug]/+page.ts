import { error } from '@sveltejs/kit';
import { loadContentBySlug, loadContent } from '$lib/utils/content';
import type { ArtFrontmatter } from '$lib/types/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const content = await loadContentBySlug<ArtFrontmatter>('art', params.slug);
	
	if (!content) {
		throw error(404, 'Artwork not found');
	}
	
	// Get related content (same tags or medium)
	const allArtworks = await loadContent<ArtFrontmatter>('art');
	const related = allArtworks
		.filter(item => 
			item.metadata.slug !== params.slug &&
			(item.metadata.tags.some(tag => content.metadata.tags.includes(tag)) ||
			 item.metadata.medium === content.metadata.medium)
		)
		.slice(0, 3);

	return {
		content,
		related
	};
};

