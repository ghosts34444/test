// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image'],
  image: {
    quality: 92,
    format: ['webp'],
    ipx: {
      modifiers: {
        quality: '92'
      }
    }
  }
})