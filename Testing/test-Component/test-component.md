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