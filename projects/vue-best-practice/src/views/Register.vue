<template>
    <form @submit.prevent="handleSubmit">
        <h3>Create an Account</h3>
        <div>
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email"/>
        </div>
        <div>
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password"/>
        </div>
        <button @click="register">Sign Up</button>
        <button @click="signInWithGoogle">Sign In with google</button>
    </form>
</template>

<script setup lang='ts'>
// https://www.youtube.com/watch?v=xceR7mrrXsA
import { ref } from 'vue';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import { useRouter } from 'vue-router';


const email = ref('');
const password = ref('');
const router = useRouter();

function register() {
   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push('/product')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

</script>

<style></style>