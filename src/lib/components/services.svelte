<script>
	import ArrowLongRight from '../images/ArrowLongRight.svelte';
	import classnames from 'classnames';
	import { servicesData } from '$lib/data';
</script>

<section id="services">
	<div class="container flex justify-center gap-12 my-20">
		{#each servicesData as { title, description, serviceList, accentColor }}
			<div class="flex flex-col mx-auto border rounded-lg border-blue-1000 w-1/2 p-12">
				<div class="flex flex-col gap-8">
					<h1>{title}</h1>
					<p class="">{description}</p>
					<div class="flex flex-col gap-3 mb-12">
						{#each serviceList as { name, href }}
							<a
								{href}
								class={classnames(
									`font-light text-gray-300 flex gap-2 ease-out hover:gap-3 transition-all text-sm tracking-wider items-center`,
									`${accentColor}`
								)}
								>{name}
								<!-- <Icon src={ArrowLongRight} size="1.25rem" stroke-width="1.5" /> -->

								<ArrowLongRight />
							</a>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
