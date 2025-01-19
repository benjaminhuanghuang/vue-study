## For each

```js
it.each([
  {
    type: ButtonType.DANGER,
    classes: 'bg-red-500 enabled:hover:bg-red-600 text-white'
  },
  {
    type: ButtonType.NEUTRAL,
    classes: 'bg-gray-100 enabled:hover:bg-gray-200'
  }
])('renders $type button with label', ({ type, classes }) => {
  const label = 'Label';

  const wrapper = shallowMount(BaseButton, {
    props: { type },
    // Pass the slot to component
    slots: { default: label }
  });

  expect(wrapper.text()).toContain(label);
  expect(wrapper.classes()).toEqual(expect.arrayContaining(classes.split(' ')));
});
```
