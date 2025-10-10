<script lang="ts">
	import { page } from '$app/stores';
	
	export let title: string;
	export let description: string;
	export let canonical: string = '';
	export let ogImage: string = '';
	export let type: 'website' | 'article' = 'website';
	export let publishDate: string | undefined = undefined;
	export let modifiedDate: string | undefined = undefined;
	
	const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'https://modible.netlify.app';
	const fullTitle = title.includes('Modible') ? title : `${title} | Modible`;
	const fullCanonical = canonical || `${siteUrl}${$page.url.pathname}`;
	const fullOgImage = ogImage || `${siteUrl}/og-default.png`;
</script>

<svelte:head>
	<!-- Basic Meta -->
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={fullCanonical} />
	
	<!-- Open Graph -->
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullOgImage} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullCanonical} />
	<meta property="og:site_name" content="Modible" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullOgImage} />
	
	<!-- Article Meta (if applicable) -->
	{#if type === 'article' && publishDate}
		<meta property="article:published_time" content={publishDate} />
	{/if}
	{#if type === 'article' && modifiedDate}
		<meta property="article:modified_time" content={modifiedDate} />
	{/if}
</svelte:head>

