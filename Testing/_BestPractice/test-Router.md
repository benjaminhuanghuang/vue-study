# Router Testing

## What should be tested in Vue Router

test Vue Router instance properties
test RouterLink components
access Vue Router properties in a store.



## Find the link
```js
// get will throw error when element doest not exist
const profileLink = wrapper.get("#profile");

// expect element does not exist.
expect(wrapper.find('#profile').exists()).toBeTruthy();
```
