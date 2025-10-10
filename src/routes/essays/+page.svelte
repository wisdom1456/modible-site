<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
</script>

<SEOHead
	title="Essays"
	description="Technical writing and thought pieces"
	canonical="https://modible.netlify.app/essays"
	type="website"
/>

<Container>
	<h1 class="display-xl page-title">Essays</h1>
	<p class="empty-state">Coming soon! Technical essays and thought pieces will appear here.</p>
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

