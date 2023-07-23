<script>
	import ArrowLongRight from '../images/ArrowLongRight.svelte';
	import classnames from 'classnames';
	import { servicesData } from '$lib/data';
</script>

<section id="services">
	<div class="container mb-20 flex flex-col justify-center gap-12 lg:my-20 lg:flex-row">
		{#each servicesData as { title, description, serviceList, accentColor }}
			<div class="mx-auto flex flex-col rounded-lg border border-blue-1000 p-12 lg:w-1/2">
				<div class="flex flex-col gap-8">
					<h1>{title}</h1>
					<p class="">{description}</p>
					<div class="mb-12 flex flex-col gap-3">
						{#each serviceList as { name, href }}
							<a
								{href}
								class={classnames(
									`flex items-center gap-2 text-sm font-light tracking-wider text-gray-300 transition-all ease-out hover:gap-3`,
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
