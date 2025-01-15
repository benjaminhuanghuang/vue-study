import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useProgressStore = defineStore("progress", () => {
  const count = ref(0);
  const max = ref(100);

  function increment() {
    count.value++;
  }
  function decrement() {
    count.value--;
  }

  const percentage = computed(() => {
    return Math.round((count.value / max.value) * 100);
  });
  const double = computed(() => count.value * 2);
  return { count, max, increment, decrement, percentage, double };
});
