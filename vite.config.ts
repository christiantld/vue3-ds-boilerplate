import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    },
  },
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
