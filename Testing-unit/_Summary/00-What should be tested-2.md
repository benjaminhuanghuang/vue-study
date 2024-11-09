# What to test in a component test?

A Vue.js component typically includes the following to be tested:

Properties (props): Testing how the component behaves when passed different props, and how it handles `missing or invalid` props.

Data: Testing how the component behaves when the data is changed and how it responds to different states.

Computed properties: Testing how the component behaves when computed properties are updated, and how they depend on other properties and data.

Methods: Testing how the component behaves when its methods are called, and how they interact with the component’s state and props.

Events: Testing how the component behaves when it emits events, and how it responds to events emitted by its child components.

DOM: Testing how the component renders, and how it updates the DOM when its state or props change.

Lifecycle hooks: Testing how the component behaves when its lifecycle hooks are called, and how it interacts with the Vue.js instance.

Integration: Testing how the component interacts with other components, services, and/or libraries, it can be optional though.

Error handling: Testing how the component handles errors, and how it behaves when it encounters unexpected situations.

## Input & output

Inputs: data, props, user interaction, lifecycle methods, data store (Pinia/Vuex), route params, query strings

Outputs: rendered output, events, data results, data store (Pinia/Vuex) updates, dispatches

## Reference

Vue 3 component testing with Jest
https://blog.canopas.com/vue-3-component-testing-with-jest-8b80a8a8946b

https://testdriven.io/blog/vue-unit-testing/