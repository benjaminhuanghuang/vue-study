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

## Set component state
setChecked：设置checkbox或者radio元素的checked的值并更新v-model。
setSelected：设置一个option元素并更新v-model。
setValue：设置一个文本控件或select元素的值并更新v-model。
setProps：设置包裹器的vm实例中props并更新。
setData：设置包裹器中vm实例中的data并更新。

由于Vue组件更新DOM是异步的，如果要测试组件更改数据后的DOM，需要使用$nextTick()。

```js
describe("HelloWorld.vue", () => {
  it("change component data", () => {
    const wrapper = shallowMount(HelloWorld)
    const radioInput = wrapper.find('input[type="radio"]')
    const options = wrapper.find("select").findAll("option")
    const textInput = wrapper.find('input[type="text"]')
    radioInput.setChecked()
    options.at(1).setSelected()
    textInput.setValue("txt value")
    expect(wrapper.vm.radio).toBe(true)
    expect(wrapper.vm.select).toBe(2)
    expect(wrapper.vm.txt).toBe("txt value")

    wrapper.setProps({
      msg: "msg value"
    })
    expect(wrapper.vm.msg).toBe("msg value")

    wrapper.setData({
      foo: "foo value"
    })
    expect(wrapper.vm.foo).toBe("foo value")
  })
})
```
