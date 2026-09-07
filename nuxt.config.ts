// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/fonts'],
  // experimental: {
  //   typedPages: true,
  // },
  imports: {
    scan: false,
    dirs: [],
  },
  components: {
    dirs: [],
  },
  fonts: {
    families: [{ name: 'Rubik', provider: 'fontsource' }],
  },
  runtimeConfig: {
    microcmsServerDomain: '',
    microcmsApiKey: '',
  },
  routeRules: {
    '/api/articles': {
      swr: 300
    }
  }
})
