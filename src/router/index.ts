import { createRouter, createWebHashHistory } from 'vue-router'
import FerretPage from '@/ferret/pages/FerretPage.vue'
import MainPage from "@/main/pages/MainPage.vue";

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainPage
  },
  {
    path: '/ferret',
    name: 'Home',
    component: FerretPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router