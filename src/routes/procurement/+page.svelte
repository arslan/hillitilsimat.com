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
	<div class="border-blue-1000 border w-full rounded-3xl p-12 container">
		<h1
			class="uppercase tracking-wide font-extrabold text-4xl text-transparent bg-gradient-to-r from-blue-600 to-indigo-300 bg-clip-text"
		>
			{procurementPage.title}
		</h1>
		<h2
			class="rounded-full w-fit py-2 px-4 my-5 uppercase text-xs bg-blue-900/40 text-blue-600 font-bold"
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
