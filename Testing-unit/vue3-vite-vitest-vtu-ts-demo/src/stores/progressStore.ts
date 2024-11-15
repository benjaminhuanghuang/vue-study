import { computed, ref } from "vue";
import {defineStore } from "pinia";

export const useProgressStore = defineStore('progress', () => {
    const counter = ref(0);
    const max = ref(100);
   
    function increment() {
        counter.value++
    }
    function decrement() {
        counter.value--
    }

    const percentage = computed(() => {
        get() {
            return Math.round((counter.value / max.value) * 100);
        }
    })
    return { counter , max, increment, decrement, percentage };
});
