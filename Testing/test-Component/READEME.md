# Test vue component
Vue component is just an object (or function) with a render function and some properties.
To test that the component behaves correctly, you need to switch it on and start the render process, 
in other words, you need to mount/render it

Vue will create some DOM element, Jest run the tests in jsdom environment. 

## What to test
- Test rendered text
- Test sub-component existence
- Test DOM attribute
- Test Props
- Test CSS and inline style

- Test component methods
- Wait for the DOM to update
- To test a function is called, make sure resource like timer is removed.

- Test events


## Sample 
```js
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }   // Pass props
    })
    // Find first element
    const a = wrapper.find('a')

    // check existence
    expect(wrapper.finAll(SubComponent)).toHaveLength(data.length);
    
    // Test rendered text
    expect(a.text()).toBe(item.title)
    
    // Test attributes
    expect(a.attributes().href).toBe(item.url)

    // Test props
    const items = wrapper.finAll(SubComponent);
    items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().item).toBe(data.item[i])
    })

    // Test CSS
    expect(wrapper.classes()).toContain('hidden')
    expect(wrapper.classes()).not.toContain('hidden')
    // Test inline style
    expect(wrapper.element.style.width).toBe('0%')   

    // Test methods
    wrapper.vm.hide(); // call method on component
    await wrapper.vm.$nextTick(); // Wait for the DOM to update!
    expect(wrapper.element.style.display).toBe('none');

    // Wait for the DOM to update
    jest.advanceTimersByTime(100) // Fast-forward time by 100 milliseconds
    await wrapper.vm.$nextTick(); // Wait for the DOM to update!
    expect(wrapper.element.style.width).toBe('1%')
  })

  test('clears timer when finish is called', () => {
    // Make sure a function is called
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })
});
```

Test component using composition api
```js
describe('Counter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Counter, {
      props: { initialCount: 5 }, // Pass the prop here
    });
  });
});
```