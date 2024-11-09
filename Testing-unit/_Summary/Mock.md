# Mock

When you test components with dependencies, you need to mock the dependencies to prevent errors.
For example:
If a component uses the $route instance property, then the property becomes a
dependency of the component.

```js
test('renders id param', () => {
    const wrapper = shallowMount(TestComponent, {
        mocks: {
            $route: {
                params: {
                    id: 123
                }
            }
        }
    });

    expect(wrapper.text()).toContain('123')
})
```
