/*
https://www.bilibili.com/video/BV1po4y1U79s
*/

import { mount } from "@vue/test-utils";
// Component to test
import SlotDemo from "./SlotDemo.vue";

describe("SlotDemo.vue", () => {
  it("renders default slot content", () => {
    const wrapper = mount(SlotDemo, {
      slots: {
        default: "<p>Default slot content</p>",
      },
    });
    expect(wrapper.html()).toContain("<p>Default slot content</p>");
  });

  it("renders header slot content with props", () => {
    const wrapper = mount(SlotDemo, {
      slots: {
        header: '<template #header="{ msg }"><h1>{{ msg }}</h1></template>',
      },
      props: {
        msg: "Header Message",
      },
    });
    expect(wrapper.html()).toContain("<h1>Header Message</h1>");
  });

  it("renders main slot content", () => {
    const wrapper = mount(SlotDemo, {
      slots: {
        main: "<p>Main content</p>",
      },
    });
    expect(wrapper.html()).toContain("<p>Main content</p>");
  });

  it("renders footer slot content", () => {
    const wrapper = mount(SlotDemo, {
      slots: {
        footer: "<p>Footer content</p>",
      },
    });
    expect(wrapper.html()).toContain("<p>Footer content</p>");
  });

  it("renders all slot content", () => {
    const wrapper = mount(SlotDemo, {
      slots: {
        default: "<p>Default slot content</p>",
        header: '<template #header="{ msg }"><h1>{{ msg }}</h1></template>',
        main: "<p>Main content</p>",
        footer: "<p>Footer content</p>",
      },
      props: {
        msg: "Header Message",
      },
    });
    expect(wrapper.find("head").text()).toContain("Header Message");
    expect(wrapper.html()).toContain("<h1>Header Message</h1>");
    expect(wrapper.html()).toContain("<p>Main content</p>");
    expect(wrapper.html()).toContain("<p>Footer content</p>");
  });
});
