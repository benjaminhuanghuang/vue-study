import { createRouter, createWebHistory } from 'vue-router/auto' // use auto routes
import {routes} from 'vue-router/auto-routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
