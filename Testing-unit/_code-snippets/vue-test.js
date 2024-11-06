import { render, fireEvent } from "@testing-library/vue";
import Home from "./Home.vue";

test("Render Home", async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText } = render(Home);

  // getByText 找到一个包含文本 Hello World 的一个元素; 断言这个元素在Document 中
  getByText("Login to your account");

  const loginButton = getByText("Login");

  await fireEvent.click(loginButton);

  // check the error message
  getByText("Please enter your email and password");
});
