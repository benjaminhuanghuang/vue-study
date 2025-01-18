## it.each

```js
it.each([
  {
    type: ButtonType.PRIMARY,
    classes: "bg-purple-500 enabled:hover:bg-purple-600 text-white",
  },
  {
    type: ButtonType.SUCCESS,
    classes: "bg-green-500 enabled:hover:bg-green-600 text-white",
  },
])("renders $type button with label", ({ type, classes }) => {
  const label = "Label";

  const wrapper = shallowMount(BaseButton, {
    props: { type },
    slots: { default: label },
  });

  expect(wrapper.text()).toContain(label);
  expect(wrapper.classes()).toEqual(expect.arrayContaining(classes.split(" ")));
});
```

## [].foreach

```js
[
  ["America/Los_Angeles", "en-US", "Sep 16"],
  ["America/Los_Angeles", "en-UK", "16 Sept"],
  ["America/Los_Angeles", "zh-CN", "9月16日"],
].forEach(([timezone, lan, expectedResult]) => {
  it(`To user in ${timezone} using language ${lan}, the output should be ${expectedResult}`, () => {
    expect(result).toBe(expectedResult);
  });
});
```
