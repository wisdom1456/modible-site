<div class="scanlines" aria-hidden="true"></div>

<style>
	.scanlines {
		position: fixed;
		inset: 0;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			transparent 50%,
			rgba(0, 0, 0, 0.1) 51%
		);
		background-size: 100% 4px;
		z-index: var(--z-effects);
		opacity: 0.2;
	}
	
	@media (max-width: 768px) {
		.scanlines {
			opacity: 0.1;
		}
	}
	
	@media (prefers-reduced-motion: reduce) {
		.scanlines {
			display: none;
		}
	}
</style>

