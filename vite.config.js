import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

const pages = {
  index: fileURLToPath(new URL('./index.html', import.meta.url)),
  Login2: fileURLToPath(new URL('./Login2.html', import.meta.url)),
}

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-homework4/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  build: {
    rollupOptions: {
      input: pages,
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
