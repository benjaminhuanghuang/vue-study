<template>
   <input type="text" :value="firstName" @input="emit('update:firstName', (<HTMLInputElement>($event.target)).value)">
   <input type="text" :value="lastName" @input="emit('update:lastName', (<HTMLInputElement>($event.target)).value)">
</template>

<script setup lang='ts'>
defineProps(['firstName', 'lastName']);
const emit = defineEmits(['update:firstName','update:lastName']);

</script>

<style scoped>
.child {
    background-color: rgb(76, 209, 76);
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>