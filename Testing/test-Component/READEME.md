# Test vue component
Vue component is just an object (or function) with a render function and some properties.

To test that the component behaves correctly, you need to switch it on and start the render process, in other words, you need to mount/render it. Vue will create some DOM element, Jest run the tests in jsdom environment. 


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

    // Test component exiting
    expect(wrapper.find(Modal).exists()).toBeFalsy()
    // Find first element
    const a = wrapper.find('a')

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

  test("Test the sub component", async () => {
    const Items = wrapper.findAllComponents(Item);  // Find sub component
    expect(Items).toHaveLength(items.length);
    // Check props on the sub component
    Items.forEach((itemWrapper, i) => {
      expect(itemWrapper.props().item).toEqual(items[i]);
    });
  });

  Test("Make sure function is called in the lifecycle", () => {
    const $bar = {
        start: jest.fn(),
    };
    shallowMount(ItemList, ...);
    expect($bar.start).toHaveBeenCalledTimes(1);
  });

  Test("Mock HTTP request", () => {
    jest.mock("../../api/api.js");

  });


 test('awaits promises', async () => {
    let hasResolved = false
    Promise.resolve().then(() => {
      hasResolved = true
    })
    // Waits until all pending promise callbacks have run. If
    // you remove this line the test will fail, because the code
    await flushPromises()
    expect(hasResolved).toBe(true)
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