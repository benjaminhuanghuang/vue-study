# Vue3 testing using Jest + Vue Test Utils

## Jest
Snapshot Testing: Jest can capture the output of components and store them as snapshots. This makes it easy to compare future outputs to ensure components behave as expected.

Test Runners: It includes a built-in test runner that can run tests in parallel, speeding up the testing process.

Mocking: Jest provides powerful mocking capabilities, allowing developers to isolate parts of their application and test them independently.

Code Coverage: Jest can generate coverage reports, helping developers see how much of their code is tested.

Watch Mode: Jest has a watch mode that reruns tests when files change, making the development process more efficient.

```js
import {expect, jest, test} from '@jest/globals';
```

## Vue Test Utils: The official testing suite utils for Vue.js 3
Mounting components (mount, shallowMount)
Setting props data (setProps)
Finding HTML components for testing (findAll('h2'))
Utility for flushing all Promises (flushPromises())
Utility for triggering click events (trigger)
Utility for checking emitted events (emitted)

@vue/test-utils 1 targets Vue2.
@vue/test-utils 2 targets Vue3.