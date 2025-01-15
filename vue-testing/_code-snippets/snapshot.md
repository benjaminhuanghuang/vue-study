```js
describe("SearchBox component", () => {
  it("should match snapshot", () => {
    const wrapper = mount(SearchBox), {
        props: {
            searchTerm: "test",
            items:[]
        },
        global: {
            plugins: [router]
        }
    };

    expect(wrapper.html()).toMatchSnapshot();
  });
});

```

## Update snapshot

```json
"test:update": "vitest -u"
```
