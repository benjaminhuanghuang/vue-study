
# Snapshot tests

## When should we use snapshot test
- Snapshot tests are well-suited for testing static output, no logic in the component. 
- A failing snapshot test means the markup rendered by component changed.
- should be written after manually test.
- Treat snapshots as part of your codebase. Review new or changed snapshot tests in pull requests with the same level of care as any other code changes.

```js
import { shallowMount } from '@vue/test-utils'
import Spinner from '../Spinner.vue'

describe('Spinner.vue', () => {
  test('renders correctly', () => {
    expect(shallowMount(Spinner).element).toMatchSnapshot()
  })
})
```

## Update snapshot
```sh
Jest --updateSnapshot 
Jest -u   # alias of --updateSnapshot 
```