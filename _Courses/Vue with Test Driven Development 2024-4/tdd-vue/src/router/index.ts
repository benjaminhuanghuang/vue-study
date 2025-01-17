import { createRouter, createWebHistory } from 'vue-router';
//

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory('/'), // This creates an HTML5 history mode router
  routes
});

export default router;
