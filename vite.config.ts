import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@jackatlas/chi-ui',
      fileName: 'chi-ui',
    },
    rollupOptions: {
      external: ['vue', 'lucide-vue-next', '@floating-ui/vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
