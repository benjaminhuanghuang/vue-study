// LoginForm.spec.js

import { shallowMount } from "@vue/test-utils";
import LoginForm from "@/components/LoginForm.vue";

describe("LoginForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(LoginForm, {
      mocks: {
        $axios: {
          post: jest.fn(() => Promise.resolve({ status: 200 })), // Mock the $axios.post method
        },
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should call login API with correct credentials", async () => {
    wrapper.setData({
      username: "testuser",
      password: "password",
    });

    await wrapper.vm.login();

    expect(wrapper.vm.$axios.post).toHaveBeenCalledWith("/api/login", {
      username: "testuser",
      password: "password",
    });
  });

  it("should handle login error", async () => {
    wrapper.setData({
      username: "testuser",
      password: "wrongpassword",
    });

    await wrapper.vm.login();

    expect(wrapper.vm.error).toBe("Invalid credentials");
  });
});
