// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'CrossKultur - Association Manga & Événements',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'CrossKultur organise des événements inspirés de situations et univers présents dans les mangas, transposés dans la réalité.' }
      ]
    }
  }
})
