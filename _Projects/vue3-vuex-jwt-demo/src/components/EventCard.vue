<script setup lang="ts">


import { ref, reactive } from 'vue'
import { Event } from '../types';

const event = reactive<Event>({} as Event)
</script>

<template>
  <div class="event-card">
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
