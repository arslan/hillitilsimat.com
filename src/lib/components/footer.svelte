<script>
	import { servicesData } from '$lib/data';
	import LogoWhiteFull from '$lib/images/logo-white-full.svelte';
</script>

<section>
	<div class="container my-20 flex justify-between">
		<div class="flex flex-col gap-4">
			<div class="w-32">
				<LogoWhiteFull />
			</div>
			<h3 class="!text-sm text-gray-400 tracking-wide">
				Your trusted partner in digital transformation.
			</h3>
		</div>
		<div class="flex gap-16">
			{#each servicesData as { title, serviceList, accentColor }}
				<div class="flex flex-col gap-4 max-w-[10rem]">
					<h3>{title}</h3>
					<ul class="text-gray-400 tracking-wide font-light text-xs flex flex-col gap-2">
						{#each serviceList as { name, href }}
							<li class={`${accentColor} transition-colors duration-200`}>
								<a {href}>{name}</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
			<div class="flex flex-col gap-4 max-w-[10rem]">
				<h3>Links</h3>
				<ul class="text-gray-400 tracking-wide font-light text-xs flex flex-col gap-2">
					<!-- <li class="hover:text-gray-100 transition-colors duration-200">
						<a href="/works">Works</a>
					</li> -->
					<li class="hover:text-gray-100 transition-colors duration-200">
						<a href="mailto:hi@hillitilsimat.com?subject=Careers [from Website]">Careers</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<section>
	<div class="container text-xs py-2">
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
