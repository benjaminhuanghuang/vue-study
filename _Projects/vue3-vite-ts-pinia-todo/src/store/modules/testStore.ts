// src/stores/counterStore.ts
import { defineStore } from 'pinia';

// Define the state type
interface CounterState {
  count: number;
}

// Define the getters type
interface CounterGetters {
  doubleCount: (state: CounterState) => number;
}

// Define the actions type
interface CounterActions {
  increment(): void;
  reset(): void;
}

// Create the store with typed state, getters, and actions
export const useCounterStore = defineStore({
  id: 'counter',
  state: (): CounterState => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state:CounterState) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
    reset() {
      this.count = 0;
    },
  },
});
