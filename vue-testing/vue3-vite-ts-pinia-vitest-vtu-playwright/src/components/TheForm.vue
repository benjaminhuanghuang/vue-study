<template>
    <form @submit.prevent="Submit">
        <input v-model="email" type="email" placeholder="your@email.com" required />
        <button type="submit">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const Submit = () => {
    console.log(email.value)
}
</script>
