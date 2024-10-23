<template>
    <div class="child">
        <h3>Child</h3>
        <h4>From parent: {{ car }}</h4>
    </div>
</template>

<script setup lang='ts'>
defineProps(['car']);
</script>

<style scoped>
.child {
    background-color: rgb(76, 209, 76);
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>