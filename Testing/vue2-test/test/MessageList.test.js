import { mount } from "@vue/test-utils";
import MessageList from "../src/components/MessageList";
describe("MessageList.test.js", () => {
  let cmp;
  beforeEach(() => {
    cmp = mount(MessageList, {
      // Be aware that props is overridden using 'propsData'
      propsData: {
        messages: ["Cat"],
      },
    });
  });
  it("has received ['Cat'] as the message property", () => {
    expect(cmp.vm.messages).toEqual(["Cat"]);
  });

  it("has the expected html structure", () => {
    expect(cmp.element).toMatchSnapshot();
  });
  
  
  it("is a MessageList component", () => {
      expect(cmp.is(MessageList)).toBe(true);
      // Or with CSS selector
      expect(cmp.is("ul")).toBe(true);
    });
    it("contains a Message component", () => {
      expect(cmp.contains(Message)).toBe(true);
      // Or with CSS selector
      expect(cmp.contains(".message")).toBe(true);
    });
});
