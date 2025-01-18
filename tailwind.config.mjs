/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
	  './public/**/*.html',
	],
	theme: {
	  extend: {
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
		    },
	    colors: {
		'background': '#1b1b1b',
		'accent': '#e94b27',

	    },
	  },
	},
	plugins: [],
    };
    