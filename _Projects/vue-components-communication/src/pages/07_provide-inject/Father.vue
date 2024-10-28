<template>
        <GrandChild />
        <button @click="updateA">Update A</button>
</template>
    
<script setup lang='ts'>
    import {ref, provide} from 'vue';

    let money = ref(100);
    let updateA = () => {
        money.value += 100;
    }

    provide('money', {money});

</script>
    
<style>
    
</style>