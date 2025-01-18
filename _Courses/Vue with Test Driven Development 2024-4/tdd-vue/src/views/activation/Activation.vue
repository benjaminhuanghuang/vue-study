<template>
    <div data-testid="activation-page">
        <h1>Activation page</h1>
    </div>
</template>

<script setup lang='ts'>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
route.params.token;

onMounted(() => {
    axios.patch(`/api/v1/users/${route.params.token}/active`)
        .then(() => {
            console.log('Activation successful');
        })
        .catch(() => {
            console.error('Activation failed');
        });
});
</script>

<style></style>