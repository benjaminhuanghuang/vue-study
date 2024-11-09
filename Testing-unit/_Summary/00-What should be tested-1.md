
## Technical background

Unit testing is the process of running tests against the smallest parts of an application
(units). Normally the units you test are functions.

In Vue apps, components are also units to test (more on those later).

Vue component is just an object (or function) with a render function and some properties.

To test that the component behaves correctly, we need to mount/render it. Vue will create some DOM element.

Jest/Vitest run the tests in jsdom environment. 

## What should be tested in Vue components

Test the component contract. 
Component contract is the interface the component has with the outside
Component contract is an agreement between the component and the outside 
A component contract defines how the interacts with the rest of the application. 

Avoid testing the implementation details and make it easy to refactor the component

## Input: Data or actions received by the component

- Props
- User interactions (like button clicks)
- Vue events
- Data from a Vuex/Pinia store
- Lifecycle hooks
- Route parameter
- query strings

## Output: The result or effects produced by the component based on its input

- Rendered
  - DOM nodes, text, DOM attributes, CSS, inline style
  - sub-component existence, Props to sub-component
- Emitted events
- Function calls to external functions
- Error handling

## The async behavior

- Test component methods
- Test event
- Wait for the DOM to update
- Wait promises
- To test a function is called, make sure resource like timer is removed.
- Test functions are called in lifecycle 
- Mock HTTP request 
