<script lang="ts">
	import Showcase from '$lib/components/showcase.svelte';
	import { webdevPage, webdevPageShowcase } from '$lib/data';

	import type { PageShowcaseType } from '$lib/types/types';

	const data: PageShowcaseType = webdevPageShowcase;
</script>

<svelte:head>
	<title>Web Development</title>
	<meta name="description" content="About this app" />
</svelte:head>
<section class="py-20">
	<div class="container w-full rounded-3xl border border-blue-1000 p-12">
		<h1
			class="bg-gradient-to-r from-green-600 to-green-300 bg-clip-text text-3xl font-extrabold uppercase tracking-wide text-transparent lg:text-4xl"
		>
			{webdevPage.title}
		</h1>
		<h2
			class="my-5 w-fit rounded-full bg-green-900/40 px-4 py-2 text-xs font-bold uppercase text-green-600"
		>
			{webdevPage.hero.header}
		</h2>
		<ul class="text-white">
			{#each webdevPage.hero.listOfReasons as { subtitle, text }}
				<li class="mb-3">
					<h3 class="font-normal text-white">{subtitle}</h3>
					<p>{text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
<Showcase {data} />
