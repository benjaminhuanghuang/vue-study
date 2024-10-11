# Testing mixins and filters

The test process: You register the mixin on a component, mount
the component, and then check that the mixin produced the expected behavior

```js
test('logHelloOnCreateMixin logs hello', () => {
    jest.spyOn(console, 'log')
    const Component = {
        render() {},
        mixins: [logHelloOnCreateMixin]
    }
    shallowMount(Component)
    expect(console.log).toHaveBeenCalledWith('hello')
})
```