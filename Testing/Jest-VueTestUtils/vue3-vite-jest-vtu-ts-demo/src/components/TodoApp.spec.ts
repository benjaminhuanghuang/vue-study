import { shallowMount } from "@vue/test-utils";
import TodoApp from "./TodoApp.vue";

describe("TodoApp.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(TodoApp);
  });
  
  it("should render toto text", () => {
    const todo = wrapper.get('[data-test="todo"]');
    // get all text in the wrapper
    expect(todo.text()).toBe("Task 1");
  });

  it("should add new todo", async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("new task");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);
  });

  it("should be able to complete todo", async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
  });
});
