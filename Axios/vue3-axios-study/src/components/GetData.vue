<script setup lang="ts">
import axios from 'axios';

import { onMounted, reactive } from 'vue';

let data = reactive({
    posts: [],
});
onMounted(() => {
    axios({ method: 'get', url: 'https://jsonplaceholder.typicode.com/posts' })
        .then((response) => {
            console.log(response.data);
        });
})
</script>

<template>

</template>

<style scoped></style>
