<template>
  <nav class="bg-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo Section -->
          <router-link to="/" class="flex-shrink-0" active-class="font-bold underline"
            exact-active-class="font-bold underline">
            <img src="@/assets/vue.svg" alt="Logo" class="h-8 w-8">
          </router-link>

          <!-- Links Section -->
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <router-link to="/"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="font-bold underline" exact-active-class="font-bold underline">Home</router-link>
            <router-link to="/about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="font-bold underline" exact-active-class="font-bold underline">About</router-link>
            <router-link to="/protected"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="font-bold underline" exact-active-class="font-bold underline">Protected</router-link>
            <router-link to="/signIn"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="font-bold underline" exact-active-class="font-bold underline">Sign In</router-link>
            <router-link to="/register"
              class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              active-class="font-bold underline" exact-active-class="font-bold underline">Register</router-link>
            <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button @click="toggleMenu"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path :class="{ 'hidden': isMenuOpen, 'inline-flex': !isMenuOpen }" class="inline-flex"
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path :class="{ 'hidden': !isMenuOpen, 'inline-flex': isMenuOpen }" class="hidden" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</router-link>
        <router-link to="/about"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</router-link>
        <router-link to="/register"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import router from '../router';
const isLoggedIn = ref(false);

function handleSignOut() {
  signOut(auth)
    .then(() => {
      router.push('/');
    })
    .catch((error) => {
      console.log('Sign out error', error);
    });
}

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});
</script>

<style scoped></style>