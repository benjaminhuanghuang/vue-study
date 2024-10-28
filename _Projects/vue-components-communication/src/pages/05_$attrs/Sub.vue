<template>
    <SubSub v-bind:="$attrs"/>
        
</template>
    
<script setup lang='ts'>
    import SubSub from './SubSub.vue';
    defineProps(['a']);


</script>
    
<style>
    
</style>