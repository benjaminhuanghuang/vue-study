<template>
  <div>
    <lottery />
    <Navbar />
    <router-view />
  </div>
</template>
<script setup lang="ts"> 
import Navbar from './components/Navbar.vue';
import lottery from './components/lottery.vue';
</script>
<style scoped>
.fa-icon {
  margin-right: 8px;
}
</style>