/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
	  './public/**/*.html',
	],
	theme: {
	  extend: {
	    colors: {
		'terminal-bg': '#121212',
		'terminal-gray': '#1E1E1E',
		'terminal-text': '#E5E5E5',
		'accent-green': '#00FF7F',
		// Additional greys for the sections:
		'section-grey-1': '#1A1A1A',
		'section-grey-2': '#242424',
		'section-grey-3': '#2E2E2E',
		'section-grey-4': '#383838',
	    },
	  },
	},
	plugins: [],
    };
    