# Route Guards
useful for scenarios 
- authentication
- role-based access control
- other conditions that determine whether a user can access a particular page.

Add meta to path
```js
const routs = [
 
 {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }, // Adding metadata to mark protected routes
  },
]
```


## Global Navigation Guard

A global navigation guard is a guard that `applies to every route` in your application. 
You can use it to check whether the user is authenticated before allowing them to access certain pages.

```js
// Global before guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // If route requires authentication and the user is not logged in, redirect to login
    next({ name: 'Login' });
  } else {
    // Otherwise, allow access
    next();
  }
});

```

## Per-Route Guard
A per-route guard can be applied directly to specific routes.
```js
const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next(); // Allow access
      } else {
        next({ name: 'Login' }); // Redirect to login page
      }
    },
  },
];
```

## In-Component Guard
define route guards as part of their lifecycle. This is done using beforeRouteEnter, beforeRouteUpdate, and beforeRouteLeave hooks.
```js
export default {
  name: 'Dashboard',
  beforeRouteEnter(to, from, next) {
    if (isAuthenticated()) {
      next(); // User is authenticated, allow access
    } else {
      next({ name: 'Login' }); // Redirect to login page
    }
  },
};
```

## Redirecting After Login
```js
// In your login component
export default {
  methods: {
    login() {
      // Simulate login logic
      localStorage.setItem('authToken', 'your-token');
      
      // Redirect to the original route after login
      this.$router.push(this.$route.query.redirect || '/dashboard');
    },
  },
  mounted() {
    // Check if already authenticated
    if (isAuthenticated()) {
      this.$router.push(this.$route.query.redirect || '/dashboard');
    }
  },
};
```
In the route guard, when redirecting to the login page, you can pass the original destination as a query parameter:
```js
next({ name: 'Login', query: { redirect: to.fullPath } });
```