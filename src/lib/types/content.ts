export type ContentType = 'demo' | 'essay' | 'art';

export interface BaseFrontmatter {
	title: string;
	description: string;
	type: ContentType;
	date: string;
	slug: string;
	tags: string[];
	featured: boolean;
	draft: boolean;
	og_image?: string;
	keywords?: string[];
	updated?: string;
}

export interface DemoFrontmatter extends BaseFrontmatter {
	type: 'demo';
	technologies: string[];
	interactive: boolean;
	github_url?: string;
	live_url?: string;
	demo_component?: string;
	difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export interface EssayFrontmatter extends BaseFrontmatter {
	type: 'essay';
	reading_time: string;
	series?: string;
	series_order?: number;
}

export interface ArtFrontmatter extends BaseFrontmatter {
	type: 'art';
	medium: string;
	interactive: boolean;
	tools: string[];
	preview_video?: string;
	inspiration?: string;
}

export type Frontmatter = DemoFrontmatter | EssayFrontmatter | ArtFrontmatter;

export interface ContentItem<T extends Frontmatter = Frontmatter> {
	metadata: T;
	default: {
		render: () => { html: string };
	};
}

