<script setup lang="ts">
// import {supabase} from '@/lib/supabaseClient'

// console.log('supabase', supabase)


</script>

<template>
  <nav class="h-16 border-b bg-muted/40 flex justify-between px-6 items-center">
    <form class="w-full max-w-96">
      <input type="text" class="w-full bg-background pl-8" placeholder="Search..." />
    </form>
    <div class="w-8 h-8 rounded-full bg-white"></div>
  </nav>
 <main>
   <router-view />
  </main>
</template>

