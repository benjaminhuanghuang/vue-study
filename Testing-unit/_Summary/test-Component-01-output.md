# Test vue component

## Technical background
Vue component is just an object (or function) with a render function and some properties.

To test that the component behaves correctly, we need to mount/render it. Vue will create some DOM element.

Jest/Vitest run the tests in jsdom environment. 


## Pass props to component and test the rendered output 
```js
import { shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      url: 10
    }
    // Pass props
    const wrapper = shallowMount(Item, {
      propsData: { item }   
    })

    // Verify the text in component
    expect(wrapper.text()).toMatch(msg); 
    expect(wrapper.text()).toContain("Hello Jest");      
    // Test inline style
    expect(wrapper.element.style.width).toBe('0%')   

    // Test CSS
    expect(wrapper.classes()).toContain('hidden')
    expect(wrapper.classes()).not.toContain('hidden')
    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
    
    /*--------------------------------------------
      Find element and verify
      - by tag
      - by id
      - by attribute
      - by component name
    --------------------------------------------*/
    const a = wrapper.find('a')
    // Test rendered text
    expect(a.text()).toBe(item.title)
    // Test attributes
    expect(a.attributes().href).toBe(item.url)
    const style = wrapper.find("h1").element.style
    expect(style.width).toBe("100px")
    expect(style.height).toBe("50px")
    
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);
    
    expect(wrapper.find(Modal).exists()).toBeFalsy()
  })
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



## Test component using composition api
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
## Find the elements
```js
// Get element by attribute
const todo = wrapper.get('[data-test="todo"]');
// get will throw error when element doest not exist
const profileLink = wrapper.get("#profile");

// expect element does not exist.
expect(wrapper.find('#profile').exists()).toBeTruthy();

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