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
      lang: 'en',
      scope: '/',
      start_url: '.',
      display: 'standalone',
      theme_color: '#0c5a51',
      background_color: '#0c5a51',
      dir: 'ltr',
      categories: [
        'lifestyle',
        'productivity',
        'utilities'
      ],
      orientation: 'portrait',
      display_override: [
        'window-controls-overlay',
        'standalone',
        'browser'
      ],
      description: 'WhatSend lets you send WhatsApp message to a number without saving it in your contacts.',
      icons: [
        {
          src: 'assets/favicon/icon-192x192 copy.png',
          sizes: '192x192',
          purpose: "any",
          type: 'image/png'
        },
        {
          src: 'assets/favicon/maskable_icon.png',
          sizes: '1024x1024',
          purpose: 'maskable',
          type: 'image/png'
        },
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
      screenshots: [
        {
          src: 'assets/screenshots/1.jpg',
          sizes: "1080x1920",
          type: "image/jpg",
          platform: "narrow",
          label: "Home screen of WhatSend"
        },
        {
          src: 'assets/screenshots/2.jpg',
          sizes: "1080x1920",
          type: "image/jpg",
          platform: "narrow",
          label: "Dark Mode feature of WhatSend"
        },
        {
          src: 'assets/screenshots/3.jpg',
          sizes: "1080x1920",
          type: "image/jpg",
          platform: "narrow",
          label: "Broadcast of WhatSend"
        }
      ]
    }
  })],
  server: {
    watch: {
      usePolling: true,
    }
  }
})
