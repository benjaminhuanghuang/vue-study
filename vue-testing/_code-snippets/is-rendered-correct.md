```js
it("renders the correct message", () => {
  const wrapper = mount(MyComponent);
  expect(wrapper.text()).toContain("Hello World!");
});
```
