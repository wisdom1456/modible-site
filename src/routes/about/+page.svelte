<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import RetroPanel from '$lib/components/content/RetroPanel.svelte';
	import Button from '$lib/components/ui/Button.svelte';
</script>

<SEOHead
	title="About"
	description="Interactive museum of modern technology wrapped in nostalgic 90s aesthetics"
	canonical="https://modible.netlify.app/about"
	type="website"
/>

<Container size="md">
	<h1 class="display-xl page-title">About Modible</h1>
	
	<RetroPanel title="Welcome to the Arcade" icon="🎮">
		<div class="content">
			<h2>What is This?</h2>
			<p>Modible is an interactive exploration of AI, neural networks, and generative art - but styled like a 1990s arcade. Every project is a playable "demo" with CRT glow, scanlines, and cassette tape loaders.</p>
			
			<h2>Why?</h2>
			<p>Because learning should feel like playing. Because modern tech doesn't have to be intimidating. Because we miss when the internet was weird and wonderful.</p>
			
			<h2>The Philosophy</h2>
			<ul>
				<li><strong>Retro is the hook, not the product</strong> - The 90s aesthetic makes complex technology approachable</li>
				<li><strong>Learn through play</strong> - Interactive demos beat boring textbooks</li>
				<li><strong>Plain English</strong> - No jargon, no assumptions, just clear explanations</li>
				<li><strong>Beautiful & fast</strong> - Nostalgic doesn't mean slow or ugly</li>
			</ul>
			
			<h2>Built With</h2>
			<ul>
				<li>SvelteKit for the framework</li>
				<li>TypeScript for type safety</li>
				<li>Tailwind CSS for styling</li>
				<li>MDsveX for content</li>
				<li>Love for retro computing</li>
			</ul>
			
			<div class="cta">
				<Button href="/demos" variant="primary">Explore Demos</Button>
				<Button href="/contact" variant="outline">Get in Touch</Button>
			</div>
		</div>
	</RetroPanel>
</Container>

<style>
	.page-title {
		text-align: center;
		margin-bottom: var(--space-xxl);
	}
	
	.content {
		max-width: 65ch;
	}
	
	.content h2 {
		font-size: 1.5rem;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-md);
		color: var(--neon-purple-400);
	}
	
	.content p,
	.content ul {
		margin-bottom: var(--space-md);
		line-height: 1.7;
	}
	
	.content ul {
		padding-left: var(--space-xl);
	}
	
	.content li {
		margin-bottom: var(--space-sm);
	}
	
	.cta {
		display: flex;
		gap: var(--space-md);
		margin-top: var(--space-xxl);
		flex-wrap: wrap;
	}
	
	@media (max-width: 768px) {
		.cta {
			flex-direction: column;
		}
	}
</style>

