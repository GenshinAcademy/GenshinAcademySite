import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from '@/router';
import { i18n } from "@/localization";
import VueGtag from "vue-gtag";
import { createHead } from "@unhead/vue"

const pinia = createPinia();
const head = createHead()

createApp(App)
  .use(i18n)
  .use(router)
  .use(pinia)
  .use(head)
  .use(VueGtag, {
    config: { id: "G-0L5E763TLC" }
  })
  .mount('#app');