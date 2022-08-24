/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  build: {
    minify: false,
    lib: {
      formats: ['es'],
      entry: 'src/main.ts',
      fileName: 'index',
    },
    rollupOptions: {
      external: /^vue/,
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
  },
})
