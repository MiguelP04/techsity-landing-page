// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://miguelp04.github.io',
  base: process.env.NODE_ENV === 'production' ? '/techsity-landing-page/' : '/',
  trailingSlash: 'always',
  build: {
    assets: 'assets'
  },
  vite: {
    plugins: [tailwindcss()],
  }
});