<template>
    <div class="category">
      <slot name="header"></slot>
        <h1>Hello</h1>
      <slot name="body"></slot>
      
    </div>
</template>

<script setup lang='ts'>
    defineProps(['title']);
</script>

<style scoped>
    .category {
        border: 1px solid #ccc;
        background-color: skyblue;
        padding: 10px;
        margin: 10px 0;
    }   
</style>