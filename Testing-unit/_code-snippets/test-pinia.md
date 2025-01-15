```js
import { createTestingPinia } from "@pinia/testing";

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

  test("increments action in the store should be called", () => {
    const progress = useProgressStore();

    wrapper.find("#increment-btn").trigger("click");

    expect(progress.increment).toHaveBeenCalled();
  });
});
```
