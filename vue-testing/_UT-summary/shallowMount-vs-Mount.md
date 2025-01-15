## Shallow rendering 
Ensures that your component is rendering without children. This is useful for:

- Testing only the component you want to test (that's what unit tests stand for)
- Avoiding side effects that children components can have, such as making HTTP calls, calling store actions, and so on”

```js
    import { shallowMount } from "@vue/test-utils";

    let cmp;
    
    beforeEach(() => {
        cmp = shallowMount(App, {
          // Create a shallow instance of the component
          data: {
            messages: ["Cat"]
          }
        });
    });


```

Checkout the source code (https://github.com/vuejs/vue-test-utils/blob/dev/packages/test-utils/src/shallow-mount.js) 
and you'll see that it is basically stubbing the components key, the render method, and the life cycle hooks.
