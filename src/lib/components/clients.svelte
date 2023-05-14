<script>
	import LogoSwiper from './logo-swiper.svelte';
	import { clientLogoList } from '$lib/data';
</script>

<div class="container my-8 flex flex-col gap-4">
	<h1>Join our growing list of clients</h1>
	<p class="max-w-lg">
		At Hilli Tilsimat, we are proud to serve a diverse range of clients from different industries
		and regions. Our clients trust us to deliver high-quality IT solutions that meet their business
		needs and goals.
	</p>
</div>
<LogoSwiper swiperName="clients-swiper" src={clientLogoList} />
