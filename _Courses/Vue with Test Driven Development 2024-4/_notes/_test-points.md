# Test points

## UI elements

Exited, Attribute,

```js
it("has password repeat input", () => {
  render(SignUp);
  expect(screen.getByLabelText("Password Repeat")).toBeInTheDocument();
});

it("has password type for password repeat input", () => {
  render(SignUp);
  expect(screen.getByLabelText("Password Repeat")).toHaveAttribute(
    "type",
    "password"
  );
});
```

v-if: element is not added to DOM
.toBeInTheDocument();

v-show: element in DOM and hidden
.toBeVisible();

## Submit and API

- Validation error
- API should be called
- Does not allow click button when api call ongoing
- Clear the mock status
- Extract code to a setup function
- Server response message, await delay('infinite');
- Use data-testid="form-sign-up"
- Repeat test using vitest describe.each

```js
import { render, screen, waitFor } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
// vi.mock('axios');
// import axios from 'axios';
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.post("/api/v1/users", async ({ request }) => {
    requestBody = await request.json();
    return HttpResponse.json({});
  })
);
server.listen();

const user = userEvent.setup();

const button = screen.getByRole("button", { name: "Sign Up" });
await user.click(button);
await waitFor(() => {
  expect(requestBody).toEqual({
    username: "user1",
    email: "user1@gmail.com",
    password: "12345",
  });
});
```
