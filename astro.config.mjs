// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://kvnfrr.github.io',
  integrations: [react(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});



