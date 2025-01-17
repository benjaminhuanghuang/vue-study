<template>
    <h1>Sign Up</h1>
    <div>
        <label for="username">Username</label>
        <input id="username" />
    </div>
    <div>
        <label for="email">E-mail</label>
        <input id="email" />
    </div>
    <div>
        <label for="password">Password</label>
        <input id="password" type="password" @input="onChangePassword" />
    </div>
    <div>
        <label for="passwordRepeat">Password Repeat</label>
        <input id="passwordRepeat" type="password" @input="onChangePasswordRepeat" />
    </div>
    <button :disabled="disabled">Sign Up</button>
</template>

<script setup>
import { ref } from 'vue';
const password = ref('');
const passwordRepeat = ref('');
const disabled = ref(true);

const onChangePassword = (event) => {
    password.value = event.target.value;
    disabled.value = password.value !== passwordRepeat.value;
}

const onChangePasswordRepeat = (event) => {
    passwordRepeat.value = event.target.value;
    disabled.value = password.value !== passwordRepeat.value;
}
</script>