<template lang="">
    <div>
        <input type="password" v-model="password" />
        <div v-if="error" data-test='error'>{{ error }}</div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
    minLength: {
        type: Number,
        default: 6
    },
});

const password = ref('password');
const error = computed(() => {
    if (password.value.length < props.minLength) {
        return `Password must be at least ${props.minLength} characters`;
    }
    return '';
});

</script>
<style lang="">

</style>