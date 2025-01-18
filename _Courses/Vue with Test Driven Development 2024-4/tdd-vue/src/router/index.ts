import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/Home.vue';
import SignUp from '@/views/sign-up/SignUp.vue';
//

const routes = [
  { path: '/', component: Home },
  {
    path: '/signup',
    component: SignUp
  }
];

const router = createRouter({
  history: createWebHistory('/'), // This creates an HTML5 history mode router
  routes
});

export default router;
