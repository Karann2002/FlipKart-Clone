import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
   server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  plugins: [react(),
    tailwindcss(),
    // VitePWA({
    //   registerType: 'autoUpdate',
    //   includeAssets: ['favicon.svg', 'favicon.ico', 'apple-touch-icon.png'],
    //   manifest: {
    //     name: 'FlipKart',
    //     short_name: 'FlipKart',
    //     description: 'A Ecommerce Site',
    //     theme_color: '#ffffff',
    //     icons: [
    //       {
    //         src: 'flipkart-plus_8d85f4.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //       {
    //         src: 'flipkart-plus_8d85f4.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //     ],
    //   },
    // }),
  ],
  base: "/",
})
