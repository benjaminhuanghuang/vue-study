# Test vue component 2/2

## Set component state
setData() is async，need to work with $nextTick() to wait DOM updated

wrapper.isVisible() the case of v-show
wrapper.exists() the case of v-if

  
## Test the function in component
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

