<script lang="ts">
	import { onMount } from 'svelte';
	
	export let visible: boolean = false;
	export let progress: number = 0; // 0-100
	
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

{#if visible}
	<div class="cassette-loader" role="status" aria-live="polite" aria-label="Loading content">
		<div class="cassette">
			<div class="cassette-body">
				<!-- Left reel -->
				<div class="reel left" class:spinning={!reducedMotion}>
					<div class="reel-center"></div>
					<div class="reel-teeth"></div>
				</div>
				
				<!-- Tape strip -->
				<div class="tape-container">
					<div class="tape-strip">
						<div class="tape-progress" style="width: {progress}%"></div>
					</div>
					<div class="tape-label">LOADING...</div>
				</div>
				
				<!-- Right reel -->
				<div class="reel right" class:spinning={!reducedMotion}>
					<div class="reel-center"></div>
					<div class="reel-teeth"></div>
				</div>
			</div>
		</div>
		<span class="visually-hidden">Loading content, please wait...</span>
	</div>
{/if}

<style>
	.cassette-loader {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: var(--z-modal);
		background: rgba(0, 0, 0, 0.8);
		backdrop-filter: blur(4px);
		padding: var(--space-xxl);
		border-radius: var(--radius-md);
		border: 2px solid var(--neon-purple-500);
		box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
	}
	
	.cassette {
		width: 280px;
		height: 180px;
		background: linear-gradient(135deg, var(--crt-gray-800) 0%, var(--crt-gray-900) 100%);
		border-radius: var(--radius-sm);
		border: 2px solid;
		border-color: var(--crt-gray-300) var(--crt-black) var(--crt-black) var(--crt-gray-300);
		padding: var(--space-lg);
		box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
	}
	
	.cassette-body {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-md);
		height: 100%;
	}
	
	.reel {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: var(--crt-gray-700);
		border: 3px solid var(--crt-gray-500);
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.reel.spinning {
		animation: spin 2s linear infinite;
	}
	
	.reel-center {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: var(--crt-gray-900);
		border: 2px solid var(--crt-gray-500);
	}
	
	.reel-teeth {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	
	.reel-teeth::before,
	.reel-teeth::after {
		content: '';
		position: absolute;
		width: 4px;
		height: 30px;
		background: var(--crt-gray-500);
		left: 50%;
		top: 50%;
		transform-origin: center;
	}
	
	.reel-teeth::before {
		transform: translate(-50%, -50%) rotate(0deg);
	}
	
	.reel-teeth::after {
		transform: translate(-50%, -50%) rotate(90deg);
	}
	
	.tape-container {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
		align-items: center;
	}
	
	.tape-strip {
		width: 100%;
		height: 8px;
		background: var(--crt-black);
		border: 1px solid var(--crt-gray-500);
		border-radius: 2px;
		overflow: hidden;
		position: relative;
	}
	
	.tape-progress {
		height: 100%;
		background: linear-gradient(90deg, var(--neon-purple-700), var(--neon-purple-400));
		transition: width 0.3s ease-out;
		box-shadow: 0 0 8px var(--neon-purple-400);
	}
	
	.tape-label {
		font-family: var(--font-label);
		font-size: 0.75rem;
		color: var(--terminal-green);
		letter-spacing: 0.1em;
		text-shadow: 0 0 5px var(--terminal-green);
	}
	
	@keyframes spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}
	
	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
	
	@media (max-width: 768px) {
		.cassette-loader {
			padding: var(--space-xl);
		}
		
		.cassette {
			width: 220px;
			height: 140px;
			padding: var(--space-md);
		}
		
		.reel {
			width: 45px;
			height: 45px;
		}
		
		.reel-center {
			width: 15px;
			height: 15px;
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		.reel.spinning {
			animation: none;
		}
	}
</style>

