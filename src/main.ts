import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import { i18n } from "@/localization";

const pinia = createPinia();

createApp(App)
  .use(i18n)
  .use(router)
  .use(pinia)
  .mount('#app');