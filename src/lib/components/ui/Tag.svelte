<script lang="ts">
	export let label: string;
	export let href: string | undefined = undefined;
	export let variant: 'default' | 'highlight' = 'default';
	
	const Tag = href ? 'a' : 'span';
</script>

<svelte:element
	this={Tag}
	class="tag tag-{variant}"
	{href}
>
	{label}
</svelte:element>

<style>
	.tag {
		display: inline-block;
		font-family: var(--font-label);
		font-size: 0.75rem;
		padding: var(--space-xs) var(--space-sm);
		background: var(--crt-gray-700);
		color: var(--terminal-green);
		border: 1px solid var(--crt-gray-500);
		border-radius: var(--radius-sm);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		text-decoration: none;
		transition: all var(--duration-fast);
	}
	
	.tag-highlight {
		background: var(--neon-purple-700);
		color: var(--neon-purple-200);
		border-color: var(--neon-purple-500);
	}
	
	a.tag:hover {
		background: var(--terminal-green-dim);
		color: var(--crt-white);
		transform: translateY(-1px);
	}
</style>

