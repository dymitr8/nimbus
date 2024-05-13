export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/main.css'],
  devServer: {
    port: 7777,
  },
  googleFonts: {
    families:{
      Poppins: [300, 400, 500, 600, 700]
    }
  }
})
