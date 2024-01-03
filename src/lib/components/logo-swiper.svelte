<script lang="ts">
	import { onMount } from 'svelte';
	import { register } from 'swiper/element/bundle';
	register();

	type SwiperElement = HTMLElement & { initialize: () => void };

	export let swiperName: String;
	export let src: string[];

	let swiperEl: SwiperElement | null;

	onMount(() => {
		const params = {
			injectStyles: [
				`
				:host(.${swiperName}) .swiper-wrapper {
					-webkit-transition-timing-function: linear !important;
					-o-transition-timing-function: linear !important;
					transition-timing-function: linear !important;	
				}
				`
			]
		};
		Object.assign(swiperEl!, params);

		swiperEl?.initialize();
	});
</script>

<swiper-container
	bind:this={swiperEl}
	init={false}
	grab-cursor={false}
	autoplay={true}
	autoplay-delay={1}
	autoplay-disable-on-interaction={false}
	speed={6000}
	slides-per-view={'auto'}
	space-between={30}
	free-mode={true}
	loop={true}
	class={swiperName}
>
	{#each src as src}
		<swiper-slide class="my-auto flex !w-48 items-center justify-center rounded-lg p-4 invert">
			<img {src} alt="Vendor Logo" />
			<div class="absolute h-full w-full bg-white/30" />
		</swiper-slide>
	{/each}
</swiper-container>

<style>
	img {
		width: 100%;
		height: 4.5rem;
		aspect-ratio: 16/9;
		object-fit: contain;
	}
</style>
