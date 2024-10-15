<!-- src/components/Navbar.vue -->
<template>
    <nav class="bg-gray-800 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo Section -->
            <router-link to="/" class="flex-shrink-0" active-class="font-bold underline"  exact-active-class="font-bold underline">
              <img src="@/assets/vue.svg" alt="Logo" class="h-8 w-8">
            </router-link>
  
            <!-- Links Section -->
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="font-bold underline"  exact-active-class="font-bold underline">Home</router-link>
              <router-link to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="font-bold underline"  exact-active-class="font-bold underline">About</router-link>
              <router-link to="/contact" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" active-class="font-bold underline"  exact-active-class="font-bold underline">Contact</router-link>
            </div>
          </div>
  
          <!-- Mobile Menu Button -->
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="toggleMenu" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path :class="{ 'hidden': isMenuOpen, 'inline-flex': !isMenuOpen }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                <path :class="{ 'hidden': !isMenuOpen, 'inline-flex': isMenuOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div :class="{ 'block': isMenuOpen, 'hidden': !isMenuOpen }" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link to="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</router-link>
          <router-link to="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</router-link>
          <router-link to="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false, // Manages the mobile menu state
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen; // Toggles the mobile menu
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add additional scoped styles here */
  </style>
  