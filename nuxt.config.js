export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: [
    '@/assets/css/styles.css',
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})