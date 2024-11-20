<script setup lang="ts">
import { ref, onMounted} from "vue";
import axios from "axios";
import { Event } from '../types';

import EventCard from "./EventCard.vue";

const isLoading = ref(true);
const events = ref<Event[]>([]);

onMounted(() => {
  axios.get("").then((res) => {
    events.value = res.data;
    isLoading.value = false;
  });
});
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <template v-if="!isLoading">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
    </template>
    <p v-else>
        Loading events
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
