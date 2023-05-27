import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';

export default defineNuxtConfig({
  components: [
    { path: '~/components/form', prefix: 'Form'},
    { path: '~/components/friends', prefix: 'Friends'},
    { path: '~/components/profile', prefix: 'Profile'},
  ],
  modules: ['@pinia/nuxt'],
  css: [
    '@/assets/css/styles.css',
  ],
  vite: {
    plugins: [
        Components({
            dts: true,
            resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
        }),
    ],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})