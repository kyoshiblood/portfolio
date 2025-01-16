import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import SecretPage from '../pages/secret_page.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/deftones',
    name: 'deftonesporra',
    component: SecretPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
