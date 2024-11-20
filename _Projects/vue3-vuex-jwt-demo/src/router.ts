import {createRouter, createWebHistory} from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import Register from './components/Register.vue';

const router = createRouter({
    history: createWebHistory(),  // Use HTML5 history mode
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
    ]
  });
  
export default router;