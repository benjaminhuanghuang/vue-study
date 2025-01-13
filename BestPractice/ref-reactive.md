# ref vs reactive

Use ref for primitive values and reactive for objects or arrays. This ensures that Vue can track dependencies and update the UI efficiently.

```js
import { ref, reactive } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const user = reactive({ name: 'John', age: 30 });

    function increment() {
      count.value++;
    }

    return { count, user, increment };
  }
};
```