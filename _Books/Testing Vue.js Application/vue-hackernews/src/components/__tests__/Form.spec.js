import Form from "../Form.vue";
import { shallowMount } from "@vue/test-utils";
import axios from "axios";

// Mock axios. Calls to axios.get, axios.post, etc., will instead use the mocked versions.
jest.mock("axios"); 

describe("Form.vue", () => {
  let wrapper;
  const url = "http://demo7437963.mockable.io/validate";
  
  beforeEach(() => {
    wrapper = shallowMount(Form);
  });

  test("emits form-submitted when form is submitted", async () => {
    await wrapper.find('form').trigger('submit');
    expect(wrapper.emitted("form-submitted")).toBeTruthy();
  });

  test("sends post request with email on submit", async () => {
    const input = wrapper.find('input[type="email"]');
    input.setValue("email@gmail.com");

    await wrapper.find('form').trigger('submit');
    const expectedData = expect.objectContaining({
      email: "email@gmail.com",
    });

    expect(axios.post).toHaveBeenCalledWith(url, expectedData);
  });

  test("sends post request with enterCompetition checkbox value on submit", async () => {
    wrapper.find('input[value="no"]').setChecked();
    await wrapper.find('form').trigger('submit');

    expect(axios.post).toHaveBeenCalledWith(
      url,
      expect.objectContaining({
        enterCompetition: false,
      })
    );
  });
});
