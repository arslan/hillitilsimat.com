<script lang="ts">
	import '../app.css';
	import Cursor from '$lib/components/cursor.svelte';
	import Logo from '$lib/images/Logo.svelte';
</script>

<Cursor />
<header>
	<div class="header">
		<a href="/">
			<Logo />
		</a>
		<div class="nav-container">
			<nav>
				<a href="/services">Services</a>
				<a href="/works">Works</a>
				<a href="/contact">Careers</a>
			</nav>
		</div>
	</div>
</header>
<slot />

<style lang="postcss">
	header {
		@apply fixed w-full z-20;
	}
	.header {
		@apply flex justify-between h-14 px-16 items-center;
	}

	.nav-container {
		@apply flex gap-12;
	}

	nav {
		@apply flex gap-8 items-center text-sm tracking-wider font-thin justify-end text-gray-200;
	}
	nav > a {
		@apply hover:text-white transition-colors duration-200;
	}
</style>
