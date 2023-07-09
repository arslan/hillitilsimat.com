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
	<div class="border-blue-1000 border w-full rounded-3xl p-12 container">
		<h1
			class="uppercase tracking-wide font-extrabold text-4xl text-transparent bg-gradient-to-r from-green-600 to-green-300 bg-clip-text"
		>
			{webdevPage.title}
		</h1>
		<h2
			class="rounded-full w-fit py-2 px-4 my-5 uppercase text-xs bg-green-900/40 text-green-600 font-bold"
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
