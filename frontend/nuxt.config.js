
export default defineNuxtConfig({
  components: [
    { path: '~/components/form', prefix: 'Form' },
    { path: '~/components/friends', prefix: 'Friends' },
    { path: '~/components/profile', prefix: 'Profile' },
    { path: '~/components/global', prefix: 'Global' },
    { path: '~/components/atoms', prefix: 'Base' }
  ],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
