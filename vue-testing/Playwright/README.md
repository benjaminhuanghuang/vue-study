# Playwright

PlaywrightJS is an open-source E2E testing framework that is cross-browser, cross-platform and cross-language, making it a great choice for any modern applications.

For testing component not whole page or application

## Setup

```sh
npm init playwright@latest -- --ct
npm i -D @playwright/experimental-ct-vue
```

--ct flag in the command above will direct the Playwright CLI to set up the test

The above command will perform the following:
Install @playwright/experimental-ct-vue, the experimental component testing package tailored for Vue.js.
Brings in the necessary browsers for your test runner.
Add a script command test-ct to your package.json.
Add playwright-ct.config.js, a dedicated config file for component testing.
Add playwright folder for runtime configuration, such as adding routing.
Create an e2e folder with test suites ready to go.

## Test

```json
"test:application:playwright": "npx playwright test",
```

```sh
npm run test-ct

npm run test-ct --debug
```

## Sample

```js
import { test, expect } from "@playwright/experimental-ct-vue";
import Counter from "./Counter.vue";

test("Counter increments correctly", async ({ mount }) => {
  const component = await mount(Counter);

  await expect(component.locator(".count")).toHaveText("0");

  await component.locator(".increment-button").click();

  await expect(component.locator(".count")).toHaveText("1");
});
```
