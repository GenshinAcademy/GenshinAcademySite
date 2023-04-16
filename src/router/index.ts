import { createRouter, createWebHistory } from 'vue-router'
import WeaselPage from '@/pages/weasel/WeaselPage.vue'
import MainPage from "@/pages/main/MainPage.vue";
import TablesPage from "@/pages/tables/TablesPage.vue";
import { PageTitle } from "@/use/usePageTitle";
import NewsPage from "@/pages/news/NewsPage.vue";
import NotFoundPage from "@/pages/notFound/NotFoundPage.vue";

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/weasel',
    name: 'weasel',
    component: WeaselPage
  },
  {
    path: '/tables',
    name: 'tables',
    component: TablesPage
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path:  '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    PageTitle(String(to.name))
    
    if (to.hash)
      return ({el: to.hash, behavior: 'smooth', })
      
    else if (savedPosition)
      return (savedPosition);
    
    else
      return { left: 0, top: 0 }
  }
})

export default router