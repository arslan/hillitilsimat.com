<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { register } from 'swiper/element/bundle';
	register();
	export let data: any;
	export let bgColor: string;
</script>

<swiper-container effect="cards" grab-cursor="true" autoplay="true" speed="800">
	<!-- Software services -->
	{#each data as { iconSrc, header, description }}
		<swiper-slide class={bgColor}>
			<a class="service-container" href="/services">
				<Icon src={iconSrc} size="3rem" stroke-width="1" theme="outline" />
				<h2>{header}</h2>
				<p>
					{description}
				</p>
			</a>
		</swiper-slide>
	{/each}
</swiper-container>

<style lang="postcss">
	swiper-container {
		@apply w-96 overflow-visible mx-0;
	}

	swiper-slide {
		@apply border border-gray-400 h-96 rounded-lg overflow-clip bg-gradient-to-br;
	}

	.service-container {
		@apply bg-black w-full h-full py-4 px-8 flex flex-col justify-center items-center gap-3 hover:bg-transparent transition-all duration-300;
	}
</style>
