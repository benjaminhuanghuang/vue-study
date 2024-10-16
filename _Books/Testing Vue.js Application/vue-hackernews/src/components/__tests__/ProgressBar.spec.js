import { shallowMount } from "@vue/test-utils";
import ProgressBar from "../ProgressBar.vue";
/*
  ProgressBar is hidden by default
  The width of the ProgressBar is 0% by default
*/
describe("ProgressBar.vue", () => {
  beforeEach(() => {
    jest.useFakeTimers(); // fake timers
  });

  afterEach(() => {
    jest.clearAllTimers(); // Clear timers after each test
  });

  test("initializes with 0% width", () => {
    const wrapper = shallowMount(ProgressBar);
    expect(wrapper.element.style.width).toBe("0%");
  });

  test("displays the bar when start is called", async () => {
    const wrapper = shallowMount(ProgressBar);
    expect(wrapper.classes()).toContain("hidden");
    await wrapper.vm.start();
    expect(wrapper.classes()).not.toContain("hidden");
  });

  test("sets the bar to 100% width when finish is called", async () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.start();
    wrapper.vm.finish();
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.element.style.width).toBe("100%");
  });

  test("hides the bar when finish is called", () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.start();
    wrapper.vm.finish();
    expect(wrapper.classes()).toContain("hidden");
  });

  test("resets to 0% width when start is called", () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.finish();
    wrapper.vm.start();
    expect(wrapper.element.style.width).toBe("0%");
  });

  test("removes error class when start is called", () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.fail();
    wrapper.vm.start();
    expect(wrapper.classes()).not.toContain("error");
  });

  test("sets the bar to 100% width when fail is called", async () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.fail();
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.classes()).toContain("error");
  });

  test("styles the bar correctly when fail is called", async () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.fail();
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.element.style.width).toBe("100%");
  });

  test("increases width by 1% every 100ms after start call", async () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.start();
    jest.advanceTimersByTime(100);
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.element.style.width).toBe("1%");

    jest.advanceTimersByTime(900);
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.element.style.width).toBe("10%");

    jest.advanceTimersByTime(4000);
    await wrapper.vm.$nextTick(); // Wait for the DOM to update
    expect(wrapper.element.style.width).toBe("50%");
  });

  test("clears timer when finish is called", () => {
    const setIntervalMock = jest
      .spyOn(global, "setInterval")
      .mockReturnValue(123); // Mock setInterval to return 123
    jest.spyOn(window, "clearInterval");
    setInterval.mockReturnValue(123);
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.start();
    wrapper.vm.finish();
    expect(window.clearInterval).toHaveBeenCalledWith(123);
    setIntervalMock.mockRestore(); // Restore the original setInterval
  });
});
