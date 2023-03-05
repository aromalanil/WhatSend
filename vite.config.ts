import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,webp}']
    },
    manifest: {
      name: 'WhatSend',
      short_name: 'WhatSend',

      start_url: '.',
      display: 'standalone',
      theme_color: '#075e54',
      background_color: '#ffffff',
      categories: ['utility', 'productivity'],
      description: 'WhatSend lets you send WhatsApp message to a number without saving it in your contacts.',
      icons: [
        {
          src: 'assets/favicon/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'assets/favicon/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
    }
  })],
  server: {
    watch: {
      usePolling: true,
    }
  }
})
