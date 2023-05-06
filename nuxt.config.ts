// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      environment: process.env.ENVIRONMENT
    }
  },
  app: {
    head: {
      title: 'emoooodji – how ya doin?',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'emoodji helps you to spot when and why mood swings in your team occur.'
        }
      ],
      htmlAttrs: {
        class: 'scroll-smooth'
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }]
    }
  },
  css: ['@/assets/fonts/fonts.css', '@/assets/css/hamburgers.min.css'],
  modules: ['@nuxtjs/supabase', '@vueuse/nuxt', '@nuxtjs/tailwindcss', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: process.env.ENVIRONMENT === 'local' ? 'emoodji – LOCAL' : 'emoodji.app',
      short_name: process.env.ENVIRONMENT === 'local' ? 'emoodji – LOCAL' : 'emoodji',
      description: 'start tracking your mood',
      icons: [
        {
          src: 'icons/icon-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'icons/icon-128x128.png',
          sizes: '128x128',
          type: 'image/png'
        },
        {
          src: 'icons/icon-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'icons/icon-152x152.png',
          sizes: '152x152',
          type: 'image/png'
        },
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icons/icon-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'icons/icon-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        }
      ]
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  },
  build: {
    transpile: ['chart.js']
  }
})
