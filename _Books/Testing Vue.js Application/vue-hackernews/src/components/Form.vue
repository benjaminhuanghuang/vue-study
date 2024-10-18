<template>
  <form name="email-form" @submit.prevent="onSubmit">
    <input type="email" v-model="email" />
    <button type="submit">Submit</button>
    <input v-model="enterCompetition" value="yes" type="radio" name="enterCompetition" />
    <input v-model="enterCompetition" value="no" type="radio" name="enterCompetition" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const email = ref('');
const enterCompetition = ref('yes');
const emit = defineEmits(['form-submitted']);

async function onSubmit() {
  await axios.post('http://demo7437963.mockable.io/validate', {
    email: email.value,
    enterCompetition: enterCompetition === 'yes'
  })
  emit('form-submitted');
}
</script>