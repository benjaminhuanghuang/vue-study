import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

let routers = [
    {path: '/login', component:()=>import('./views/Login.vue')},
    {path: '/test', component:()=>import('./views/Test.vue')},
    {
        path: '/main', component:()=>import('./views/Main.vue'), children: [
            {path: '/main/page1', component:()=>import('./views/Page1.vue')},
            {path: '/main/page2', component:()=>import('./views/Page2.vue')},
        ]
    }
];

const app = createApp(App);
app.use(createPinia());

createApp(App).mount('#app')
