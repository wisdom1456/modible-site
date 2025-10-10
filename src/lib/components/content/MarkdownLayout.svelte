<div class="markdown-content">
	<slot />
</div>

<style>
	.markdown-content {
		font-family: var(--font-interface);
		line-height: 1.7;
		color: var(--crt-white);
	}
	
	.markdown-content :global(h2) {
		font-size: 1.5rem;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-md);
		color: var(--neon-purple-400);
		font-weight: 600;
	}
	
	.markdown-content :global(h3) {
		font-size: 1.25rem;
		margin-top: var(--space-lg);
		margin-bottom: var(--space-sm);
		color: var(--terminal-green);
		font-weight: 600;
	}
	
	.markdown-content :global(p) {
		margin-bottom: var(--space-md);
		max-width: 65ch;
	}
	
	.markdown-content :global(ul),
	.markdown-content :global(ol) {
		margin-bottom: var(--space-md);
		padding-left: var(--space-xl);
	}
	
	.markdown-content :global(li) {
		margin-bottom: var(--space-sm);
	}
	
	.markdown-content :global(pre) {
		background: var(--crt-black);
		padding: var(--space-lg);
		border-radius: var(--radius-sm);
		overflow-x: auto;
		margin: var(--space-lg) 0;
		border: 1px solid var(--crt-gray-700);
	}
	
	.markdown-content :global(code) {
		font-family: var(--font-code);
		font-size: 0.875rem;
		background: var(--crt-gray-900);
		padding: 2px 6px;
		border-radius: 2px;
	}
	
	.markdown-content :global(pre code) {
		background: transparent;
		padding: 0;
	}
	
	.markdown-content :global(a) {
		color: var(--terminal-green);
		text-decoration: underline;
		transition: color var(--duration-fast);
	}
	
	.markdown-content :global(a:hover) {
		color: var(--terminal-green-glow);
	}
	
	.markdown-content :global(strong) {
		color: var(--neon-purple-200);
		font-weight: 600;
	}
	
	.markdown-content :global(blockquote) {
		border-left: 4px solid var(--neon-purple-500);
		padding-left: var(--space-lg);
		margin: var(--space-lg) 0;
		color: var(--crt-gray-300);
		font-style: italic;
	}
</style>

