import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      { find: '@/assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
      { find: '@/components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@/store', replacement: fileURLToPath(new URL('./src/store', import.meta.url)) },
      { find: '@/views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
    ],
  },
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "@/assets/scss/variables.scss";`
    //   }
    // }
  },
})
