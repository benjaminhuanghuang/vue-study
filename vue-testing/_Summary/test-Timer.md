# Test timer

## Mock timer and manipulate timer
jest.useFakeTimers(); // replace the real timer functions (such as setTimeout, setInterval, and clearTimeout) with mock timer functions.
jest.useRealTimers(); // restore the real timers

jest.advanceTimersByTime(5000);   // Fast-forward 5000ms (5 seconds)

```js
describe("HelloWorld.vue", () => {
  let wrapper
  beforeEach(() => {
    // replace the real timer functions (such as setTimeout, setInterval, and clearTimeout) with mock timer functions.
    jest.useFakeTimers(); 
    wrapper = shallowMount(HelloWorld);
  });

  it("test setInterval async timer", () => {
    expect(wrapper.vm.percent).toBe(0)

    wrapper.vm.start()
    
    // Fast-forward 100ms
    jest.advanceTimersByTime(100)
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.vm.percent).toBe(1)
    
    jest.advanceTimersByTime(900);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.percent).toBe(10)
    
    jest.advanceTimersByTime(2000);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.percent).toBe(30)
  })
})

it('example with fake timers', () => {
  const callback = jest.fn();
  setTimeout(callback, 5000);
  // Initially, the callback should not have been called
  expect(callback).not.toHaveBeenCalled();
  // Fast-forward 5000ms (5 seconds)
  jest.advanceTimersByTime(5000);
  // Now the callback should have been called
  expect(callback).toHaveBeenCalled();
});
```


## Make sure timer is cleared

```js
it('clears timer when finish is called', () => {
  // Make sure clearInterval is called
  jest.spyOn(window, 'clearInterval')
  setInterval.mockReturnValue(123)
  const wrapper = shallowMount(ProgressBar)
  wrapper.vm.start()
  wrapper.vm.finish()
  expect(window.clearInterval).toHaveBeenCalledWith(123);
})
```