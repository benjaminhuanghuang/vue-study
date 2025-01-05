<script setup lang="ts">
import {supabase} from '@/lib/supabaseClient'

console.log('supabase', supabase)
</script>

<template>
 <main>
   <router-view />
  </main>
</template>

