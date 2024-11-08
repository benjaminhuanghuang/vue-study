import Modal2 from "../../../src/components/Modal2.vue";
import { shallowMount } from "@vue/test-utils";

describe("Modal2.vue", () => {
  test("emits on-close when button is clicked", () => {
    const wrapper = shallowMount(Modal2);
    wrapper.find("button").trigger("click");

    // verify the number of times an event was emitted
    expect(wrapper.emitted("close-modal")).toHaveLength(1);
    
    // Check if the event was emitted
    expect(wrapper.emitted()).toHaveProperty("close-modal");
    // Optional: Check the payload of the emitted event
    // const eventPayload = wrapper.emitted('close-modal')[0]
    // expect(eventPayload).toEqual(['some data'])
  });
});
