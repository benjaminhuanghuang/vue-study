import { useAuthStore } from '@/stores/auth'
import { createRouter, createWebHistory } from 'vue-router/auto' // use auto routes
import {routes} from 'vue-router/auto-routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()
  await authStore.getSession()  // important, make sure get the session before checking the user

  const isAuthPage = ['/login', '/register'].includes(to.path)

  if (!authStore.user && !isAuthPage) {
    return {
      name: '/login'
    }
  }

  if (authStore.user && isAuthPage) {
    return {
      name: '/'
    }
  }
})

export default router
