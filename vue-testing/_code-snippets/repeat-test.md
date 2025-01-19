# test.each

https://jestjs.io/docs/api#testeachtablename-fn-timeout

## it.each, array of array

```js
it.each([
  ["America/Los_Angeles", "en-US", "9/16/2024"],
  ["America/Los_Angeles", "en-UK", "16/09/2024"],
  ["America/Los_Angeles", "zh-CN", "2024/9/16"],
])(
  "To user in %s using language %s, the output should be %s",
  (timezone, lan, expectedResult) => {}
);
```

## it.each, array of object

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
