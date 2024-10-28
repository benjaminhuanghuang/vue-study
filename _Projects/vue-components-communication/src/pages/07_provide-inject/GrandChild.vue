<template>
    <h1>{{ money }}</h1>
</template>

<script setup lang='ts'>
import { inject } from 'vue';

let money = inject('money', "default value");


</script>

<style></style>