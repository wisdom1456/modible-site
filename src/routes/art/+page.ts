import { loadContent } from '$lib/utils/content';
import type { ArtFrontmatter } from '$lib/types/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const artworks = await loadContent<ArtFrontmatter>('art');

	return {
		artworks,
		meta: {
			title: 'Gallery',
			description: 'A showcase of creative projects, generative art, and web design work'
		}
	};
};

