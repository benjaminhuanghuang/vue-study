# Testing component methods

## Test public function
```js
test('resets to 0% width when start is called', () => {
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.finish()
    wrapper.vm.start()
    expect(wrapper.element.style.width).toBe('0%') //
})
```

## Test timer function
```js
afterEach(() => {
    jest.clearAllTimers(); // Clear timers after each test
});
beforeEach(() => {
    jest.useFakeTimers(); // Use fake timers
});


jest.useFakeTimers()
setTimeout(() => console.log('100ms are up'), 100)
jest.advanceTimersByTime(100) // Fast-forward time by 100 milliseconds


// Mock and spy
test('clears timer when finish is called', () => {
    const setIntervalMock = jest.spyOn(global, 'setInterval').mockReturnValue(123); // Mock setInterval to return 123
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
    setIntervalMock.mockRestore(); // Restore the original setInterval
})
```
## Jest.fn()

The mock function has a calls array to store details on the function calls. 
Each time the function is called, it
pushes the arguments it was called with to the calls array, as shown in the next listing.

```js
const mock = function(...args) {
    mock.calls.push(args)
}

mock.calls = []
mock(1)
mock(2,3)
mock.calls // [[1], [1,2]]
```


## Lifecycle hook
```js
est("calls $bar start on load", () => {
    const $bar = {
        start: jest.fn(),
    };
    shallowMount(ItemList, ...);
    expect($bar.start).toHaveBeenCalledTimes(1);
});
```

## Mock HTTP request
```js
// when a module imports src/api/api.js, Jest will use 
// api/__mocks__/api.js file
jest.mock("../../api/api.js");

// Api call failed 
fetchListData.mockImplementationOnce(() => Promise.reject()); 
```
you can read this excellent post by Jake Archibald to get you started—
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules.
