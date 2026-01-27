/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'atlas-primary': '#f7f3ed',
        'atlas-dark': '#0d1926',
        'atlas-secondary': '#ebe7e0',
        'atlas-gold': '#d4af37',
      },
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        serif: ['EB Garamond', 'Georgia', 'serif'],
        display: ['CameraPlainVariable', 'Source Sans 3', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
