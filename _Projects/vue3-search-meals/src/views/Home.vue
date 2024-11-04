<template>
            home
</template>
    
<script setup lang='ts'>
    import {computed} from 'vue';
    import store from '../store';


    const meals = computed(() => store.state.meals);


    
</script>
    
<style>
    
</style>