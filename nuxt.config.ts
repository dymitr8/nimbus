export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 7777,
  },
})
