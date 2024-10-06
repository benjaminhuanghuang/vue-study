# Test vue component
Vue component is just an object (or function) with a render function and some properties.
To test that the component behaves correctly, you need to switch it on and start the render process, 
in other words, you need to mount/render it

Vue will create some DOM element, Jest run the tests in jsdom environment. 


1. Test component is rendered
```js
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.url)
  })
});
```