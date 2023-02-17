import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('./src', import.meta.url)),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/main.scss";`,
      },
    },
  },
});