# Router Testing

## What should be tested in Vue Router

- DO NOT test route Configuration 
- test Vue Router instance properties
- test RouterLink components
- access Vue Router properties in a store.

## API

```js
router.push()                   // Navigate to routes.
router.currentRoute.value.path; // Get current router path
await router.isReady();         // Ensure the router is ready before making assertions.
```

## Find the link

```js
// get will throw error when element doest not exist
const profileLink = wrapper.get("#profile");

// expect element does not exist.
expect(wrapper.find('#profile').exists()).toBeTruthy();
```

## Verify the component after navigation

```js
it('should render HomePage component for "/" route', async () => {
    // Mount the app with the router
    const wrapper = mount(App, {
        global: {
            plugins: [router],
        },
    });

    // Navigate to the "/" route
    router.push('/');
    await router.isReady();
    // Expect HomePage to be rendered
    expect(wrapper.findComponent(HomePage).exists()).toBe(true);

    outer.push('/about');
    await router.isReady();
    // Expect AboutPage to be rendered
    expect(wrapper.findComponent(AboutPage).exists()).toBe(true);
});

```
## Test the route parameter
```js
it('renders user profile based on route param', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  router.push('/user/123');   // Pass parameter to router
  await router.isReady();

  expect(wrapper.html()).toContain('User ID: 123'); // Assuming the component displays the ID
});
```

## Test Navigation Guards
```js
it('should redirect to login page if not authenticated', async () => {
  router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !isAuthenticated()) {
      next('/login');
    } else {
      next();
    }
  });

  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });

  router.push('/dashboard'); // Protected route
  await router.isReady();

  // Check current route path 
  expect(router.currentRoute.value.path).toBe('/login');
});

```