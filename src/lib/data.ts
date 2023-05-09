import { GlobeAlt, DevicePhoneMobile, ServerStack, WrenchScrewdriver } from '@steeze-ui/heroicons';

export const servicesData = [
	{
		title: 'Software',
		description:
			'Our software development services are designed to create modern, responsive, and user-friendly websites and apps that help businesses achieve their goals online.',
		linkTitle: 'Web & App delvelopment',
		href: '/software',
		accentColor: 'hover:text-green-600',
		gradientColor: 'from-green-600 to-green-900',
		borderColor: 'border-green-900',
		textColor: 'text-white',
		serviceList: [
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
		]
	},
	{
		title: 'Hardware',
		description: 'Hardware',
		linkTitle: 'Hardware pocurement & installation',
		href: '/hardware',
		accentColor: 'hover:text-blue-600',
		gradientColor: 'from-blue-600 to-blue-900',
		borderColor: 'border-blue-900',
		textColor: 'text-white',
		serviceList: [
			{
				iconSrc: ServerStack,
				header: 'Web',
				description:
					'We create modern, responsive, and user-friendly websites and e-commerce platforms that help businesses achieve their goals.'
			},
			{
				iconSrc: WrenchScrewdriver,
				header: 'Mobile',
				description:
					'Whether you need a simple iOS/Android app or a complex solution, we are here to help you turn your ideas into reality.'
			}
		]
	}
];
