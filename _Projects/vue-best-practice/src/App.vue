<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>
<script setup lang="ts"> 
import Navbar from './components/Navbar.vue';

</script>
<style scoped>
.fa-icon {
  margin-right: 8px;
}
</style>