# 7 ways to make your Vue unit tests

## 1. Understand what to test and structure teh test accordingly

Test Component output:
- rendered template 
- emitted events
- side effects: Vuex/Pinia actions, router, calling imported functions

## 2. Use component factories
use createComponent() to encapsulate the logic of creating a wrapper for your component.

## 3. Use helper function to find elements
such as findConfirmButton or findModel.

## 4. Don't test component internal

## 5. Follow the user

## 6. Child component are black box, only test teh props to child component

## 7. Don't Forget About Vue Microtasks
Vue uses a microtask queue to update the DOM.
When an event occurs in a Vue component, like a data change or a user interaction, Vue schedules a microtask to update the DOM.
A microtask in Vue.js refers to a task that is executed asynchronously, but with higher priority than regular asynchronous tasks like setTimeout or setInterval.

you should use await wrapper.vm.$nextTick() in your tests after triggering an action that changes the component's state
