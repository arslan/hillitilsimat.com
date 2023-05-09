<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowLongRight } from '@steeze-ui/heroicons';
	// import ServicesSwiper from './services-swiper.svelte';
	import classnames from 'classnames';
	import { servicesData } from '$lib/data';
</script>

<section class="bg-gradient-to-b from-black/20 from-5% to-transparent">
	<div class="container flex justify-center items-center gap-12 my-20">
		{#each servicesData as { title, description, serviceList, linkTitle, href, accentColor, gradientColor, borderColor, textColor }}
			<div
				class="flex flex-col mx-auto justify-center border rounded-lg border-blue-1000 w-1/2 p-12"
			>
				<div class="flex flex-col gap-6 mb-12">
					<h1 class="h-12">{title}</h1>
					<p class="h-20">{description}</p>

					<a
						{href}
						class={classnames(
							`uppercase font-medium font-mono text-white flex gap-2 ease-out hover:gap-3 transition-all text-xs tracking-wider items-center underline underline-offset-4`,
							`${accentColor}`
						)}>{linkTitle}<Icon src={ArrowLongRight} size="1.25rem" stroke-width="2" /></a
					>
				</div>
				<!-- <ServicesSwiper data={serviceList} {gradientColor} {borderColor} {textColor} /> -->
			</div>
		{/each}
	</div>
</section>
