```js
const a = wrapper.find("a");
// spy on the trigger method of the <a> element wrapper.
const spyOnA = vi.spyOn(a, "trigger");
await a.trigger("click");
expect(spyOnA).toHaveBeenCalledOnce();
```
