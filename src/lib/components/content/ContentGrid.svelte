<script lang="ts">
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	
	export let columns: 1 | 2 | 3 | 4 = 3;
	export let gap: 'sm' | 'md' | 'lg' = 'lg';
	export let animate: boolean = true;
	
	const gapSizes = {
		sm: 'var(--space-md)',
		md: 'var(--space-lg)',
		lg: 'var(--space-xl)'
	};
	
	let reducedMotion = false;
	
	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotion = mediaQuery.matches;
		
		const handler = (e: MediaQueryListEvent) => {
			reducedMotion = e.matches;
		};
		
		mediaQuery.addEventListener('change', handler);
		return () => mediaQuery.removeEventListener('change', handler);
	});
</script>

<div 
	class="content-grid"
	class:animate={animate && !reducedMotion}
	style="
		--columns: {columns};
		--gap: {gapSizes[gap]};
	"
>
	<slot />
</div>

<style>
	.content-grid {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: var(--gap);
	}
	
	.content-grid.animate :global(> *) {
		transition: all var(--duration-slow) var(--ease-default);
	}
	
	@media (max-width: 1024px) {
		.content-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	
	@media (max-width: 768px) {
		.content-grid {
			grid-template-columns: 1fr;
		}
		
		/* Simpler animation on mobile - fade only */
		.content-grid.animate :global(> *) {
			transition: opacity var(--duration-normal) var(--ease-default);
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		.content-grid.animate :global(> *) {
			transition: none;
		}
	}
</style>

