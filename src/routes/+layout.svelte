<script lang="ts">
	import '../app.css';
	import Logo from '$lib/images/logo.svelte';
	import '@fontsource/ibm-plex-sans/300.css';
	import '@fontsource/ibm-plex-sans/400.css';
	import '@fontsource/ibm-plex-sans/500.css';
	import '@fontsource/ibm-plex-sans/700.css';
	import '@fontsource/ibm-plex-mono/400.css';
	import '@fontsource/ibm-plex-mono/500.css';

	const navData = [
		{ href: '/services', name: 'Services' },
		{ href: '/works', name: 'Works' },
		{ href: '/careers', name: 'Careers' }
	];
</script>

<header class="fixed w-full z-30 backdrop-blur-[2px] border-b border-blue-1000">
	<div class="flex justify-between h-14 items-center container">
		<a href="/">
			<Logo />
		</a>
		<div class="flex gap-12">
			<nav
				class="flex gap-8 items-center text-sm tracking-wider font-thin justify-end text-gray-300"
			>
				{#each navData as { href, name }}
					<a
						{href}
						class="hover:text-gray-400/80 text-xs tracking-wider transition-colors duration-200 font-mono uppercase"
						>{name}</a
					>
				{/each}
			</nav>
		</div>
	</div>
</header>
<slot />

<style lang="postcss">
	:global(body) {
		@apply bg-black;
	}
	:global(p) {
		@apply font-thin tracking-wide leading-normal text-gray-400;
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
</style>
