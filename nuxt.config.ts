export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    "nuxt-marquee",
    '@vueuse/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 7777,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  googleFonts: {
    families:{
      Poppins: [300, 400, 500, 600, 700]
    }
  }
})