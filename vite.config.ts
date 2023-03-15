import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'


export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, '@/_shared/locales/*.json')],
      // compositionOnly: true
    })
  ],
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