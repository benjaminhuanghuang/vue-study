# defineProps in Vue 3

In Vue 3, defineProps is a compiler macro used within the script tag to define the props that a component accepts.

```ts
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title: string;
  count?: number;
}>();

console.log(props.title); // Access the 'title' prop
</script>

<template>
  <h1>{{ props.title }}</h1>
  <p v-if="props.count">{{ props.count }}</p>
</template>
```