<template>
    <h4>{{ username }}</h4>
    <MyInput :modelValue="username" @update:modelValue="username = $event" />

    <MyInput v-model:firstName="username" v-model:lastName="password" />

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import MyInput from './MyInput.vue';
// bind two values to MyInput
let username = ref('John Doe');
let password = ref('John Doe');
</script>

<style></style>