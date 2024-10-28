<template>
    <Child />
    <h1>{{ x }}</h1>
    <button @click="updateA">Update A</button>
</template>

<script setup lang='ts'>
defineProps(['a', 'x', 'y', 'updateA']);

</script>

<style></style>