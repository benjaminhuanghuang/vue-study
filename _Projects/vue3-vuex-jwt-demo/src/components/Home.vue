<script setup lang="ts">
import { authComputed }  from '../vuex/helpers';


</script>

<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <div v-if= "!loggedIn">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
    </div>
  </div>

</template>

<style scoped></style>
