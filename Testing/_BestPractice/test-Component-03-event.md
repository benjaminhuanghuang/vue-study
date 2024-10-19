# Test the component events

## 
```js
describe("HelloWorld.vue", () => {
  it("Test native event", async () => {
    const wrapper = shallowMount(HelloWorld)
    const btn = wrapper.find("button")
    expect(wrapper.vm.count).toBe(0)

    btn.trigger("click", {count:10} );
    
    expect(wrapper.vm.count).toBe(1)
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toContain(1)
  })
})
```



##
```js
describe("HelloWorld.vue", () => {
  it("emit触发事件", () => {
    const wrapper = shallowMount(HelloWorld)
    wrapper.vm.$emit("change", 100)
    wrapper.vm.$emit("update:visible", false)


    // Collected the emitted events
    // eventName: [[param1],[param2]...]
    const emitted = wrapper.emitted(); 

    expect(emitted["change"]).toBeTruthy()
    expect(emitted["change"][0]).toEqual([100])
    expect(emitted["update:visible"]).toBeTruthy()
    expect(emitted["update:visible"][0]).toEqual([false])
  })
})

describe("ParentComponent", () => {
  it("Handle event emitted by child component", () => {
    const wrapper = mount(ParentComponent)
    // emit event in child component
    wrapper.find(ChildComponent).vm.$emit("custom");
    expect(wrapper.html()).toContain("Emitted!")
  })
})
```