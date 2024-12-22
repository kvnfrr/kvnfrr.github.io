// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Set the base path to '/' for a user site
  base: '/',
  
  // Output the built site to the 'docs' directory
  outDir: 'docs',
  
  // Integrate Tailwind CSS
  integrations: [tailwind()]
});
