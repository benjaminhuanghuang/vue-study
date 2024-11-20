<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register">
            <div>
                <label for="email">Email</label>
                <input v-model="name" type="email" id="email" />
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" />
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="password"  type="password" id="password" />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</template>
    
<script setup lang='ts'>
    import {ref} from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';



    const name = ref('');
    const email = ref('');
    const password = ref('');

    const store = useStore();
    const router = useRouter();

    function register() {
        console.log(name.value, email.value, password.value);
        store.dispatch('register', {name: name.value, email: email.value, password: password.value}).then(() => {
            router.push({name: 'dashboard'});
        }).catch((error: any) => {
            console.log('register error', error);
        });
    }

</script>
    
<style>
    
</style>