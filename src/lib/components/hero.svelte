<script>
	import heroBackground from '$lib/images/hero-background.webm';
</script>

<div class="hero">
	<video autoplay loop muted><source src={heroBackground} type="video/webm" /></video>
	<div class="overlay" />
	<h1>Embrace technology.</h1>
</div>

<style lang="postcss">
	.hero {
		@apply relative flex justify-center h-screen items-center;
	}
	video {
		@apply absolute w-full h-full z-10;
	}
	.hero h1 {
		@apply text-5xl font-semibold text-white z-20;
	}
	.overlay {
		@apply absolute w-full h-full top-0 left-0 bg-black/20;
	}
</style>
