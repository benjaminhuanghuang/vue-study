import { createRouter, createWebHistory } from 'vue-router';
//
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory("/"), // This creates an HTML5 history mode router
  routes,
});

export default router;
