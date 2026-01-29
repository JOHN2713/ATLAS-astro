import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare({
    mode: 'directory',
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  }
});
