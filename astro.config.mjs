// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://miguelp04.github.io/',
  base: '/techsity-landing-page',
  vite: {
    plugins: [tailwindcss()]
  }
});