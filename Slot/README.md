# Slot

Slots allows developers to create flexible and reusable components with `customizable content`. 

They provide a way to pass content from a parent component to its child components, enabling greater component composition and reusability. 

Slots provide a mechanism for creating component templates that can receive content from the parent component.

With slots, you can define `placeholders` in your component's template where the parent component can inject its content. This enables the parent component to customize the appearance and behavior of the child component without modifying its internal structure.


## Default slot / unnamed slot

It allows the parent component to pass content directly into the component's template

The content passed between the opening and closing tags of the ChildComponent will be rendered in place of the slot.

```js
<!-- ChildComponent.vue -->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <p>This content will be injected into the slot.</p>
  </ChildComponent>
</template>
```

## Named slot / scoped slot

provide a way to have multiple slots within a component and give them distinct names. This allows the parent component to selectively inject content into specific slots. 

The parent component then uses the v-slot directive to pass content to the respective slots.

```js
<!-- ChildComponent.vue -->
<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>
<!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <template v-slot:header>
      <h1>Header content</h1>
    </template>

    <p>This content will be injected into the default slot.</p>

    <template v-slot:footer>
      <footer>Footer content</footer>
    </template>
  </ChildComponent>
</template>
```

## Dynamic Slots
allowing the parent component to dynamically select which slot to use based on data or conditions

```js
<!-- ChildComponent.vue -->
<template>
  <div>
    <slot :name="slotName"></slot>
  </div>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const slotName = ref("");

      return {
        slotName,
      };
    },
  };
</script>

<!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <template v-if="condition" v-slot:header>
      <h1>Header content</h1>
    </template>

    <template v-else v-slot:footer>
      <footer>Footer content</footer>
    </template>
  </ChildComponent>
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const condition = ref(true);

      return {
        condition,
      };
    },
  };
</script>
```

## Scoped Slots

By using the v-slot directive, we can capture the childData in the parent component and use it within the slot's content.

```js
<!-- ChildComponent.vue -->
<template>
  <div>
    <slot :data="childData"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        childData: "Child Data",
      };
    },
  };
</script>


<!-- ParentComponent.vue -->
<template>
  <ChildComponent>
    <template v-slot="{ data }">
      <p></p>
    </template>
  </ChildComponent>
</template>
```
## Reference
https://enterprisevue.dev/blog/slots-in-vue-deep-dive/