// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://YOUR_GITHUB_USERNAME.github.io', // Replace with your GitHub username
  base: '/REPOSITORY_NAME', // Replace with your repository name
  output: 'static',
  integrations: [tailwind(), svelte()],
});
