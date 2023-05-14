<script lang="ts">
	import { register } from 'swiper/element/bundle';
	register();

	import { onMount } from 'svelte';

	type SwiperElement = HTMLElement & { initialize: () => void };

	export let swiperName: String;
	export let src: string[];

	onMount(() => {
		const swiperEl: SwiperElement | null = document.querySelector(`.${swiperName}`);

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

		swiperEl!.initialize();
	});
</script>

<swiper-container
	init="false"
	grab-cursor="false"
	autoplay="true"
	autoplay-delay="1"
	autoplay-disable-on-interaction="false"
	speed="6000"
	slides-per-view="auto"
	space-between="30"
	free-mode="true"
	loop="true"
	class={swiperName}
>
	{#each src as src}
		<swiper-slide class="!w-48 rounded-lg p-4 invert flex justify-center items-center my-auto">
			<img {src} alt="Vendor Logo" class="object-contain" />
			<div class="w-full h-full absolute bg-white/30" />
		</swiper-slide>
	{/each}
</swiper-container>

<style>
	img {
		width: 100%;
		height: 6rem;
	}
</style>
