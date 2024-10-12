


```js
it('renders message when component is created', () => {
    // render the component
    const wrapper = shallowMount(WeatherHeader, {
      propsData: {
        title: 'Vue Project'
      }
    })

    // check that the title is rendered
    expect(wrapper.text()).toMatch('Vue Project')
  })
```