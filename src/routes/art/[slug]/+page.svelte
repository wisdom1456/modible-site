<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import RetroPanel from '$lib/components/content/RetroPanel.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import ArcadeCard from '$lib/components/content/ArcadeCard.svelte';
	import ContentGrid from '$lib/components/content/ContentGrid.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	const { content, related } = data;
	const { metadata } = content;
</script>

<SEOHead
	title={metadata.title}
	description={metadata.description}
	canonical="https://modible.netlify.app/art/{metadata.slug}"
	ogImage={metadata.og_image}
	type="article"
	publishDate={metadata.date}
	modifiedDate={metadata.updated}
/>

<Container size="lg">
	<!-- Breadcrumb -->
	<nav class="breadcrumb" aria-label="Breadcrumb">
		<ol>
			<li><a href="/">Home</a></li>
			<li><a href="/art">Gallery</a></li>
			<li aria-current="page">{metadata.title}</li>
		</ol>
	</nav>

	<!-- Hero -->
	<header class="hero">
		<h1 class="display-xl">{metadata.title}</h1>
		<p class="lead body">{metadata.description}</p>
		
		<div class="meta">
			<time datetime={metadata.date}>
				{new Date(metadata.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
			
			<span class="medium">{metadata.medium}</span>
		</div>
		
		<div class="tags">
			{#each metadata.tags as tag}
				<Tag label={tag} />
			{/each}
		</div>
	</header>

	<!-- Content -->
	<RetroPanel title="Details" icon="🎨">
		<article class="content">
			{@html content.default.render().html}
		</article>
	</RetroPanel>

	<!-- Tools/Technologies -->
	{#if metadata.tools.length > 0}
		<section class="tools">
			<h2 class="heading-lg">Tools & Technologies</h2>
			<div class="tool-tags">
				{#each metadata.tools as tool}
					<Tag label={tool} variant="highlight" />
				{/each}
			</div>
		</section>
	{/if}

	<!-- Inspiration -->
	{#if metadata.inspiration}
		<section class="inspiration">
			<RetroPanel title="Inspiration" icon="💡">
				<p class="body">{metadata.inspiration}</p>
			</RetroPanel>
		</section>
	{/if}

	<!-- Related Content -->
	{#if related.length > 0}
		<section class="related">
			<h2 class="heading-lg">Related Work</h2>
			<ContentGrid columns={3}>
				{#each related as item}
					<ArcadeCard
						title={item.metadata.title}
						description={item.metadata.description}
						imageUrl={item.metadata.og_image || '/images/placeholder.png'}
						href="/art/{item.metadata.slug}"
						tags={item.metadata.tags.slice(0, 3)}
					/>
				{/each}
			</ContentGrid>
		</section>
	{/if}
</Container>

<style>
	.breadcrumb {
		margin-bottom: var(--space-lg);
	}
	
	.breadcrumb ol {
		display: flex;
		gap: var(--space-sm);
		list-style: none;
		font-family: var(--font-label);
		font-size: 0.875rem;
		color: var(--crt-gray-300);
		padding: 0;
	}
	
	.breadcrumb li:not(:last-child)::after {
		content: '/';
		margin-left: var(--space-sm);
	}
	
	.breadcrumb a {
		color: var(--terminal-green);
		text-decoration: none;
		transition: color var(--duration-fast);
	}
	
	.breadcrumb a:hover {
		text-decoration: underline;
	}
	
	.hero {
		margin-bottom: var(--space-xxl);
		text-align: center;
	}
	
	.hero h1 {
		margin-bottom: var(--space-md);
	}
	
	.lead {
		font-size: 1.25rem;
		color: var(--crt-gray-300);
		margin: var(--space-lg) auto;
	}
	
	.meta {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		margin: var(--space-md) 0;
		font-family: var(--font-label);
		font-size: 0.875rem;
		color: var(--crt-gray-300);
	}
	
	.medium {
		color: var(--neon-purple-400);
	}
	
	.tags {
		display: flex;
		gap: var(--space-sm);
		justify-content: center;
		margin: var(--space-lg) 0;
		flex-wrap: wrap;
	}
	
	.tools,
	.inspiration,
	.related {
		margin-top: var(--space-xxl);
	}
	
	.tools h2,
	.related h2 {
		margin-bottom: var(--space-lg);
	}
	
	.tool-tags {
		display: flex;
		gap: var(--space-sm);
		flex-wrap: wrap;
	}
	
	.inspiration p {
		font-style: italic;
	}
</style>

