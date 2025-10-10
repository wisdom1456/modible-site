<footer class="site-footer">
	<div class="footer-content">
		<div class="footer-section">
			<p class="label">MODIBLE</p>
			<p class="footer-text">Interactive museum of modern technology</p>
		</div>
		
		<nav class="footer-nav" aria-label="Footer navigation">
			<a href="/privacy" class="footer-link">Privacy</a>
			<a href="/colophon" class="footer-link">Colophon</a>
			<a href="/contact" class="footer-link">Contact</a>
			<a href="/rss.xml" class="footer-link">RSS</a>
		</nav>
		
		<div class="footer-section">
			<p class="footer-text">© {new Date().getFullYear()} Modible. Built with SvelteKit.</p>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: var(--space-xxl);
		padding: var(--space-xl) var(--space-lg);
		background: var(--surface-2);
		border-top: 2px solid var(--crt-gray-700);
	}
	
	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: var(--space-lg);
		align-items: center;
		text-align: center;
	}
	
	.footer-section {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}
	
	.footer-text {
		font-size: 0.875rem;
		color: var(--crt-gray-300);
		margin: 0;
	}
	
	.footer-nav {
		display: flex;
		gap: var(--space-lg);
		flex-wrap: wrap;
		justify-content: center;
	}
	
	.footer-link {
		font-family: var(--font-interface);
		font-size: 0.875rem;
		color: var(--crt-gray-300);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-default);
		padding: var(--space-sm);
		min-height: 44px;
		display: flex;
		align-items: center;
	}
	
	.footer-link:hover {
		color: var(--terminal-green);
	}
	
	@media (min-width: 768px) {
		.footer-content {
			flex-direction: row;
			justify-content: space-between;
			text-align: left;
		}
		
		.footer-nav {
			gap: var(--space-md);
		}
	}
</style>

