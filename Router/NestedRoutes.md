```js
const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
    ],
  },
];
```