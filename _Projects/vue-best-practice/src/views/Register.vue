<template>
    <h3>Create an Account</h3>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" />
    </div>
    <div>
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
    </div>
    <button @click="register">Sign Up</button>
    <button @click="signInWithGoogle">Sign In with google</button>
</template>

<script setup lang='ts'>
// https://www.youtube.com/watch?v=xceR7mrrXsA
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log(token, user);
            router.push('/protected')
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
}
</script>

<style></style>