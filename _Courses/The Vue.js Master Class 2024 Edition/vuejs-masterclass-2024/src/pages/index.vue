<script setup lang="ts"> 
import { usePageStore } from '@/stores/page';

usePageStore().pageData.title = 'Home';
</script>


<template>
  <div>
    <h1>Home</h1>
    <p>
      Welcome to the Vue.js Master Class 2024 Edition!
    </p>
  </div>
</template>