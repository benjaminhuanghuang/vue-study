```js
const classes = "bg-gray-100 enabled:hover:bg-gray-200";
expect(wrapper.classes()).toEqual(expect.arrayContaining(classes.split(" ")));
```
