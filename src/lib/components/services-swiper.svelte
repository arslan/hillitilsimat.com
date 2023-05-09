<script lang="ts">
	import classnames from 'classnames';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { register } from 'swiper/element/bundle';
	register();
	export let data: any;
	export let gradientColor: string;
	export let borderColor: string;
	export let textColor: string;
</script>

<swiper-container
	effect="cards"
	grab-cursor="true"
	autoplay="true"
	speed="800"
	class="w-96 overflow-visible m-0"
>
	<!-- Software services -->
	{#each data as { iconSrc, header, description }}
		<swiper-slide
			class={classnames(
				`border ${borderColor} h-96 rounded-lg overflow-clip bg-gradient-to-br`,
				gradientColor
			)}
		>
			<a
				class="group bg-black w-full h-full py-4 px-8 flex flex-col justify-center items-center gap-3 transition-colors ease-in-out duration-300 hover:bg-transparent"
				href="/services"
			>
				<Icon
					src={iconSrc}
					size="3rem"
					stroke-width="1"
					theme="outline"
					class={`text-white duration-300 ${textColor}`}
				/>
				<h2 class={`${textColor} duration-300`}>{header}</h2>
				<p class={`${textColor} duration-300`}>
					{description}
				</p>
			</a>
		</swiper-slide>
	{/each}
</swiper-container>
