import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'),
      '@': path.resolve(__dirname, './src'),
    },
  },
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
