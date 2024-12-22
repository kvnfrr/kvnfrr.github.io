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
	    },
	  },
	},
	plugins: [],
    };
    