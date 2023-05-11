<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import { ArrowLongRight } from '@steeze-ui/heroicons';
	// import ServicesSwiper from './services-swiper.svelte';
	import classnames from 'classnames';
	import { servicesData } from '$lib/data';
</script>

<section class="bg-gradient-to-b from-black/20 from-5% to-transparent">
	<div class="container flex justify-center gap-12 my-20">
		{#each servicesData as { title, description, serviceList, accentColor }}
			<div class="flex flex-col mx-auto border rounded-lg border-blue-1000 w-1/2 p-12">
				<div class="flex flex-col gap-8 mb-12">
					<h1>{title}</h1>
					<p class="">{description}</p>
					<div class="flex flex-col gap-3 mb-12">
						{#each serviceList as { name, href }}
							<a
								{href}
								class={classnames(
									`uppercase font-medium font-mono text-gray-300 flex gap-2 ease-out hover:gap-3 transition-all text-xs tracking-wider items-center underline underline-offset-4`,
									`${accentColor}`
								)}>{name}<Icon src={ArrowLongRight} size="1.25rem" stroke-width="2" /></a
							>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
