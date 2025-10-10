<script lang="ts">
	export let size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'lg';
	let className: string = '';
	export { className as class };
	
	const maxWidths = {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		full: '100%'
	};
</script>

<div 
	class="container {className}"
	style="--max-width: {maxWidths[size]}"
>
	<slot />
</div>

<style>
	.container {
		width: 100%;
		max-width: var(--max-width);
		margin-left: auto;
		margin-right: auto;
		padding-left: var(--space-md);
		padding-right: var(--space-md);
	}
	
	@media (min-width: 768px) {
		.container {
			padding-left: var(--space-lg);
			padding-right: var(--space-lg);
		}
	}
</style>

