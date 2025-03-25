// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://andrewclo.github.io', // Replace with your GitHub username
  base: '/astro-job-board', // Updated to match your repository name
  output: 'static',
  integrations: [tailwind(), svelte()],
});
