import { loadFeaturedContent } from '$lib/utils/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const featured = await loadFeaturedContent();

	return {
		featured,
		meta: {
			title: 'Modible - Interactive Museum of Modern Technology',
			description: 'Explore AI, neural networks, and generative art through interactive demos wrapped in nostalgic 90s aesthetics'
		}
	};
};

