<script lang="ts">
	import type { PageShowcaseType } from '$lib/types/types';

	export let data: PageShowcaseType;
</script>

<section class="py-32">
	<div class="container">
		<h1 class="mb-12">{data.headline}</h1>
		<div class="container grid lg:grid-cols-3 grid-rows-1 gap-4 sm:grid-cols-1">
			<div class="col-span-1 row-span-1 flex flex-col gap-4">
				{#each data.col1 as { title, text }}
					<div class="hover:bg-white/5 transition-all duration-300">
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
				{/each}
			</div>
			<div class="col-span-1 row-span-1 flex flex-col gap-4">
				{#each data.col2 as { title, text }}
					<div class="hover:bg-white/5 transition-all duration-300">
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
				{/each}
			</div>
			<div class="col-span-1 row-span-1 flex flex-col gap-4 rounde">
				{#each data.col3 as { title, text }}
					<div class="hover:bg-white/5 transition-all duration-300">
						<h2>{title}</h2>
						<p>{text}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.container > div > div > div {
		border-width: 1px;
		border-color: rgb(28, 29, 37);
		border-radius: 0.5rem;
		padding: 1.5rem;
	}
</style>
