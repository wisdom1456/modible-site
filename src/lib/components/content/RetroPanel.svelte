<script lang="ts">
	export let title: string = '';
	export let icon: string = '';
	export let statusText: string = 'Ready';
	let className: string = '';
	export { className as class };
</script>

<section class="retro-panel {className}">
	{#if title}
		<header class="panel-titlebar">
			<div class="titlebar-left">
				{#if icon}
					<span class="titlebar-icon">{icon}</span>
				{/if}
				<span class="titlebar-title">{title}</span>
			</div>
			
			<div class="titlebar-controls">
				<button class="window-btn" aria-label="Minimize" disabled>_</button>
				<button class="window-btn" aria-label="Maximize" disabled>□</button>
				<button class="window-btn close" aria-label="Close" disabled>×</button>
			</div>
		</header>
	{/if}
	
	<div class="panel-content">
		<slot />
	</div>
	
	{#if statusText}
		<footer class="panel-statusbar">
			<span class="status-text">{statusText}</span>
		</footer>
	{/if}
</section>

<style>
	.retro-panel {
		background: var(--surface-2);
		border: 2px solid;
		border-color: 
			var(--crt-gray-300) 
			var(--crt-black) 
			var(--crt-black) 
			var(--crt-gray-300);
		box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.3);
	}
	
	.panel-titlebar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-xs) var(--space-sm);
		background: linear-gradient(
			90deg,
			var(--neon-purple-700) 0%,
			var(--neon-purple-500) 100%
		);
		border-bottom: 2px solid var(--neon-purple-400);
	}
	
	.titlebar-left {
		display: flex;
		align-items: center;
		gap: var(--space-sm);
	}
	
	.titlebar-icon {
		font-size: 1rem;
	}
	
	.titlebar-title {
		font-family: var(--font-interface);
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--crt-white);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
	
	.titlebar-controls {
		display: flex;
		gap: var(--space-xs);
	}
	
	.window-btn {
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--crt-gray-300);
		border: 1px solid;
		border-color: var(--crt-white) var(--crt-black) var(--crt-black) var(--crt-white);
		font-family: var(--font-interface);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--crt-black);
		cursor: not-allowed;
		opacity: 0.7;
	}
	
	.window-btn.close {
		background: var(--magenta-error);
		color: var(--crt-white);
	}
	
	.panel-content {
		padding: var(--space-lg);
	}
	
	.panel-statusbar {
		padding: var(--space-xs) var(--space-sm);
		background: var(--crt-gray-800);
		border-top: 2px solid;
		border-color: var(--crt-black) var(--crt-gray-300) var(--crt-gray-300) var(--crt-black);
	}
	
	.status-text {
		font-family: var(--font-label);
		font-size: 0.75rem;
		color: var(--crt-gray-300);
	}
	
	@media (max-width: 768px) {
		.panel-content {
			padding: var(--space-md);
		}
		
		.retro-panel {
			border-width: 1px;
		}
	}
</style>

