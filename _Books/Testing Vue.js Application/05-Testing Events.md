# Testing Events

Two types of events in Vew application: native DOM events and Vue custom events.

## Testing native DOM events
```js
const onClose = jest.fn();
const wrapper = shallowMount(TestComponent, propData:{
    onClose
});
wrapper.find('button').trigger('click');

expected(onClose).toHaveBeenCalled()
```

## Testing custom Vue events
```js
test('emits on-close when button is clicked', () => {
    const wrapper = shallowMount(Modal)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close-modal')).toHaveLength(1)

    const wrapper = shallowMount(Form)
    wrapper.find('button').trigger('submit')
    expect(wrapper.emitted('form-submitted')).toHaveLength(1)

    expect(wrapper.find(Modal).exists()).toBeFalsy()
})
```


## Test from
```js
wrapper.find('input[type="text"]').value = 'Edd'
wrapper.find('input[type="text"]').trigger('change')
expect(wrapper.text()).toContain('Edd')


const wrapper = shallowMount(Form)
const input = wrapper.find('input[type="email"]')
input.setValue('email@gmail.com')

//match some properties in the data object
const data = expect.objectContaining({
    email: 'email@gmail.com'
})
expect(axios.post).toHaveBeenCalledWith(url, data)


// Test radio button
const wrapper = shallowMount(Form)
const radioInput = wrapper.find('input[type="radio"]')
radioInput.element.checked = true

wrapper.find('input[type="radio"]').setChecked()

```

## jsdom limitation
Layout
Navigation
The two parts of jsdom that aren’t implemented.
When you encounter the limitations, instead of mocking, you should supplement
your unit tests with end-to-end tests that check functionality that relies on unimplemented
jsdom features.