<script lang="ts">
	import '../app.css';
	import Logo from '$lib/images/Logo.svelte';
	// Supports weights 100-900
	import '@fontsource-variable/work-sans';
	import Footer from '$lib/components/footer.svelte';

	const navData = [
		{ href: '#services', name: 'Services' },
		// { href: '/works', name: 'Works' },
		{ href: 'mailto:hi@hillitilsimat.com?subject=Careers [from Website]', name: 'Careers' }
	];
</script>

<header class="sticky top-0 z-30 w-full border-b border-blue-1000 backdrop-blur-[2px]">
	<div class="container flex h-24 items-center justify-between px-4 lg:mx-auto lg:h-14">
		<a href="/">
			<Logo />
		</a>
		<nav class="flex gap-8 text-gray-400">
			{#each navData as { href, name }}
				<a
					{href}
					class="text-base font-light tracking-wider transition-colors duration-200 hover:text-gray-100 lg:text-sm"
					>{name}</a
				>
			{/each}
		</nav>
	</div>
</header>
<main>
	<slot />
</main>

<Footer />

<style lang="postcss">
	:global(body) {
		@apply bg-black;
	}
	:global(p) {
		@apply font-light tracking-wide text-gray-400;
	}
	:global(section) {
		@apply border-b border-blue-1000;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		@apply text-gray-300;
	}

	:global(h1) {
		@apply text-3xl;
	}
	:global(h2) {
		@apply text-lg;
	}

	:global(.body-link) {
		color: rgb(156 163 175);
		text-decoration-line: underline;
		text-underline-offset: 4px;

		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 150ms;
	}

	:global(.body-link:hover) {
		color: rgb(243 244 246);
	}
</style>
