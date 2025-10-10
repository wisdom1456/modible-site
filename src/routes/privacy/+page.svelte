<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import RetroPanel from '$lib/components/content/RetroPanel.svelte';
</script>

<SEOHead
	title="Privacy Policy"
	description="Modible privacy policy and data practices"
	canonical="https://modible.netlify.app/privacy"
	type="website"
/>

<Container size="md">
	<h1 class="display-xl page-title">Privacy Policy</h1>
	
	<RetroPanel title="Our Commitment" icon="🔒">
		<div class="content">
			<h2>Data Collection</h2>
			<p>We collect minimal data to improve your experience:</p>
			<ul>
				<li>Anonymous analytics (page views, referrers)</li>
				<li>No personal information</li>
				<li>No tracking cookies</li>
				<li>No third-party advertising</li>
			</ul>
			
			<h2>Analytics</h2>
			<p>We use Google Analytics 4 with IP anonymization and consent mode enabled. You can opt out at any time.</p>
			
			<h2>Local Storage</h2>
			<p>We use browser local storage for:</p>
			<ul>
				<li>Theme preferences</li>
				<li>Effect settings</li>
				<li>Music player state</li>
			</ul>
			<p>This data never leaves your device.</p>
			
			<h2>Contact</h2>
			<p>Questions about privacy? <a href="/contact">Contact us</a>.</p>
			
			<p class="updated">Last updated: January 2025</p>
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
	
	.updated {
		margin-top: var(--space-xl);
		font-size: 0.875rem;
		color: var(--crt-gray-300);
	}
</style>

