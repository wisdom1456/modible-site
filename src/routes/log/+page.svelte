<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import RetroPanel from '$lib/components/content/RetroPanel.svelte';
</script>

<SEOHead
	title="Build Log"
	description="Development diary and project updates"
	canonical="https://modible.netlify.app/log"
	type="website"
/>

<Container size="lg">
	<h1 class="display-xl page-title">Build Log</h1>
	
	<RetroPanel title="Terminal" icon="💻" statusText="Ready">
		<div class="terminal">
			<div class="log-entry">
				<span class="prompt">&gt;</span>
				<span class="timestamp">2025-01-10 15:30</span>
				<p class="log-text">Initialized Modible project with SvelteKit + TypeScript</p>
				<p class="log-text">Set up retro design system with CRT effects and arcade aesthetics</p>
			</div>
			
			<div class="log-entry">
				<span class="prompt">&gt;</span>
				<span class="timestamp">2025-01-10 18:45</span>
				<p class="log-text">Created core components: ArcadeCard, RetroPanel, ContentGrid</p>
				<p class="log-text">Implemented mobile-first responsive design</p>
			</div>
			
			<div class="log-entry">
				<span class="prompt">&gt;</span>
				<span class="timestamp">2025-01-10 21:00</span>
				<p class="log-text">Deployed to Netlify 🚀</p>
				<p class="log-text">Site is live at modible.netlify.app</p>
			</div>
			
			<div class="cursor">_</div>
		</div>
	</RetroPanel>
</Container>

<style>
	.page-title {
		text-align: center;
		margin-bottom: var(--space-xxl);
	}
	
	.terminal {
		font-family: var(--font-code);
		background: var(--crt-black);
		padding: var(--space-lg);
		border-radius: var(--radius-sm);
		color: var(--terminal-green);
		min-height: 400px;
	}
	
	.log-entry {
		margin-bottom: var(--space-xl);
	}
	
	.prompt {
		color: var(--terminal-green-glow);
		margin-right: var(--space-sm);
	}
	
	.timestamp {
		color: var(--crt-gray-300);
		font-size: 0.875rem;
	}
	
	.log-text {
		margin: var(--space-sm) 0 var(--space-sm) var(--space-lg);
		line-height: 1.6;
	}
	
	.cursor {
		display: inline-block;
		animation: blink 1s step-end infinite;
		color: var(--terminal-green-glow);
	}
	
	@keyframes blink {
		50% { opacity: 0; }
	}
	
	@media (prefers-reduced-motion: reduce) {
		.cursor {
			animation: none;
		}
	}
</style>

