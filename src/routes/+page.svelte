<script>
	import About from '$lib/components/about.svelte';
	import Clients from '$lib/components/clients.svelte';
	import Cta from '$lib/components/cta.svelte';
	import Hero from '$lib/components/hero.svelte';
	import Services from '$lib/components/services.svelte';
</script>

<svelte:head>
	<title>Hilli Tilsimat — IT Company</title>
	<meta name="description" content="Hilli Tilsimat — a hardware and web/app development company." />
</svelte:head>
<Hero />
<Services />
<About />
<Clients />
<Cta />
