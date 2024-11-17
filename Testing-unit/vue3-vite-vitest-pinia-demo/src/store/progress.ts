import { ref, computed } from "vue";
import { defineStore } from "pinia";

/*
In Setup Stores:
    ref()s become state properties
    computed()s become getters
    function()s become actions
*/
export const useProgressStore = defineStore("progress", () => {
  const count = ref(0);
  const max = ref(100);

  const doubleCount = computed(() => count.value * 2);

  const percentage = computed(() => {
    return Math.round((count.value / max.value) * 100);
  });

  function increment() {
    count.value++;
  }

  return { count, max, doubleCount, percentage, increment };
});
