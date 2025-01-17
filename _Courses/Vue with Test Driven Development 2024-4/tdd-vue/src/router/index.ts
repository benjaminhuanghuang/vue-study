import { createRouter, createWebHistory } from 'vue-router';
//

const routes = [];

// Create the router instance
const router = createRouter({
  history: createWebHistory('/'), // This creates an HTML5 history mode router
  routes
});

export default router;
