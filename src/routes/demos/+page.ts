import { loadContent } from '$lib/utils/content';
import type { DemoFrontmatter } from '$lib/types/content';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const demos = await loadContent<DemoFrontmatter>('demo');

	return {
		demos,
		meta: {
			title: 'Interactive Demos',
			description: 'Explore interactive projects that make modern tech approachable through retro aesthetics'
		}
	};
};

