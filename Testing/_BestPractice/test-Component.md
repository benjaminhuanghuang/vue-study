# Test vue component

## Technical background
Vue component is just an object (or function) with a render function and some properties.

To test that the component behaves correctly, we need to mount/render it. Vue will create some DOM element.

Jest/Vitest run the tests in jsdom environment. 

## What should be tested in Vue components
Based on the contract of the component. 

A component contract defines how the interacts with the rest of the application. 

- Input: Data or actions received by the component
  - Props
  - User interactions (like button clicks)
  - Vue events
  - Data from a Vuex/Pinia store
  - Lifecycle hooks

- Output: The result or effects produced by the component based on its input
  - Rendered DOM nodes
    - Rendered text, DOM attributes, CSS, inline style
    - sub-component existence, Props to sub-component
  - Emitted events
  - Calls to external functions


- Test the output:
    - Test rendered text, DOM attributes, CSS, inline style
    - Test sub-component existence
    - Vue Event
    - Function should be called

## The async behavior
  - Test component methods
  - Test event
  - Wait for the DOM to update
  - Wait promises
  - To test a function is called, make sure resource like timer is removed.
  - Test functions are called in lifecycle 
  - Mock HTTP request 


## Pass props to component and test the rendered output 
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
    // Test CSS
    expect(wrapper.classes()).toContain('hidden')
    expect(wrapper.classes()).not.toContain('hidden')
    // Test inline style
    expect(wrapper.element.style.width).toBe('0%')   

    
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

## Verify the existence of the sub-component and its props.
```js
test("Test the sub component", async () => {
  const Items = wrapper.findAllComponents(Item);  // Find sub component
  
  // Verify the existence
  expect(Items).toHaveLength(items.length);
  
  // Check props on the sub component
  Items.forEach((itemWrapper, i) => {
    expect(itemWrapper.props().item).toEqual(items[i]);
  });
});

```

## Call method on the component and test
```js
test("Test the method on component", async () => {
  wrapper.vm.hide(); // call method on component
  await wrapper.vm.$nextTick(); // Wait for the DOM to update!
  expect(wrapper.element.style.display).toBe('none');
})
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

# Test Vue component

Create component and check the content

```js
const wrapper = shallowMount(HelloWorld, {
    props: { msg }
});

// Get element by attribute
const todo = wrapper.get('[data-test="todo"]');

// Text inside the component
expect(wrapper.text()).toMatch(msg);  //matches a regex
expect(wrapper.text()).toContain("Hello Jest");  
expect(todo.text()).toBe("Hello Jest");  

// Element existed
expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

// Class
expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
```

Form 
```ts
expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

await wrapper.get('[data-test="new-todo"]').setValue("new task");
await wrapper.get('[data-test="form"]').trigger("submit");

expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
```

Find element
```js
// get will throw error when element doest not exist
const profileLink = wrapper.get("#profile");
// expect element does not exist.
expect(wrapper.find('#profile').exists()).toBeTruthy();
```


## Reference
https://blog.canopas.com/vue-3-component-testing-with-jest-8b80a8a8946b

2. What to test in a component test?
A Vue.js component typically includes the following to be tested:

Properties (props): Testing how the component behaves when passed different props, and how it handles missing or invalid props.

Data: Testing how the component behaves when the data is changed and how it responds to different states.

Computed properties: Testing how the component behaves when computed properties are updated, and how they depend on other properties and data.

Methods: Testing how the component behaves when its methods are called, and how they interact with the component’s state and props.

Events: Testing how the component behaves when it emits events, and how it responds to events emitted by its child components.

DOM: Testing how the component renders, and how it updates the DOM when its state or props change.

Lifecycle hooks: Testing how the component behaves when its lifecycle hooks are called, and how it interacts with the Vue.js instance.

Integration: Testing how the component interacts with other components, services, and/or libraries, it can be optional though.

Error handling: Testing how the component handles errors, and how it behaves when it encounters unexpected situations.