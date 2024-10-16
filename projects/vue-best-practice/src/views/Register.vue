<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign Up</h3>
        <div>
            <label for="email">First Name</label>
            <input type="text" id="firstName" />
        </div>
        <div>
            <label for="email">Last Name</label>
            <input type="text" id="lastName" />
        </div>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" />
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" />
        </div>
        <div>
            <label for="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" />
        </div>
        <button>Sign Up</button>
    </form>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

function handleSubmit(event: Event) {
   
    console.log('Form submitted');
}   
</script>

<style></style>