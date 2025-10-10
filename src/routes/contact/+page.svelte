<script lang="ts">
	import SEOHead from '$lib/components/seo/SEOHead.svelte';
	import Container from '$lib/components/layout/Container.svelte';
	import RetroPanel from '$lib/components/content/RetroPanel.svelte';
</script>

<SEOHead
	title="Contact"
	description="Get in touch with Modible"
	canonical="https://modible.netlify.app/contact"
	type="website"
/>

<Container size="md">
	<h1 class="display-xl page-title">Contact</h1>
	
	<RetroPanel title="Get in Touch" icon="✉️">
		<div class="content">
			<p>Have questions? Want to collaborate? Found a bug?</p>
			<p>Reach out via email or social media.</p>
			
			<div class="contact-info">
				<p><strong>Email:</strong> hello@modible.com</p>
				<p><strong>GitHub:</strong> <a href="https://github.com/yourusername" target="_blank" rel="noopener">@yourusername</a></p>
				<p><strong>Twitter:</strong> <a href="https://twitter.com/yourusername" target="_blank" rel="noopener">@yourusername</a></p>
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
	
	.content p {
		margin-bottom: var(--space-md);
		line-height: 1.7;
	}
	
	.contact-info {
		margin-top: var(--space-xl);
		padding: var(--space-lg);
		background: var(--surface-1);
		border-radius: var(--radius-sm);
	}
	
	.contact-info a {
		color: var(--terminal-green);
		text-decoration: none;
	}
	
	.contact-info a:hover {
		text-decoration: underline;
	}
</style>

