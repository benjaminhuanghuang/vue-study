<template>
    <div class="p-8 pb-0 text-orange-500">
        <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
    </div>
    <Meals :meals="meals" />
</template>


<script setup lang='ts'>
import { computed } from 'vue';
import store from '../store';


const meals = computed(() => store.state.meals);



</script>

<style></style>