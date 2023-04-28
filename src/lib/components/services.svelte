<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		GlobeAlt,
		DevicePhoneMobile,
		ServerStack,
		WrenchScrewdriver,
		ArrowLongRight
	} from '@steeze-ui/heroicons';
	import ServicesSwiper from './services-swiper.svelte';

	const softwareData = [
		{
			iconSrc: GlobeAlt,
			header: 'Web',
			description:
				'We create modern, responsive, and user-friendly websites and e-commerce platforms that help businesses achieve their goals.'
		},
		{
			iconSrc: DevicePhoneMobile,
			header: 'Mobile',
			description:
				'Whether you need a simple iOS/Android app or a complex solution, we are here to help you turn your ideas into reality.'
		}
	];
	const hardwareData = [
		{
			iconSrc: GlobeAlt,
			header: 'Web',
			description:
				'We create modern, responsive, and user-friendly websites and e-commerce platforms that help businesses achieve their goals.'
		},
		{
			iconSrc: DevicePhoneMobile,
			header: 'Mobile',
			description:
				'Whether you need a simple iOS/Android app or a complex solution, we are here to help you turn your ideas into reality.'
		}
	];
</script>

<div class="overlay">
	<div class="service software">
		<div class="heading">
			<h1>Software</h1>
			<p>
				Our software development services are designed to create modern, responsive, and
				user-friendly websites and apps that help businesses achieve their goals online.
			</p>
			<a
				href="/software"
				class="uppercase font-bold text-white flex gap-2 text-sm items-center hover:text-green-600 transition-colors underline underline-offset-4"
				>Web & App Development<Icon src={ArrowLongRight} size="1.5rem" stroke-width="2" /></a
			>
		</div>
		<ServicesSwiper data={softwareData} bgColor="from-green-600 to-green-900" />
	</div>
	<div class="service hardware">
		<ServicesSwiper data={hardwareData} bgColor="from-blue-600 to-blue-900" />
		<div class="heading">
			<h1>Hardware</h1>
			<p>
				Our software development services are designed to create modern, responsive, and
				user-friendly websites and apps that help businesses achieve their goals online.
			</p>
		</div>
	</div>
	<div class="service design">
		<div class="heading">
			<h1>Hardware</h1>
			<p>
				Our software development services are designed to create modern, responsive, and
				user-friendly websites and apps that help businesses achieve their goals online.
			</p>
		</div>
		<ServicesSwiper data={hardwareData} bgColor="from-yellow-300 to-yellow-500" />
	</div>
	<div class="service itsupport">
		<ServicesSwiper data={hardwareData} bgColor="from-blue-600 to-blue-900" />
		<div class="heading">
			<h1>Hardware</h1>
			<p>
				Our software development services are designed to create modern, responsive, and
				user-friendly websites and apps that help businesses achieve their goals online.
			</p>
		</div>
	</div>
</div>

<style lang="postcss">
	.service {
		@apply flex container mx-auto justify-center py-20 gap-44;
	}

	.heading {
		@apply w-1/3 flex flex-col gap-6 mt-12 mb-4;
	}

	.heading > h1 {
		@apply text-4xl font-black text-white;
	}

	.heading > p {
		@apply leading-7;
	}

	.overlay {
		background: linear-gradient(to bottom, black, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 0) 95%, black);
	}
</style>
