<template>
        <div class="game">
            <slot :data="games"></slot>
       
        </div>
</template>
    
<script setup lang='ts'>
import { reactive } from 'vue';

    let games = reactive([
        {name: 'Game 1', price: 100},
        {name: 'Game 2', price: 200},
        {name: 'Game 3', price: 300},
    ]);
</script>
    
<style>
    
</style>