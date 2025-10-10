<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { onMount } from 'svelte';
	import '$lib/styles/global.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import Scanlines from '$lib/components/effects/Scanlines.svelte';
	import CassetteLoader from '$lib/components/ui/CassetteLoader.svelte';
	import MusicPlayer from '$lib/components/ui/MusicPlayer.svelte';
	import GoogleAnalytics from '$lib/components/analytics/GoogleAnalytics.svelte';
	import { musicPlayer } from '$lib/stores/musicPlayer';
	import type { Track } from '$lib/stores/musicPlayer';
	
	let showLoader = false;
	let loaderProgress = 0;
	let loaderTimeout: ReturnType<typeof setTimeout> | null = null;
	
	// Load playlist on mount
	onMount(async () => {
		try {
			const response = await fetch('/music/playlist.json');
			if (response.ok) {
				const playlist: Track[] = await response.json();
				musicPlayer.setPlaylist(playlist);
			}
		} catch (error) {
			console.warn('Failed to load music playlist:', error);
		}
	});
	
	// Only show loader for transitions that take longer than 300ms
	$: if ($navigating) {
		loaderTimeout = setTimeout(() => {
			showLoader = true;
			loaderProgress = 30; // Start at 30%
			
			// Simulate progress
			const progressInterval = setInterval(() => {
				loaderProgress = Math.min(loaderProgress + 10, 90);
			}, 200);
			
			// Clean up on navigation complete
			const unsubscribe = navigating.subscribe(nav => {
				if (!nav && showLoader) {
					clearInterval(progressInterval);
					loaderProgress = 100;
					setTimeout(() => {
						showLoader = false;
						loaderProgress = 0;
					}, 300);
				}
			});
			
			return () => {
				clearInterval(progressInterval);
				unsubscribe();
			};
		}, 300);
	} else {
		if (loaderTimeout) {
			clearTimeout(loaderTimeout);
			loaderTimeout = null;
		}
		if (showLoader) {
			loaderProgress = 100;
			setTimeout(() => {
				showLoader = false;
				loaderProgress = 0;
			}, 300);
		}
	}
</script>

<svelte:head>
	<!-- Font preloads -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;600;700&family=Press+Start+2P&display=swap" rel="stylesheet">
	
	<!-- Viewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- Theme color -->
	<meta name="theme-color" content="#1A0B2E">
</svelte:head>

<!-- Skip link -->
<a href="#main-content" class="skip-link">Skip to content</a>

<div class="app">
	<Header currentPath={$page.url.pathname} />
	
	<main id="main-content" class="main-content">
		<slot />
	</main>
	
	<Footer />
</div>

<!-- Global effects -->
<Scanlines />
<CassetteLoader visible={showLoader} progress={loaderProgress} />
<MusicPlayer />

<!-- Analytics -->
<GoogleAnalytics />

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	
	.main-content {
		flex: 1;
		padding: var(--space-xl) 0;
	}
	
	@media (max-width: 768px) {
		.main-content {
			padding: var(--space-lg) 0;
		}
	}
</style>

