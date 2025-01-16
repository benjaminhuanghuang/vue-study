import { mount } from "@vue/test-utils";
import PassProp from "./PassProp.vue";

describe("PassProp.vue", () => {
  it("renders input element", () => {
    const wrapper = mount(PassProp);
    expect(wrapper.find('input[type="password"]').exists()).toBe(true);
  });

  it("shows error message when password is too short", async () => {
    const wrapper = mount(PassProp, {
      props: {
        minLength: 10,
      },
    });
    const input = wrapper.find('input[type="password"]');
    await input.setValue("123");
    expect(wrapper.find("div").text()).toBe(
      "Password must be at least 10 characters"
    );
  });

  it("does not show error message when password meets length requirement", async () => {
    const wrapper = mount(PassProp, {
      props: {
        minLength: 6,
      },
    });
    const input = wrapper.find('input[type="password"]');
    await input.setValue("123456");
    expect(wrapper.find("div").text()).toBe("");
  });
});
