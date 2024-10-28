<template>
    <Sub :a="a" v-bind:="{x:100, y:200}"/>
        
</template>
    
<script setup lang='ts'>
     import Sub from './Sub.vue';
    import { ref } from 'vue';

    let a = ref(1);

</script>
    
<style>
    
</style>