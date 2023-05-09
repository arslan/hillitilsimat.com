<script>
	import heroBackground from '$lib/images/hero-background.webm';
</script>

<section class="relative flex justify-center h-screen items-center bg-black">
	<video autoplay loop muted class="absolute w-full h-full"
		><source src={heroBackground} type="video/webm" /></video
	>
	<div class="absolute w-full h-full top-0 left-0 bg-black/20" />
	<h1 class="text-5xl tracking-wider font-light text-white z-20 uppercase">Embrace technology.</h1>
</section>
