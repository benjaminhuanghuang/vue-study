

```ts
// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
```/
```vue
<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-blue-500 p-4">
    <ul class="flex space-x-4">
      <li>
        <router-link 
          to="/" 
          class="text-white" 
          active-class="font-bold underline" 
          exact-active-class="font-bold underline"
        >
          Home
        </router-link>
      </li>
      <li>
        <router-link 
          to="/about" 
          class="text-white" 
          active-class="font-bold underline" 
          exact-active-class="font-bold underline"
        >
          About
        </router-link>
      </li>
    </ul>
  </nav>
</template>
```
<router-link>: This component is used to create links to routes defined in your Vue Router configuration. The to attribute specifies the target route.

active-class: This prop defines the CSS class to apply when the link is active (i.e., when the current route matches the link's route). You can customize this class to style the active link differently.

exact-active-class: This prop is used when you want to specify a different class when the link is exactly active. This is particularly useful for cases where you have nested routes and want the active class to apply only to the exact match.
