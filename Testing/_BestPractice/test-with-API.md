# Test with API
```js
  Test("Mock HTTP request", () => {
    jest.mock("../../api/api.js");

  });


 test('awaits promises', async () => {
    let hasResolved = false
    Promise.resolve().then(() => {
      hasResolved = true
    })
    // Waits until all pending promise callbacks have run. If
    // you remove this line the test will fail, because the code
    await flushPromises()
    expect(hasResolved).toBe(true)
  })
});
```