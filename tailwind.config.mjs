/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
	  './public/**/*.html',
	],
	theme: {
	  extend: {
	    colors: {
		'background': '#1b1b1b',

	    },
	  },
	},
	plugins: [],
    };
    