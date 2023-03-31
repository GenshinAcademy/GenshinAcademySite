import { createRouter, createWebHistory } from 'vue-router'
import WeaselPage from '@/pages/weasel/WeaselPage.vue'
import MainPage from "@/pages/main/MainPage.vue";
import TablesPage from "@/pages/tables/TablesPage.vue";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/weasel',
    name: 'Home',
    component: WeaselPage
  },
  {
    path: '/tables',
    name: 'Tables',
    component: TablesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router