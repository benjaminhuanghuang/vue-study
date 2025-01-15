
## Technical background

Unit testing is the process of running tests against the smallest parts of an application
(units). Normally the units you test are functions.

In Vue apps, components are also units to test (more on those later).

Vue component is just an object (or function) with a render function and some properties.

To test that the component behaves correctly, we need to mount/render it. Vue will create some DOM element.

Jest/Vitest run the tests in jsdom environment. 

## What should be tested in Vue components

- Test the component contract. 
- Avoid testing the implementation details and make it easy to refactor the component
- Avoid testing framework, third-party libraries. like prop validation


