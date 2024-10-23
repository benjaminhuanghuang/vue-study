<template>
    <div class="father">
        <h3>Father</h3>
        {{ car }}
        <Child :car = "car"/>
    </div>
</template>

<script setup lang='ts'>
    import Child from './Child.vue';
    import { ref } from 'vue';

    let car = ref('BMW');

</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding:20px;
    border-radius: 10px;
}

</style>   