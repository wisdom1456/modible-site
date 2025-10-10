<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
</script>

<SEOHead
	title="Gallery"
	description="Generative art and creative experiments"
	canonical="https://modible.netlify.app/art"
	type="website"
/>

<Container>
	<h1 class="display-xl page-title">Gallery</h1>
	<p class="empty-state">Coming soon! Generative art and creative experiments will appear here.</p>
</Container>

<style>
	.page-title {
		text-align: center;
		margin-bottom: var(--space-xl);
	}
	
	.empty-state {
		text-align: center;
		color: var(--crt-gray-300);
		padding: var(--space-xxl);
		font-size: 1.125rem;
	}
</style>

