# Form testing

## What should be tested in Vue From


## Fill the from and check the payload of API call

```js
test('sends post request with email on submit', () => {
    const axios = {
        post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
        mocks: {
        axios
        }
    })
    const input = wrapper.find('input[type="email"]')
    input.setValue('email@gmail.com')
    wrapper.find('button').trigger('submit')
    const url = 'http://demo7437963.mockable.io/validate'
    // match some properties in the data object
    const expectedData = expect.objectContaining({
        email: 'email@gmail.com'
    })
    expect(axios.post).toHaveBeenCalledWith(url, expectedData)
})
```