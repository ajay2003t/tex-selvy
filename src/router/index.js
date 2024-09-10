import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import company from '@/components/company.vue'
import service from '@/components/service.vue'
import product from '@/components/product.vue'
import contact from '@/components/contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/company',
      name: 'company',
      component:company
    },
    {
      path:'/services',
      name:'services',
      component:product
    },
    {
      path:'/product',
      name:'product',
      component:service
    },
    {
      path:'/contact',
      name:'contact',
      component:contact
    }
  ]
})

export default router
