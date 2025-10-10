<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import ContentGrid from '$lib/components/content/ContentGrid.svelte';
	import ArcadeCard from '$lib/components/content/ArcadeCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

<SEOHead
	title={data.meta.title}
	description={data.meta.description}
	canonical="https://modible.netlify.app"
	type="website"
/>

<Container size="xl">
	<!-- Hero -->
	<header class="hero">
		<h1 class="display-xl">Welcome to the Arcade</h1>
		<p class="hero-text">
			Remember when the internet was fun? When learning new things felt like playing?
			<br><br>
			We're bringing that back.
		</p>
		<p class="hero-description">
			Explore AI, neural networks, and generative art through interactive demos wrapped in 90s nostalgia. 
			Every project is a playable "game" - no boring textbooks, just click and discover.
		</p>
		<div class="hero-actions">
			<Button href="/demos" variant="primary" size="lg">Start Exploring</Button>
			<Button href="/about" variant="outline" size="lg">Learn More</Button>
		</div>
	</header>

	<!-- Featured Content -->
	<section class="featured-section">
		<h2 class="heading-lg section-title">Featured Projects</h2>
		
		{#if data.featured.length > 0}
			<ContentGrid columns={3}>
				{#each data.featured as item}
					{@const routePath = item.metadata.type === 'demo' ? 'demos' : item.metadata.type === 'essay' ? 'essays' : 'art'}
					<ArcadeCard
						title={item.metadata.title}
						description={item.metadata.description}
						imageUrl={item.metadata.og_image || '/images/placeholder.png'}
						href="/{routePath}/{item.metadata.slug}"
						tags={item.metadata.tags}
						featured={item.metadata.featured}
					/>
				{/each}
			</ContentGrid>
		{:else}
			<p class="empty-state">No featured content yet. Check back soon!</p>
		{/if}
	</section>

	<!-- CTA Section -->
	<section class="cta-section">
		<div class="cta-content">
			<h2 class="heading-lg">Ready to Play?</h2>
			<p class="body">Browse all demos, read technical essays, or explore generative art.</p>
			<div class="cta-actions">
				<Button href="/demos" variant="primary">View All Demos</Button>
				<Button href="/essays" variant="secondary">Read Essays</Button>
				<Button href="/art" variant="outline">See Gallery</Button>
			</div>
		</div>
	</section>
</Container>

<style>
	.hero {
		text-align: center;
		margin-bottom: var(--space-xxl);
		padding: var(--space-xxl) 0;
	}
	
	.hero h1 {
		margin-bottom: var(--space-lg);
	}
	
	.hero-text {
		font-family: var(--font-interface);
		font-size: 1.25rem;
		color: var(--crt-gray-300);
		margin: var(--space-lg) auto;
		max-width: 65ch;
		line-height: 1.6;
	}
	
	.hero-description {
		font-family: var(--font-interface);
		font-size: 1rem;
		color: var(--crt-gray-300);
		margin: var(--space-xl) auto;
		max-width: 65ch;
		line-height: 1.7;
	}
	
	.hero-actions {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		margin-top: var(--space-xl);
		flex-wrap: wrap;
	}
	
	.featured-section {
		margin-bottom: var(--space-xxl);
	}
	
	.section-title {
		text-align: center;
		margin-bottom: var(--space-xl);
		color: var(--neon-purple-400);
	}
	
	.empty-state {
		text-align: center;
		color: var(--crt-gray-300);
		padding: var(--space-xxl);
		font-size: 1.125rem;
	}
	
	.cta-section {
		background: var(--surface-2);
		border: 2px solid var(--crt-gray-700);
		border-radius: var(--radius-md);
		padding: var(--space-xxl);
		text-align: center;
		margin-top: var(--space-xxl);
	}
	
	.cta-content h2 {
		color: var(--terminal-green);
		margin-bottom: var(--space-md);
	}
	
	.cta-content .body {
		margin: var(--space-lg) auto;
		color: var(--crt-gray-300);
	}
	
	.cta-actions {
		display: flex;
		gap: var(--space-md);
		justify-content: center;
		margin-top: var(--space-xl);
		flex-wrap: wrap;
	}
	
	@media (max-width: 768px) {
		.hero {
			padding: var(--space-xl) 0;
		}
		
		.hero-text {
			font-size: 1.125rem;
		}
		
		.hero-actions,
		.cta-actions {
			flex-direction: column;
			align-items: stretch;
		}
		
		.cta-section {
			padding: var(--space-xl) var(--space-lg);
		}
	}
</style>

