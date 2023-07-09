<script>
	import LogoSwiper from './logo-swiper.svelte';
	import { vendorLogoList } from '$lib/data';
</script>

<div class="container my-8 flex flex-col gap-4">
	<h1>Our vendors</h1>
	<p class="max-w-lg">
		At our IT company, we work with some of the best vendors in the industry to provide our clients
		with high-quality solutions and services.
	</p>
</div>
<LogoSwiper swiperName="vendors-swiper" src={vendorLogoList} />
