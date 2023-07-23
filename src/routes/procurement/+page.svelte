<script lang="ts">
	import Showcase from '$lib/components/showcase.svelte';
	import Vendors from '$lib/components/vendors.svelte';
	import { procurementPage, procurementPageShowcase } from '$lib/data';

	import type { PageShowcaseType } from '$lib/types/types';

	const data: PageShowcaseType = procurementPageShowcase;
</script>

<svelte:head>
	<title>Hardware Procurement</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="py-20">
	<div class="container w-full rounded-3xl border border-blue-1000 p-12">
		<h1
			class="bg-gradient-to-r from-blue-600 to-indigo-300 bg-clip-text text-3xl font-extrabold uppercase tracking-wide text-transparent lg:text-4xl"
		>
			{procurementPage.title}
		</h1>
		<h2
			class="my-5 w-fit rounded-full bg-blue-900/40 px-4 py-2 text-xs font-bold uppercase text-blue-600"
		>
			{procurementPage.hero.header}
		</h2>
		<ul class="text-white">
			{#each procurementPage.hero.listOfReasons as { subtitle, text }}
				<li class="mb-3">
					<h3 class="font-normal text-white">{subtitle}</h3>
					<p>{text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
<Vendors />
<Showcase {data} />
