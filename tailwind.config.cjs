/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: { 'blue-1000': 'rgb(28 29 37)' },
			fontFamily: {
				sans: `'Work Sans Variable' , 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
			'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'`,
				mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
			},
			container: {
				center: true,
				screens: {
					default: '1060px',
					xs: '375px',
					sm: '640px',
					md: '768px',
					lg: '1060px',
					xl: '1060px',
					'2xl': '1060px'
				}
			}
		}
	},
	plugins: []
};
