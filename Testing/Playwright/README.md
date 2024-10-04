# Playwright

PlaywrightJS is an open-source E2E testing framework that is cross-browser, cross-platform and cross-language, making it a great choice for any modern applications.

## Setup
```sh
npm init playwright@latest -- --ct
```
The above command will perform the following:

Install @playwright/experimental-ct-vue, the experimental component testing package tailored for Vue.js.
Brings in the necessary browsers for your test runner.
Add a script command test-ct to your package.json.
Add playwright-ct.config.js, a dedicated config file for component testing.
Add playwright folder for runtime configuration, such as adding routing.
And finally, adds an e2e folder with test suites ready to go.

## Test
```json
"test:application:playwright": "npx playwright test",
```