import { createRouter, createWebHistory } from 'vue-router';
//
import ItemList from '../views/ItemList.vue'
import ItemView from '../views/ItemView.vue'
import UserView from '../views/UserView.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/About.vue'

// Define the routes for the application
const routes = [
  { path: '/:type(top|new|show|ask|job)/:page?', component: ItemList },
  { path: '/', redirect: '/top' },
  { path: '/item/:id(\\d+)', component: ItemView },
  { path: '/user/:id', component: UserView },
  { path: '/*', component: NotFound },
  { path: '/about', component: About }
]



// Create a new router instance
const router = createRouter({
    history: createWebHistory(),  // Use HTML5 history mode
    routes,
  });
  
export default router;