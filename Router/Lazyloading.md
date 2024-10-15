


```js
const routes = [
  {
    path: '/about',
    component: () => import('../views/About.vue'), // Lazy-load About component
  },
];
```