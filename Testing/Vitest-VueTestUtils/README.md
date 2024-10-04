# Vue unit test tools 
https://vuejs.org/guide/scaling-up/testing.html


## Vitest : A Vite-native testing framework
Vitest offers a more seamless integration and better performance than Jest
Vitest

Command-line tool to run the tests and check the test coverage
User interface to visually see test results and coverage results
Functions for writing unit tests (it, describe)
Functions for checking against expected values (expect, toMatch, toContain, etc.)
Mocking (mockResolvedValue, mockRejectedValue)
Setup (beforeEach, beforeAll) / Teardown (afterEach, afterAll)

## Vue Test Utils: The official testing suite utils for Vue.js 3
Mounting components (mount, shallowMount)
Setting props data (setProps)
Finding HTML components for testing (findAll('h2'))
Utility for flushing all Promises (flushPromises())
Utility for triggering click events (trigger)
Utility for checking emitted events (emitted)

Vue Test Utils 1 targets Vue2.
Vue Test Utils 2 targets Vue3.

Install
```sh
npm i -D @vue/test-utils
```

```js
import { mount } from '@vue/test-utils'
```

## Test Router


## Testing Vuex
https://test-utils.vuejs.org/guide/advanced/vuex.html

## Mock API
