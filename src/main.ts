import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import { i18n } from "@/localization";
import VueGtag from "vue-gtag";

const pinia = createPinia();

createApp(App)
  .use(i18n)
  .use(router)
  .use(pinia)
  .use(VueGtag, {
    config: { id: "G-0L5E763TLC" }
  })
  .mount('#app');