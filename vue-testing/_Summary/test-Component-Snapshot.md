
# Snapshot tests

## When should we use snapshot test
- The logic is simple, component can have props or data. 
- A failing snapshot test means the markup rendered by component changed.
- should be written after manually test.
- Treat snapshots as part of your codebase. Review new or changed snapshot tests in pull requests with the same level of care as any other code changes.

```js
import { shallowMount } from '@vue/test-utils'
import Spinner from '../Spinner.vue'

describe('Spinner.vue', () => {
  test('renders correctly', () => {
    const wrapper = shallowMount(Spinner)
    expect(wrapper.element).toMatchSnapshot()
  })

  it("Change data then verify the snapshot", async () => {
    wrapper.setData({
      age: 6
    })
    await wrapper.vm.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })
})
```

## Update snapshot
```sh
Jest --updateSnapshot 
Jest -u   # alias of --updateSnapshot 
```