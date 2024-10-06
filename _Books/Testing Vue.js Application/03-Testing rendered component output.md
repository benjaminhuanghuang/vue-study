# Testing rendered component output

Design components

Pass props to component
```js

test('renders item.url', () => {
    const item = {
        url: 10
    }
    const wrapper = shallowMount(Item, {
        propsData: { item }    // Pass props
    })

    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)
})
```