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

## Submit and API

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
