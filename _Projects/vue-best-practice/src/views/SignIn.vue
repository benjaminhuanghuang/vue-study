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
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="signIn">Sign In</button>
    <button @click="signInWithGoogle">Sign In with google</button>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'vue-router';


const email = ref('');
const password = ref('');
const errMsg = ref('');
const router = useRouter();

function signIn() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log(auth.currentUser);
            router.push('/protected')
        })
        .catch((error: any) => { 
            errMsg.value = error.code;
        });
}
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

}
</script>

<style></style>