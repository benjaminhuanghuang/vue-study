# Testing rendered component output
- Test rendered text
- Test DOM attribute
- Test Props
- Test classes
- Test style



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

    // test the sub-components 
    const Items = wrapper.findAllComponents(Item);
    expect(Items).toHaveLength(items.length); // how many sub-components are rendered
    Items.forEach((itemWrapper, i) => {
      expect(itemWrapper.props().item).toEqual(items[i]);
    });

    expect(wrapper.classes()).toContain('hidden')

    expect(wrapper.element.style.width).toBe('0%')
})
```