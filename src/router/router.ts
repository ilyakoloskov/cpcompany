import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ProductPage from '@/views/ProductPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/product',
      component: ProductPage,
    },
    // {
    //   path: '/contact',
    //   component: () => import('@/views/Contact.vue'),
    // },
  ],
})