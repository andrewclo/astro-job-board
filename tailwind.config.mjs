/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#ffffff',
          light: '#f8f8f8',
          dark: '#f0f0f0',
        },
        accent: {
          DEFAULT: '#ff3b30',
          light: '#ff6b64',
          dark: '#e62e24',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderWidth: {
        '2': '2px',
        '3': '3px',
      },
      boxShadow: {
        'subtle': '0 2px 4px rgba(0, 0, 0, 0.05)',
        'hover': '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [],
} 