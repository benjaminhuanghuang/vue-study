import { beforeEach, describe, vitest, expect, test } from "vitest";
import { mount, VueWrapper, DOMWrapper } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import Progress from "./Progress.vue";
import { useProgressStore } from "../../../vue3-vite-vitest-pinia-demo/src/store/progress";

describe("Progress vue", () => {
  let wrapper: VueWrapper;
  beforeEach(() => {
    wrapper = mount(Progress, {
      global: {
        plugins: [
          createTestingPinia({
            // Mock all of the actions in store
            createSpy: vitest.fn,
          }),
        ],
      },
    });
  });

  test("displays the percentage correctly", () => {
    expect(wrapper.find("#percentage").text()).toBe("0%");
  });

  test("increments action in the store should be called", () => {
    const progress = useProgressStore();

    wrapper.find("#increment-btn").trigger("click");

    expect(progress.increment).toHaveBeenCalled();
  });
});
