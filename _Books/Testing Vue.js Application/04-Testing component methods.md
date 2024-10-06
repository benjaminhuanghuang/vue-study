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