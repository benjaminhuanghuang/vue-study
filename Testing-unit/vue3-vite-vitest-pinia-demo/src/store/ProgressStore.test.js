import { describe, test, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";

import { useProgressStore } from "./progress";

describe("Progress Store", () => {
  beforeEach(() => {
    // Create a pinia instance and set it as the active pinia instance
    setActivePinia(createPinia());
  });

  test("the counter starts at 0", () => {
    const progressStore = useProgressStore();

    expect(progressStore.count).toBe(0);
  });

  test("the counter increments", () => {
    const progressStore = useProgressStore();

    progressStore.increment();

    expect(progressStore.count).toBe(1);
  });

  test("the percentage is calculated correctly", () => {
    const progressStore = useProgressStore();
 
    progressStore.$patch({ count: 5, max: 10 });

    expect(progressStore.percentage).toBe(50);
  });
});
