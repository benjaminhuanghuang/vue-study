<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  background-color: aqua;
}

nav {
  display: inline-flex;
  gap: 30px;
  justify-content: center;

}

.router-link-active,
.router-link-exact-active {
  text-decoration: underline;
}
</style>
