


```
cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ["Cat"]
      }
    }).$mount(); // Instances and mounts the component
```


## Shallow rendering 
is a technique that ensures that your component is rendering without children. This is useful for:

- Testing only the component you want to test (that's what unit tests stand for)
- Avoiding side effects that children components can have, such as making HTTP calls, calling store actions, and so on”

```
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


## mount()
to test MessageList with deep rendering, we just need to use mount()

