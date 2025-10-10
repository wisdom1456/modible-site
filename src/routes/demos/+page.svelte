<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import ContentGrid from '$lib/components/content/ContentGrid.svelte';
	import ArcadeCard from '$lib/components/content/ArcadeCard.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData;
	
	let sortBy: 'date' | 'title' = 'date';
	let sortedDemos = data.demos;
	
	function handleSort(newSort: 'date' | 'title') {
		sortBy = newSort;
		
		if (sortBy === 'date') {
			sortedDemos = [...data.demos].sort((a, b) =>
				new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
			);
		} else {
			sortedDemos = [...data.demos].sort((a, b) =>
				a.metadata.title.localeCompare(b.metadata.title)
			);
		}
	}
</script>

<SEOHead
	title={data.meta.title}
	description={data.meta.description}
	canonical="https://modible.netlify.app/demos"
	type="website"
/>

<Container>
	<header class="page-header">
		<h1 class="display-xl">Interactive Demos</h1>
		<p class="body page-description">{data.meta.description}</p>
	</header>

	<div class="controls">
		<label for="sort-select" class="label">Sort by:</label>
		<select 
			id="sort-select"
			bind:value={sortBy}
			on:change={() => handleSort(sortBy)}
			class="sort-select"
		>
			<option value="date">Newest First</option>
			<option value="title">Title (A-Z)</option>
		</select>
	</div>

	{#if sortedDemos.length > 0}
		{#key sortBy}
			<ContentGrid columns={3} animate={true}>
				{#each sortedDemos as demo (demo.metadata.slug)}
					<ArcadeCard
						title={demo.metadata.title}
						description={demo.metadata.description}
						imageUrl={demo.metadata.og_image || '/images/placeholder.png'}
						href="/demos/{demo.metadata.slug}"
						tags={demo.metadata.tags}
						featured={demo.metadata.featured}
					/>
				{/each}
			</ContentGrid>
		{/key}
	{:else}
		<p class="empty-state">No demos available yet. Check back soon!</p>
	{/if}
</Container>

<style>
	.page-header {
		text-align: center;
		margin-bottom: var(--space-xxl);
	}
	
	.page-header h1 {
		margin-bottom: var(--space-md);
	}
	
	.page-description {
		margin: var(--space-lg) auto;
		color: var(--crt-gray-300);
	}
	
	.controls {
		display: flex;
		align-items: center;
		gap: var(--space-md);
		margin-bottom: var(--space-xl);
		justify-content: center;
	}
	
	.sort-select {
		font-family: var(--font-interface);
		font-size: 0.875rem;
		padding: var(--space-sm) var(--space-md);
		background: var(--surface-2);
		color: var(--crt-white);
		border: 2px solid var(--crt-gray-500);
		border-radius: var(--radius-sm);
		cursor: pointer;
		transition: border-color var(--duration-fast);
		min-height: 44px;
	}
	
	.sort-select:hover {
		border-color: var(--terminal-green);
	}
	
	.sort-select:focus {
		outline: none;
		border-color: var(--neon-purple-400);
		box-shadow: var(--focus-ring);
	}
	
	.empty-state {
		text-align: center;
		color: var(--crt-gray-300);
		padding: var(--space-xxl);
		font-size: 1.125rem;
	}
	
	@media (max-width: 768px) {
		.controls {
			flex-direction: column;
			align-items: stretch;
		}
		
		.sort-select {
			width: 100%;
		}
	}
</style>

