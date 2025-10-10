<script lang="ts">
	import Tag from '$lib/components/ui/Tag.svelte';
	
	export let title: string;
	export let description: string;
	export let imageUrl: string;
	export let href: string;
	export let tags: string[] = [];
	export let featured: boolean = false;
</script>

<article class="arcade-card" class:featured>
	<a {href} class="card-link">
		<header class="marquee">
			<span class="marquee-text">{title}</span>
		</header>
		
		<div class="screen">
			<img 
				src={imageUrl} 
				alt="{title} preview"
				loading="lazy"
				width="400"
				height="300"
			/>
			<div class="crt-overlay" />
		</div>
		
		<footer class="controls">
			<div class="tags">
				{#each tags.slice(0, 3) as tag}
					<Tag label={tag} />
				{/each}
			</div>
			
			<div class="cta">
				<span class="cta-text">INSERT COIN TO PLAY</span>
			</div>
		</footer>
	</a>
</article>

<style>
	.arcade-card {
		position: relative;
		background: var(--surface-2);
		border: 3px solid var(--crt-gray-700);
		border-radius: var(--radius-md);
		overflow: hidden;
		transition: transform var(--duration-normal) var(--ease-default),
		            box-shadow var(--duration-normal) var(--ease-default);
	}
	
	.arcade-card:hover {
		transform: translateY(-4px);
		box-shadow: 
			0 0 20px rgba(168, 85, 247, 0.3),
			0 10px 30px rgba(0, 0, 0, 0.5);
	}
	
	.arcade-card.featured {
		border-color: var(--neon-purple-500);
		box-shadow: 0 0 15px rgba(168, 85, 247, 0.2);
	}
	
	.card-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}
	
	.marquee {
		background: linear-gradient(
			135deg,
			var(--neon-purple-700) 0%,
			var(--neon-purple-500) 100%
		);
		padding: var(--space-md);
		text-align: center;
		border-bottom: 2px solid var(--neon-purple-400);
		position: relative;
	}
	
	.marquee::before,
	.marquee::after {
		content: '◆';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		color: var(--neon-purple-200);
		font-size: 0.75rem;
		animation: blink 1.5s ease-in-out infinite;
	}
	
	.marquee::before { left: var(--space-md); }
	.marquee::after { right: var(--space-md); }
	
	.marquee-text {
		font-family: var(--font-display);
		font-size: 0.875rem;
		color: var(--crt-white);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-shadow: 0 0 10px var(--neon-purple-200);
	}
	
	.screen {
		position: relative;
		aspect-ratio: 4 / 3;
		background: var(--crt-black);
		overflow: hidden;
	}
	
	.screen img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	
	.crt-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to bottom,
			transparent 50%,
			rgba(0, 0, 0, 0.1) 51%
		);
		background-size: 100% 4px;
		pointer-events: none;
		opacity: 0;
		transition: opacity var(--duration-normal);
	}
	
	.arcade-card:hover .crt-overlay {
		opacity: 0.3;
	}
	
	.controls {
		padding: var(--space-md);
		background: var(--crt-gray-800);
		border-top: 2px solid var(--crt-gray-700);
	}
	
	.tags {
		display: flex;
		gap: var(--space-sm);
		margin-bottom: var(--space-md);
		flex-wrap: wrap;
	}
	
	.cta {
		text-align: center;
		padding: var(--space-sm);
		background: var(--crt-black);
		border: 2px solid;
		border-color: var(--crt-black) var(--crt-gray-300) var(--crt-gray-300) var(--crt-black);
	}
	
	.cta-text {
		font-family: var(--font-label);
		font-size: 0.75rem;
		color: var(--amber-warning);
		text-shadow: 0 0 5px var(--amber-warning);
		letter-spacing: 0.1em;
	}
	
	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.3; }
	}
	
	@media (max-width: 768px) {
		.marquee-text {
			font-size: 0.75rem;
		}
		
		.arcade-card {
			border-width: 2px;
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		.marquee::before,
		.marquee::after {
			animation: none;
		}
	}
</style>

