// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
