<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'outline' = 'primary';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let href: string | undefined = undefined;
	export let disabled: boolean = false;
	export let type: 'button' | 'submit' | 'reset' = 'button';
	
	const Tag = href ? 'a' : 'button';
</script>

<svelte:element
	this={Tag}
	class="btn btn-{variant} btn-{size}"
	{href}
	{disabled}
	{type}
	role={href ? undefined : 'button'}
	on:click
>
	<slot />
</svelte:element>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: var(--space-sm);
		font-family: var(--font-interface);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		border: 2px solid;
		cursor: pointer;
		transition: all var(--duration-fast) var(--ease-default);
		min-height: 44px;
	}
	
	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	
	/* Sizes */
	.btn-sm {
		padding: var(--space-xs) var(--space-md);
		font-size: 0.75rem;
	}
	
	.btn-md {
		padding: var(--space-sm) var(--space-lg);
		font-size: 0.875rem;
	}
	
	.btn-lg {
		padding: var(--space-md) var(--space-xl);
		font-size: 1rem;
	}
	
	/* Variants */
	.btn-primary {
		background: var(--neon-purple-500);
		color: var(--crt-white);
		border-color: var(--neon-purple-400) var(--neon-purple-700) var(--neon-purple-700) var(--neon-purple-400);
		box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
	}
	
	.btn-primary:hover:not(:disabled) {
		background: var(--neon-purple-400);
		box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
		transform: translateY(-2px);
	}
	
	.btn-secondary {
		background: var(--terminal-green);
		color: var(--crt-black);
		border-color: var(--terminal-green-glow) var(--terminal-green-dim) var(--terminal-green-dim) var(--terminal-green-glow);
	}
	
	.btn-secondary:hover:not(:disabled) {
		background: var(--terminal-green-glow);
		transform: translateY(-2px);
	}
	
	.btn-outline {
		background: transparent;
		color: var(--neon-purple-400);
		border-color: var(--neon-purple-400);
	}
	
	.btn-outline:hover:not(:disabled) {
		background: var(--neon-purple-500);
		color: var(--crt-white);
	}
	
	.btn:focus-visible {
		outline: 2px solid transparent;
		box-shadow: var(--focus-ring);
	}
	
	@media (max-width: 768px) {
		.btn {
			border-width: 1px;
		}
	}
</style>

