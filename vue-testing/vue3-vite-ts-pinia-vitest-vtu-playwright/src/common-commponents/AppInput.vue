<template>
    <div class="mb-3">
        <label class="form-label" :for="id">Username</label>
        <input class='form-control' :class="{ 'is-invalid': help }" :id="id"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :type="type" />
        <div>{{ help }}</div>
    </div>
</template>

<script setup lang='ts'>
defineProps({
    label: String,
    type: String,
    id: String,
    help: String,
    modelValue: String
});

defineEmits(['update:modelValue'])

// alternative approach
// const inputClass = computed(() => {
//     let classes = 'form-control';
//     if (props.help) {
//         classes += 'is-invalid'
//     }
//     return classes;
// })

</script>

<style></style>