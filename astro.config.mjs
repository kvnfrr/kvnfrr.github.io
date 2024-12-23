// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kvnfrr.github.io', // Your GitHub Pages site
  base: '/kvnfrr.github.io/', // Repository name
  outDir: './docs', // Output to 'docs' folder
  
  // Integrate Tailwind CSS
  integrations: [tailwind()]
});
