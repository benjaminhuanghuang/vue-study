<template lang="">
    <div>
        <button @click="handleClick">Add</button>
    </div>
</template>

<script setup>
// Define the emitted event
const emit = defineEmits(['custom-event']);

function handleClick() {
    emit('custom-event', 'Hello from ChildComponent');
}
</script>
<style lang="">

</style>