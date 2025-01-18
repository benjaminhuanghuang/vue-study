# Mock the API response

```js
(axios.post as jest.MockedFunction<typeof axios.post>).mockImplementation(
    () =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve({ data: { message: 'User created successfully' } });
        }, 1000);
    })
);

(axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValue({
    response: {
        status: 400,
        data: {
        validationErrors: { [field]: message }
        }
    }
});
```
