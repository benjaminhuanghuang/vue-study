import Vue from "vue";
import App from "../src/App";
describe("App.test.js", () => {
  let cmp, vm;
  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {
        // Replace data value with this fake data
        messages: ["Cat"]
      }
    }).$mount(); // Instances and mounts the component
  });
  it('equals messages to ["Cat"]', () => {
    expect(vm.messages).toEqual(["Cat"]);
  });

  it("has the expected html structure", () => {
      expect(cmp.element).toMatchSnapshot();
    }); 
});
