<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="login">
            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" />
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="password"  type="password" id="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
            <router-link to="/register">Register</router-link>
        </form>
    </div>
</template>
    
<script setup lang='ts'>
    import {ref} from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';


    const email = ref('');
    const password = ref('');

    const store = useStore();
    const router = useRouter();

    function login() {
        console.log(email.value, password.value);
        store.dispatch('login', {email: email.value, password: password.value}).then(() => {
            router.push({name: 'dashboard'});
        }).catch((error: any) => {
            console.log('register error', error);
        });
    }

</script>
    
<style>
    
</style>