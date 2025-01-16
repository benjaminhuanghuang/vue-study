import { shallowMount } from "@vue/test-utils";
// Component to test
import EmitDemo from "./EmitDemo.vue";

describe("EmitDemo.vue", () => {
  it("emit event", () => {
    const wrapper = shallowMount(EmitDemo);
    wrapper.get("button").trigger("click");
    wrapper.get("button").trigger("click");

    expect(wrapper.emitted()).toHaveProperty("custom-event");
    expect(wrapper.emitted("custom-event")).toEqual([
      ["Hello from ChildComponent"],
      ["Hello from ChildComponent"],
    ]);
  });
});
