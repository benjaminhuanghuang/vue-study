<script setup lang="ts">
import { Navbar, LanguageSelector } from './components';
</script>

<template>
  <Navbar />
  <main class="container">
    <LanguageSelector />
    <RouterView />
  </main>
</template>

<style scoped></style>
