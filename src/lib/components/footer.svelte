<script>
	import { servicesData } from '$lib/data';
	import LogoWhiteFull from '$lib/images/LogoWhiteFull.svelte';
</script>

<section>
	<div class="container my-8 flex flex-col justify-between gap-12 lg:my-20 lg:flex-row lg:gap-0">
		<div class="flex flex-col gap-4">
			<div class="w-32">
				<LogoWhiteFull />
			</div>
			<h3 class="!text-sm tracking-wide text-gray-400">
				Your trusted partner in digital transformation.
			</h3>
		</div>
		<div class="flex flex-col gap-3 lg:flex-row lg:gap-16">
			{#each servicesData as { title, serviceList, accentColor }}
				<div class="flex max-w-[10rem] flex-col gap-1 lg:gap-4">
					<h3>{title}</h3>
					<ul class="flex flex-col gap-2 text-xs font-light tracking-wide text-gray-400">
						{#each serviceList as { name, href }}
							<li class={`${accentColor} transition-colors duration-200`}>
								<a {href}>{name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
			<div class="flex max-w-[10rem] flex-col gap-1 lg:gap-4">
				<h3>Links</h3>
				<ul class="flex flex-col gap-2 text-xs font-light tracking-wide text-gray-400">
					<!-- <li class="hover:text-gray-100 transition-colors duration-200">
						<a href="/works">Works</a>
					</li> -->
					<li class="transition-colors duration-200 hover:text-gray-100">
						<a href="mailto:hi@hillitilsimat.com?subject=Careers [from Website]">Careers</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="container py-2 text-center text-xs lg:text-left">
		<p>Copyright &copy; 2023 IE "Hilli Tilsimat". All rights reserved.</p>
	</div>
</section>

<style>
	h3 {
		font-weight: 300;
		font-size: 1.25rem /* 20px */;
		line-height: 1.75rem /* 28px */;
	}
</style>
