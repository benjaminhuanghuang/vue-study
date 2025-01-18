## UI wait API

```js
test("fetches items and displays them", async () => {
  await flushPromises();
  // ensure API call is made
  expect(axiosMock.history.get.length).toBe(1);
  expect(wrapper.findAll('[data-test="todo-item"]').length).toBe(3);
});
```

```js
function asyncPrint() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 2000);
  });
}

/* test ("Test asynchronous printing", () => {
    return asyncPrint().then(data => {
        expect(data).toBe("Hello World");
    })
}) */

test("Test asynchronous printing", async () => {
  await expect(asyncPrint()).resolves.toBe("Hello World");
});
```
