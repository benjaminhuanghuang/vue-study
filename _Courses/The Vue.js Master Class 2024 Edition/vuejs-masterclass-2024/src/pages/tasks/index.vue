<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import {ref} from 'vue'
import type { Tables } from '../../../database/types';

const tasks = ref<Tables<'tasks'>[] | null>(null)  

const getTasks = async () => {
  const { data, error } = await supabase.from('projects').select()
  if (error) {
    console.error(error)
  }
}
</script>


<template>
  <div>
    <h1>Home</h1>
    <p>
      Welcome to the Vue.js Master Class 2024 Edition!
    </p>
  </div>
</template>