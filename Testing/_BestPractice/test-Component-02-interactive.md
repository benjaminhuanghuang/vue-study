# Test vue component 2/2

## Set component state
setData() is async，need to work with $nextTick() to wait DOM updated

wrapper.isVisible() the case of v-show
wrapper.exists() the case of v-if

  
## Call the function in component and verify the change
```js
 it("hide func", async () => {
    wrapper.setData({
      showLoading: true
    })
    await wrapper.vm.$nextTick(); // wait for setData
    
    expect(wrapper.vm.showLoading).toBe(true)
    expect(wrapper.isVisible()).toBe(true)

    // Call method in component
    wrapper.vm.hide()   
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.showLoading).toBe(false)
    expect(wrapper.isVisible()).toBe(false)
  })
```

## Ensure the function is invoked under certain conditions

Mock the method in the component
```js
describe("message.vue", () => {
  it("add mocks", () => {
    const message = {
      success: jest.fn(),
      warning: jest.fn(),
      error: jest.fn(),
      info: jest.fn()
    }
    const wrapper = shallowMount(Message, {
      mocks: {
        $message: message
      }
    })
    const successBtn = wrapper.find("#success")
    const warningBtn = wrapper.find("#warning")
  
    successBtn.trigger("click")
    expect(message.success).toHaveBeenCalledTimes(1)

    warningBtn.trigger("click")
    expect(message.warning).toHaveBeenCalledTimes(1)
  })

  Test("Make sure function is called in the lifecycle", () => {
    const $bar = {
        start: jest.fn(),
    };
    shallowMount(ItemList, ...);
    expect($bar.start).toHaveBeenCalledTimes(1);
  });
});
```
