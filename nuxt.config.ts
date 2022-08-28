import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }]
    }
  },
  css: ['@/assets/fonts/fonts.css', '@/assets/css/hamburgers.min.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
      }
    ]
  ],
  buildModules: ['@nuxt/typescript-build'],
  build: {
    transpile: ['chart.js']
  }
})
