<template>
  <div>
    <button @click="$emit('close-modal')" />
    <slot />
  </div>
</template>
<script setup>
</script>