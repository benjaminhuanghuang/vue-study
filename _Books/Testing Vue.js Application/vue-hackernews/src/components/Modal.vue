<template>
  <div>
    <button @click="onClose" />
    <slot />
  </div>
</template>
<script setup>
const props = defineProps({
  onClose: {
    type: Function,
    required: true,
  }
});
</script>