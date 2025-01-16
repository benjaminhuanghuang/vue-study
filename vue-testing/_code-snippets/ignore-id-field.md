## Ignore the id field in objectg

```js
expect(transaction).toEqual(
  expect.objectContaining({
    title: "Deductions",
    amount: -10000,
    type: "minus",
  })
);
```
