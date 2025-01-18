```js
(axios.post as jest.MockedFunction<typeof axios.post>).mockImplementation(
    () =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve({ data: { message: 'User created successfully' } });
        }, 1000);
    })
);
        `
```
