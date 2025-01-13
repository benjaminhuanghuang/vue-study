# defineComponent vs <script setup>

https://www.matijanovosel.com/blog/define-component-vs-script-setup#%3Cscript-setup%3E



## script setup

setup directive is a syntactic sugar for the Composition API.

It allows the developer to write top level statements without the additional boilerplate of the defineComponent function.



## Props 
```js
<template>
  <span>
    {{ title }}
  </span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "",
      required: false
    }
  },
  setup(props) {
    return {};
  }
});
</script>
```

setup directive work with defineProps() function

The defineProps function returns a reactive object.
The defineProps macro is available by default if using the setup directive.

```js
<template>
  <span>
    {{ title }}
  </span>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
    required: false
  }
});
</script>
```


## emits
When not using the setup directive, the emit function must be exposed through the setup function parameters.
```js
<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["update:value"],

  setup(props, { emit }) {
    emit("update:value");
    return {};
  }
});
</script>
```

The defineEmits macro returns a function that can be used to emit events.
```js
<script setup>
  const emit = defineEmits(["update:value"]); 
  
  emit("update:value");
</script>
```
