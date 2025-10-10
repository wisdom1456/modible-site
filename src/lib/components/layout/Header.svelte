<script lang="ts">
	export let currentPath: string = '';
	
	const navItems = [
		{ label: 'Play', href: '/demos' },
		{ label: 'Read', href: '/essays' },
		{ label: 'Gallery', href: '/art' },
		{ label: 'Log', href: '/log' },
		{ label: 'About', href: '/about' }
	];
</script>

<header class="site-header">
	<a href="/" class="logo">
		<span class="logo-text">MODIBLE</span>
		<span class="logo-version">v1.0</span>
	</a>
	
	<nav class="main-nav" aria-label="Main navigation">
		{#each navItems as item}
			<a 
				href={item.href}
				class:active={currentPath.startsWith(item.href)}
				class="nav-link"
			>
				{item.label}
			</a>
		{/each}
	</nav>
</header>

<style>
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-md) var(--space-lg);
		background: var(--surface-2);
		border-bottom: 2px solid var(--crt-gray-700);
		position: sticky;
		top: 0;
		z-index: var(--z-sticky);
	}
	
	.logo {
		display: flex;
		align-items: baseline;
		gap: var(--space-sm);
		text-decoration: none;
		color: var(--neon-purple-400);
		font-family: var(--font-display);
		font-size: 1rem;
		transition: color var(--duration-fast) var(--ease-default);
	}
	
	.logo:hover {
		color: var(--neon-purple-200);
	}
	
	.logo-version {
		font-size: 0.625rem;
		color: var(--terminal-green);
	}
	
	.main-nav {
		display: flex;
		gap: var(--space-lg);
	}
	
	.nav-link {
		font-family: var(--font-interface);
		font-weight: 600;
		text-transform: uppercase;
		font-size: 0.875rem;
		letter-spacing: 0.05em;
		color: var(--crt-gray-300);
		text-decoration: none;
		transition: color var(--duration-fast) var(--ease-default);
		padding: var(--space-sm);
		min-height: 44px;
		display: flex;
		align-items: center;
	}
	
	.nav-link:hover {
		color: var(--terminal-green);
	}
	
	.nav-link.active {
		color: var(--neon-purple-400);
		text-shadow: 0 0 10px var(--neon-purple-400);
	}
	
	@media (max-width: 768px) {
		.site-header {
			flex-direction: column;
			gap: var(--space-md);
			padding: var(--space-md);
		}
		
		.main-nav {
			width: 100%;
			justify-content: space-around;
			gap: var(--space-sm);
			flex-wrap: wrap;
		}
		
		.nav-link {
			font-size: 0.75rem;
		}
	}
</style>

