// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  runtimeConfig: {
    // Variables privées (accessibles seulement côté serveur)
    adminPin: process.env.ADMIN_PIN || '0192',
    resendApiKey: process.env.RESEND_API_KEY,
    // Variables publiques (accessibles côté client avec NUXT_PUBLIC_ prefix)
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      'Poppins': [400, 500, 600, 700]
    }
  },
  app: {
    head: {
      title: 'Cross Kultur - Association Pop culture & Événements',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cross Kultur organise des événements inspirés de situations et univers présents dans la pop culture, transposés dans la réalité.' }
      ]
    }
  }
})
