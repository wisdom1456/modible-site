<script lang="ts">
	import { siteConfig } from '$lib/config';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	
	// Only load GA if enabled and we have an ID
	const enabled = siteConfig.analytics.enabled && siteConfig.analytics.gaId;
	
	// Track page views on route changes
	$: if (enabled && $page.url.pathname) {
		trackPageView($page.url.pathname);
	}
	
	function trackPageView(path: string) {
		if (typeof window !== 'undefined' && window.gtag) {
			window.gtag('config', siteConfig.analytics.gaId, {
				page_path: path,
				anonymize_ip: true,
				allow_google_signals: false,
				allow_ad_personalization_signals: false
			});
		}
	}
	
	onMount(() => {
		if (!enabled) return;
		
		// Initialize gtag
		window.dataLayer = window.dataLayer || [];
		window.gtag = function() {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		
		// Configure with privacy-friendly defaults
		window.gtag('config', siteConfig.analytics.gaId, {
			anonymize_ip: true,
			allow_google_signals: false,
			allow_ad_personalization_signals: false,
			cookie_flags: 'SameSite=None;Secure'
		});
		
		// Set consent mode defaults (privacy-first)
		window.gtag('consent', 'default', {
			ad_storage: 'denied',
			ad_user_data: 'denied',
			ad_personalization: 'denied',
			analytics_storage: 'granted',
			functionality_storage: 'granted',
			personalization_storage: 'denied',
			security_storage: 'granted'
		});
	});
</script>

<svelte:head>
	{#if enabled}
		<!-- Google Analytics -->
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id={siteConfig.analytics.gaId}"
		></script>
	{/if}
</svelte:head>

<style>
	/* This component has no visual output */
</style>

