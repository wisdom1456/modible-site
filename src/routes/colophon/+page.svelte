<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import RetroPanel from '$lib/components/content/RetroPanel.svelte';
</script>

<SEOHead
	title="Colophon"
	description="How Modible was built and what powers it"
	canonical="https://modible.netlify.app/colophon"
	type="website"
/>

<Container size="md">
	<h1 class="display-xl page-title">Colophon</h1>
	
	<RetroPanel title="How It's Built" icon="⚙️">
		<div class="content">
			<h2>Technology</h2>
			<ul>
				<li><strong>Framework:</strong> SvelteKit</li>
				<li><strong>Language:</strong> TypeScript</li>
				<li><strong>Styling:</strong> Tailwind CSS + Custom CSS</li>
				<li><strong>Content:</strong> MDsveX (Markdown)</li>
				<li><strong>Deployment:</strong> Netlify</li>
			</ul>
			
			<h2>Typography</h2>
			<ul>
				<li><strong>Display:</strong> Press Start 2P</li>
				<li><strong>Interface:</strong> Epilogue</li>
				<li><strong>Code:</strong> JetBrains Mono</li>
			</ul>
			
			<h2>Design Inspiration</h2>
			<ul>
				<li>1990s arcade cabinets</li>
				<li>CRT monitors and phosphor displays</li>
				<li>DOS and Windows 95 UI</li>
				<li>Vintage computing aesthetics</li>
			</ul>
			
			<h2>Open Source</h2>
			<p>This site is built with open source tools and libraries. View the source code on <a href="https://github.com/yourusername/modible" target="_blank" rel="noopener">GitHub</a>.</p>
			
			<h2>Credits</h2>
			<p>Built with ❤️ by [Your Name]</p>
			<p>Special thanks to the Svelte and SvelteKit communities.</p>
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
	
	.content a {
		color: var(--terminal-green);
		text-decoration: none;
	}
	
	.content a:hover {
		text-decoration: underline;
	}
</style>

